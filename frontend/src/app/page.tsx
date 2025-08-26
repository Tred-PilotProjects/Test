import dynamic from "next/dynamic";

const AuthStatus = dynamic(() => import("@/components/AuthStatus"), { ssr: false });
const SwimmingFish = dynamic(() => import("@/components/SwimmingFish"), { ssr: false });

export default function Home() {
  return (
    <div className="tank">
      <div className="light-rays" />

      {/* Bubbles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: `${(i * 7 + 10) % 100}vw`,
            animationDelay: `${(i % 7) * 1.2}s`,
            animationDuration: `${8 + (i % 5)}s`,
          }}
        />
      ))}

      {/* Seaweed */}
      {Array.from({ length: 10 }).map((_, i) => (
        <div
          key={`weed-${i}`}
          className="seaweed"
          style={{ left: `${i * 10}%`, animationDelay: `${(i % 5) * 0.3}s` }}
        />
      ))}

      <div className="sea-floor" />

      {/* Auth UI (profile/login) and user fish */}
      <AuthStatus />
      <SwimmingFish />

      {/* Login/Register are rendered by AuthStatus when not authenticated */}
    </div>
  );
}
