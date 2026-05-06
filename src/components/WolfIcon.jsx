import wolfIcon from "../assets/whiteWolf.png";

function WolfLogo() {
  return (
    <img
      src={wolfIcon}
      alt="Wolf Logo"
      className="
        w-12 h-12 object-contain cursor-pointer
        transition-all duration-300 ease-in-out
        hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]
        hover:scale-110
      "
    />
  );
}

export default WolfLogo;