export default function LaunchCard() {
  return (
    <div className="grid grid-cols-5 border-2 border-slate-700 text-2xl text-white">
      <div className="p-5 col-span-1">
        <img
          className="h-32"
          src="https://images2.imgbox.com/95/39/sRqN7rsv_o.png"
          alt="image"
        />
      </div>
      <div className="col-span-4 p-5">This is the main Heading</div>
    </div>
  );
}
