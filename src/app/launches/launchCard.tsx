export default function LaunchCard() {
  return (
    <div className="launchcard-container m-5 grid grid-cols-3 gap-2 divide-x-2 rounded-2xl border-2 border-gray-500 p-5 text-white shadow-lg">
      <div
        style={{
          background: "url(https://images2.imgbox.com/6c/cb/na1tzhHs_o.png)",
        }}
        className="image-container ml-5 h-52 overflow-hidden rounded-full"
      ></div>
      <div className="col-span-2 p-5">
        <h1 className="text-2xl font-bold">Name of Rocket</h1>
        <p>Description of rocket</p>
      </div>
    </div>
  );
}
