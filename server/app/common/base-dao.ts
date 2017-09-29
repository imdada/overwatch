import * as Sequelize from "sequelize";
import * as Bluebird from "bluebird";
import { inject, injectable } from "inversify";
import TYPES from "./types";
import { Config } from "./config";
import { ModelDefinition } from "./model-definition";

class InitListener {
    resolve: Function;
    reject: Function;
}

@injectable()
export abstract class BaseDao<Inst, Attr> {

    protected static engine: Sequelize.Sequelize;
    protected model: Sequelize.Model<Inst, Attr>;
    private initialized = -1;
    private initListeners: Array<InitListener> = new Array<InitListener>();

    protected abstract getModelDefinition(): ModelDefinition;

    constructor() { }

    protected init(): Promise<void> {
        if (BaseDao.engine === undefined) {
            const dbConfig = Config.get("db");
            BaseDao.engine = new Sequelize(dbConfig.uri, dbConfig);
        }
        let def = this.getModelDefinition();
        this.model = BaseDao.engine.define<Inst, Attr>(def.modelName, def.columns, def.indexes);
        return new Promise<void>((resolve, reject) => {
            if (this.initialized === 1) return resolve();
            else {
                this.initListeners.push({
                    resolve: resolve,
                    reject: reject
                });
                if (this.initialized === 0) return;
                this.initialized = 0;
                this.model.sync({ force: false })
                .then(() => {
                    this.initialized = 1;
                    this.initListeners.forEach((listener) => {
                        listener.resolve();
                    });
                });
            }
        });
    }

    protected toPromise(b: Bluebird<any>): Promise<Array<Inst>> {
        return new Promise<Array<Inst>>((resolve, reject) => {
            b.then(resolve, reject);
        });
    }

}
