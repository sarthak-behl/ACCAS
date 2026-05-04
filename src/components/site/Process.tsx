const steps = [
  { n: "01", title: "Understand your business", desc: "We dig into your goals, users, and constraints — then craft a tech roadmap aligned to growth." },
  { n: "02", title: "Build & launch", desc: "Our engineers design, develop, and ship — with weekly demos and zero surprises." },
  { n: "03", title: "Maintain & scale", desc: "We monitor, iterate, and scale your stack as you grow — so tech is never the bottleneck." },
];

export function Process() {
  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How it works</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">A simple, proven process</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="p-8 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] h-full">
                <div className="text-6xl font-display font-bold bg-[image:var(--gradient-primary)] bg-clip-text text-transparent mb-4">
                  {s.n}
                </div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-border to-transparent" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
