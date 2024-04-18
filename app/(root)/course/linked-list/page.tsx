import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';


const content = [
    {
      heading: "1. What is a Linked List?",
      paragraph: `A linked list is a linear data structure consisting of nodes where each node contains a data field and a reference (link) to the next node in the sequence.`,
      code: null,
    },
    {
      heading: "2. How to Implement a Linked List in C?",
      paragraph: `You can implement a linked list in C by defining a structure for the nodes and then creating functions to perform various operations such as insertion, deletion, and traversal.`,
    },
    {
      heading: "3. Define the Linked List Structure",
      paragraph: `First, define the structure for a node in the linked list. Each node contains two fields: data to store the value and next to store the reference to the next node.`,
      code: `// Define a structure for a node
  typedef struct Node {
      int data; // Data stored in the node
      struct Node *next; // Pointer to the next node
  } Node;
  
  // Define a structure for the linked list
  typedef struct LinkedList {
      Node *head; // Pointer to the first node
  } LinkedList;`,
    },
    {
      heading: "4. Initialize an Empty Linked List",
      paragraph: `To initialize an empty linked list, set the head pointer to NULL.`,
      code: `// Function to initialize an empty linked list
  void initLinkedList(LinkedList *list) {
      list->head = NULL; // Set head to NULL
  }`,
    },
    {
      heading: "5. Insertion at the Beginning of the Linked List",
      paragraph: `To insert a new node at the beginning of the linked list, create a new node, assign its data, and update the head pointer to point to the new node.`,
      code: `// Function to insert a new node at the beginning of the linked list
  void insertAtBeginning(LinkedList *list, int value) {
      // Create a new node
      Node *newNode = (Node *)malloc(sizeof(Node));
      if (newNode == NULL) {
          printf("Memory allocation failed\n");
          return;
      }
      // Assign data to the new node
      newNode->data = value;
      // Set the next pointer of the new node to the current head
      newNode->next = list->head;
      // Update the head pointer to point to the new node
      list->head = newNode;
  }`,
    },
    {
      heading: "6. Insertion at the End of the Linked List",
      paragraph: `To insert a new node at the end of the linked list, traverse to the last node, create a new node, assign its data, and update the next pointer of the last node to point to the new node.`,
      code: `// Function to insert a new node at the end of the linked list
  void insertAtEnd(LinkedList *list, int value) {
      // Create a new node
      Node *newNode = (Node *)malloc(sizeof(Node));
      if (newNode == NULL) {
          printf("Memory allocation failed\n");
          return;
      }
      // Assign data to the new node
      newNode->data = value;
      // Set the next pointer of the new node to NULL
      newNode->next = NULL;
      // If the list is empty, make the new node the head
      if (list->head == NULL) {
          list->head = newNode;
          return;
      }
      // Traverse to the last node
      Node *current = list->head;
      while (current->next != NULL) {
          current = current->next;
      }
      // Update the next pointer of the last node to point to the new node
      current->next = newNode;
  }`,
    },
    // Add more methods here
  ];
  
  
  const problem_statement = [
    {
      problem: "Q1) Implement Insertion at End: Write a C program to insert a new node at the end of a linked list.",
      id: "1"
    },
    {
      problem: "Q2) Implement Deletion at Beginning: Write a C program to delete the first node from a linked list.",
      id: "2"
    },
    {
      problem: "Q3) Implement Search: Write a C program to search for a value in a linked list and return its position.",
      id: "3"
    },
    {
      problem: "Q4) Implement Reversal: Write a C program to reverse a linked list.",
      id: "4"
    },
    {
      problem: "Q5) Implement Concatenation: Write a C program to concatenate two linked lists.",
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
                Linked-List
              </TabsTrigger>
              <TabsTrigger value="Problems" className="">
                Problems Statement
              </TabsTrigger>
            </TabsList>

            <TabsContent key="Stack" value="Stack">
              <div className="h-auto w-full bg-slate-200 p-2 rounded-lg">
                <article className="bg-white p-3">
                  <h2 className="p-3 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Linked-List
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

















