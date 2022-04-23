import MainNavigation from "./MainNavigation";
import Logo from "./Logo";
import './MainHeader.module.css';
import RightNavigation from "./RightNavigation";

const MainHeader = (props) => {
    return <header>
        <Logo />
        <MainNavigation />
        <RightNavigation />
    </header>
}

export default MainHeader;