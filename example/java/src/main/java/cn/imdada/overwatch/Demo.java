package cn.imdada.overwatch;

import java.util.Scanner;

/**
 * Created by zhangxuan on 24/09.
 */
public abstract class Demo {

    protected void start() throws Exception {
        System.out.println("enter 1 to emit a system failure, 2 to emit a server stats, 0 to terminate");
        System.out.println("awaiting input...");
        Scanner scanner = new Scanner(System.in);
        while (true) {
            int i = scanner.nextInt();
            if (i == 1) {
                submitSystemFailure();
                System.out.println("system failure submitted");
            } else if (i == 2) {
                submitServerStats();
                System.out.println("server stats submitted");
            } else if (i == 0) break;
        }
        scanner.close();
        System.exit(0);
    }

    protected abstract void submitSystemFailure() throws Exception;

    protected abstract void submitServerStats() throws Exception;

}
