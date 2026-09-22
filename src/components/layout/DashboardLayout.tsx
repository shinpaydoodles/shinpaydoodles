import gsap from "gsap";
import { useLayoutEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { AppSidebar } from "./AppSidebar";
import { Topbar } from "./Topbar";

export function DashboardLayout() {
  const shellRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useLayoutEffect(() => {
    if (reduced || !shellRef.current) return;
    const context = gsap.context(() => {
      gsap.from(".app-sidebar", { x: -18, opacity: 0, duration: .5, ease: "power2.out" });
      gsap.from(".app-topbar", { y: -12, opacity: 0, duration: .45, ease: "power2.out" });
    }, shellRef);
    return () => context.revert();
  }, [reduced]);

  return <div ref={shellRef} className="min-h-screen bg-slate-50"><a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-3 focus:shadow">Skip to content</a><AppSidebar /><div className="lg:pl-[232px]"><Topbar /><main id="main-content" className="mx-auto max-w-[1440px] px-4 py-5 sm:px-6 sm:py-8 lg:px-8"><Outlet /></main></div></div>;
}
