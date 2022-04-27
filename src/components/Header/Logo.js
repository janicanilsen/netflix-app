import classes from './Logo.module.css';
import logo from '../../images/netflix-logo.svg';
import icon from '../../images/netflix-icon.svg';

const Logo = () => {
    return <picture>
        <source srcSet={logo} media='(min-width: 1100px)' />
        <img className={classes.logo} alt='Netflix logo' src={icon} />
    </picture>
}

export default Logo;