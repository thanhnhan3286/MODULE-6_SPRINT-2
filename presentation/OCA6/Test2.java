package OCA6;

import java.util.GregorianCalendar;

public class Test2 {
//        public static void main(String[] args) {
//        StringBuilder sb = new StringBuilder(3);
//        String s = "";
//        sb.append("a");
//        sb.append("k");
//        sb.append("y");
////        System.out.println(sb);
//        sb.append("o");
//        sb.append("5");
//        sb.append("7");
//        sb.append("o9");
//        sb.append("o7");
//        sb.append("o8");
//        System.out.println(sb);
//
//        if(sb.equals(s)){
//            System.out.println("Match 1");
//        } else if (sb.toString().equals(s.toString())) {
//            System.out.println("Match 2");
//        }else {
//            System.out.println("No Match");
//        }
//    }
    public static void main(String[] args) {
        System.gc();
        long start = new GregorianCalendar().getTimeInMillis();
        long startMemory = Runtime.getRuntime().freeMemory();
//        StringBuffer sb = new StringBuffer();
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 10000000; i++) {
            sb.append(":").append(i);
        }
        long end = new GregorianCalendar().getTimeInMillis();
        long endMemory = Runtime.getRuntime().freeMemory();
        System.out.println("Time Taken:" + (end - start));
        System.out.println("Memory used:" + (startMemory - endMemory));
    }
    static {
        System.out.println("123456");
    }
}
