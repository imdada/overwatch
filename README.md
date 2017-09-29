# Overwatch

See [demo here](http://overwatch.imdada.cn) | or [here](https://imdada.github.io/overwatch/)

Overwatch is a general RPC monitoring system for distributed systems, utilizing [D3](https://github.com/d3/d3) force layout as main diagram.

Overwatch provides an overview of the current state of the entire system, making it super easy for system administrators to understand the ongoing RPC events and pinpoint the source of failure in the system.

Unlike common monitoring systems, a well-designed graph (with D3 force layout) is used to visualize data.

![](https://imdada.github.io/overwatch/ss-01.png)

- every circle represents a system
- every line represents a dependency between two systems
- rpm = requests per minute, fpm = failure per minute
- circle size indicates rpm of the system
- line dash density indicates rpm between two systems
- circle color indicates the health of the system in the last 1 minute
- two additional ring outside the circle inicates the health of the system in the past 5 minutes and 15 minutes

## Installation

[Download release version](#) (not available yet...)

Or use install.sh to build from source

## Dependencies

- NodeJS / NPM
- RDBMS (MySQL is recommended)
- Redis (Optional)

## Getting Started

After proper installation, you have to

1. modify config files **server/app/config.json** & **web/src/environments/environment.ts**

2. start server: under **server** run

```
$ npm start
```

3. build & serve web content: under **web** run

for testing: 
```
$ npm start
```
then visit localhost:4200

for production:
```
$ npm run build
```
then serve static directory **web/dist** with Nginx (or whatever)

---

### Submiting Statistics

#### Send individual server stats via Socket.IO client

This is recommended for testing.

Demo: [SocketIODemo.java](example/java/src/main/java/cn/imdada/overwatch/SocketIODemo.java)

#### Send individual server stats via Redis pub/sub

This is recommended for small-scale systems to publish stats.

Demo: [RedisDemo.java](example/java/src/main/java/cn/imdada/overwatch/RedisDemo.java)

#### Send aggregated server stats via REST

This is the recommended method for large & complex systems to publish aggregated stats.

Demo: [rest-demo.sh](example/rest-demo.sh)

## Licensing
Please see [LICENSE](LICENSE) for more info.

## Contributing
Please see [CONTRIBUTING](CONTRIBUTING.md) for more info.
