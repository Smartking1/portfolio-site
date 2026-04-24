"use client";

import Link from "next/link";
import Image from "next/image";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import WritingCard from "@/components/WritingCard";
import CertificationCard from "@/components/CertificationCard";
import SpeakingCard from "@/components/SpeakingCard";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import StatsCounter from "@/components/StatsCounter";
import {
  profile,
  skills,
  projects,
  featuredProjects,
  experience,
  writings,
  publications,
  speaking,
  certifications,
} from "@/data/siteData";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Intro3.jpg"
            alt="Ibekwe Kingsley"
            fill
            className="object-cover object-center"
            priority
            quality={90}
          />
          {/* Balanced overlay — image visible but text readable */}
          <div className="absolute inset-0 bg-zinc-950/55" />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/30 to-zinc-950/40" />
        </div>

        {/* Animated glow orbs */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="animate-float absolute -top-20 right-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-3xl" />
          <div className="animate-float delay-300 absolute bottom-0 left-1/4 h-[300px] w-[300px] rounded-full bg-violet-500/5 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Animated label */}
          <div className="animate-fade-in-down">
            <p className="mb-4 inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm font-medium tracking-widest text-violet-400 uppercase backdrop-blur-sm">
              ✦ AI Engineer
            </p>
          </div>

          {/* Name with gradient text animation */}
          <div className="animate-fade-in-up delay-200 animate-stagger">
            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-white">Hi, I&apos;m </span>
              <span className="text-gradient-animate">{profile.name}</span>
            </h1>
          </div>

          {/* Subtitle with typing effect */}
          <div className="animate-fade-in-up delay-400 animate-stagger mt-4">
            <p className="text-typing max-w-xl text-lg text-zinc-300 sm:text-xl">
              {profile.subtitle}
            </p>
          </div>

          {/* Bio */}
          <div className="animate-fade-in-up delay-600 animate-stagger">
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-400">
              {profile.bio}
            </p>
          </div>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-800 animate-stagger mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
            >
              View Projects
            </Link>
            <a
              href="/cv/Ibekwe_Kingsley.pdf"
              download
              className="group inline-flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/10 px-6 py-3 text-sm font-medium text-violet-300 backdrop-blur-sm transition-all duration-300 hover:border-violet-500/60 hover:bg-violet-500/20 hover:text-white hover:-translate-y-0.5"
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
              Download CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-zinc-500 hover:text-white hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="animate-fade-in delay-1200 animate-stagger absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <a href="#experience" className="flex flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-violet-400">
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <div className="h-8 w-5 rounded-full border-2 border-zinc-600 p-1">
              <div className="mx-auto h-2 w-1 animate-bounce rounded-full bg-violet-400" />
            </div>
          </a>
        </div>
      </section>

      {/* ── Stats Strip ───────────────────────────────────── */}
      <StatsCounter
        stats={[
          { label: "Years Experience", value: 5, suffix: "+" },
          { label: "Projects Built", value: projects.length, suffix: "+" },
          { label: "Communities", value: 3 },
          { label: "Speaking Events", value: speaking.length, suffix: "+" },
          { label: "Articles & Papers", value: writings.length + publications.length, suffix: "+" },
        ]}
      />

      {/* ── Experience ────────────────────────────────────── */}
      <Section
        id="experience"
        className="border-t border-zinc-800/60"
      >
        <div className="mb-12">
          <AnimateOnScroll animation="animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-gradient-static">Experience</span>
              <span className="text-violet-500">.</span>
            </h2>
            <p className="mt-3 text-lg text-zinc-400">
              Professional journey in AI and data science
            </p>
          </AnimateOnScroll>
        </div>

        <div className="space-y-0">
          {experience.map((exp, i) => (
            <AnimateOnScroll
              key={i}
              animation="animate-fade-in-left"
              delay={`delay-${Math.min(i * 100, 500)}`}
            >
              <div className="group relative flex gap-6 border-l-2 border-zinc-800 py-6 pl-8 transition-colors hover:border-violet-500/50">
                {/* Timeline dot */}
                <div className="absolute -left-[7px] top-8 h-3 w-3 rounded-full border-2 border-zinc-700 bg-zinc-950 transition-all duration-300 group-hover:border-violet-500 group-hover:bg-violet-500 group-hover:shadow-lg group-hover:shadow-violet-500/30" />

                <div className="flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                    <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-violet-400">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-zinc-500">{exp.period}</span>
                  </div>
                  <p className="mt-0.5 text-sm text-zinc-400">
                    {exp.company}
                    {exp.type && (
                      <span className="ml-2 rounded bg-zinc-800 px-2 py-0.5 text-xs text-zinc-500">
                        {exp.type}
                      </span>
                    )}
                  </p>

                  {/* Description bullets */}
                  {exp.description && exp.description.length > 0 && (
                    <ul className="mt-3 space-y-1.5">
                      {exp.description.map((line, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500/40" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </Section>

      {/* ── Selected Work ─────────────────────────────────── */}
      <Section
        id="work"
        title="Selected Work"
        subtitle="Recent projects in AI, ML, and intelligent systems"
        className="border-t border-zinc-800/60"
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <AnimateOnScroll
              key={project.title}
              animation="animate-fade-in-up"
              delay={`delay-${(i % 3) * 200}`}
            >
              <ProjectCard project={project} />
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll animation="animate-fade-in" delay="delay-300">
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
            >
              View all projects
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </Section>

      {/* ── About ─────────────────────────────────────────── */}
      <Section id="about" className="border-t border-zinc-800/60">
        <div className="mb-12">
          <AnimateOnScroll animation="animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-gradient-static">About Me</span>
              <span className="text-violet-500">.</span>
            </h2>
          </AnimateOnScroll>
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <AnimateOnScroll animation="animate-fade-in-left">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-zinc-300">
                I am an AI-focused developer with a strong passion for building intelligent, real-world solutions that solve meaningful problems. My work sits at the intersection of machine learning, backend engineering, and user-centered design, where I focus on creating systems that are not just technically sound, but also practical and impactful.
              </p>

              <p className="text-lg leading-relaxed text-zinc-400">
                I have experience developing AI-powered platforms, including voice agents for real estate onboarding, personalized recommendation systems, and educational tools that generate dynamic content from user inputs. My approach emphasizes scalability, efficiency, and seamless integration of technologies such as large language models, speech processing, and vector databases.
              </p>

              <p className="text-lg leading-relaxed text-zinc-400">
                Beyond building systems, I enjoy tackling complex challenges like user behavior prediction, personalization, and accessibility—especially in areas that improve how people interact with technology. I am continuously exploring new advancements in AI and finding ways to apply them to products that deliver real value.
              </p>

              <p className="text-lg leading-relaxed text-zinc-500 italic">
                I&apos;m driven by curiosity, innovation, and the goal of creating solutions that make everyday processes smarter and more intuitive.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Skills */}
          <AnimateOnScroll animation="animate-fade-in-right" delay="delay-200">
            <div className="space-y-6">
              {skills.map((group) => (
                <div key={group.category}>
                  <h3 className="mb-2 text-sm font-semibold tracking-wide text-zinc-300 uppercase">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-300 hover:border-violet-500/30 hover:text-violet-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </Section>

      {/* ── Publications Preview ──────────────────────────── */}
      <Section
        id="publications"
        className="border-t border-zinc-800/60"
      >
        <div className="mb-12">
          <AnimateOnScroll animation="animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-gradient-static">Publications</span>
              <span className="text-violet-500">.</span>
            </h2>
            <p className="mt-3 text-lg text-zinc-400">
              Research papers and academic contributions
            </p>
          </AnimateOnScroll>
        </div>
        <div className="space-y-6">
          {publications.map((pub, i) => (
            <AnimateOnScroll key={pub.title} animation="animate-fade-in-up" delay={`delay-${i * 200}`}>
              <div className="group rounded-xl border border-zinc-800/60 bg-zinc-900/50 p-6 transition-all duration-300 hover:border-zinc-700 hover:bg-zinc-900">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-violet-400">
                      {pub.title}
                    </h3>
                    <p className="mt-1 text-sm text-zinc-400">{pub.authors}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-zinc-500">
                      <span className="rounded-md bg-zinc-800 px-2 py-1">
                        {pub.venue}
                      </span>
                      <span>{pub.year}</span>
                    </div>
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 rounded-lg border border-zinc-700 px-4 py-2 text-xs font-medium text-zinc-400 transition-all hover:border-zinc-500 hover:text-white"
                    >
                      View
                    </a>
                  )}
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll animation="animate-fade-in" delay="delay-300">
          <div className="mt-10 text-center">
            <Link
              href="/publications"
              className="group inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
            >
              View all publications
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </Section>

      {/* ── Speaking Preview ──────────────────────────────── */}
      <Section
        id="speaking"
        className="border-t border-zinc-800/60"
      >
        <div className="mb-12">
          <AnimateOnScroll animation="animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-gradient-static">Speaking</span>
              <span className="text-violet-500">.</span>
            </h2>
            <p className="mt-3 text-lg text-zinc-400">
              Talks and workshops at community events
            </p>
          </AnimateOnScroll>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speaking.slice(0, 3).map((talk, i) => (
            <AnimateOnScroll
              key={talk.title}
              animation="animate-scale-in"
              delay={`delay-${i * 200}`}
            >
              <SpeakingCard talk={talk} />
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll animation="animate-fade-in" delay="delay-300">
          <div className="mt-10 text-center">
            <Link
              href="/speaking"
              className="group inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
            >
              View all talks
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </Section>

      {/* ── Writing Preview ───────────────────────────────── */}
      <Section
        id="writing"
        className="border-t border-zinc-800/60"
      >
        <div className="mb-12">
          <AnimateOnScroll animation="animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-gradient-static">Writing</span>
              <span className="text-violet-500">.</span>
            </h2>
            <p className="mt-3 text-lg text-zinc-400">
              Articles and tutorials on AI and machine learning
            </p>
          </AnimateOnScroll>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {writings.slice(0, 3).map((article, i) => (
            <AnimateOnScroll
              key={article.title}
              animation="animate-fade-in-up"
              delay={`delay-${i * 200}`}
            >
              <WritingCard article={article} />
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll animation="animate-fade-in" delay="delay-300">
          <div className="mt-10 text-center">
            <Link
              href="/writing"
              className="group inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
            >
              View all articles
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </Section>

      {/* ── Certifications Preview ────────────────────────── */}
      <Section
        id="certifications"
        className="border-t border-zinc-800/60"
      >
        <div className="mb-12">
          <AnimateOnScroll animation="animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-gradient-static">Certifications</span>
              <span className="text-violet-500">.</span>
            </h2>
            <p className="mt-3 text-lg text-zinc-400">
              Professional credentials and achievements
            </p>
          </AnimateOnScroll>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.slice(0, 4).map((cert, i) => (
            <AnimateOnScroll
              key={cert.name}
              animation="animate-fade-in-up"
              delay={`delay-${i * 100}`}
            >
              <CertificationCard cert={cert} />
            </AnimateOnScroll>
          ))}
        </div>
        <AnimateOnScroll animation="animate-fade-in" delay="delay-300">
          <div className="mt-10 text-center">
            <Link
              href="/certifications"
              className="group inline-flex items-center gap-2 text-sm font-medium text-violet-400 transition-colors hover:text-violet-300"
            >
              View all certifications
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </AnimateOnScroll>
      </Section>

      {/* ── Contact ───────────────────────────────────────── */}
      <Section
        id="contact"
        className="border-t border-zinc-800/60"
      >
        <div className="mb-12 text-center">
          <AnimateOnScroll animation="animate-fade-in-up">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="text-gradient-animate">Let&apos;s Connect</span>
              <span className="text-violet-500">.</span>
            </h2>
            <p className="mt-3 text-lg text-zinc-400">
              Open to collaboration, consulting, and new opportunities
            </p>
          </AnimateOnScroll>
        </div>
        <AnimateOnScroll animation="animate-slide-up">
          <div className="flex flex-col items-center text-center">
            <p className="max-w-xl text-zinc-400">
              Whether you&apos;re looking to build AI-powered products, need consulting on ML
              systems, or just want to chat about the latest in AI — I&apos;d love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-lg hover:shadow-violet-500/25 hover:-translate-y-0.5"
              >
                Send an Email
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-zinc-500 hover:text-white hover:-translate-y-0.5"
              >
                WhatsApp Message
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-zinc-500 hover:text-white hover:-translate-y-0.5"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </Section>
    </>
  );
}

