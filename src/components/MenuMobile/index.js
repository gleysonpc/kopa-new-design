import React, { useState } from 'react';
import { HeaderContentMobile, ExpansionList } from './styles';
import AccordionMenu from '../AccordionMenu';
import Breadcrumbs from '../Breadcrumbs';
import Searchbar from '../Searchbar';
import SelectLanguage from '../SelectLanguage';
import UserSection from '../UserSection';
import MenuButton from '../MenuButton';
import logo from '../../assets/logo-kopa.svg';
import homeIcon from '../../assets/home-icon.svg';
import configIcon from '../../assets/config-icon.svg';
import notificationIcon from '../../assets/notification-icon.svg';
import videoIcon from '../../assets/video-icon.svg';
import userIcon from '../../assets/user-icon.svg';
import pitchIcon from '../../assets/pitch-icon.svg';
import groupIcon from '../../assets/group-icon.svg';

import infoIcon from '../../assets/information-icon.svg';
import signOutIcon from '../../assets/sign-out-icon.svg';

function MenuMobile() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showConfigMenu, setShowConfigMenu] = useState(false);

    function toggleMenuMobile() {
        setShowMobileMenu(!showMobileMenu);
    }

    function handleMultiMenuClick() {
        // setShowMobileMenu(!showMobileMenu)
    }

    function handleSingleMenuClick() {
        setShowMobileMenu(!showMobileMenu);
    }

    const items = [
        { to: '/', label: 'Home' },
        { to: '/canal', label: 'Nome do Canal aqui' },
        { to: '/aula', label: 'Aula Interativa 01' },
    ];

    return (
        <HeaderContentMobile>
            <div className={`--top ${showMobileMenu ? 'open' : undefined}`}>
                <div className={`logo-wrapper`}>
                    <img src={logo} alt="Kopa" />
                </div>

                <div className={`user-wrapper`}>
                    <UserSection />
                </div>

                <div className={`logo-wrapper`}>
                    <Breadcrumbs items={items} maxCharacters={7} />
                </div>
                <div>
                    <MenuButton
                        open={showMobileMenu}
                        onClick={toggleMenuMobile}
                    />
                </div>
            </div>
            <div className="--bottom">
                <Searchbar mobile />
            </div>
            <div className={`menu-list ${showMobileMenu ? 'open' : undefined}`}>
                <ul>
                    <li onClick={handleSingleMenuClick}>
                        <div className="--menu-item">
                            <img src={homeIcon} alt="Home" />
                            Home
                        </div>
                    </li>
                    <li onClick={handleMultiMenuClick}>
                        <AccordionMenu
                            icon={<img src={configIcon} alt="Ajustes" />}
                            title="Configrações"
                            isOpen={showConfigMenu}
                            toggle={() => setShowConfigMenu(!showConfigMenu)}
                        >
                            <ExpansionList>
                                <ul>
                                    <li>
                                        <div className="--sub-menu-item">
                                            <img
                                                src={videoIcon}
                                                alt="Meus Vídeos"
                                            />
                                            <p>MEUS VÍDEOS</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="--sub-menu-item">
                                            <img
                                                src={userIcon}
                                                alt="Usuários"
                                            />
                                            <p>USUÁRIOS</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="--sub-menu-item">
                                            <img
                                                src={notificationIcon}
                                                alt="Notificações"
                                            />
                                            <p>NOTIFICAÇÕES</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="--sub-menu-item">
                                            <img src={pitchIcon} alt="Pitch" />
                                            <p>PITCH</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="--sub-menu-item">
                                            <img
                                                src={groupIcon}
                                                alt="Equipes"
                                            />
                                            <p>EQUIPES</p>
                                        </div>
                                    </li>
                                </ul>
                            </ExpansionList>
                        </AccordionMenu>
                    </li>
                    <li onClick={handleSingleMenuClick}>
                        <div className="--menu-item">
                            <img src={infoIcon} alt="Ajuda" />
                            Ajuda
                        </div>
                    </li>
                    <li onClick={handleSingleMenuClick}>
                        <div className="--menu-item emphasis">
                            <img src={signOutIcon} alt="Sair" />
                            Sair
                        </div>
                    </li>
                </ul>

                <div className="footer">
                    <SelectLanguage position="bottom right" />
                </div>
            </div>
        </HeaderContentMobile>
    );
}

export default MenuMobile;
