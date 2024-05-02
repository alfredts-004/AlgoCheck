import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Brackets, GitPullRequestArrow, Network, Waypoints, Tally4, AlignVerticalJustifyEnd } from "lucide-react";
import Link from "next/link";

const dataStructure = [
  {
    name: "Array",
    Icon: Brackets,
    href: "/course/array",
    description: "Skip lengthy local language installations. Our in-browser editor supports all the languages for convenience.",
  },
  {
    name: "Stack - (Static)",
    Icon: AlignVerticalJustifyEnd,
    href: "/course/stack",
    description: "AlgoCheck offers an intuitive interface, ensuring a seamless learning experience for users.",
  },
  {
    name: "Queue - (Static)",
    Icon: Tally4,
    href: "/course/queue",
    description: "Access a wide range of DSA problem statements to practice and enhance problem-solving skills.",
  },
  {
    name: "Linked-List",
    Icon: GitPullRequestArrow,
    href: "/course/linked-list",
    description: "Access a wide range of DSA problem statements to practice and enhance problem-solving skills.",
  },
  {
    name: "Tree",
    Icon: Network,
    href: "/course/trees",
    description: "Access a wide range of DSA problem statements to practice and enhance problem-solving skills.",
  },
  {
    name: "Graph",
    Icon: Waypoints,
    href: "/course/graph",
    description: "Access a wide range of DSA problem statements to practice and enhance problem-solving skills.",
  },
  {
    name: "Stack - (Dynamic)",
    Icon: AlignVerticalJustifyEnd,
    href: "/course/stack",
    description: "AlgoCheck offers an intuitive interface, ensuring a seamless learning experience for users.",
  },
  {
    name: "Queue - (Dynamic)",
    Icon: Tally4,
    href: "/course/queue",
    description: "AlgoCheck offers an intuitive interface, ensuring a seamless learning experience for users.",
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
            <div key={data.name} className="rounded p-6 shadow-lg transition-all duration-300 hover:scale-105">
              <Link href={data.href}>
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-slate-600 text-blue-200">
                    <data.Icon className="w-1/3 h-1/3" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{data.name}</h3>
                  <p className="text-sm text-muted-foreground">{data.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
