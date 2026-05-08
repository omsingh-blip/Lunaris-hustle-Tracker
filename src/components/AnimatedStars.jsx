export default function AnimatedStars() {

  const stars = Array.from({ length: 70 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {stars.map((_, index) => {

        const size = Math.random() * 3 + 1;

        const top = Math.random() * 100;

        const left = Math.random() * 100;

        const duration = Math.random() * 5 + 3;

        const delay = Math.random() * 5;

        return (
          <div
            key={index}
            className="absolute rounded-full bg-white animate-starTwinkle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              top: `${top}%`,
              left: `${left}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity: Math.random() * 0.8,
              boxShadow: "0 0 10px rgba(255,255,255,0.8)",
            }}
          />
        );
      })}
    </div>
  );
}