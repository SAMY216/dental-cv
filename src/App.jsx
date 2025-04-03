import Crown from "./components/Crown.jsx";
import Endodontics from "./components/Endodontics.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import LandingPage from "./components/LandingPage.jsx";
import Operative from "./components/Operative.jsx";
import Prosthesis from "./components/Prosthesis.jsx";
import Separator from "./components/Separator.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 min-h-[1000vh]">
      <Header />
      <LandingPage />
      <Separator />
      <Operative />
      <Crown />
      <Prosthesis />
      <Endodontics />
      <Separator />
      <Footer />
    </div>
  );
}
