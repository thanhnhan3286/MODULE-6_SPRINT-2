package giai_thuat;

public class Day_7 {
//    public static void main(String[] args) {
//        int thapPhan = 145;
//        StringBuilder batPhan = new StringBuilder();
//        while (thapPhan > 0) {
//            batPhan.insert(0, Integer.toString(thapPhan % 8));
//            thapPhan = thapPhan / 8;
//        }
//        System.out.println("So bat phan: " + batPhan);
//    }


    public static void main(String[] args) {
        String time1 = "11:20:30";
        String time2 = "07:35:59";
        String sum;
        String[] parts1 = time1.split(":");
        String[] parts2 = time2.split(":");
        int hours1 = Integer.parseInt(parts1[0]);
        int minutes1 = Integer.parseInt(parts1[1]);
        int seconds1 = Integer.parseInt(parts1[2]);
        int hours2 = Integer.parseInt(parts2[0]);
        int minutes2 = Integer.parseInt(parts2[1]);
        int seconds2 = Integer.parseInt(parts2[2]);
        int totalSeconds = seconds1 + seconds2;
        int totalMinutes = minutes1 + minutes2 + (totalSeconds / 60);
        int totalHours = hours1 + hours2 + (totalMinutes / 60);
        int adjustedSeconds = totalSeconds % 60;
        int adjustedMinutes = totalMinutes % 60;
        sum = totalHours +":"+ adjustedMinutes +":"+ adjustedSeconds;
        System.out.println("Sum: " + sum);
    }
}
