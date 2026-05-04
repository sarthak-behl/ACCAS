import { useState } from "react";
import { z } from "zod";
import { MessageCircle, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { whatsappUrl, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  company: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      message: String(fd.get("message") || ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    const msg = `Hi ACCAS, I'm ${data.name}${data.company ? ` from ${data.company}` : ""} (${data.email}). ${data.message}`;
    window.open(whatsappUrl(msg), "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Opening WhatsApp — let's talk!");
      (e.target as HTMLFormElement).reset();
    }, 400);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's build something great</h2>
          <p className="text-muted-foreground text-lg">
            WhatsApp is the fastest way to reach us. Or send a message below.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 rounded-2xl bg-whatsapp text-whatsapp-foreground shadow-[var(--shadow-elegant)] hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="h-8 w-8 mb-3" />
              <div className="font-semibold text-lg">Chat on WhatsApp</div>
              <div className="opacity-90 text-sm mt-1">Fastest response — usually within minutes</div>
            </a>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <Phone className="h-6 w-6 text-primary mb-3" />
              <div className="font-semibold">Call us</div>
              <a href={`tel:+${WHATSAPP_NUMBER}`} className="text-muted-foreground hover:text-primary transition-colors">
                +91 85956 26430
              </a>
            </div>
            <div className="p-6 rounded-2xl bg-card border border-border">
              <Mail className="h-6 w-6 text-primary mb-3" />
              <div className="font-semibold">Prefer email?</div>
              <div className="text-muted-foreground text-sm">Use the form — we'll get back the same day.</div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="md:col-span-3 p-8 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" required maxLength={100} className="mt-2" placeholder="Jane Doe" />
              </div>
              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required maxLength={255} className="mt-2" placeholder="jane@startup.com" />
              </div>
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input id="company" name="company" maxLength={100} className="mt-2" placeholder="Your startup" />
            </div>
            <div>
              <Label htmlFor="message">How can we help? *</Label>
              <Textarea id="message" name="message" required maxLength={1000} rows={5} className="mt-2" placeholder="Tell us about your project, goals, and timeline." />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
              <Send className="h-4 w-4" />
              {submitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
