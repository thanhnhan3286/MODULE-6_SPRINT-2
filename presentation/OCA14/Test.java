package OCA14;

import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.Map;

public class Test {
    public static void main(String[] args) {
        int[] a = {1, 3, 4, 5, 2, 5};
        String str = "";
//        Map<String, Integer> map = new LinkedHashMap<>();
//        for (String s : map.keySet()) {
//            if (map.containsKey(s)) {
//                map.put(s, map.get(s) + 1);
//            } else {
//                map.put(s, 1);
//            }
//        }
//        for (String s : map.keySet()) {
//            str += map.get(s)        }
        for (int i = 0; i < a.length; i++) {
            boolean b = true;
            for (int j = i + 1; j < a.length; j++) {
                if (i != j && a[i] == a[j]) {
                    b = false;
                    break;
                }
            }
            if (b) {
                str += a[i] + ",";
            }
        }
        String[] arr = str.split(",");
        System.out.println(Arrays.toString(arr));
        int[] counts = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            int count = 0;
            for (int j = 0; j < a.length; j++) {
                if (Integer.parseInt(arr[i]) == a[j]) {
                    count++;
                }
            }
            counts[i] = count;
        }
        System.out.println(Arrays.toString(counts));
    }

}
