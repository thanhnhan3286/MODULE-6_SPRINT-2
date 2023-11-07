package OCA11;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Test {
    public static boolean Chan(int a) {
        return a % 2 == 0;
    }

    public static boolean Le(int a) {
        return a % 2 != 0;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        int[] arr1 = Arrays.stream(arr).filter(i -> i%2==0).toArray();
//        List<Integer> list = new ArrayList<>(arr
//        boolean b1 = Arrays.stream(arr).allMatch(Test::Chan);
//        boolean b2 = Arrays.stream(arr).allMatch(Test::Le);
//        if (b1) {
//            System.out.println("chẵn");
//        } else if (b2) {
//            System.out.println("lẻ");
//        } else {
//            System.out.println("lộn xộn");
//        }
        System.out.println(Arrays.toString(arr1));

    }

}
