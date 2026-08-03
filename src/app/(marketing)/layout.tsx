import type { ReactNode } from "react";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { HelloBar } from "@/components/site/hello-bar";

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <HelloBar />
<Header />
      {children}
      <Footer />
    </>
  );
}
