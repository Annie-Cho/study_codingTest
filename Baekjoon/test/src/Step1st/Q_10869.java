package Step1st;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;
import java.util.StringTokenizer;

public class Q_10869 {

	public static void main(String[] args) throws IOException{
		
	String str;
	int a, b;
	
//	long startTime = System.currentTimeMillis();
	
	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));		//�ð� ������� �� Ȯ���� ������ ��!
	str = br.readLine();
	StringTokenizer st = new StringTokenizer(str, " ");
	
	a = Integer.parseInt(st.nextToken());
	b = Integer.parseInt(st.nextToken());
	
//	Scanner s = new Scanner(System.in);
//	a = s.nextInt();
//	b = s.nextInt();
	
	System.out.println(a+b);
	System.out.println(a-b);
	System.out.println(a*b);
	System.out.println(a/b);
	System.out.println(a%b);
	
//	long finishTime = System.currentTimeMillis();
//	System.out.println("�ɸ��ð� = " + (finishTime - startTime));
	
	}
}
