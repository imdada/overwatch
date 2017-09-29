import * as Sequelize from "sequelize";
import { ModelDefinition } from "../../common/model-definition";

export interface SystemFailureAttribute {
    id: number;
    time: number;
    system: string;
    host: string;
    url: string;
    status: string;
}

export interface SystemFailureInstance extends Sequelize.Instance<SystemFailureAttribute>, SystemFailureAttribute {
}

export interface SystemFailureModel extends Sequelize.Model<SystemFailureInstance, SystemFailureAttribute> { }

export class SystemFailureDefinitions implements ModelDefinition {

    modelName = "SystemFailure";

    columns = {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        time: { type: Sequelize.BIGINT },
        system: { type: Sequelize.STRING },
        host: { type: Sequelize.STRING },
        url: { type: Sequelize.STRING },
        status: { type: Sequelize.STRING }
    };

    indexes = {
        tableName: "overwatch_system_failure",
        indexes: [{
            name: "idx_system_time",
            method: "BTREE",
            fields: [ "system", "time" ]
        }]
    };

}
