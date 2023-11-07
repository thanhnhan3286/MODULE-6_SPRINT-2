package giai_thuat;

import java.util.Arrays;

public class Day_5 {
    public static void main(String[] args) {
        int[] numbers = {5, 2, 9, 2, 7};
        Arrays.sort(numbers);
        int sumSmallest = 0;
        int sumLargest = 0;
        for (int i = 0; i < 4; i++) {
            sumSmallest += numbers[i];
            sumLargest += numbers[numbers.length - 1 - i];
        }
        System.out.println("Tổng 4 số lớn nhất: " + sumLargest);
        System.out.println("Tổng 4 số nhỏ nhất: " + sumSmallest);
    }
}
