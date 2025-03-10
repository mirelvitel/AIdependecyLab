const LANGUAGE_SKELETONS = {
    java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World!");
    }
}
`,
    python: `def main():
    print("Hello World!")

if __name__ == "__main__":
    main()
`,
    csharp: `using System;

public class Program
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Hello World!");
    }
}
`,
    cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World!" << endl;
    return 0;
}
`
};

export default LANGUAGE_SKELETONS;

