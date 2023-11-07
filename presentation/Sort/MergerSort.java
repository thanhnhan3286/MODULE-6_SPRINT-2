package Sort;

import java.util.Arrays;

public class MergerSort {
    //    public static void mergeSort(int[] a, int n) {
//        if (n < 2) {
//            return;
//        }
//        int mid = n / 2;
//        int[] l = new int[mid];
//        int[] r = new int[n - mid];
//
//        for (int i = 0; i < mid; i++) {
//            l[i] = a[i];
//        }
//        for (int i = mid; i < n; i++) {
//            r[i - mid] = a[i];
//        }
//        mergeSort(l, mid);
//        mergeSort(r, n - mid);
//
//        merge(a, l, r, mid, n - mid);
//    }
//    public static void merge(
//            int[] a, int[] l, int[] r, int left, int right) {
//
//        int i = 0, j = 0, k = 0;
//        while (i < left && j < right) {
//            if (l[i] <= r[j]) {
//                a[k++] = l[i++];
//            }
//            else {
//                a[k++] = r[j++];
//            }
//        }
//        while (i < left) {
//            a[k++] = l[i++];
//        }
//        while (j < right) {
//            a[k++] = r[j++];
//        }
//    }
//
//    public static void main(String[] args) {
//        int[] actual = { 5, 1, 6, 2, 3, 4 };
//        int[] expected = { 1, 2, 3, 4, 5, 6 };
//        MergeSort.mergeSort(actual, actual.length);
//        assertArrayEquals(expected, actual);
//    }
    public static void mergeSort(int[] arr) {
        if (arr == null || arr.length <= 1) {
            return; // Nếu mảng rỗng hoặc chỉ có một phần tử, không cần sắp xếp
        }
        mergeSort(arr, 0, arr.length - 1);
    }

    private static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;
            mergeSort(arr, left, mid); // Sắp xếp nửa đầu của mảng
            mergeSort(arr, mid + 1, right); // Sắp xếp nửa sau của mảng
            merge(arr, left, mid, right); // Kết hợp hai nửa đã sắp xếp
        }
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1; // Số lượng phần tử của nửa đầu
        int n2 = right - mid; // Số lượng phần tử của nửa sau

        // Tạo mảng tạm để lưu trữ các nửa
        int[] L = new int[n1];
        int[] R = new int[n2];

        // Sao chép dữ liệu từ mảng gốc vào mảng tạm
        for (int i = 0; i < n1; i++) {
            L[i] = arr[left + i];
        }
        for (int j = 0; j < n2; j++) {
            R[j] = arr[mid + 1 + j];
        }

        // Kết hợp các nửa đã sắp xếp vào mảng gốc
        int i = 0; // Chỉ số của mảng con L
        int j = 0; // Chỉ số của mảng con R
        int k = left; // Chỉ số của mảng gốc

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Sao chép các phần tử còn lại của mảng con L (nếu có)
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        // Sao chép các phần tử còn lại của mảng con R (nếu có)
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 12, 3};
        mergeSort(arr);
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}
