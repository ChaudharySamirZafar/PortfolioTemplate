"use client";

import Image from "next/image";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ClientSideRoute from "../../lib/components/ClientSideRoute";

export default function Navbar() {
  const [narBarCollapsed, setNavBarCollapsed] = useState(false);

  return (
    <>
      <nav className="mx-auto py-8">
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex items-center justify-between">
            <ClientSideRoute route="/">
              <Image
                className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full"
                src={"/images/navbarpic.jpg"}
                width={100}
                height={100}
                alt="Samir Zafar"
                priority={true}
              />
            </ClientSideRoute>
            {!narBarCollapsed && (
              <Bars3Icon
                className="block h-8 w-8 hover:cursor-pointer hover:text-[#006cac] md:hidden"
                onClick={() => setNavBarCollapsed(true)}
              />
            )}
            {narBarCollapsed && (
              <XMarkIcon
                className="block h-8 w-8 hover:cursor-pointer hover:text-[#006cac] md:hidden"
                onClick={() => setNavBarCollapsed(false)}
              />
            )}
          </div>
          <div
            className={`w-full ${
              narBarCollapsed ? "flex" : "hidden"
            } md:flex flex-col md:flex-row gap-4 md:place-content-end text-center mt-4 md:mt-0`}
          >
            <hr className="border-skin-line" />
            <ClientSideRoute route="/">
              <h1 className="text-xl text-black hover:text-[#006cac] hover:cursor-pointer">
                About
              </h1>
            </ClientSideRoute>
            <ClientSideRoute route="/cv">
              <h1 className="text-xl text-black hover:text-[#006cac] hover:cursor-pointer">
                CV
              </h1>
            </ClientSideRoute>
            <ClientSideRoute route="/portfolio">
              <h1 className="text-xl text-black hover:text-[#006cac] hover:cursor-pointer">
                Portfolio
              </h1>
            </ClientSideRoute>
          </div>
        </div>
      </nav>
      <hr className="border-skin-line mb-4" />
    </>
  );
}
