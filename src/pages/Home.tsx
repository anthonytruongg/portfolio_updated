import me from "../assets/me.png";

const Home = () => {
  const mainDiv = [
    "text-black text-center p-10",
    "text-white text-center p-12 bg-red-100",
  ];
  const secDiv = [
    "text-center p-12 md:text-xl lg:text-2xl xl:text-3xl",
    "text-lg text-center p-12 bg-red-200",
  ];

  return (
    <>
      {/* <div className="bg-primary flex flex-col align-middle items-center justify-center h-screen"> */}
      <div className="bg-primary flex flex-wrap justify-center gap-20 p-8 md:p-32 min-h-screen">
        {/* big text div */}
        <div className={mainDiv[0]}>
          <h1 className="font-bold text-6xl">Anthony Truong</h1>
          <h1 className="font-bold text-3xl mt-5">アントニー</h1>
        </div>
        {/* small text div */}
        <div className={secDiv[0]}>
          <p className="text-left">
            Engineer with experience in developing Software for embedded
            systems. Currently studying Computer Engineering at UCR.
          </p>
          <p>{<br />}</p>
          <p className="text-left">
            Passionate about developing software that can help
            <b className="font-bold"> solve </b>
            complex
            <b className="font-bold"> problems. </b>
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img className="p-2 w-6/12" src={me} alt="Anthony" />
        </div>
        <div className={secDiv[0]}>
          <p className="text-left">Here's me in Hakone シ</p>
        </div>
      </div>
    </>
  );
};

export default Home;
