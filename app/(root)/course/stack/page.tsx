import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';

const content = [
  {
    heading: "1. What is a Stack?",
    paragraph: `A stack is a linear data structure that follows the Last In, First Out (LIFO) principle. 
    It means that the element inserted last is the first one to be removed.`,
    code: null,
  },
  {
    heading: "2. How to Implement a Stack using an Array?",
    paragraph: `You can implement a stack using an array by performing push and pop operations. 
    Push operation adds an element to the top of the stack, and pop operation removes the top element.`,
    code: `#include <stdio.h>
#include <stdlib.h>

#define MAX_SIZE 100

// Structure to represent a stack
typedef struct {
    int arr[MAX_SIZE];
    int top;
} Stack;

// Function to initialize the stack
void init(Stack *stack) {
    stack->top = -1;
}

// Function to check if the stack is empty
int isEmpty(Stack *stack) {
    return stack->top == -1;
}

// Function to check if the stack is full
int isFull(Stack *stack) {
    return stack->top == MAX_SIZE - 1;
}

// Function to push an element onto the stack
void push(Stack *stack, int value) {
    if (isFull(stack)) {
        printf("Stack Overflow\n");
        return;
    }
    stack->arr[++stack->top] = value;
}

// Function to pop an element from the stack
int pop(Stack *stack) {
    if (isEmpty(stack)) {
        printf("Stack Underflow\n");
        exit(EXIT_FAILURE);
    }
    return stack->arr[stack->top--];
}

int main() {
    Stack stack;
    init(&stack);

    // Pushing elements onto the stack
    push(&stack, 10);
    push(&stack, 20);
    push(&stack, 30);

    // Popping elements from the stack
    printf("Popped element: %d\n", pop(&stack));
    printf("Popped element: %d\n", pop(&stack));

    return 0;
}`,
  },
  // Add more content here
];
const problem_statement = [
  {
    problem: "Q1) Implement Stack: Write a C program to implement a stack using an array.",
    id: "1"
  },
  {
    problem: "Q2) Reverse a String: Write a C program to reverse a string using a stack.",
    id: "2"
  },
  {
    problem: "Q3) Evaluate Postfix Expression: Write a C program to evaluate a postfix expression using a stack.",
    id: "3"
  },
  {
    problem: "Q4) Check Balanced Parentheses: Write a C program to check if a given expression has balanced parentheses using a stack.",
    id: "4"
  },
  {
    problem: "Q5) Infix to Postfix Conversion: Write a C program to convert an infix expression to postfix using a stack.",
    id: "5"
  },
  // Add more problem statements here
];


export default function Stack() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="item-center justify-center p-6">
          <Tabs defaultValue="Stack" className="w-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Stack" className="">
                Stack
              </TabsTrigger>
              <TabsTrigger value="Problems" className="">
                Problems Statement
              </TabsTrigger>
            </TabsList>

            <TabsContent key="Stack" value="Stack">
              <div className="h-auto w-full bg-slate-200 p-2 rounded-lg">
                <article className="bg-white p-3">
                  <h2 className="p-3 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Stack
                  </h2>
                  <div className="p-2">
                    {content.map((cont) => (
                      <div key={cont.heading} className="p-1">
                        <h1 className="p-3 text-lg font-semibold text-gray-900 sm:text-xl">
                          {cont.heading}{" "}
                        </h1>
                        <p className="p-3 text-lg text-gray-800 sm:text-xl">
                          {cont.paragraph}
                        </p>

                        {cont.code ? (
                          <div className="bg-slate-200 grid place-items-center h-auto p-1 m-3">
                            <div className="p-4">
                              <SyntaxHighlighter
                                language="c"
                                style={docco}
                                customStyle={{
                                  padding: "16px",
                                  borderRadius: "12px",
                                }}
                                wrapLongLines={true}
                              >
                                {cont.code}
                              </SyntaxHighlighter>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </article>
              </div>
            </TabsContent>

            <TabsContent key="Problems" value="Problems">
              <div className="h-auto w-full">
                {problem_statement.map((ps) => (
                  <div key={ps.id} className="m-1 p-2 border border-slate-900 rounded-lg">
                    <h2 className="p-3 text-xl tracking-tight text-gray-900 sm:text-2xl m-2">
                      {ps.problem}
                    </h2>
                    <div className="m-2 p-3">
                      <Link href="/workspace" className={buttonVariants()}>
                        Solve now &rarr;
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </MaxWidthWrapper>
    </>
  );
}
