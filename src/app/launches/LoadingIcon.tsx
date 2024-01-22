"use client";
export default function LoadingIcon() {
  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="launches_background"
    >
      <div className="container mx-auto flex justify-center pt-28">
        <span className="loader"></span>
      </div>
    </div>
  );
}
