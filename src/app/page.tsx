import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-16">
      {/* HERO — centered, avatar on top */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl">
          <div className="flex flex-col items-center justify-center text-center space-y-5 pt-4">
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-36 border-4 border-accent shadow-xl ring-2 ring-accent/30">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback className="text-3xl">{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
            <div className="space-y-2">
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-4xl ml-10 font-bold tracking-tighter sm:text-6xl xl:text-7xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[560px] md:text-xl text-muted-foreground"
                delay={BLUR_FADE_DELAY * 3}
                text={DATA.description}
              />
            </div>
            {/* Amber accent line */}
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <div className="w-16 h-1 rounded-full bg-accent" />
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="mx-auto w-full max-w-2xl">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold mb-3 flex items-center gap-2">
              <span className="w-2 h-5 rounded-sm bg-accent inline-block" />
              About
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </div>
      </section>

      <section id="work">
        <div className="mx-auto w-full max-w-2xl flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="w-2 h-5 rounded-sm bg-accent inline-block" />
              Work Experience
            </h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <div className="relative inline-block mt-2 rounded-xl overflow-hidden shadow-md">
              <Image height={500} width={1000} src="/Review.png" alt="CEO Review" className="rounded-xl" />
              <div className="absolute bottom-3 right-3 bg-black/70 text-white px-3 py-1.5 text-xs rounded-lg backdrop-blur-sm">
                BoardCerts&apos;s CEO review
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="education">
        <div className="mx-auto w-full max-w-2xl flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 10}>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="w-2 h-5 rounded-sm bg-accent inline-block" />
              Education
            </h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade key={education.school} delay={BLUR_FADE_DELAY * 11 + id * 0.05}>
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="mx-auto w-full max-w-2xl flex min-h-0 flex-col gap-y-4">
          <BlurFade delay={BLUR_FADE_DELAY * 12}>
            <h2 className="text-xl font-bold flex items-center gap-2">
              <span className="w-2 h-5 rounded-sm bg-accent inline-block" />
              Skills
            </h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1.5">
            {DATA.skills.map((skill, id) => (
              <BlurFade key={skill} delay={BLUR_FADE_DELAY * 13 + id * 0.05}>
                <Badge key={skill} variant="secondary" className="px-2.5 py-1 text-xs">
                  {skill}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-accent text-accent-foreground px-4 py-1 text-sm font-medium">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-xl mx-auto">
                  I&apos;ve worked on a variety of projects, from simple websites to complex web applications.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade key={project.title} delay={BLUR_FADE_DELAY * 15 + id * 0.05}>
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-accent text-accent-foreground px-4 py-1 text-sm font-medium">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-xl mx-auto">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by motivated individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade key={project.title + project.dates} delay={BLUR_FADE_DELAY * 18 + id * 0.05}>
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section>

      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-accent text-accent-foreground px-4 py-1 text-sm font-medium">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Feel free to reach out{" "}
                <Link href={DATA.contact.social.X.url} className="text-accent font-medium hover:underline underline-offset-4">
                  with a direct message on Twitter
                </Link>{" "}
                if you&apos;d like to chat, and I&apos;ll respond as soon as I can.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
