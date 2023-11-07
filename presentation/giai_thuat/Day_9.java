package giai_thuat;

public class Day_9 {
    public static void main(String[] args) {
        int[] arr = {5, 10, 9, 5, 2, 8, 10, 1, 6};
        int max = arr[0];
        int secondMax = arr[1];
        int thirdMax = arr[2];
        for (int j : arr) {
            if (j > max) {
                thirdMax=secondMax;
                secondMax = max;
                max = j;
            } else if (j > secondMax && j != max) {
                thirdMax = secondMax;
                secondMax = j;
            }else if (j > thirdMax && j != secondMax && j != max) {
                thirdMax = j;
            }
        }
        System.out.println("Số lớn thứ hai trong mảng là: " + thirdMax);

//        int height = 6;
//        for (int i = 1; i <= height; i++) {
//            for (int j = 1; j <= height - i; j++) {
//                System.out.print(" ");
//            }
//            for (int k = 1; k <= 2 * i - 1; k++) {
//                System.out.print("*");
//            }
//            System.out.println();
//        }
    }

}
