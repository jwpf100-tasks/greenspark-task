interface IHeader {
  text: String;
}

const ContainerHeader = ({ text }: IHeader) => {
  return <h3 className="containerHeader">{text}</h3>;
};

export default ContainerHeader;
