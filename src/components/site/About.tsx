import { Target, Shield, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">About ACCAS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Your engineering team, on demand</h2>
          <p className="text-muted-foreground text-lg">
            We're a software services agency built around one belief: founders should
            spend their time building businesses, not babysitting tech. So we own it for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { Icon: Target, title: "Ownership Mindset", desc: "We treat your product like it's our own — proactive, accountable, and outcome-driven." },
            { Icon: Shield, title: "Reliability First", desc: "Battle-tested architectures and processes that scale with your business." },
            { Icon: Rocket, title: "Built to Scale", desc: "From MVP to millions of users — our systems grow with you, without the rewrites." },
          ].map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground mb-5 group-hover:scale-110 transition-transform">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
