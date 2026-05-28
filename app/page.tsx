import { Hero } from "@/components/hero";
import { AboutPreview } from "@/components/about-preview";
import { ResearchAreas } from "@/components/research-areas";
import { FeaturedProjects } from "@/components/featured-projects";
import { PublicationsPreview } from "@/components/publications-preview";
import { TeamPreview } from "@/components/team-preview";
import { ContactCTA } from "@/components/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ResearchAreas />
      <FeaturedProjects />
      <PublicationsPreview />
      <TeamPreview />
      <ContactCTA />
    </>
  );
}
