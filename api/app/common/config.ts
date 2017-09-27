const activeConfig = process.env.config;
let config: any;
if (activeConfig === undefined) {
    config = require("../config.json");
    console.log("using config <default>");
} else {
    config = require(`../config.${ activeConfig }.json`);
    console.log(`using config <${ activeConfig }>`);
}

export class Config {

    public static get(key: string): any {
        return config[key];
    }

}
