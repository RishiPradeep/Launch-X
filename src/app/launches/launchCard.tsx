"use client";
export default function LaunchCard(launch: any) {
  return (
    <div className="grid grid-cols-8 border-2 border-slate-700 text-white">
      <div className="p-5 col-span-1">
        <img
          className="h-32"
          src={launch.launch.links.patch.small}
          alt="image"
        />
      </div>
      <div className="col-span-5 p-5">
        <div className="font-bold text-3xl">{launch.launch.name}</div>
        <p className="pt-2 text-xl">{launch.launch.details}</p>
      </div>
      <div className="p-5 col-span-2 place-self-end">
        <button className="bg-green-400 p-2 rounded text-black">
          Learn More
        </button>
      </div>
    </div>
  );
}
