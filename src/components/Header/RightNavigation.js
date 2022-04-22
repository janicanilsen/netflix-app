import avatarIcon from "../../images/avatar.png";
import classes from "./RightNavigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift, faBell } from "@fortawesome/free-solid-svg-icons";
import SearchForm from "./SearchForm";

const RightNavigation = () => {
  return (
    <nav className={classes.container}>
      <SearchForm />
      <FontAwesomeIcon icon={faGift} className={classes.icon} />
      <FontAwesomeIcon icon={faBell} className={classes.icon} />
      <img alt="avatar" src={avatarIcon} className={classes.avatar} />
    </nav>
  );
};

export default RightNavigation;
