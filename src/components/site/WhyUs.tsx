import { Check } from "lucide-react";

const reasons = [
  { title: "Experienced engineers", desc: "Senior talent who've shipped at scale — not juniors learning on your dime." },
  { title: "End-to-end ownership", desc: "From idea to production to scale — we own every layer of your tech." },
  { title: "Startup-focused", desc: "We speak founder. Lean, fast, and ROI-aware in every decision." },
  { title: "Fast execution", desc: "Weekly shipping cadence. You see progress every single week." },
  { title: "Cost-efficient", desc: "A fraction of the cost of an in-house team — without losing quality." },
  { title: "Transparent process", desc: "Clear timelines, honest updates, predictable outcomes." },
];

export function WhyUs() {
  return (
    <section id="why" className="py-24 px-6 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Why ACCAS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Built for founders who want to win</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {reasons.map((r) => (
            <div key={r.title} className="flex gap-4 p-6 rounded-xl bg-card border border-border">
              <div className="flex-shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[image:var(--gradient-primary)] text-primary-foreground">
                <Check className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
