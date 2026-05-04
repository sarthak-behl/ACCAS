import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { CTA } from "@/components/site/CTA";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ACCAS — Your tech partner. You build the business." },
      { name: "description", content: "ACCAS is a software agency that takes complete ownership of your startup's technology — development, infrastructure, and scaling — so founders can focus on growth." },
      { property: "og:title", content: "ACCAS — Focus on your startup. We handle your tech." },
      { property: "og:description", content: "End-to-end software services for startups. Full-stack development, MVPs, DevOps, and scaling — built by experienced engineers." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <WhyUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <Toaster richColors position="top-right" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ACCAS",
            description: "Software services agency for startups — end-to-end tech ownership.",
            telephone: "+918595626430",
          }),
        }}
      />
    </div>
  );
}
