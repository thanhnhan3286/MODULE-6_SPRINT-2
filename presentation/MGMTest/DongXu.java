package MGMTest;

import java.util.Arrays;

public class DongXu {
    public static int solution(int[] coins, int amount) {
        int arrayCoinsLength = coins.length;
        if (amount == 0 || arrayCoinsLength == 1 && coins[0] != amount) {
            return -1;
        }
        int[] array = new int[amount + 1];
        Arrays.fill(array, Integer.MAX_VALUE);
        array[0] = 0;
        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                if (array[i - coin] != Integer.MAX_VALUE) {
                    array[i] = Math.min(array[i], array[i - coin] + 1);
                }
            }
        }
        if (array[amount] == Integer.MAX_VALUE) {
            return -1;
        } else {
            return array[amount];
        }
    }

    public static void main(String[] args) {
        int[] coin = {2, 3, 5};
        System.out.println(solution(coin,19));
    }
}
