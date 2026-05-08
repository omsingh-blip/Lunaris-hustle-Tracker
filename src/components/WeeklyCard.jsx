import { useRef } from "react";
import html2canvas from "html2canvas";
import { useStore } from "../store/useStore";
import dayjs from "dayjs";

export default function WeeklyCard() {

    const cardRef = useRef(null);

    const logs = useStore((state) => state.logs);

    // Last 7 days logs
    const lastWeekLogs = logs.filter((log) => {

        const logDate = dayjs(log.date);

        return logDate.isAfter(
            dayjs().subtract(7, "day")
        );
    });

    const totalHours = lastWeekLogs.reduce(
        (sum, log) => sum + log.hours,
        0
    );

    const totalDays = new Set(
        lastWeekLogs.map((log) => log.date)
    ).size;

    // Download Card
    const downloadCard = async () => {

        if (!cardRef.current) return;

        const canvas = await html2canvas(cardRef.current, {
            backgroundColor: "#000000",
            useCORS: true,
            scale: 2,
            foreignObjectRendering: false,
            logging: false,
        });

        const image = canvas.toDataURL("image/png");

        const link = document.createElement("a");

        link.href = image;

        link.download = "lunaris-weekly-card.png";

        link.click();
    };

    return (
        <div>

            {/* Header */}
            <div
                className="flex items-center justify-between mb-8"
            >

                <h2 className="text-5xl libre-font">
                    Weekly Moon Card
                </h2>

                <button
                    onClick={downloadCard}
                    className="
            px-6
            py-3
            rounded-2xl
            font-semibold
          "
                    style={{
                        backgroundColor: "#ffffff",
                        color: "#000000",
                    }}
                >
                    Download Card
                </button>

            </div>

            {/* Exportable Card */}
            <div
                ref={cardRef}
                className="
          relative
          overflow-hidden
          rounded-[40px]
          p-10
          min-h-[400px]
        "
                style={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    border: "1px solid #1F2937",
                }}
            >

                {/* Ambient Glow */}
                <div
                    className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] rounded-full blur-3xl"
                    style={{
                        background:
                            "rgba(255,255,255,0.08)",
                    }}
                />

                {/* Subtle Stars */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
                        backgroundSize: "40px 40px",
                        opacity: 0.3,
                    }}
                />

                {/* Content */}
                <div className="relative z-10">

                    <p
                        className="uppercase tracking-[0.3em] text-sm"
                        style={{
                            color: "#9CA3AF",
                        }}
                    >
                        Lunaris Weekly Report
                    </p>

                    <h1 className="text-7xl libre-font mt-6">
                        🌕 Full Moon
                    </h1>

                    <div className="mt-10 space-y-4 text-2xl">

                        <p>
                            🔥 {totalDays} Productive Nights
                        </p>

                        <p>
                            ⏱ {totalHours} Hours Logged
                        </p>

                        <p>
                            ⭐ Consistency Maintained
                        </p>

                    </div>

                    {/* Quote */}
                    <div
                        className="mt-16 pl-6"
                        style={{
                            borderLeft:
                                "1px solid rgba(255,255,255,0.2)",
                        }}
                    >

                        <p
                            className="italic text-2xl"
                            style={{
                                color: "#D1D5DB",
                                textShadow: "0 0 10px #D1D5DB, 0 0 20px #D1D5DB"
                            }}
                        >
                            “The wolf showed up every night.”
                        </p>



                    </div>

                    {/* Footer */}
                    <div className="mt-16">

                        <p
                            className="text-sm flex items-center gap-2"
                            style={{ color: "#D1D5DB " }}
                        >
                            Generated by Lunaris
                            <img
                                src="src/assets/whiteWolf.png"
                                alt="Wolf Mascot"
                                className="w-8 h-8 object-contain"
                            />
                        </p>


                    </div>

                </div>

            </div>

        </div>
    );
}