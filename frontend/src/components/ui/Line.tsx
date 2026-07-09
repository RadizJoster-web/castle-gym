const Line = () => {
  return (
    <div className="relative flex items-center justify-center w-full py-10">
      <div className="absolute h-[2px] w-full bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-70" />

      <div className="absolute w-12 h-12 rounded-full bg-primary/15 blur-xl" />

      <div className="relative flex items-center justify-center w-5 h-5 rounded-full border-2 border-primary bg-main">
        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
      </div>
    </div>
  );
};

export default Line;
