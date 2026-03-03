const TipsForSuccess = () => {
  const tips = [
    { emoji: "🌱", title: "Start Small", desc: "Pick one or two tiles to begin the integration." },
    { emoji: "🔄", title: "Be Routine", desc: "Try to incorporate a few daily or weekly habits." },
    { emoji: "🎉", title: "Celebrate Wins", desc: "Acknowledge every tile you complete!" },
    { emoji: "✨", title: "Make It Yours", desc: "Modify activities to fit your lifestyle and preferences." },
  ];

  return (
    <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
      <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4">
        <span className="text-2xl">💡</span> Tips for Success
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {tips.map((tip) => (
          <div key={tip.title} className="flex items-start gap-3">
            <span className="text-xl">{tip.emoji}</span>
            <div>
              <h3 className="font-bold text-foreground text-sm">{tip.title}</h3>
              <p className="text-muted-foreground text-xs">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TipsForSuccess;
