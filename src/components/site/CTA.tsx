import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/lib/whatsapp";

export function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto rounded-3xl p-12 md:p-16 text-center bg-[image:var(--gradient-primary)] text-primary-foreground shadow-[var(--shadow-elegant)] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_30%_20%,white,transparent_50%)]" />
        <div className="relative">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let us handle your tech so you can focus on growth.
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Tell us about your project. We'll respond within hours with a clear path forward.
          </p>
          <Button asChild variant="whatsapp" size="xl">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-5 w-5" />
              Start a WhatsApp Chat
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
