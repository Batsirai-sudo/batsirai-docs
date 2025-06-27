import { ModeToggle } from "@/components/theme-toggle";
// import { GithubIcon, TwitterIcon, CommandIcon } from "lucide-react";
import Link from "next/link";
// import { buttonVariants } from "./ui/button";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import AlgoliaSearch from "./algolia-search";

export const NAVLINKS = [
  {
    title: "Documentation",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "Blog",
    href: "/blog",
  },
  // {
  //   title: "Examples",
  //   href: "#",
  // },
  // {
  //   title: "Guides",
  //   href: "#",
  // },
  // {
  //   title: "Community",
  //   href: "https://github.com/nisabmohd/Aria-Docs/discussions",
  // },
];

const algolia_props = {
  appId: process.env.ALGOLIA_APP_ID!,
  indexName: process.env.ALGOLIA_INDEX!,
  apiKey: process.env.ALGOLIA_SEARCH_API_KEY!,
};

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center sm:justify-between md:gap-2">
        <div className="flex items-center sm:gap-5 gap-2.5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="lg:flex hidden">
             <Logo />
            </div>
            <div className="md:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center sm:justify-normal justify-between sm:gap-3 ml-1 sm:w-fit w-[90%]">
          <AlgoliaSearch {...algolia_props} />
          <div className="flex items-center justify-between sm:gap-2">
            <div className="flex ml-4 sm:ml-0">
              {/*<Link*/}
              {/*  href="https://github.com/nisabmohd/NexDocs"*/}
              {/*  className={buttonVariants({*/}
              {/*    variant: "ghost",*/}
              {/*    size: "icon",*/}
              {/*  })}*/}
              {/*>*/}
              {/*  <GithubIcon className="h-[1.1rem] w-[1.1rem]" />*/}
              {/*</Link>*/}
              {/*<Link*/}
              {/*  href="#"*/}
              {/*  className={buttonVariants({*/}
              {/*    variant: "ghost",*/}
              {/*    size: "icon",*/}
              {/*  })}*/}
              {/*>*/}
              {/*  <TwitterIcon className="h-[1.1rem] w-[1.1rem]" />*/}
              {/*</Link>*/}
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex cursor-pointer items-center gap-2.5">
       <svg height="60" width="60" version="1.0" xmlns="http://www.w3.org/2000/svg" viewBox="200 170 230.000000 20.000000" preserveAspectRatio="xMidYMid meet">
                  <g transform="translate(0.000000,480.000000) scale(0.100000,-0.100000)" className="fill-black dark:fill-white"  stroke="none">
                      <path d="M2520 3540 l0 -260 -89 0 c-100 0 -133 -9 -174 -48 -44 -42 -59 -78 -60 -151 -1 -83 28 -141 89 -177 35 -21 53 -24 137 -24 l97 0 0 -235 0 -235 125 0 125 0 0 -120 0 -120 350 0 c346 0 350 0 402 24 67 29 147 90 189 141 140 175 120 466 -45 627 -55 55 -173 122 -236 134 -16 4 -30 9 -30 13 1 3 21 21 45 38 93 69 137 231 101 373 -33 128 -121 219 -255 260 -58 18 -93 20 -417 20 l-354 0 0 -260z m758 174 c122 -39 200 -141 210 -272 13 -182 -79 -286 -270 -308 -58 -7 -58 -7 -58 -40 l0 -34 63 0 c79 0 214 -33 291 -72 74 -38 150 -113 181 -181 14 -29 29 -85 35 -126 26 -187 -54 -336 -224 -417 l-70 -34 -298 0 -298 0 0 89 0 89 193 5 c223 5 267 16 332 81 48 48 65 98 65 187 0 118 -62 206 -173 244 -40 14 -93 19 -234 23 l-183 4 0 129 0 129 153 0 c141 0 158 2 198 23 103 53 120 207 33 289 -47 43 -74 48 -270 48 l-184 0 0 -145 0 -145 -90 0 -90 0 0 225 0 225 319 0 c266 0 327 -3 369 -16z m-123 -226 c47 -21 68 -92 45 -152 -17 -46 -55 -56 -215 -56 l-145 0 0 110 0 110 145 0 c90 0 154 -4 170 -12z m-635 -408 l0 -130 -94 0 c-79 0 -97 3 -119 21 -47 36 -58 140 -21 193 25 36 56 45 147 46 l87 0 0 -130z m250 -235 l0 -365 -90 0 -90 0 0 200 0 200 55 0 55 0 0 35 0 35 -55 0 -55 0 0 130 0 130 90 0 90 0 0 -365z m475 11 c82 -35 117 -91 116 -187 0 -87 -29 -132 -106 -166 -32 -13 -78 -18 -227 -21 l-188 -4 0 202 0 202 183 -4 c144 -3 190 -8 222 -22z"/>
                  </g>
              </svg>
      {/*<CommandIcon className="w-6 h-6 text-muted-foreground" strokeWidth={2} />*/}
      {/*<h2 className="text-md font-bold font-code">AriaDocs</h2>*/}
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex items-center gap-1 sm:text-sm text-[14.5px] dark:text-stone-300/85 text-stone-800"
            href={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
//width="600.000000pt" height="480.000000pt"
