# Overwatch

Overwatch is a general RPC monitoring system, utilizing [D3](https://github.com/d3/d3) force layout as main diagram.

See [demo here](http://overwatch.imdada.cn)

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
