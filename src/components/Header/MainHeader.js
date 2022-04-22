import LeftNavigation from "./LeftNavigation";
import Logo from "./Logo";
import './MainHeader.module.css';
import RightNavigation from "./RightNavigation";

const MainHeader = (props) => {
    return <header>
        <Logo />
        <LeftNavigation />
        <RightNavigation />
    </header>
}

export default MainHeader;