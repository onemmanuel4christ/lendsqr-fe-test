import NumberFormat from "react-number-format";
import "./card.scss";
interface CardProps {
  img: string;
  title: string;
  totalNumber: number;
}

const Card: React.FC<CardProps> = ({ img, title, totalNumber }) => {
  return (
    <div className="card">
      <img src={img} alt="user" />
      <p>{title}</p>
      <h2>
        <NumberFormat
          value={totalNumber}
          displayType={"text"}
          thousandSeparator={true}
        />
      </h2>
    </div>
  );
};

export default Card;
