import {NotificationManager} from 'react-notifications';

import './TopMenu.scss';

import logo from '../../assets/logo.png';
import logoText from '../../assets/logoText.png';
import topIcon1 from '../../assets/img/icons/topIcon1.png';
import topIcon2 from '../../assets/img/icons/topIcon2.png';
import topIcon3 from '../../assets/img/icons/topIcon3.png';

import menuIcon from '../../assets/img/icons/menu.png';

const TopLogo = () => {
    return (
        <div className="topMenu__logo">
            <img src={logo} className="topMenu__logo__img" alt="logo"></img>
            <img src={logoText} className="topMenu__logo__text" alt="logo"></img>
        </div>
    )
}

const TopButtons = () => {
    const connectWallet = () => {
        NotificationManager.info('Sorry, metamask wallet connection is currently unavailable, please comeback on drop day');
    }

    return (
        <div className="topMenu__menu">
            <button className="topMenu__menu__walletBtn" onClick={ connectWallet } >CONNECT WALLET</button>
            <div className="topMenu__menu__icons">
                <a href="#javascript;"><img src={ topIcon1 } alt="logo"></img></a>
                <a href="#javascript;"><img src={ topIcon2 } alt="logo"></img></a>
                <a href="#javascript;"><img src={ topIcon3 } alt="logo"></img></a>
            </div>

            <div className="topMenu__menu__dropDownMenu">
                <img src={menuIcon} className="topMenu__menu__dropDownMenu__icon" alt="menu"></img>
                <div className="topMenu__menu__dropDownMenu__content">
                    <a href="#javascript;">HOME</a>
                    <a href="#javascript;">ABOUT</a>
                    <a href="#javascript;">RARITY</a>
                    <a href="#javascript;">ROADMAP</a>
                    <a href="#javascript;">TEAM</a>
                </div>
            </div>
        </div>
    )
}

export const TopMenu = () => {
    return (
        <div className="topMenu">
            <TopLogo />
            <TopButtons />
        </div>
    )
}

export default TopMenu;