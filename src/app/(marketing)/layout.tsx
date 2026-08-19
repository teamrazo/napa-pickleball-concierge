import type { ReactNode } from "react";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { HelloBar } from "@/components/site/hello-bar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Hello bar + header stacked seamlessly as one sticky unit */}
      <div className="sticky top-0 z-50 flex flex-col shadow-sm">
        <HelloBar />
        <Header />
      </div>
      {children}
      <Footer />
    </>
  );
}
