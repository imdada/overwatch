package cn.imdada.overwatch;

class SystemFailure {

    private Integer time;
    private String system;
    private String host;
    private String url;
    private String status;

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

    public String getHost() {
        return host;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public static SystemFailure generate() {
        SystemFailure failure = new SystemFailure();
        failure.setSystem("test");
        failure.setTime((int) (System.currentTimeMillis() / 1000));
        failure.setHost("127.0.0.1");
        failure.setUrl("/test");
        failure.setStatus("ReadTimeout");
        return failure;
    }

}