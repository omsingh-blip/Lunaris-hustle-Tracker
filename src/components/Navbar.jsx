import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
    const [open, setOpen] = useState(false);

    const navClass = ({ isActive }) =>
        `
      w-full md:w-auto
      text-center
      px-5
      py-3
      rounded-2xl
      transition-all
      duration-300
      ${
        isActive
          ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          : "text-zinc-400 hover:text-white hover:bg-white/5"
      }
    `;

    return (
        <div className="sticky top-0 z-50 mb-8">
            {/* Animated Border Wrapper */}
            <div className="relative w-full rounded-3xl p-[1.5px] overflow-hidden">

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
            bg-black/30
            border border-white/10
            backdrop-blur-2xl
            rounded-3xl
            px-4 md:px-6
            py-4
          "
                >
                    {/* Top Row */}
                    <div className="flex items-center justify-between">

                        {/* Logo */}
                        <div>
                            <h1 className="text-zinc-200 text-lg md:text-xl tracking-[0.25em] uppercase flex items-center gap-2">
                                Lunaris

                                <img
                                    src="/whiteWolf.png"
                                    alt="Wolf Mascot"
                                    className="w-10 h-10 md:w-14 md:h-14 object-contain"
                                />
                            </h1>
                        </div>

                        {/* Desktop Tabs */}
                        <div className="hidden md:flex items-center gap-4">
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

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setOpen(!open)}
                            className="
                md:hidden
                text-white
                p-2
                rounded-xl
                hover:bg-white/10
                transition
              "
                        >
                            {open ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Mobile Dropdown */}
                    <div
                        className={`
              md:hidden
              overflow-hidden
              transition-all
              duration-300
              ${
                open
                  ? "max-h-[500px] opacity-100 mt-6"
                  : "max-h-0 opacity-0"
              }
            `}
                    >
                        <div className="flex flex-col gap-3">
                            <NavLink
                                to="/"
                                className={navClass}
                                onClick={() => setOpen(false)}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                to="/tasks"
                                className={navClass}
                                onClick={() => setOpen(false)}
                            >
                                Tasks
                            </NavLink>

                            <NavLink
                                to="/analytics"
                                className={navClass}
                                onClick={() => setOpen(false)}
                            >
                                Analytics
                            </NavLink>

                            <NavLink
                                to="/moon"
                                className={navClass}
                                onClick={() => setOpen(false)}
                            >
                                Moon
                            </NavLink>

                            <NavLink
                                to="/history"
                                className={navClass}
                                onClick={() => setOpen(false)}
                            >
                                History
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;