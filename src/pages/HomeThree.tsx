import creeper from "../assets/creeper.png";
import Card from "../components/Card";

const HomeThree = () => {
  const secDiv = [
    "text-lg text-left text-white p-20",
    "text-lg text-center p-12 bg-red-200",
  ];

  const icons = [
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>,
  ];
  const product = {
    rank: "Supporter",
    price: "5.00",
    description: "[Supporter] rank for Kurocraft Towny Server",
  };
  return (
    <div className="bg-black flex justify-center gap-20 p-32 h-screen">
      <Card
        product={product}
        image={creeper}
        title="In-game Kit"
        titleTwo="Special Commands"
        description="Unique Iron Tools and Armor, 2 Golden Apples, and 1 Ender Pearl."
        descriptionTwo="/nickname, /head, and $5000 in-game balance."
        style=""
        style2=""
        text=""
        btnColor="btn-accent"
      />
      <div className={secDiv[0]}>
        <h1 className="font-bold text-4xl">
          [<b className="text-emerald-500">Supporter</b>]
        </h1>
        <h1>$5 / mo</h1>
        <p className="text-gray-500 mt-2">
          Receive the Supporter rank/role on the Towny Server and discord.
          <br /> This rank is a{" "}
          <b className="text-gray-400">monthly subscription</b> and will be
          removed if you do not renew it.
        </p>
        <div className="mt-2">
          <div className="flex gap-2 p-2">
            {icons[0]}
            <h1 className="">Can set up to 3 homes on the server.</h1>
          </div>
          <div className="flex gap-2 p-2">
            {icons[0]}
            <h1 className="">Special supporter kit</h1>
          </div>
          <div className="flex gap-2 p-2">
            {icons[0]}
            <h1 className="">
              Players get unique <b className="text-emerald-500">Supporter</b>{" "}
              tag in-game.
            </h1>
          </div>
          <div className="flex gap-2 p-2">
            {icons[0]}
            <h1 className="">
              Players gain access to supporter only shops in game.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeThree;
