type CardProps = {
  product: {
    rank: string;
    price: string;
    description: string;
  };
  image?: string;
  title: string;
  titleTwo?: string;
  description: string;
  descriptionTwo?: string;
  style: string;
  style2: string;
  text: string;
  btnColor: string;
};

const Card = (props: CardProps) => {
  return (
    <div
      className={`card w-96 text-left ${props.style} ${props.text} shadow-xl`}
    >
      <figure>
        <img className="h-96 lg:p-20" src={props.image} />
      </figure>
      <div className={`card-body ${props.style2}`}>
        <h2 className={`card-title`}>{props.title}</h2>
        <p className={`font-thin italic`}>{props.description}</p>
        <h2 className={`card-title`}>{props.titleTwo}</h2>
        <p className={`font-thin italic`}>{props.descriptionTwo}</p>
        <div
          className={`card-actions justify-center items-center align-middle p-4`}
        >
          <button
            className={`btn ${props.btnColor} m-2 hover:-translate-y-2 transition-transform`}
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
