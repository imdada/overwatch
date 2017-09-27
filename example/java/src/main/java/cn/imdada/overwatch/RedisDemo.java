package cn.imdada.overwatch;

import com.fasterxml.jackson.databind.ObjectMapper;
import redis.clients.jedis.Jedis;

class RedisDemo extends Demo {

    private static Jedis client;
    private static ObjectMapper mapper;

    public static void main(String[] args) {
        try {
            client = new Jedis(Config.REDIS_HOST, Config.REDIS_PORT);
            mapper = new ObjectMapper();

            RedisDemo demo = new RedisDemo();
            demo.start();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void submitSystemFailure() throws Exception {
        client.publish(Config.EVENT_SUBMIT_FAILURE, mapper.writeValueAsString(SystemFailure.generate()));
    }

    @Override
    protected void submitServerStats() throws Exception {
        client.publish(Config.EVENT_SUBMIT_STATS, mapper.writeValueAsString(ServerStats.generate()));
    }

}