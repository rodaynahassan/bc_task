import { useState } from "react";
import "animate.css/animate.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FirstSection from "./pages/FirstSection/FirstSection";
import SecondSection from "./pages/SecondSection/SecondSection";
import ThirdSection from "./pages/ThirdSection/ThirdSection";
import FourthSection from "./pages/FourthSection/FourthSection";
import Lottie from "lottie-react";
import Loading from "./assets/animations/Loading.json";

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2800);
  if (loading) return <Lottie animationData={Loading} />;
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
}

export default App;
