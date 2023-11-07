package OCA2;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

public class Test {
    //    public static void main(String[] args) {
//        int aVar = 9;
//        if (aVar++ < 10) {
//            System.out.println(aVar + " Hello1");
//        } else {
//            System.out.println(aVar + "hello2");
//        }
//        Short s1 = 200;
//        Integer s2 = 400;
//        Long s3 = (Long) (s1 + s2);
//        String s4 = Long.toString(s3 * s2) + "";
//        System.out.println("Sum is: " + s4);
//    }


    public static void main(String[] args) {
        int arr[] = {5, 9, 1, 3, 2, 4, 7, 8, 5, 7, 3, 1};
//        List<Integer> newList = new ArrayList<>();
//        for (int i = 0; i < arr.length; i++) {
////            boolean check = false;
//            int count = 0;
//            for (int j = 0; j < arr.length; j++) {
//                if (arr[i] == arr[j] & i != j) {
////                    check = true;
//                    count = count + 1;
//                    break;
//                }
//            }
////            if (!check) {
////                newList.add(arr[i]);
////            }
//            if (count == 0) {
//                newList.add(arr[i]);
//            }
//        }
        Map<Integer, Integer> map = new LinkedHashMap<>();
        for (Integer integer : arr) {
            map.put(integer, map.getOrDefault(integer, 0) + 1);
        }
        List<Integer> newList = new ArrayList<>();
        for (Map.Entry<Integer, Integer> entry : map.entrySet()) {
            if (entry.getValue() < 2) {
                newList.add(entry.getKey());
            }
        }
        System.out.println(newList);
    }
}
