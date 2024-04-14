export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'Course',
    route: '/course',
  },
  {
    label: 'Workspace',
    route: '/workspace',
  },
]



export const LANGUAGE_VERSIONS: Record<string, string> = {
  C: "GCC 5.3.0",
  CPP: "g++ 17 GCC 9.1.0",
  python: "3.5.1",
  java: "JDK 1.8.0_66"
};


export const LANGUAGE_CODE: Record<string, string> = {
  C: "c",
  CPP: "cpp17",
  python: "python3",
  java: "java"
};


 export const CODE_SNIPPETS = {
    python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Alex")\n`,
    java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
    C: `\n#include <stdio.h>\n\nvoid greet(char *name) {\n\tprintf("Hello, %s!\\n", name);\n}\n\nint main() {\n\tchar name[] = "Alex";\n\tgreet(name);\n\treturn 0;\n}\n`,
    CPP: `\n#include <iostream>\n#include <string>\n\nvoid greet(const std::string& name) {\n\tstd::cout << "Hello, " << name << "!" << std::endl;\n}\n\nint main() {\n\tstd::string name = "Alex";\n\tgreet(name);\n\treturn 0;\n}\n`,
  };
  


export type CodeSnippets = {
  [key: string]: string;
};