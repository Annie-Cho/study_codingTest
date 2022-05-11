package Step1st;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;
import java.util.StringTokenizer;

public class Q_1008 {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		
		double a, b;
		long startTime = System.currentTimeMillis();
		
// First method : using scanner => 3482ms
//
//		Scanner s = new Scanner(System.in);
//		a = s.nextDouble();
//		b = s.nextDouble();
		
// Second method : using StringTokenizer => 2051ms (!!!Fastest method!!!)
		
		BufferedReader br1 = new BufferedReader(new InputStreamReader(System.in));
		String str1 = br1.readLine();
		StringTokenizer st = new StringTokenizer(str1, " ");
		a = Double.parseDouble(st.nextToken());
		b = Double.parseDouble(st.nextToken());
		
// third method : using split => 2145ms
		
//		BufferedReader br2 = new BufferedReader(new InputStreamReader(System.in));
//		String[] str2 = br2.readLine().split(" ");
//		a = Double.parseDouble(str2[0]);
//		b = Double.parseDouble(str2[1]);
		
		System.out.println(a/b);
		
		long finishTime = System.currentTimeMillis();
		System.out.println("걸린시간 = " + (finishTime - startTime));
	}

}
