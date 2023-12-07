"use client";
import NavBar from "./navBar";
import GoButton from "./goButton";
import Footer from "./footer";
import Sectiontwo from "./sectiontwo";
import { Reveal } from "./reveal";

export default function Home() {
  return (
    <>
      <main className="overflow-x-clip">
        <div className="min-h-screen maincontainer bg-fixed">
          <NavBar></NavBar>
          <div>
            <Reveal>
              <h1 className="font-bold text-9xl text-gray-300 p-5 mt-20 ml-20">
                Explore the Cosmos with{" "}
                <span className="text-green-400">LaunchX</span>
              </h1>
            </Reveal>
          </div>
          <Reveal>
            <div className="max-w-3xl p-5 ml-20">
              <ul className="list-disc text-xl text-gray-200">
                <li className="p-3">
                  Embark on a journey through the wonders of space exploration
                  with our SpaceX Tracker.
                </li>
                <li className="p-3">
                  Stay informed about the latest launches, missions, and
                  groundbreaking achievements by SpaceX.
                </li>
                <li className="p-3">
                  Whether you're a space enthusiast, a student, or just curious
                  about the mysteries of the universe, our user-friendly
                  platform offers real-time updates and detailed information on
                  upcoming, ongoing, and past launches.
                </li>
                <li className="p-3">
                  Your gateway to the cosmos awaits—launch into the future with
                  SpaceX Tracker!
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal>
            <div className="p-5 ml-20 mb-20">
              <GoButton />
            </div>
          </Reveal>
          <Sectiontwo />
          <Footer />
        </div>
      </main>
    </>
  );
}
