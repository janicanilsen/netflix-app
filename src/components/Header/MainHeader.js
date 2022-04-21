import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import './MainHeader.module.css';
import RightSideHeader from "./RightSideHeader";

//does NOT work anywhere below, whyyyy???

const MainHeader = (props) => {
    return <header>
        <Logo />
        <Categories />
        {/* <Search /> */}
        <RightSideHeader />
    </header>
}

export default MainHeader;