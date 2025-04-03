import landingPhoto from "../materials/landing-page.png";

export default function LandingPage() {
  return (
    <div className="mx-auto flex flex-col lg:flex-row items-center justify-center h-screen bg-gray-900 lg:gap-x-24 pt-10">
      <div className="text-center text-gray-100 px-10 lg:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold">
          I'm <span className="text-yellow-500">Samy Ahmed</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-bold mt-5">
          I'm a dental student in my last year
        </h2>
        <h2 className="text-xl md:text-2xl font-bold mt-5">
          This is my CV containing some of the cases I have done
        </h2>
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
