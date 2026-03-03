import HowToPlay from "@/components/HowToPlay";
import TipsForSuccess from "@/components/TipsForSuccess";
import BingoGrid from "@/components/BingoGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-extrabold text-foreground">Self-Care Bingo</h1>
          <p className="text-muted-foreground">
            Nurture your mind, body, and soul with our interactive self-care activity.
            <br />
            Complete activities to win and boost your mental wellness! 🧠✨
          </p>
        </div>

        {/* How to Play */}
        <HowToPlay />

        {/* Tips for Success */}
        <TipsForSuccess />

        {/* Bingo Game */}
        <BingoGrid />
      </div>
    </div>
  );
};

export default Index;
