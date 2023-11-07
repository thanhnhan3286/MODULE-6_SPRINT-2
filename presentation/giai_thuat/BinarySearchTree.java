package giai_thuat;

import java.util.logging.Logger;

public class BinarySearchTree {

    public static int binarySearch(int[] arr, int numb) {
        int left = 0;
        int right = arr.length - 1;
        for (int i = left; i <= right; i++) {
            int mid = (left+right)/2;
            if(arr[mid]==numb){
                return mid;
            }else if(arr[mid]<numb){
                left = mid + 1;
            }else {
                right = mid -1;
            }
        }
        return -1;
    }

    public static void main(String[] args) {
//        int[] arr = {1, 4, 5, 6, 9, 10, 12, 13, 14, 15, 16, 18, 19, 24, 25, 28, 29, 37, 39, 46, 48, 49, 59, 69};
//        System.out.println(binarySearch(arr, 46));
        String a = "package";
        a.toLowerCase();
//        System.out.println(solution(a,"field"));
        System.out.println(a.equalsIgnoreCase("package"));
    }
    public static boolean solution(String fileName, String typeFile) {
        String type = typeFile.toLowerCase();
        switch (type){
            case "package":
                return fileName.matches("[a-z]+(_[a-z]*)");
            case ("class"):
                return fileName.matches("[A-Z][a-zA-Z]*");
            case("field"):
            case("method"):
                return fileName.matches("[a-z][a-zA-Z0-9]*");
        }
        return false;


    }
}
