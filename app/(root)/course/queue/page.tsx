import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Video from "next-video";
import queue from "@/videos/Queue .mp4";

const content = [
  {
    heading: "1. What is a Queue?",
    paragraph: `A queue is a linear data structure that follows the First In, First Out (FIFO) principle. 
      It means that the element inserted first is the first one to be removed.`,
    code: null,
    video: null, // No video for this section
  },
  {
    heading: "2. How to Implement a Queue using an Array?",
    paragraph: `You can implement a queue using an array by performing enqueue and dequeue operations. 
      The enqueue operation adds an element to the rear of the queue, and the dequeue operation removes the element from the front.`,
    code: `#include <stdio.h>
  #include <stdlib.h>
  
  #define MAX_SIZE 100
  
  // Structure to represent a queue
  typedef struct {
      int arr[MAX_SIZE];
      int front;
      int rear;
  } Queue;
  
  // Function to initialize the queue
  void init(Queue *queue) {
      queue->front = -1;
      queue->rear = -1;
  }
  
  // Function to check if the queue is empty
  int isEmpty(Queue *queue) {
      return queue->front == -1;
  }
  
  // Function to check if the queue is full
  int isFull(Queue *queue) {
      return (queue->rear + 1) % MAX_SIZE == queue->front;
  }
  
  // Function to add an element to the rear of the queue
  void enqueue(Queue *queue, int value) {
      if (isFull(queue)) {
          printf("Queue Overflow\n");
          return;
      }
      if (isEmpty(queue)) {
          queue->front = 0;
      }
      queue->rear = (queue->rear + 1) % MAX_SIZE;
      queue->arr[queue->rear] = value;
  }
  
  // Function to remove an element from the front of the queue
  int dequeue(Queue *queue) {
      if (isEmpty(queue)) {
          printf("Queue Underflow\n");
          exit(EXIT_FAILURE);
      }
      int value = queue->arr[queue->front];
      if (queue->front == queue->rear) {
          queue->front = -1;
          queue->rear = -1;
      } else {
          queue->front = (queue->front + 1) % MAX_SIZE;
      }
      return value;
  }
  
  int main() {
      Queue queue;
      init(&queue);
  
      // Enqueueing elements to the queue
      enqueue(&queue, 10);
      enqueue(&queue, 20);
      enqueue(&queue, 30);
  
      // Dequeueing elements from the queue
      printf("Dequeued element: %d\n", dequeue(&queue));
      printf("Dequeued element: %d\n", dequeue(&queue));
  
      return 0;
  }`,
    video: queue, // This section includes a video
  },
];
const problem_statement = [
  {
    problem:
      "Q1) Implement Queue: Write a C program to implement a queue using an array.",
    id: "1",
  },
  {
    problem:
      "Q2) Reverse Queue: Write a C program to reverse a queue using another queue.",
    id: "2",
  },
  {
    problem:
      "Q3) Check Queue Palindrome: Write a C program to check if a given queue is palindrome or not.",
    id: "3",
  },
  {
    problem:
      "Q4) Sort Queue: Write a C program to sort a queue in ascending order.",
    id: "4",
  },
  {
    problem:
      "Q5) Merge Two Queues: Write a C program to merge two queues into a single queue.",
    id: "5",
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
                Queue
              </TabsTrigger>
              <TabsTrigger value="Problems" className="">
                Problems Statement
              </TabsTrigger>
            </TabsList>

            <TabsContent key="Stack" value="Stack">
              <div className="h-auto w-full bg-slate-200 p-2 rounded-lg">
                <article className="bg-white p-3">
                  <h2 className="p-3 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Queue
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
                            </div>{" "}
                            
                          </div>
                        ) : null}
                        {/* Responsive heading for video */}
                            {cont.video ? (
                              <div className="p-3 text-lg font-semibold text-gray-900 sm:text-xl">
                                Video
                              </div>
                            ) : null}
                            {/* Conditionally render the video if it is present */}
                            {cont.video ? (
                              <div className="video-container max-w-lg mx-auto">
                                <Video src={cont.video} />
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
                  <div
                    key={ps.id}
                    className="m-1 p-2 border border-slate-900 rounded-lg"
                  >
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
