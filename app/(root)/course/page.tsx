import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Brackets,
  GitPullRequestArrow,
  Network,
  Waypoints,
  Tally4,
  AlignVerticalJustifyEnd,
} from "lucide-react";
import Link from "next/link";
const dataStructure = [
  {
    name: "Array",
    Icon: Brackets,
    href: "/course/array",
    description:
      "Learn how to efficiently organize data using arrays, including manipulation and traversal techniques.",
  },
  {
    name: "Stack - (Static)",
    Icon: AlignVerticalJustifyEnd,
    href: "/course/stack",
    description:
      "Understand the principles of static stacks, including push and pop operations, and their applications in algorithms.",
  },
  {
    name: "Queue - (Static)",
    Icon: Tally4,
    href: "/course/queue",
    description:
      "Discover the fundamentals of static queues, including enqueue and dequeue operations for managing data in a first-in-first-out manner.",
  },
  {
    name: "Linked-List",
    Icon: GitPullRequestArrow,
    href: "/course/linked-list",
    description:
      "Explore linked lists, their types, and how they allow dynamic memory allocation for efficient data storage.",
  },
  {
    name: "Tree",
    Icon: Network,
    href: "/course/trees",
    description:
      "Dive into the world of trees, including binary trees and tree traversals, and their applications in searching and sorting algorithms.",
  },
  {
    name: "Graph",
    Icon: Waypoints,
    href: "/course/graph",
    description:
      "Gain a comprehensive understanding of graph theory, including graph traversal, types, and their real-world applications.",
  },
  {
    name: "Stack - (Dynamic)",
    Icon: AlignVerticalJustifyEnd,
    href: "/course/stack",
    description:
      "Learn about dynamic stacks, their flexible memory allocation, and their uses in advanced data management tasks.",
  },
  {
    name: "Queue - (Dynamic)",
    Icon: Tally4,
    href: "/course/queue",
    description:
      "Master dynamic queues and their ability to adapt to changing data sizes for efficient handling of data streams.",
  },
];

export default function Topic() {
  return (
    <MaxWidthWrapper>
      <div className="flex w-full max-w-sm items-center space-x-2 py-8">
        <Input type="search" placeholder="Search any topic" />
        <Button type="submit">Search</Button>
      </div>
      <div className="p-10 text-center">
        <h2 className="py-10 text-lg font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Data <span className="text-slate-500">Structure</span>
        </h2>
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-8">
          {dataStructure.map((data) => (
            <div
              key={data.name}
              className="rounded p-6 shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Link href={data.href}>
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-slate-600 text-blue-200">
                    <data.Icon className="w-1/3 h-1/3" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {data.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {data.description}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
