import MainNavigation from "./MainNavigation";
import Logo from "./Logo";
import classes from './MainHeader.module.css';
import RightNavigation from "./RightNavigation";

const MainHeader = (props) => {
    return <header className={classes['flex-container']}>
        <Logo />
        <MainNavigation />
        <RightNavigation />
    </header>
}

export default MainHeader;