import { Code, Layers, Server, Cloud, Wrench } from "lucide-react";

const services = [
  { Icon: Layers, title: "Full-Stack Development", desc: "Modern web and mobile apps built with React, Next.js, Node, and the right tools for the job." },
  { Icon: Code, title: "MVP Development", desc: "Ship a polished, validated MVP in weeks — not quarters — without compromising quality." },
  { Icon: Server, title: "Backend & Infrastructure", desc: "Robust APIs, databases, and integrations engineered to handle real-world load." },
  { Icon: Cloud, title: "DevOps & Cloud", desc: "AWS, GCP, and Cloudflare setups with CI/CD, observability, and zero-downtime deployments." },
  { Icon: Wrench, title: "Maintenance & Scaling", desc: "Ongoing support, performance tuning, and feature delivery — predictable and on time." },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Services</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Everything tech, end-to-end</h2>
          <p className="text-muted-foreground text-lg">
            One partner. Every layer of your technology. Zero context-switching for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
