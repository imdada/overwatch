package cn.imdada.overwatch;


import java.util.HashMap;
import java.util.Map;

class ServerStats {

    private Integer time;
    private String system;
    private Map<String, Map<String, NodeStats>> stats;

    public static class NodeStats {

        private Integer rpm;
        private Integer fpm;

        public NodeStats(Integer rpm, Integer fpm) {
            this.rpm = rpm;
            this.fpm = fpm;
        }

        public Integer getRpm() {
            return rpm;
        }

        public Integer getFpm() {
            return fpm;
        }

    }

    public Integer getTime() {
        return time;
    }

    public void setTime(Integer time) {
        this.time = time;
    }

    public String getSystem() {
        return system;
    }

    public void setSystem(String system) {
        this.system = system;
    }

    public Map<String, Map<String, NodeStats>> getStats() {
        return stats;
    }

    public void setStats(Map<String, Map<String, NodeStats>> stats) {
        this.stats = stats;
    }

    public static ServerStats generate() {
        ServerStats stats = new ServerStats();
        stats.setTime((int) (System.currentTimeMillis() / 1000));
        stats.setSystem("test");
        Map<String, Map<String, NodeStats>> statsMap = new HashMap<>();
        Map<String, NodeStats> nodeStatsMap = new HashMap<>();
        nodeStatsMap.put("10.10.1.1", new NodeStats(1000, 10));
        nodeStatsMap.put("10.10.1.2", new NodeStats(2000, 20));
        nodeStatsMap.put("10.10.1.3", new NodeStats(3000, 30));
        statsMap.put("target_system", nodeStatsMap);
        stats.setStats(statsMap);
        return stats;
    }

}