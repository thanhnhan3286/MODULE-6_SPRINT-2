package MGMTest;

import java.io.*;
import java.util.List;
import java.util.TreeSet;
import java.util.stream.Stream;

import static java.util.stream.Collectors.toList;

public class Domino {
//    public static int longestDominoChain(int n, List<Integer> heights, List<Integer> position) {
//        // Write your code here
//        if(heights.get(0) + position.get(0) > heights.get(heights.size()-1) + position.get(heights.size()-1)){
//            return heights.size();
//        }
//
//        return n;
//    }
    public static int domino(int totalDominoes, List<Integer> height, List<Integer> position){
        int maxHeight = height.get(0);
        for (int i = 0; i < height.size(); i++) {
            if (height.get(i) > maxHeight){
                maxHeight = height.get(i);
            }
        }
        int maxPosition = position.get(0);
        for (int i = 0; i < position.size(); i++) {
            if (position.get(i) > maxPosition){
                maxPosition = position.get(i);
            }
        }
        if (maxHeight > maxPosition){
            return totalDominoes;
        }
        TreeSet<Integer> treeSet = new TreeSet<>();
        for (int i = 0; i < totalDominoes; i++) {
            int count = 0;
            for (int j = 0; j < totalDominoes - 1; j++) {
                if (position.get(j) + height.get(i) >= position.get(j +1)){
                    count++;
                }
            }
            treeSet.add(count);
        }
        return treeSet.last();
    }
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        int n = Integer.parseInt(bufferedReader.readLine().trim());

        List<Integer> heights = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                .map(Integer::parseInt)
                .collect(toList());

        List<Integer> positions = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                .map(Integer::parseInt)
                .collect(toList());

        int result = Domino.domino(n, heights, positions);

        bufferedWriter.write(String.valueOf(result));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}

