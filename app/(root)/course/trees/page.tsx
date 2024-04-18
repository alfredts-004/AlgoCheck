import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Video from "next-video";
import inorder from "@/videos/Inorder Traversal.mp4";
import preorder from "@/videos/Preorder Traversal.mp4";
import postorder from "@/videos/Postorder Traversal.mp4";
import { isNativeError } from "util/types";

const content = [
  {
    heading: "1. What is a Tree?",
    paragraph: `A tree is a hierarchical data structure that consists of nodes connected by edges. 
      The top node is called the root, and each node can have zero or more child nodes.`,
    code: null,
    video: null, // No video for this section


  },
  {
    heading: "2. How to Implement a Tree using Linked Lists?",
    paragraph: `You can implement a tree using linked lists by defining a structure for the nodes and then creating functions to perform various operations such as insertion, deletion, and traversal.`,
  },
  {
    heading: "3. Define the Tree Node Structure",
    paragraph: `First, define the structure for a node in the tree. Each node contains two fields: data to store the value and a list of child nodes.`,
    code: `// Define a structure for a tree node
  typedef struct TreeNode {
      int data; // Data stored in the node
      struct TreeNode *child; // Pointer to the first child node
      struct TreeNode *sibling; // Pointer to the next sibling node
  } TreeNode;`,
  video: null, // No video for this section

  },
  {
    heading: "4. Tree Traversal: Depth-First Search (DFS)",
    paragraph: `Depth-First Search (DFS) is a tree traversal algorithm that explores as far as possible along each branch before backtracking. 
      There are two common strategies for DFS: pre-order, in-order, and post-order traversal.`,
    code: null,
    
},

{
  heading: "Pre-order Traversal",
  paragraph: `Pre-order traversal is a tree traversal method where the current node is processed first, followed by the child nodes in the tree. 
  It is a top-down approach, meaning you process the root node first, and then the subtrees.`,
  code: `// Pre-order traversal (Recursive)
void preOrderRecursive(TreeNode *root) {
  if (root == NULL) {
      return;
  }
  printf("%d ", root->data); // Process the current node
  preOrderRecursive(root->child); // Recursively traverse the child nodes
  preOrderRecursive(root->sibling); // Recursively traverse the sibling nodes
}`,
  video: preorder
},
{
  heading: "In-order Traversal",
  paragraph: `In-order traversal processes the nodes in a specific order: left subtree first, then the current node, followed by the right subtree. 
  This traversal method is often used for binary search trees to retrieve the nodes in sorted order.`,
  code: `// In-order traversal (Recursive)
void inOrderRecursive(TreeNode *root) {
  if (root == NULL) {
      return;
  }
  inOrderRecursive(root->child); // Recursively traverse the left subtree
  printf("%d ", root->data); // Process the current node
  inOrderRecursive(root->sibling); // Recursively traverse the right subtree
}`,
  video: inorder
},
{
  heading: "Post-order Traversal",
  paragraph: `Post-order traversal is a tree traversal method that processes the child nodes before the parent node. 
  It is a bottom-up approach, which is useful for tasks such as tree deletion or evaluating expressions.`,
  code: `// Post-order traversal (Recursive)
void postOrderRecursive(TreeNode *root) {
  if (root == NULL) {
      return;
  }
  postOrderRecursive(root->child); // Recursively traverse the child nodes
  postOrderRecursive(root->sibling); // Recursively traverse the sibling nodes
  printf("%d ", root->data); // Process the current node
}`,
  video: postorder
}
  // Add more methods and traversals here
];

const problem_statement = [
  {
    problem:
      "Q1) Implement Insertion: Write a C program to insert a new node into a tree.",
    id: "1",
  },
  {
    problem:
      "Q2) Implement Deletion: Write a C program to delete a node from a tree.",
    id: "2",
  },
  {
    problem:
      "Q3) Implement Height Calculation: Write a C program to calculate the height of a tree.",
    id: "3",
  },
  {
    problem:
      "Q4) Implement Depth-First Search (DFS): Write a C program to perform Depth-First Search traversal (pre-order, in-order, post-order) on a tree.",
    id: "4",
  },
  {
    problem:
      "Q5) Implement Breadth-First Search (BFS): Write a C program to perform Breadth-First Search traversal on a tree.",
    id: "5",
  },
  {
    problem:
      "Q6) Check if Balanced: Write a C program to check if a tree is balanced (the heights of the two subtrees of any node never differ by more than 1).",
    id: "6",
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
                Tree
              </TabsTrigger>
              <TabsTrigger value="Problems" className="">
                Problems Statement
              </TabsTrigger>
            </TabsList>

            <TabsContent key="Stack" value="Stack">
              <div className="h-auto w-full bg-slate-200 p-2 rounded-lg">
                <article className="bg-white p-3">
                  <h2 className="p-3 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Tree
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
