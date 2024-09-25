"use client";
import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import SidebarLinkGroup from "./SidebarLinkGroup";
import SidebarCollapseButton from "@/components/icons/SidebarCollapseButton";
import DashboardIcon from "@/components/icons/DashboardIcon";
import Link from "next/link";
type TSidebarProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (isOpen: boolean) => void;
};
function Sidebar({ sidebarOpen, setSidebarOpen }: TSidebarProps) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<HTMLButtonElement>(null);
  const sidebar = useRef<HTMLDivElement>(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [isActive, setIsActive] = useState<boolean>();
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | any }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      ) {
        return;
      }
      setSidebarOpen(false);
    };
    window.addEventListener("click", clickHandler); // Use window object for event listeners
    return () => window.removeEventListener("click", clickHandler);
  }, [sidebarOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    window.addEventListener("keydown", keyHandler);
    return () => window.removeEventListener("keydown", keyHandler);
  }, [sidebarOpen]);

  useEffect(() => {
    if (!document) return; // Skip if document is not available (server-side)
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const data = [
    {
      title: "Dashboard",
      icon: <DashboardIcon />,
      content: [
        { title: "Main", link: "/" },
        { title: "Analytics", link: "/" },
        { title: "Fintech", link: "/" },
      ],
    },
  ];

  return (
    <div>
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <button
            ref={trigger}
            className="lg:hidden text-slate-500 hover:text-slate-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-slate-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                Pages
              </span>
            </h3>
            {data.map((item, index) => (
              <ul key={index} className="mt-3">
                <SidebarLinkGroup
                  activecondition={
                    pathname === "/" || pathname.includes("dashboard")
                  }
                >
                  {(handleClick: () => void, open: boolean) => {
                    return (
                      <React.Fragment>
                        <a
                          href="#0"
                          className={`block text-slate-200 hover:text-white truncate transition duration-150 ${
                            (pathname === "/" ||
                              pathname.includes("dashboard")) &&
                            "hover:text-slate-200"
                          }`}
                          onClick={(e) => {
                            e.preventDefault();
                            sidebarExpanded
                              ? handleClick()
                              : setSidebarExpanded(true);
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div>{item.icon}</div>
                              <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                {item.title}
                              </span>
                            </div>
                          </div>
                        </a>
                        <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                          <ul className={`pl-9 mt-1 ${!open && "hidden"}`}>
                            <li className="mb-1 last:mb-0">
                              <Link
                                href={item.content[0].link}
                                onClick={() => setIsActive((prev) => !prev)}
                                className={`block text-slate-400 hover:text-slate-200 transition duration-150 truncate ${
                                  isActive && item.content[0].link
                                    ? "!text-indigo-500"
                                    : ""
                                }`}
                              >
                                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                  {item.content[0].title}
                                </span>
                              </Link>
                            </li>
                            <li className="mb-1 last:mb-0">
                              <Link
                                href={item.content[1].link}
                                onClick={() => setIsActive((prev) => !prev)}
                                className={`block text-slate-400 hover:text-slate-200 transition duration-150 truncate ${
                                  isActive && item.content[1].link
                                    ? "!text-indigo-500"
                                    : ""
                                }`}
                              >
                                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                  {item.content[1].title}
                                </span>
                              </Link>
                            </li>
                            <li className="mb-1 last:mb-0">
                              <Link
                                href={item.content[2].link}
                                onClick={() => setIsActive((prev) => !prev)}
                                className={`block text-slate-400 hover:text-slate-200 transition duration-150 truncate ${
                                  isActive && item.content[2].link
                                    ? "!text-indigo-500"
                                    : ""
                                }`}
                              >
                                <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                                  {item.content[2].title}
                                </span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </React.Fragment>
                    );
                  }}
                </SidebarLinkGroup>
              </ul>
            ))}
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto px-3 py-2">
          <button onClick={() => setSidebarExpanded(!sidebarExpanded)}>
            <SidebarCollapseButton />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
