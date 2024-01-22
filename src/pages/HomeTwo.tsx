import steve from "../assets/steve.png";

const HomeTwo = () => {
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
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>,
  ];

  return (
    // <div className="bg-black flex justify-center p-32 h-screen">
    <div className="bg-black flex flex-wrap justify-center gap-20 p-8 md:p-32 min-h-screen">
      {/* big text div */}
      <img className="h-96 p-2" src={steve}></img>
      <div className={secDiv[0]}>
        <h1 className="font-bold text-4xl">Engineering at a young age</h1>
        <p className="text-gray-500 mt-2">
          Growing up, I developed my own Minecraft server which had 50+ daily
          active players.
          <br />
          This server generated a small income and helped me learn problem
          solving skills.
          <br />
          Now, I enjoy utilizing those skills to engineer solutions.
        </p>
        <br />
        <h1 className="font-bold text-4xl">My dreams</h1>
        <p className="text-gray-500 mt-2">
          I enjoy being an Engineer. I have a lot of pride in what I do and want
          to have a fulfilling career.
          <br />
          I hope to one day work and live in Japan.
          <br />
        </p>
        <br />
        <h2 className="font-bold text-4xl">what I like to code with</h2>
        <div className="mt-2">
          <div className="flex gap-2 p-2">
            {icons[0]}
            <h1 className="">C#, C++, .NET, WPF</h1>
          </div>
          <div className="flex gap-2 p-2">
            {icons[0]}
            <h1 className="">Vite, Typescript</h1>
          </div>
          <div className="flex gap-2 p-2">
            {icons[0]}
            <h1 className="">A wee bit of Java</h1>
          </div>
        </div>
        <br />
        <h2 className="font-bold text-4xl">my hobbies</h2>
        <div className="mt-2">
          <div className="flex gap-2 p-2">
            {icons[0]}
            <h1 className="">Powerlifting, gaming, coding</h1>
          </div>
          <div className="flex gap-2 p-2">
            {icons[0]}
            <h1 className="">Traveling, hiking, trying different foods</h1>
          </div>
          <div className="flex gap-2 p-2">
            {icons[0]}
            <h1 className="">Working on my car</h1>
          </div>
          <div className="flex gap-2 p-2">
            {icons[0]}
            <h1 className="">Studying Japanese!</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTwo;
