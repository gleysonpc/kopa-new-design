import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import {
    SidebarWrapper,
    SidebarContainer,
    LogoContainer,
    SidebarMenu,
    SidebarMenuTop,
    SidebarMenuBottom,
    SidebarExpansion,
    ExpansionHeader,
    ExpansionList,
    SidebarToggler,
} from './styles';
import logoIcon from '../../assets/logo-kopa.svg';
import homeIcon from '../../assets/home-icon.svg';
import configIcon from '../../assets/config-icon.svg';
import arrowDownIcon from '../../assets/arrow-down-icon.svg';
import arrowRightIcon from '../../assets/arrow-right-icon.svg';
import notificationIcon from '../../assets/notification-icon.svg';
import videoIcon from '../../assets/video-icon.svg';
import userIcon from '../../assets/user-icon.svg';
import infoIcon from '../../assets/information-icon.svg';
import signOutIcon from '../../assets/sign-out-icon.svg';
import pitchIcon from '../../assets/pitch-icon.svg';
import groupIcon from '../../assets/group-icon.svg';
import Tooltip from '../Tooltip';

function Sidebar() {
    const [menuExpanded, setMenuExpanded] = useState(false);
    const [showTopHeaderContent, setShowTopHeaderContent] = useState(false);

    function handleMultiMenuClick() {
        setMenuExpanded(!menuExpanded);
    }

    function handleSingleMenuClick() {
        setMenuExpanded(false);
    }

    function handleClickOutside() {
        if (menuExpanded) {
            setMenuExpanded(false);
        }
    }

    function toggleTopHeaderContent() {
        setShowTopHeaderContent(!showTopHeaderContent);
    }

    return (
        <SidebarWrapper>
            <OutsideClickHandler
                onOutsideClick={handleClickOutside}
                display="contents"
            >
                <SidebarToggler
                    onClick={handleMultiMenuClick}
                    className={`--pulse ${
                        menuExpanded ? 'expanded' : undefined
                    }`}
                >
                    <img
                        src={arrowRightIcon}
                        alt="Mostrar Mais"
                        className={menuExpanded ? 'left' : undefined}
                    />
                </SidebarToggler>
                <SidebarExpansion
                    className={menuExpanded ? 'expanded' : undefined}
                >
                    <ExpansionHeader
                        className={
                            showTopHeaderContent ? '--show-content' : undefined
                        }
                    >
                        <small>CANAL</small>
                        <p>PD1 - O PODER DA A????O FA??A AGORA MESMO</p>
                        <button
                            onClick={toggleTopHeaderContent}
                            className={
                                showTopHeaderContent ? '--up' : undefined
                            }
                        >
                            <img
                                src={arrowDownIcon}
                                alt="Mostrar Mais"
                                className=""
                            />
                        </button>
                    </ExpansionHeader>
                    <ExpansionList>
                        <ul>
                            <li>
                                <div className="--menu-item">
                                    <img src={videoIcon} alt="Meus V??deos" />
                                    <p>MEUS V??DEOS</p>
                                </div>
                            </li>
                            <li>
                                <div className="--menu-item">
                                    <img src={userIcon} alt="Usu??rios" />
                                    <p>USU??RIOS</p>
                                </div>
                            </li>
                            <li>
                                <div className="--menu-item">
                                    <img
                                        src={notificationIcon}
                                        alt="Notifica????es"
                                    />
                                    <p>NOTIFICA????ES</p>
                                </div>
                            </li>
                            <li>
                                <div className="--menu-item">
                                    <img src={pitchIcon} alt="Pitch" />
                                    <p>PITCH</p>
                                </div>
                            </li>
                            <li>
                                <div className="--menu-item">
                                    <img src={groupIcon} alt="Equipes" />
                                    <p>EQUIPES</p>
                                </div>
                            </li>
                        </ul>
                    </ExpansionList>
                </SidebarExpansion>
                <SidebarContainer>
                    <LogoContainer>
                        <img src={logoIcon} alt="Kopa Live" />
                    </LogoContainer>
                    <SidebarMenu>
                        <SidebarMenuTop>
                            <ul>
                                <li>
                                    <div
                                        className="--menu-item"
                                        onClick={handleSingleMenuClick}
                                    >
                                        <Tooltip
                                            content="Home"
                                            direction="right"
                                        >
                                            <img src={homeIcon} alt="Home" />
                                        </Tooltip>
                                    </div>
                                </li>
                                <li onClick={handleMultiMenuClick}>
                                    <div
                                        className="--menu-item"
                                        onClick={handleSingleMenuClick}
                                    >
                                        <Tooltip
                                            content="Configura????es"
                                            direction="right"
                                        >
                                            <img
                                                src={configIcon}
                                                alt="Ajustes"
                                            />
                                        </Tooltip>
                                    </div>
                                </li>
                            </ul>
                        </SidebarMenuTop>
                        <SidebarMenuBottom>
                            <ul>
                                <li>
                                    <div className="--menu-item">
                                        <Tooltip
                                            content="Informa????o"
                                            direction="right"
                                        >
                                            <img
                                                src={infoIcon}
                                                alt="Informa????o"
                                            />
                                        </Tooltip>
                                    </div>
                                </li>
                                <li>
                                    <div className="--menu-item emphasis">
                                        <Tooltip
                                            content="Sair"
                                            direction="right"
                                        >
                                            <img src={signOutIcon} alt="Sair" />
                                        </Tooltip>
                                    </div>
                                </li>
                            </ul>
                        </SidebarMenuBottom>
                    </SidebarMenu>
                </SidebarContainer>
            </OutsideClickHandler>
        </SidebarWrapper>
    );
}

export default Sidebar;
