export default function heroSection() {
  return (
    <>
      <div className="absolute z-[5] w-full lg:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img src="/img/BG.svg" alt="bg" className="w-100 h-auto mx-auto" />
      </div>

      {/* content is here */}
      <div className="text-center relative z-20 mt-40">
        <h1 className="text-[4.25rem] text-white leading-[75.6px] tracking-[0.68px]">
          Easy send and Request <br /> Crypto.
        </h1>
        <h2 className="text-white text-xl mt-[1.875rem] leading-[27.3px]">
          Bring blockchain to the people. Solana supports experiences <br />
          for power users, new consumers, and everyone in between.
        </h2>
      </div>
    </>
  );
}
