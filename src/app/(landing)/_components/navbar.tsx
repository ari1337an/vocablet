"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/app/_components/ui/button";
import HamburgerIcon from "@/app/_icons/hamburger";
import { Link as ReactScrollLink } from "react-scroll";

export default function Navbar({
  userEmail,
}: {
  userEmail: string | null | undefined;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname()
  const isLandingPage = pathname === "/";

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <div className="fixed top-0 left-0 right-0 z-50 flex flex-row items-center justify-between px-6 md:px-40 py-5 bg-black shadow-md">
        <div className="font-bold text-xl hover:text-primary">
          <Link href="/">Vocablet</Link>
        </div>
        <div className="hidden md:flex flex-row items-center justify-center gap-x-4">
          <div className="hover:cursor-pointer">
            {isLandingPage ? (
              <ReactScrollLink
                to="features"
                smooth={true}
                duration={1500}
              >
                Features
              </ReactScrollLink>
            ) : (
              <Link href="/#features">Features</Link>
            )}
          </div>
          <Link href="/pricing">Pricing</Link>
          <Link href="/blog">Blog</Link>
        </div>
        <div className="hidden md:flex">
          {userEmail ? (
            <Link href="/app">
              <Button>Go to App</Button>
            </Link>
          ) : (
            <Link href="/auth/login">
              <Button>Sign in</Button>
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <HamburgerIcon className="w-5 h-5 fill-white" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-secondary shadow-md md:hidden flex flex-col items-center gap-y-4 py-5">
          <div
            className="hover:cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            {isLandingPage ? (
              <ReactScrollLink
                to="features"
                smooth={true}
                duration={1500}
              >
                Features
              </ReactScrollLink>
            ) : (
              <Link href="/#features" onClick={() => setMenuOpen(false)}>
                Features
              </Link>
            )}
          </div>
          <Link href="/pricing" onClick={() => setMenuOpen(false)}>
            Pricing
          </Link>
          <Link href="/blog" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
          {userEmail ? (
            <Link href="/app" onClick={() => setMenuOpen(false)}>
              <Button>Go to App</Button>
            </Link>
          ) : (
            <Link href="/auth/login" onClick={() => setMenuOpen(false)}>
              <Button>Sign in</Button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
