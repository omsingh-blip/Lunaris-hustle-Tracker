import { useStore } from "../store/useStore";
import dayjs from "dayjs";

export default function History() {

  const logs = useStore((state) => state.logs);

  // Group logs by date
  const groupedLogs = {};

 logs.forEach((log) => {

  // Current Month
  const logMonth = dayjs(log.date)
    .format("MMMM YYYY");

  const currentMonth = dayjs()
    .format("MMMM YYYY");

  // Skip old months
  if (logMonth !== currentMonth) return;

  // Format date
  const formattedDate = dayjs(log.date)
    .format("DD MMMM YYYY");

  // Create date group
  if (!groupedLogs[formattedDate]) {
    groupedLogs[formattedDate] = [];
  }

  // Push log
  groupedLogs[formattedDate].push(log);

});

  // Convert to array
  const historyData = Object.entries(groupedLogs)
    .reverse();

  return (
    <div>

      {/* Header */}
      <div className="mb-12">

        <h1 className="text-6xl libre-font">
          Night History
        </h1>

        <p className="text-zinc-400 mt-4">
          Revisit the nights that built your journey.
        </p>

      </div>

      {/* Empty State */}
      {historyData.length === 0 && (

        <div
          className="
            border
            border-white/10
            rounded-3xl
            p-10
            text-center
            bg-white/5
          "
        >

          <p className="text-zinc-400 text-lg">
            The night is waiting for your first log.
          </p>

        </div>

      )}

      {/* History Cards */}
      <div className="space-y-8">

        {historyData.map(([date, dayLogs], index) => {

          const totalHours = dayLogs.reduce(
            (sum, log) => sum + log.hours,
            0
          );

          return (

            <div
              key={index}
              className="
                relative
                overflow-hidden
                border
                border-white/10
                bg-white/5
                backdrop-blur-xl
                rounded-3xl
                p-8
              "
            >

              {/* Glow */}
              <div className="absolute top-[-100px] right-[-100px] w-[250px] h-[250px] rounded-full bg-white/5 blur-3xl" />

              {/* Content */}
              <div className="relative z-10">

                {/* Date */}
                <div className="flex items-center justify-between mb-8">

                  <div>

                    <h2 className="text-3xl libre-font">
                      🌙 {date}
                    </h2>

                    <p className="text-zinc-400 mt-2">
                      ⏱ {totalHours} Hours Logged
                    </p>

                  </div>

                </div>

                {/* Tasks */}
                <div className="space-y-4">

                  {dayLogs.map((log, i) => (

                    <div
                      key={i}
                      className="
                        flex
                        items-center
                        justify-between
                        bg-black/30
                        border
                        border-white/5
                        rounded-2xl
                        p-4
                      "
                    >

                      <div className="flex items-center gap-4">

                        {/* Wolf */}
                        <div className="text-2xl">
                           <img
                                src="src/assets/whiteWolf.png"
                                alt="Wolf Mascot"
                                className="w-10 h-10 object-contain"
                            />
                        </div>

                        {/* Task */}
                        <div>

                          <p className="text-white">
                            {log.task || "Night Session"}
                          </p>

                        </div>

                      </div>

                      {/* Hours */}
                      <div>

                        <p className="text-zinc-400">
                          {log.hours} hrs
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          );
        })}

      </div>

    </div>
  );
}