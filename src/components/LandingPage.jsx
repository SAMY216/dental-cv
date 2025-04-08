import landingPhoto from "../materials/landing-page.png";

export default function LandingPage() {
  return (
    <div className="mx-auto flex flex-col lg:flex-row items-center justify-center h-screen bg-gray-900 lg:gap-x-24 pt-10">
      <div className="text-center text-gray-100 px-10 lg:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-500">
          Samy Ahmed
        </h1>
        <h2 className="text-lg md:text-xl font-bold mt-0 opacity-70 text-slate-400">
          Final-year dental student
        </h2>
        <h2 className="text-xl md:text-2xl mt-5">
          This CV shows a selection of clinical cases I have managed and treated
          as part of my undergraduate dental education.
        </h2>
        <i
          className="fa-solid fa-circle-down fa-bounce fa-2xl mt-32 cursor-pointer text-white hover:text-cyan-400 duration-300"
          onClick={() => {
            document
              .getElementById("operative")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        ></i>
      </div>

      <div className="hidden lg:block lg:w-1/2 h-full overflow-hidden flex justify-end">
        <img
          className="h-full object-cover"
          src={landingPhoto}
          alt="Landing Page"
        />
      </div>
    </div>
  );
}
