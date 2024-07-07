"use client";

import React from "react";
import { Button } from "@/app/_components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FlipWords } from "../_aceternity/flip-words";
import { ContainerScroll } from "../_aceternity/container-scroll-animation";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../_aceternity/hero-highlight";
import { SparklesCore } from "../_aceternity/sparkles";

export default function LandingPage({
  currentUserEmail,
}: {
  currentUserEmail: string | null | undefined;
}) {
  const words = ["AI!", "flashcards!", "roleplaying!"];

  return (
    <>
      <HeroHighlight className="min-h-screen">
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-40">
          <div className="w-full md:w-1/2 text-white flex flex-col items-start justify-start gap-y-6 z-10">
            <div className="text-left text-4xl md:text-6xl font-extrabold z-20">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-left"
              >
                <span className="block">Experience a</span>
                <Highlight className="text-black dark:text-white my-2">
                  personalized
                </Highlight>{" "}
                <span>
                  way to learn vocabulary with <br />
                  <FlipWords words={words} />
                </span>
              </motion.h1>
            </div>
            <div className="text-sm md:text-lg font-semibold text-left z-20">
              Vocablet offers an effective way to learn C2 level English
              vocabulary to ace SATs, GREs, and other standardized tests.
            </div>
            <Link href="/auth/login">
              <Button className="text-xl p-6 z-20" variant="default">
                Get Started
              </Button>
            </Link>
          </div>
          <div className="hidden md:flex w-full md:w-1/2 items-center justify-center p-6">
            <Image
              className="z-20"
              src="/hero.png"
              alt="Hero Image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </HeroHighlight>
      <ContainerScroll
        titleComponent={
          <div className="mb-20">
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of AI into your
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Vocabulary Learning
              </span>
            </h1>
          </div>
        }
      >
        <Image
          src={`/app-usage.png`}
          alt="hero"
          height={1524}
          width={2000}
          className="mx-auto object-center object-fill rounded-2xl h-full "
          draggable={false}
        />
      </ContainerScroll>
      <div className="w-full bg-secondary flex flex-col items-center justify-center overflow-hidden rounded-md">
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
          Features
        </h1>
        <div className="w-[40rem] h-40 relative">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-secondary [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
      </div>
      <div className="text-center text-neutral-600 dark:text-neutral-400 py-4">
        Start your journey to mastering vocabulary today with Vocablet.
      </div>
    </>
  );
}
