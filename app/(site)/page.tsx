import { About } from "@/components/home/about/index";
import {
  GetInTouch,
  FeaturedProjects,
  HeroSection,
  NoteworthyProject,
  Experince,
} from "@/components/home";
import { NOTEWORTHY_PROJECTS } from "@/config/constants";

export default async function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Experince  />
      <FeaturedProjects />
      <NoteworthyProject data={NOTEWORTHY_PROJECTS} />
      <GetInTouch />
    </>
  );
}
