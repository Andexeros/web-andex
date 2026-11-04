"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();

    // Close mobile menu after clicking a link
    setMobileMenuOpen(false);

    if (pathname === "/") {
      // If already on home page, just scroll to the element
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      // If on another page, navigate to home page with the hash
      router.push(`/${id}`);
    }
  };

  // Handle scrolling when coming from another page with a hash
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const id = window.location.hash;
      const element = document.querySelector(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100); // Small delay to ensure the page is fully loaded
      }
    }
  }, [pathname]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[98%] max-w-4xl h-16 bg-white/80 dark:bg-black/80 backdrop-blur-sm z-50 border border-gray-200 dark:border-neutral-800 rounded-3xl">
      <div className="h-full flex items-center justify-between px-6">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/isologo-andextech.png"
            alt="Andex Tech"
            width={80}
            height={40}
            className="dark:brightness-100"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/#hero"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
          >
            Inicio
          </Link>
          <Link
            href="/andexmarket"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium"
          >
            AndexMarket
          </Link>
          <Link
            href="/totems"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium"
          >
            Tótems
          </Link>
          <Link
            href="/#sobrenosotros"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium"
            onClick={(e) => handleSmoothScroll(e, "#sobrenosotros")}
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/#contacto"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium"
            onClick={(e) => handleSmoothScroll(e, "#contacto")}
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-neutral-600 dark:bg-neutral-300 transition-transform duration-300 ${
              mobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-neutral-600 dark:bg-neutral-300 transition-opacity duration-300 ${
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-neutral-600 dark:bg-neutral-300 transition-transform duration-300 ${
              mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full mt-2 bg-white/95 dark:bg-black/95 backdrop-blur-sm border border-gray-200 dark:border-neutral-800 rounded-xl overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-4 px-6 flex flex-col space-y-4">
          <Link
            href="/#hero"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium py-2"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
          >
            Inicio
          </Link>
          <Link
            href="/andexmarket"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            AndexMarket
          </Link>
          <Link
            href="/totems"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Totems
          </Link>
          <Link
            href="/#sobrenosotros"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium py-2"
            onClick={(e) => handleSmoothScroll(e, "#sobrenosotros")}
          >
            Sobre Nosotros
          </Link>
          <Link
            href="/#contacto"
            className="text-neutral-600 dark:text-neutral-300 text-sm font-medium py-2"
            onClick={(e) => handleSmoothScroll(e, "#contacto")}
          >
            Contacto
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

