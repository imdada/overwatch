let TYPES = {
    Socket: Symbol("Socket"),
    Redis: Symbol("Redis"),
    EventSource: Symbol("EventSource"),

    SystemInfoController: Symbol("SystemInfoController"),
    SystemInfoService: Symbol("SystemInfoService"),
    SystemInfoDao: Symbol("SystemInfoDao"),

    SystemStatsController: Symbol("SystemStatsController"),
    SystemStatsService: Symbol("SystemStatsService"),
    SystemStatsRepository: Symbol("SystemStatsRepository"),

    SystemFailureController: Symbol("SystemFailureController"),
    SystemFailureService: Symbol("SystemFailureService"),
    SystemFailureDao: Symbol("SystemFailureDao")

};

export default TYPES;
