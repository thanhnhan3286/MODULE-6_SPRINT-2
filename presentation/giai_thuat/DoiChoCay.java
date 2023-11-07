package giai_thuat;

import java.util.Arrays;

public class DoiChoCay {
    public static int[] sotlution(int[] arr) {
        for (int i = 0; i < arr.length - 1; i++) {
            if (arr[i] != -1) {
                int min = arr[i];
                int a = 0;
                for (int j = i + 1; j < arr.length; j++) {
                    if (arr[j] < min && arr[j] != -1) {
                        min = arr[j];
                        a = j;
                    }
                }
                int b = arr[i];
                arr[i] = min;
                arr[a] = b;
            } else {
                arr[i] = -1;
            }
        }
        return arr;
    }
    public static int[] solution(int[] a) {
        int c = a.length;
        for(int i = 0; i < c ; i++){
            for(int j = i + 1 ; j < c ; j++){
                if(a[j] < a[i] && a[j] != -1 && a[i]!=-1){
                    int b = a[j];
                    a[j] = a[i];
                    a[i] = b;
                }
            }
        }
        return a;
    }

    public static void main(String[] args) {
        int[] arr = {-1, -5, 120, 130, 100,-1};
        System.out.println(Arrays.toString(solution(arr)));
    }
}
