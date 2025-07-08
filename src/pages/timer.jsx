import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const TIMER_MODES = {
  focus: { label: "Focus Time", duration: 25 * 60, color: "#2E7D32" },
  break: { label: "Break Time", duration: 5 * 60, color: "#1976D2" },
  longBreak: { label: "Long Break", duration: 15 * 60, color: "#9C27B0" },
};

export default function PomodoroTimer() {
  const [mode, setMode] = useState("focus");
  const [isPlaying, setIsPlaying] = useState(false);
  const [key, setKey] = useState(0);
  const [sessionCount, setSessionCount] = useState(0);

  const { duration, label, color } = TIMER_MODES[mode];

  const handleComplete = () => {
    if (mode === "focus") {
      const newSessionCount = sessionCount + 1;
      setSessionCount(newSessionCount);
      if (newSessionCount % 4 === 0) {
        setMode("longBreak");
      } else {
        setMode("break");
      }
    } else {
      setMode("focus");
    }
    setIsPlaying(false);
    setKey((k) => k + 1);
    return { shouldRepeat: false };
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const handleReset = () => {
    setMode("focus");
    setIsPlaying(false);
    setSessionCount(0);
    setKey((k) => k + 1);
  };

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setIsPlaying(false);
    setKey((k) => k + 1);
  };

  return (
    <div className="min-h-screen bg-green-300 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center">
        <CountdownCircleTimer
          key={key}
          isPlaying={isPlaying}
          duration={duration}
          colors={color}
          trailColor="#f4f4f5"
          strokeWidth={10}
          size={220}
          onComplete={handleComplete}
        >
          {({ remainingTime }) => (
            <div className="flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-gray-800">
                {formatTime(remainingTime)}
              </span>
              <span className="mt-2 text-lg font-medium text-gray-600">{label}</span>
              <span className="mt-1 text-sm text-gray-400">
                {mode === 'focus' ? `Session ${sessionCount}` : 'Break'}
              </span>
            </div>
          )}
        </CountdownCircleTimer>

        <div className="flex justify-center mt-8 space-x-3">
          <button
            onClick={() => setIsPlaying(true)}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Start Focus
          </button>
          <button
            onClick={() => setIsPlaying(false)}
            className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Pause
          </button>
          <button
            onClick={handleReset}
            className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Reset
          </button>
        </div>

        <div className="flex justify-between mt-6 space-x-2">
          <button
            onClick={() => handleModeChange("focus")}
            className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
              mode === "focus"
                ? "bg-green-100 text-green-800 border-2 border-green-500 shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-green-50"
            }`}
          >
           
            <span>25 min Focus</span>
          </button>

          <button
            onClick={() => handleModeChange("break")}
            className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
              mode === "break"
                ? "bg-blue-100 text-blue-800 border-2 border-blue-500 shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-blue-50"
            }`}
          >
           
            <span>5 min Break</span>
          </button>

          <button
            onClick={() => handleModeChange("longBreak")}
            className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
              mode === "longBreak"
                ? "bg-purple-100 text-purple-800 border-2 border-purple-500 shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-purple-50"
            }`}
          >
            <span>15 min Long Break</span>
          </button>
        </div>
      </div>
    </div>
  );
}