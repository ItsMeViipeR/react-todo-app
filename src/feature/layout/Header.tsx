"use client";

import { ThemeToggle } from '@/theme/ThemeToggle'
import React, {useState} from 'react'
import {Button} from "@/components/ui/button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export const Header = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const toggleMobileNav = () => {
        setShowMobileNav(!showMobileNav);
    }

    return (
      <header className="fixed border-b border-b-accent mb-2 w-full">
          <div className="container flex items-center py-2 m-auto gap-1">
              <h2 className="text-2xl font-bold mr-auto">ViipeR</h2>

              <nav className={"max-[500px]:hidden"}>
                  <ul className={"flex flex-row"}>
                      <li className="ml-8">
                          <a href="https://viiper.fr/discord" target={"_blank"} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
                              Discord
                          </a>
                      </li>
                      <li className="ml-8">
                          <a href="https://github.com/ItsMeViipeR" target={"_blank"} className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded transition-all">
                              GitHub
                          </a>
                      </li>
                  </ul>
              </nav>
              <ThemeToggle />
              <Button variant={"ghost"} size="iconSm" className={"md:hidden lg:hidden"} onClick={toggleMobileNav}>
                  <FontAwesomeIcon icon={faBars} />
              </Button>
          </div>
          {showMobileNav && (
            <nav datatype={"nav-mobile"}>
                <ul className={"flex flex-col items-center"}>
                    <li className={"mb-4 mt-2"}>
                        <a href="https://viiper.fr/discord" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-all">
                            Discord
                        </a>
                    </li>
                    <li className={"mb-4 mt-2"}>
                        <a href="https://github.com/ItsMeViipeR" className="bg-gray-800 hover:bg-black text-white font-bold py-2 px-4 rounded transition-all">
                            GitHub
                        </a>
                    </li>
                </ul>
            </nav>
          )}
      </header>
    )
}
