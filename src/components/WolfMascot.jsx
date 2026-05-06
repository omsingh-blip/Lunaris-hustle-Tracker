import wolf from "../assets/wolf.png";

export default function WolfMascot() {
  return (
    <div className="relative flex items-center justify-center">

      {/* Glow */}
      <div className="absolute w-72 h-72 bg-indigo-500/20 blur-3xl rounded-full" />

      {/* Wolf */}
      <img
        src={wolf}
        alt="Wolf Mascot"
        className="relative w-64 drop-shadow-2xl animate-float"
      />

    </div>
  );
} 