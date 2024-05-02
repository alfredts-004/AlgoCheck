import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

const content = [
  {
    heading: "1. Graph Representation",
    paragraph: `A graph is a data structure that consists of a set of vertices (nodes) and a set of edges that connect pairs of vertices. Graphs can be directed or undirected and may have weighted edges.`,
    code: null,
  },
  {
    heading: "2. Adjacency Matrix Representation",
    paragraph: `An adjacency matrix is a two-dimensional array where each row and column represents a vertex, and the value at the intersection indicates whether an edge exists between the vertices. Here's how to implement a graph using an adjacency matrix:`,
    code: `#include <stdio.h>

#define MAX_VERTICES 100

// Graph structure
typedef struct {
    int adjMatrix[MAX_VERTICES][MAX_VERTICES];
    int numVertices;
} Graph;

// Function to create a graph with n vertices
void createGraph(Graph* graph, int n) {
    graph->numVertices = n;
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            graph->adjMatrix[i][j] = 0; // Initialize adjacency matrix
        }
    }
}

// Function to add an edge
void addEdge(Graph* graph, int src, int dest) {
    graph->adjMatrix[src][dest] = 1; // Set adjacency matrix
    graph->adjMatrix[dest][src] = 1; // Set reverse for undirected graph
}

// Function to print the adjacency matrix
void printGraph(Graph* graph) {
    for (int i = 0; i < graph->numVertices; i++) {
        for (int j = 0; j < graph->numVertices; j++) {
            printf("%d ", graph->adjMatrix[i][j]);
        }
        printf("\n");
    }
}

int main() {
    Graph graph;
    createGraph(&graph, 4);

    addEdge(&graph, 0, 1);
    addEdge(&graph, 1, 2);
    addEdge(&graph, 2, 3);
    addEdge(&graph, 3, 0);

    printf("Adjacency matrix of the graph:\n");
    printGraph(&graph);

    return 0;
}`,
  },
  {
    heading: "3. Adding an Edge",
    paragraph: `To add an edge in the graph, use the following function. It takes the source and destination vertices as arguments and sets the corresponding elements in the adjacency matrix.`,
    code: `// Function to add an edge
void addEdge(Graph* graph, int src, int dest) {
    graph->adjMatrix[src][dest] = 1; // Set adjacency matrix
    graph->adjMatrix[dest][src] = 1; // Set reverse for undirected graph
}`,
  },
  {
    heading: "4. Printing the Graph",
    paragraph: `To print the graph, use the following function. It iterates through the adjacency matrix and prints the values to represent the graph's structure.`,
    code: `// Function to print the adjacency matrix
void printGraph(Graph* graph) {
    for (int i = 0; i < graph->numVertices; i++) {
        for (int j = 0; j < graph->numVertices; j++) {
            printf("%d ", graph->adjMatrix[i][j]);
        }
        printf("\\n");
    }
}`,
  },
  // Add more content here as needed
];

const problem_statement = [
  {
    problem:
      "Q1) Depth-First Search: Write a C program to perform depth-first search (DFS) on a graph using an adjacency matrix.",
    id: "1",
  },
  {
    problem:
      "Q2) Breadth-First Search: Write a C program to perform breadth-first search (BFS) on a graph using an adjacency matrix.",
    id: "2",
  },
  {
    problem:
      "Q3) Finding Shortest Path: Write a C program to find the shortest path between two vertices using an adjacency matrix.",
    id: "3",
  },
  {
    problem:
      "Q4) Check Cycle: Write a C program to check if a graph contains a cycle using an adjacency matrix.",
    id: "4",
  },
  {
    problem:
      "Q5) Topological Sort: Write a C program to perform topological sort on a directed acyclic graph using an adjacency matrix.",
    id: "5",
  },
  // Add more problem statements here as needed
];

export default function Graph() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="item-center justify-center p-6">
          <Tabs defaultValue="Graph" className="w-auto">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="Graph" className="">
                Graph
              </TabsTrigger>
              <TabsTrigger value="Problems" className="">
                Problems Statement
              </TabsTrigger>
            </TabsList>

            <TabsContent key="Graph" value="Graph">
              <div className="h-auto w-full bg-slate-200 p-2 rounded-lg">
                <article className="bg-white p-3">
                  <h2 className="p-3 text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Graph
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
                          <div
                            className="bg-slate-200 grid place-items-center h-auto p-1 m-3"
                            style={{ overflowX: "auto", maxWidth: "100%" }}
                          >
                            <div className="p-4">
                              <SyntaxHighlighter
                                language="c"
                                style={docco}
                                customStyle={{
                                  padding: "16px",
                                  borderRadius: "12px",
                                  whiteSpace: "pre-wrap",
                                  overflowX: "auto",
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
