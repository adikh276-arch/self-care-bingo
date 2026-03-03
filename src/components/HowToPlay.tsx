import { BookOpen, CheckCircle, Sparkles } from "lucide-react";

const HowToPlay = () => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
      <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
        <span className="text-2xl">📋</span> How to Play
      </h2>
      <p className="text-muted-foreground mb-4">
        Our Self-Care Bingo card includes <span className="font-bold">25 activities</span> designed to nurture your mind, body, and soul.
      </p>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <span className="bg-info-bg text-primary rounded-full p-1.5 mt-0.5">
            <BookOpen className="w-4 h-4" />
          </span>
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Read</span> a tile, <span className="font-semibold text-foreground">complete</span> the activity.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="bg-info-bg text-primary rounded-full p-1.5 mt-0.5">
            <CheckCircle className="w-4 h-4" />
          </span>
          <p className="text-muted-foreground">
            <span className="font-semibold text-foreground">Click</span> a tile to mark it <span className="font-semibold text-foreground">complete</span>.
          </p>
        </div>
        <div className="flex items-start gap-3">
          <span className="bg-info-bg text-primary rounded-full p-1.5 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </span>
          <p className="text-muted-foreground">
            Each request is a small, yet powerful step toward better mental health 💙
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowToPlay;
