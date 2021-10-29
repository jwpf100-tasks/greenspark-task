import { Info } from "../../assets/images/svg";

interface IToolTip {
  tooltipText: string;
  link: string;
}

const InfoToolTip = ({ tooltipText, link }: IToolTip) => {
  return (
    <div className="tooltip">
      <Info />
      <div className="tooltiptext">
        <p>{tooltipText}</p>
        <a href="#">{link}</a>
      </div>
    </div>
  );
};

export default InfoToolTip;
