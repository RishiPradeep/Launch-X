import { Reveal } from "./reveal";
export default function Sectiontwo() {
  return (
    <>
      <div className="min-h-screen secondcontainer bg-fixed">
        <Reveal>
          <div>
            <h1 className="font-bold text-9xl text-gray-300 pb-5 pt-20 mt-20 ml-20">
              <span className="text-green-400">Dragon </span>
              Capsule
            </h1>
          </div>
        </Reveal>
        <div className="max-w-3xl ml-20">
          <Reveal>
            <p className="pr-5 pb-5 pt-10 text-gray-200 text-3xl space-x-8">
              The Dragon spacecraft is capable of carrying up to 7 passengers to
              and from Earth orbit, and beyond. It is the only spacecraft
              currently flying that is capable of returning significant amounts
              of cargo to Earth, and is the first private spacecraft to take
              humans to the space station.
            </p>
          </Reveal>
          <Reveal>
            <ul className="text-xl text-gray-200 pt-10">
              <li className="pt-3 pb-10 font-bold">
                Height <span className="text-green-400 pl-64"> 8.1 m</span>
              </li>
              <hr className="border-gray-500 pt-10 w-96" />
              <li className="pt-3 pb-10 font-bold">
                Diameter <span className="text-green-400 pl-60">4 m</span>
              </li>
              <hr className="border-gray-500 pt-10 w-96" />{" "}
              <li className="pt-3 pb-10 font-bold">
                Volume{" "}
                <span className="text-green-400 pl-60">
                  37 m<sup>3</sup>
                </span>
              </li>
              <hr className="border-gray-500 pt-10 w-96" />{" "}
              <li className="pt-3 pb-10 font-bold">
                Mass <span className="text-green-400 pl-60"> 6,000 kg</span>
              </li>
              <hr className="border-gray-500 pt-10 w-96" />
            </ul>
          </Reveal>
        </div>
      </div>
    </>
  );
}
