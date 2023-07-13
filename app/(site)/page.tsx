import { About } from "@/components/home/about/index";
import {
  GetInTouch,
  FeaturedProjects,
  HeroSection,
  NoteworthyProject,
  Experince,
} from "@/components/home";
import sanityClient from "@/sanity/config/client";
import { Experince as ExperinceType, HomePage, Project } from "@/types";

export default async function Home() {
  const data = await sanityClient.fetch(`*[_type in ["homePage", "project"]]`);

  const experince: ExperinceType[] = await sanityClient.fetch(
    `*[_type == "experince"] | order(_createdAt desc)`
  );

  const featureProjects: Project[] = data.filter(
    (item: any) => item._type === "project" && item.featured
  );

  const noteWorthyProjects: Project[] = data.filter(
    (item: any) => item._type === "project" && !item.featured
  );

  const homePage: HomePage = data.find(
    (item: any) => item._type === "homePage"
  );

  return (
    <>
      <HeroSection data={homePage.heroSection} />
      <About data={homePage.aboutSection} />
      <Experince data={experince} />
      <FeaturedProjects data={featureProjects} />
      <NoteworthyProject data={noteWorthyProjects} />
      <GetInTouch data={homePage.getInTouchSection} />
    </>
  );
}
