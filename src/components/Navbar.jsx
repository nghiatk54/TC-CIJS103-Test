function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <span className="text-white text-[36px] font-bold leading-[32px] tracking-[0.07em]">
        Anonime
      </span>
      <span className="text-[#868686] text-[18px] font-[400] leading-[32px] tracking-[0.07em]">
        Home
      </span>
      <span className="text-[#868686] text-[18px] font-[400] leading-[32px] tracking-[0.07em]">
        List anime
      </span>
      <input
        type="text"
        placeholder="Search anime or movie"
        className="text-[#868686] text-[18px] font-[400] leading-[32px] tracking-[0.07em] bg-[#374151]
        rounded-[15px] py-[8px] pl-[18px] pr-[100px] min-w-[375px]"
      />
    </div>
  );
}

export default Navbar;
