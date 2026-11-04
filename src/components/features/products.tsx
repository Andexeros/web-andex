"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import { FeatureCarousel } from "../ui/feature-carousel";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const content = [
  {
    title: "Sistema de ventas",
    description:
      "Gestiona tu negocio de manera eficiente con nuestro sistema de ventas inteligente. Incluye control de stock, reportes en tiempo real y análisis predictivo.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/product1.png"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Tótem Turnero",
    description:
      "Optimiza la gestión de turnos y reduce los tiempos de espera. Ideal para bancos, clínicas y oficinas públicas.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/product2.png"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Tótem Gastronómico",
    description:
      "Permite a los clientes gestionar su propia compra y pago. Ideal para restaurantes y bares.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/product3.png"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Verdulería Autogestionable",
    description:
      "Permite a los clientes gestionar su propia compra y pago. Ideal para verdulerías y tiendas de alimentación.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/product4.png"
          width={400}
          height={400}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];
export function Products() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-0">
      <div className="rounded-[34px] bg-neutral-700 p-2">
        <div className="relative z-10 grid w-full gap-8 rounded-[28px] bg-neutral-950 p-2">
          <FeatureCarousel
            title="Interactive Feature Demo"
            description="Showcase your features with smooth animations and transitions"
            // Example classes for responsive layout
            step1img1Class={cn(
              "pointer-events-none w-[80%] md:w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
              "max-md:scale-[160%] max-md:rounded-[24px] rounded-[24px] left-[0%] top-[8%] md:left-[35px] md:top-[8%]",
              "md:group-hover:translate-y-2"
            )}
            step1img2Class={cn(
              "pointer-events-none hidden md:block w-[45%] border border-stone-100/10 dark:border-stone-700/50 transition-all duration-500 overflow-hidden",
              "max-md:scale-[160%] rounded-2xl max-md:rounded-[24px] left-[69%] top-[53%] md:top-[7%] md:left-[calc(50%+35px+1rem)]",
              "md:group-hover:-translate-y-6"
            )}
            step2img1Class={cn(
              "pointer-events-none w-[80%] md:w-[50%] rounded-t-[24px] overflow-hidden border border-stone-100/10 transition-all duration-500 dark:border-stone-700",
              "max-md:scale-[160%] left-[0%] top-[4%] md:left-[35px] md:top-[7%]",
              "md:group-hover:translate-y-2"
            )}
            step2img2Class={cn(
              "pointer-events-none hidden md:block w-[40%] rounded-t-[24px] border border-stone-100/10 dark:border-stone-700 transition-all duration-500 rounded-2xl overflow-hidden",
              "max-md:scale-[140%] left-[70%] top-[53%] md:top-[0%] md:left-[calc(50%+27px+1rem)]",
              "md:group-hover:-translate-y-6"
            )}
            step3imgClass={cn(
              "pointer-events-none w-[80%] md:w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
              "max-md:scale-[160%] max-md:rounded-[24px] rounded-[24px] left-[0%] top-[8%] md:left-[35px] md:top-[8%]",
              "md:group-hover:translate-y-2"
            )}
            step3img2Class={cn(
              "pointer-events-none hidden md:block w-[40%] border border-stone-100/10 dark:border-stone-700/50 transition-all duration-500 overflow-hidden",
              "max-md:scale-[160%] rounded-2xl max-md:rounded-[24px] left-[69%] top-[53%] md:top-[7%] md:left-[calc(50%+35px+1rem)]",
              "md:group-hover:-translate-y-6"
            )}
            step4imgClass={cn(
              "pointer-events-none w-[80%] md:w-[50%] border border-stone-100/10 transition-all duration-500 dark:border-stone-700/50",
              "max-md:scale-[160%] max-md:rounded-[24px] rounded-[24px] left-[0%] top-[8%] md:left-[35px] md:top-[8%]",
              "md:group-hover:translate-y-2"
            )}
            step4img2Class={cn(
              "pointer-events-none hidden md:block w-[60%] border border-stone-100/10 dark:border-stone-700/50 transition-all duration-500 overflow-hidden",
              "max-md:scale-[160%] rounded-2xl max-md:rounded-[24px] left-[69%] top-[53%] md:top-[7%] md:left-[calc(50%+35px+1rem)]",
              "md:group-hover:-translate-y-6"
            )}
            // Example images
            image={{
              step1light1: "/product1.png",
              step1light2: "/turnero2.png",
              step2light1: "/turnero1.png",
              step2light2: "/product2.png",
              step3light: "/gastronomico.jpg",
              step3light2: "/gastronomico2.jpg",
              step4light: "/verduleria1.jpg",
              step4light2: "/verduleria2.jpg",
              alt: "Feature demonstration",
            }}
            // Card styling
            bgClass="bg-gradient-to-tr from-neutral-900/90 to-neutral-800/90"
          />
        </div>
      </div>
      <div className="flex gap-2 mt-4 md:flex-row flex-col">
        <Link href="/andexmarket">
          <button className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-black rounded-md group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-yellow-600 rounded-full group-hover:w-56 group-hover:h-56" />
            <span className="absolute bottom-0 left-0 h-full -ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-auto h-full opacity-100 object-stretch"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".04"
                  fillRule="nonzero"
                  fill="#FFF"
                  d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                />
              </svg>
            </span>
            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="object-cover w-full h-full"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".04"
                  fillRule="nonzero"
                  fill="#FFF"
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                />
              </svg>
            </span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200" />
            <span className="relative text-base font-semibold flex items-center gap-2">
              Sistema de ventas <ArrowUpRight className="w-6 h-6" />
            </span>
          </button>
        </Link>
        <Link href="/totems">
          <button className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden tracking-tighter text-white bg-black rounded-md group">
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-yellow-600 rounded-full group-hover:w-56 group-hover:h-56" />
            <span className="absolute bottom-0 left-0 h-full -ml-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-auto h-full opacity-100 object-stretch"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".04"
                  fillRule="nonzero"
                  fill="#FFF"
                  d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                />
              </svg>
            </span>
            <span className="absolute top-0 right-0 w-12 h-full -mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="object-cover w-full h-full"
                viewBox="0 0 487 487"
              >
                <path
                  fillOpacity=".04"
                  fillRule="nonzero"
                  fill="#FFF"
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                />
              </svg>
            </span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-200" />
            <span className="relative text-base font-semibold flex items-center gap-2">
              Tótems
              <ArrowUpRight className="w-6 h-6" />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}

