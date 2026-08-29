"use client";

import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

function resetScroll() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export default function RouteScrollReset() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const handleHistoryNavigation = () => {
      resetScroll();
      requestAnimationFrame(resetScroll);
    };

    window.addEventListener("popstate", handleHistoryNavigation);
    window.addEventListener("pageshow", handleHistoryNavigation);

    return () => {
      window.removeEventListener("popstate", handleHistoryNavigation);
      window.removeEventListener("pageshow", handleHistoryNavigation);
    };
  }, []);

  useEffect(() => {
    resetScroll();

    const firstFrame = requestAnimationFrame(resetScroll);
    const secondFrame = requestAnimationFrame(() => {
      requestAnimationFrame(resetScroll);
    });

    return () => {
      cancelAnimationFrame(firstFrame);
      cancelAnimationFrame(secondFrame);
    };
  }, [pathname]);

  return null;
}