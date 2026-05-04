import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 [background:radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklab,var(--primary)_22%,transparent),transparent)]" />
      <div className="absolute top-40 left-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float" />
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-primary-glow/20 blur-3xl animate-float [animation-delay:-3s]" />

      <div className="max-w-5xl mx-auto px-6 text-center animate-fade-up">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/60 backdrop-blur text-xs font-medium text-muted-foreground mb-8">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Trusted tech partner for ambitious startups
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
          Focus on your startup.{" "}
          <span className="bg-[image:var(--gradient-primary)] bg-clip-text text-transparent">
            We handle your tech.
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
          ACCAS takes complete ownership of your technology — from architecture and
          development to deployment, scaling, and maintenance. You focus on growth.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="whatsapp" size="xl">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </Button>
          <Button asChild variant="hero" size="xl">
            <a href="#contact">
              Get Started <ArrowRight className="h-5 w-5" />
            </a>
          </Button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { k: "50+", v: "Projects Shipped" },
            { k: "10+", v: "Yrs Experience" },
            { k: "24/7", v: "Ownership" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-2xl md:text-3xl font-display font-bold">{s.k}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
