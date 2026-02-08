export default function HomeHeader() {
  return (
    <div className="bg-neutral-100 shadow-xl fixed top-0 left-0 w-full h-12 flex justify-center items-center">
      <div className="h-full w-full flex px-10 justify-between items-center">
        {/* logo */}
        <div className="text-slate-700 font-bold">HMS.</div>
        {/* Menu */}
        <div className="flex justify-center gap-10">
          <a href="#">Home</a>
          <a href="#">Hospitals</a>
          <a href="#">About</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
        </div>
        {/* Login button */}
        <button className="bg-sky-600 text-white rounded py-1 px-5 shadow-xl text-shadow-2xs cursor-pointer hover:text-slate-200 hover:bg-sky-700">
          Login
        </button>
      </div>
    </div>
  );
}
