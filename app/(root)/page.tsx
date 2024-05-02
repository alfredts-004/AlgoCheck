import { SignedOut } from "@clerk/nextjs"
import MaxWidthWrapper from '@/components/shared/MaxWidthWrapper'
import {
  Button,
  buttonVariants,
} from '@/components/ui/button'
import { SignOutButton } from '@clerk/nextjs'
import {
  AppWindow,
  Keyboard,
  SmilePlus,
} from 'lucide-react'
import Link from 'next/link'


const perks = [
  {
    name: 'AlgoCheck in-browser editor',
    Icon: AppWindow,
    description:
      'Skip lengthy local language installations. Our in-browser editor supports all the language for convenience',
  },
  {
    name: 'User-Friendly Interface',
    Icon: SmilePlus,
    description:
      'AlgoCheck offers an intuitive interface, ensuring a seamless learning experience for users.',
  },
  {
    name: 'Problem Statements', 
    Icon: Keyboard,
    description:
      "  Access a wide range of Data Structure problem statements to practice and enhance problem-solving skills.",
  },
]



export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Coding Confidence,{" "} one{" "}
            <span className="text-blue-600">Problem</span> at a time. 
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Master Data Structure like a boss! Dive into algorithms, conquer data structures, and level up your coding game. Your shortcut to success starts here!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <SignedOut>
            <Link href="/sign-in" className={buttonVariants()}>
              Sign Up
            </Link>
            </SignedOut>
            <Link href="/course" className={buttonVariants({
                      variant: "ghost",
                    })} >
              Get Started &rarr;
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>

                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium text-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </MaxWidthWrapper>
      </section>

    </>
  );
}
