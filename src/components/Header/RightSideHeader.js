import giftIcon from '../../images/gift.svg'
import notificationIcon from '../../images/notifications.svg';
import searchIcon from '../../images/search.svg';
import avatarIcon from '../../images/avatar.png';
import classes from './RightSideHeader.module.css';

const RightSideHeader = () => {
    return <span className={classes['icons-container']}>
        <img alt='gift' src={searchIcon} className={classes.icon} />
        <img alt='gift' src={giftIcon} className={classes.icon} />
        <img alt='notification' src={notificationIcon} className={classes.icon} />
        <img alt='avatar' src={avatarIcon} className={classes.icon} />
    </span>
}

export default RightSideHeader;