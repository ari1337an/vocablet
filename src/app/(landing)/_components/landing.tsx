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
import { MacbookScroll } from "../_aceternity/macbook-scroll";

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
              Vocablet offers an effective way to learn advanced English
              vocabulary, helping you excel in exams, enhance your communication
              skills, and achieve your language goals.
            </div>
            <Link href="/auth/login">
              <Button className="text-xl p-6 z-20" variant="default">
                Get Started
              </Button>
            </Link>
            <a
              href="https://www.producthunt.com/posts/vocablet?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-vocablet"
              target="_blank"
            >
              <picture>
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=471134&theme=light"
                  alt="Vocablet - Personalized&#0032;vocabulary&#0032;learning&#0032;app&#0032;with&#0032;roleplay&#0033; | Product Hunt"
                  // style="width: 250px; height: 54px;"
                  width="250"
                  height="54"
                />
              </picture>
            </a>
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
      <div className="p-10" id="features"></div>
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

      {/* Feature 1 */}
      <div className="flex flex-row items-center justify-between gap-y-10 px-6 md:px-40">
        <div className="text-left max-w-lg">
          <div className="text-5xl font-extrabold">1. Chat with AI</div>
          <div className="mt-10">
            Engage in dynamic conversations with our advanced AI that
            understands and responds to your inputs. Whether you&apos;re
            discussing everyday topics or diving into complex subjects,
            Vocablet&apos;s AI provides meaningful interactions that enhance
            your vocabulary seamlessly.
          </div>
        </div>
        <MacbookScroll src={`/app-usage.png`} showGradient={true} />
      </div>

      {/* Feature 2 */}
      <div className="flex flex-row items-center justify-between gap-y-10 px-6 md:px-40">
        <MacbookScroll src={`/app-usage.png`} showGradient={true} />
        <div className="text-left max-w-lg">
          <div className="text-5xl font-extrabold">2. Roleplay and Learn</div>
          <div className="mt-10">
            Transform your learning experience by roleplaying with customizable
            AI characters. Dive into scenarios where you can be anyone and
            converse with famous personalities, fictional characters, or even
            historical figures. This immersive approach helps you learn new
            words in context, making them easier to remember and use.
          </div>
        </div>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-row items-center justify-between gap-y-10 px-6 md:px-40">
        <div className="text-left max-w-lg">
          <div className="text-5xl font-extrabold">3. Get Meaning from AI</div>
          <div className="mt-10">
            Encountering a new or challenging word? Simply ask our AI for an
            explanation. Vocablet’s AI provides clear, concise meanings and
            usage examples, helping you understand and incorporate new
            vocabulary effortlessly into your daily conversations.
          </div>
        </div>
        <MacbookScroll src={`/app-usage.png`} showGradient={true} />
      </div>

      {/* Feature 4 */}
      <div className="flex flex-row items-center justify-between gap-y-10 px-6 md:px-40">
        <MacbookScroll src={`/app-usage.png`} showGradient={true} />
        <div className="text-left max-w-lg">
          <div className="text-5xl font-extrabold">
            4. Flashcards to Internalize
          </div>
          <div className="mt-10">
            Reinforce your learning with our flashcard system. Vocablet
            organizes newly learned words into personalized flashcard decks,
            allowing you to review and internalize them through spaced
            repetition. This proven method ensures that your vocabulary grows
            steadily and sticks with you for the long term.
          </div>
        </div>
      </div>
    </>
  );
}
