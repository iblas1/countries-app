import c from "./SearchCard.module.css";
const SearchCard = ({ children }) => {
  return <div className={c.main}>{children}</div>;
};

export default SearchCard;
