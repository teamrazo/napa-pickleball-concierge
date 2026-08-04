import type { ReactNode } from "react";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { HelloBar } from "@/components/site/hello-bar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="sticky top-0 z-50">
        <HelloBar />
        <Header />
      </div>
      {children}
      <Footer />
    </>
  );
}
