const MOTES = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 61 + 13) % 100,
  top: (i * 37 + 21) % 100,
  size: 2 + (i % 3) * 1.4,
  delay: (i % 8) * 1.5,
  duration: 9 + (i % 6) * 2.4,
}));

export function Ambient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px 750px at 85% -10%, rgba(44,70,54,0.12), transparent 60%)," +
            "radial-gradient(950px 700px at -12% 28%, rgba(176,141,74,0.14), transparent 55%)," +
            "radial-gradient(900px 900px at 50% 115%, rgba(44,70,54,0.10), transparent 60%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-40"
        style={{ background: "linear-gradient(to bottom, rgba(251,247,236,0.9), transparent)" }}
      />
      {MOTES.map((m, i) => (
        <span
          key={i}
          className="mote"
          style={{
            left: `${m.left}%`,
            top: `${m.top}%`,
            width: m.size,
            height: m.size,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
