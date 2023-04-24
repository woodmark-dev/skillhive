import Image from "next/image";
import { FC } from "react";
import NextLink from "next/link";
import { Inter } from "next/font/google";
import { home } from "../content";
import FeaturesCard from "@/components/featuresCard";
import TeamCard from "@/components/teamCard";

const inter = Inter({ subsets: ["latin"] });

type ContentProps = {
  featuresContent: Array<{
    title: string;
    detail: string;
    id: number;
  }>;
  heroContent: {
    title: string;
    detail: string;
  };
  featuresHeader: {
    title: string;
    detail: string;
  };
};

export default function Home({
  featuresContent,
  heroContent,
  featuresHeader,
}: ContentProps) {
  return (
    <main>
      <div className="hero min-h-max md:min-h-screen bg-gradient-to-r from-blue-800 via-blue-400 to-purple-300 text-white py-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/images/main-image.jpg"
            alt="Server photo"
            width={450}
            height={500}
            className="rotate-90 rounded-lg shadow-2xl invisible md:visible hidden md:block"
          />
          <div className="md:pr-28">
            <h1 className="md:text-5xl text-4xl font-bold">
              {heroContent?.title}
            </h1>
            <p className="py-6">{heroContent?.detail}</p>
          </div>
        </div>
      </div>

      <div
        className="hero min-h-screen bg-base-200 py-20 md:px-16 flex flex-col gap-16"
        id="features"
      >
        <div className="flex flex-col items-center">
          <h1 className="md:text-4xl text-3xl text-blue-800 font-bold pt-12 px-12">
            {featuresHeader?.title}
          </h1>
          <p className="p-5 text-lg">{featuresHeader?.detail}</p>
        </div>
        <div className="flex flex-wrap gap-20 justify-center md:justify-normal">
          {featuresContent?.map((item) => (
            <FeaturesCard
              key={item.title}
              title={item.title}
              detail={item.detail.split(" ").slice(0, 12).join(" ")}
              fullDetail={item.detail}
              id={item.id}
            />
          ))}
        </div>
      </div>

      <div
        className="hero bg-white py-20 md:px-16 flex flex-col gap-24"
        id="the-team"
      >
        <div className="flex flex-col items-center">
          <h1 className="md:text-4xl text-3xl text-blue-800 font-bold pt-12 px-12">
            Meet the team
          </h1>
        </div>

        <div className="relative flex overflow-hidden w-screen">
          <div className="animate-marquee whitespace-nowrap">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
    </main>
  );
}

// Home.defaultProps = {
//   content: {
//     features: [{ title: "default feature", body: "default body" }],
//     hero: { title: "default title", body: "default body" },
//   },
// };

export function getStaticProps() {
  return {
    props: {
      featuresContent: home.featuresContent,
      heroContent: home.heroContent,
      featuresHeader: home.featuresHeader,
    },
  };
}

//palette
//Primary: #5599DD
//Secondary: #4CB944
//Dark Shade: #F5EE9E
//Light Shade: #FDFFFC
//Minor: #F06543
