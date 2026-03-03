import { useState, useCallback } from "react";
import { RefreshCw } from "lucide-react";

const BINGO_TILES = [
  { emoji: "🚶", text: "Take a 10-min walk" },
  { emoji: "💧", text: "Drink 8 glasses of water" },
  { emoji: "📞", text: "Call a friend" },
  { emoji: "📝", text: "Write 3 gratitudes" },
  { emoji: "😴", text: "Take a power nap" },
  { emoji: "🧘", text: "Stretch for 5 min" },
  { emoji: "🥗", text: "Cook a healthy meal" },
  { emoji: "🎵", text: "Listen to calming music" },
  { emoji: "🌬️", text: "Practice deep breathing" },
  { emoji: "📖", text: "Read for 20 min" },
  { emoji: "🛁", text: "Take a bubble bath" },
  { emoji: "🌳", text: "Journal your feelings" },
  { emoji: "⭐", text: "FREE SPACE" },
  { emoji: "🧹", text: "Declutter a space" },
  { emoji: "🎨", text: "Try a new recipe" },
  { emoji: "🧘‍♀️", text: "Try meditation" },
  { emoji: "😌", text: "Do a face mask" },
  { emoji: "📵", text: "Unplug for 1 hour" },
  { emoji: "💬", text: "Compliment someone" },
  { emoji: "💊", text: "Watch a sunset" },
  { emoji: "🐱", text: "Smile at a stranger" },
  { emoji: "☕", text: "Do a random act of kindness" },
  { emoji: "📓", text: "Go to bed early" },
  { emoji: "❤️", text: "Try yoga" },
  { emoji: "💃", text: "Dance to a song" },
];

const BINGO_LETTERS = [
  { letter: "B", colorClass: "bg-bingo-b" },
  { letter: "I", colorClass: "bg-bingo-i" },
  { letter: "N", colorClass: "bg-bingo-n" },
  { letter: "G", colorClass: "bg-bingo-g" },
  { letter: "O", colorClass: "bg-bingo-o" },
];

const BingoGrid = () => {
  const [completed, setCompleted] = useState<Set<number>>(() => new Set([12])); // FREE SPACE

  const toggleTile = useCallback((index: number) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        if (index === 12) return next; // can't uncheck free space
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  const resetBoard = () => {
    setCompleted(new Set([12]));
  };

  const progress = completed.size;
  const progressPercent = (progress / 25) * 100;

  return (
    <div className="space-y-6">
      {/* Let's Play Header */}
      <div className="text-center space-y-1">
        <h2 className="text-2xl font-extrabold text-foreground">
          Let's Play! 🎯
        </h2>
        <p className="text-muted-foreground text-sm">
          Click on each activity to complete it. Get a row, column, or diagonal to shout
          <span className="font-bold text-primary"> BINGO!</span>
        </p>
      </div>

      {/* Progress */}
      <div className="bg-card rounded-2xl p-4 shadow-sm border border-border">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-foreground">📊 Your Progress</span>
          <span className="text-sm text-muted-foreground">{progress} of 25 activities</span>
        </div>
        <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* BINGO Header */}
      <div className="grid grid-cols-5 gap-2 px-1">
        {BINGO_LETTERS.map(({ letter, colorClass }) => (
          <div
            key={letter}
            className={`${colorClass} text-primary-foreground font-extrabold text-xl py-2 rounded-xl text-center shadow-sm`}
          >
            {letter}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-5 gap-2 px-1">
        {BINGO_TILES.map((tile, index) => {
          const isCompleted = completed.has(index);
          const isFreeSpace = index === 12;

          return (
            <button
              key={index}
              onClick={() => toggleTile(index)}
              className={`
                aspect-square rounded-xl border-2 p-1.5 flex flex-col items-center justify-center text-center
                transition-all duration-200 text-xs font-medium leading-tight
                ${isCompleted
                  ? isFreeSpace
                    ? "bg-primary/20 border-primary text-primary shadow-md"
                    : "bg-success/15 border-success text-success shadow-md scale-[0.97]"
                  : "bg-card border-border text-foreground hover:border-primary/40 hover:shadow-sm"
                }
              `}
            >
              <span className="text-xl mb-0.5">{tile.emoji}</span>
              {isCompleted && !isFreeSpace && (
                <span className="text-[10px] mb-0.5">✅</span>
              )}
              <span className={`text-[10px] leading-tight ${isCompleted && !isFreeSpace ? "line-through opacity-70" : ""}`}>
                {tile.text}
              </span>
            </button>
          );
        })}
      </div>

      {/* New Board Button */}
      <div className="flex justify-center pt-2">
        <button
          onClick={resetBoard}
          className="bg-primary text-primary-foreground px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-opacity shadow-sm"
        >
          <RefreshCw className="w-4 h-4" />
          New Board
        </button>
      </div>
    </div>
  );
};

export default BingoGrid;
