package cn.imdada.overwatch;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.socket.client.IO;
import io.socket.client.Socket;

class SocketIODemo extends Demo {

    private static Socket socket;
    private static ObjectMapper mapper = new ObjectMapper();

    public static void main(String[] args) {
        try {
            IO.Options options = new IO.Options();
            options.path = Config.IO_PATH;
            socket = IO.socket(String.format("http://%s:%d", Config.HOST, Config.PORT), options);
            socket.connect();

            SocketIODemo demo = new SocketIODemo();
            demo.start();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (socket != null && socket.connected()) socket.disconnect();
        }
    }

    protected void submitSystemFailure() throws Exception {
        socket.emit(Config.EVENT_SUBMIT_FAILURE, mapper.writeValueAsString(SystemFailure.generate()));
    }

    protected void submitServerStats() throws Exception {
        socket.emit(Config.EVENT_SUBMIT_STATS, mapper.writeValueAsString(ServerStats.generate()));
    }

}