import { NavLink } from "react-router-dom";

function Navbar() {
    const navClass = ({ isActive }) =>
        `
      px-5
      py-2
      rounded-2xl
      transition-all
      duration-300
      ${isActive
            ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]"
            : "text-zinc-400 hover:text-white hover:bg-white/5"
        }
    `;

    return (
        <div className="sticky top-0 z-50 mb-10">

            {/* Animated Border Wrapper */}
            <div className="relative inline-block w-full rounded-3xl p-[1.5px] overflow-hidden">

                {/* Moving Glow */}
                <div className="absolute inset-0 rounded-3xl animate-[spinGlow_6s_linear_infinite]">
                    <div
                        className="
              absolute top-0 left-0
              h-[35%] w-[35%]
              bg-white
              blur-2xl
              opacity-80
            "
                    />
                </div>

                {/* Navbar Content */}
                <div
                    className="
            relative z-10
            flex
            items-center
            justify-between
            bg-black/5
            border border-white/10
            backdrop-blur-2xl
            rounded-3xl
            px-6
            py-4
          "
                >
                    {/* Logo */}
                    <div>
                        <h1 className="text-zinc-200 text-xl tracking-[0.3em] uppercase flex items-center gap-2">
                            Lunaris
                            <img
                                src="src/assets/whiteWolf.png"
                                alt="Wolf Mascot"
                                className="w-14 h-14 object-contain"
                            />
                        </h1>
                    </div>


                    {/* Tabs */}
                    <div className="flex items-center gap-4">
                        <NavLink to="/" className={navClass}>
                            Home
                        </NavLink>

                        <NavLink to="/tasks" className={navClass}>
                            Tasks
                        </NavLink>

                        <NavLink to="/analytics" className={navClass}>
                            Analytics
                        </NavLink>

                        <NavLink to="/moon" className={navClass}>
                            Moon
                        </NavLink>

                        <NavLink to="/history" className={navClass}>
                            History
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;