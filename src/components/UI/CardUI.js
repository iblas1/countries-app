import c from "./CardUI.module.css";

const Card = ({ children }) => {
  return <div className={c.body}>{children}</div>;
};

export default Card;
