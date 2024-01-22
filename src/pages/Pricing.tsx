import shiba from "../assets/shiba.png";
import kitsune from "../assets/kitsune.png";
import Makami from "../assets/Makami.png";
import Card from "../components/Card";

const Pricing = () => {
  const product = {
    rank: "Supporter",
    price: "5.00",
    description: "[Supporter] rank for Kurocraft Towny Server",
  };

  return (
    // <div className="bg-black flex justify-center gap-20 p-32 h-screen">
    <div>
      <h1 className="text-white text-center font-bold text-6xl">
        My favorite projects
      </h1>

      <div className="bg-black flex flex-wrap justify-center gap-20 p-8 md:p-32 min-h-screen">
        <div className="text-center">
          <h1 className="font-bold text-4xl p-8 text-white">
            [<b className="text-cyan-400">TestMe</b>]
          </h1>
          <b className="text-2xl text-teal-200">
            Fullstack Application
            <br />
            <b className="text-teal-100 text-xl font-light ">
              React, Express, Node, MongoDB
            </b>
          </b>
          <Card
            product={product}
            image={shiba}
            title="Info"
            description="Flashcard application with user signup and authentication system."
            titleTwo=""
            descriptionTwo=""
            style="bg-teal-700"
            style2="bg-teal-950"
            text="text-teal-100"
            btnColor="btn-accent"
          />
        </div>

        <div className="text-center">
          <h1 className="font-bold text-4xl p-2 text-white">
            [<b className="text-amber-300">Load Tester</b>]
          </h1>
          <b className="text-2xl text-amber-200">
            Testing Software
            <br />
            <b className="text-amber-100 text-xl font-light ">C# .NET (WPF)</b>
          </b>
          <Card
            product={product}
            image={kitsune}
            title="Info"
            description="Testing software that applies rated voltages to specific parts."
            titleTwo=""
            descriptionTwo="Solo developed, unit tested, and qualified."
            style="bg-amber-700"
            style2="bg-amber-950"
            text="text-amber-100"
            btnColor="btn-primary"
          />
        </div>

        <div className="text-center">
          <h1 className="font-bold text-4xl p-8 text-white">
            [<b className="text-red-400">Linearity Tester</b>]
          </h1>
          <b className="text-2xl text-red-200">
            Optimization Algorithm
            <br />
            <b className="text-red-100 text-xl font-light ">C# .NET (WPF)</b>
          </b>
          <Card
            product={product}
            image={Makami}
            title="Info"
            description="Optimization algorithm that finds the best degree and vertical shift to fit a specified limit."
            titleTwo=""
            descriptionTwo=""
            style="bg-red-700"
            style2="bg-red-950"
            text="text-red-100"
            btnColor="btn-error"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;
