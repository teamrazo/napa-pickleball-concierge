"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "npc-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const savedValue = window.localStorage.getItem(STORAGE_KEY);
    setVisible(savedValue === null);
  }, []);

  const saveChoice = (value: "accepted" | "declined") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 px-4">
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-[1.5rem] border border-primary/10 bg-white/95 p-5 shadow-2xl backdrop-blur md:flex-row md:items-center md:justify-between">
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
          This site is ready for analytics and hosted forms. Accept cookies when you want future tracking
          scripts enabled through Google Tag Manager.
        </p>
        <div className="flex gap-3">
          <Button variant="outline" size="sm" onClick={() => saveChoice("declined")}>
            Decline
          </Button>
          <Button size="sm" onClick={() => saveChoice("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
