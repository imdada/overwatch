import * as Sequelize from "sequelize";
import { ModelDefinition } from "../../common/model-definition";

export interface SystemInfoAttribute {
    id?: number;
    time: number;
    name: string;
    node: string;
    source: string;
    rpm: number;
    fpm: number;
}

export interface SystemInfoInstance extends Sequelize.Instance<SystemInfoAttribute>, SystemInfoAttribute {
}

export interface SystemInfoModel extends Sequelize.Model<SystemInfoInstance, SystemInfoAttribute> { }

export class SystemInfoDefinitions implements ModelDefinition {

    modelName = "SystemInfo";

    columns = {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        time: { type: Sequelize.BIGINT },
        name: { type: Sequelize.STRING },
        node: { type: Sequelize.STRING },
        source: { type: Sequelize.STRING },
        rpm: { type: Sequelize.INTEGER },
        fpm: { type: Sequelize.INTEGER }
    };

    indexes = {
        tableName: "overwatch_system_info",
        indexes: [{
            name: "idx_system_time",
            method: "BTREE",
            fields: [ "name", "time" ]
        }, {
            name: "idx_source",
            method: "BTREE",
            fields: [ "source" ]
        }]
    };

}
