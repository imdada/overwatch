import { Container } from "inversify";
import TYPES from "./common/types";

import { Socket } from "./common/socket-util";
import { Redis } from "./common/redis-util";
import { EventSource } from "./common/event-source";

import { SystemInfoController, SystemInfoControllerImpl } from "./service/system-info/system-info.controller";
import { SystemInfoService, SystemInfoServiceImpl } from "./service/system-info/system-info.service";
import { SystemInfoDao, SystemInfoDaoImpl } from "./service/system-info/system-info.dao";

import { SystemStatsController, SystemStatsControllerImpl } from "./service/system-stats/system-stats.controller";
import { SystemStatsService, SystemStatsServiceImpl } from "./service/system-stats/system-stats.service";
import { SystemStatsRepository, SystemStatsRepositoryImpl } from "./service/system-stats/system-stats.repo";

import { SystemFailureController, SystemFailureControllerImpl } from "./service/system-failure/system-failure.controller";
import { SystemFailureService, SystemFailureServiceImpl } from "./service/system-failure/system-failure.service";
import { SystemFailureDao, SystemFailureDaoImpl } from "./service/system-failure/system-failure.dao";

let container = new Container();

container.bind<Socket>(TYPES.Socket).to(Socket).inSingletonScope();
container.bind<Redis>(TYPES.Redis).to(Redis).inSingletonScope();
container.bind<EventSource>(TYPES.EventSource).to(EventSource).inSingletonScope();

container.bind<SystemInfoController>(TYPES.SystemInfoController).to(SystemInfoControllerImpl);
container.bind<SystemInfoService>(TYPES.SystemInfoService).to(SystemInfoServiceImpl);
container.bind<SystemInfoDao>(TYPES.SystemInfoDao).to(SystemInfoDaoImpl).inSingletonScope();

container.bind<SystemStatsController>(TYPES.SystemStatsController).to(SystemStatsControllerImpl);
container.bind<SystemStatsService>(TYPES.SystemStatsService).to(SystemStatsServiceImpl);
container.bind<SystemStatsRepository>(TYPES.SystemStatsRepository).to(SystemStatsRepositoryImpl).inSingletonScope();

container.bind<SystemFailureController>(TYPES.SystemFailureController).to(SystemFailureControllerImpl);
container.bind<SystemFailureService>(TYPES.SystemFailureService).to(SystemFailureServiceImpl);
container.bind<SystemFailureDao>(TYPES.SystemFailureDao).to(SystemFailureDaoImpl).inSingletonScope();

export { container };
