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
import logoIcon from '../../assets/logo.svg';
import homeIcon from '../../assets/home-icon.svg';
import configIcon from '../../assets/config-icon.svg';
import arrowDownIcon from '../../assets/arrow-down.svg';
import arrowRightIcon from '../../assets/arrow-right.svg';
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
                        <p>PD1 - O PODER DA AÇÃO FAÇA AGORA MESMO</p>
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
                                    <img src={videoIcon} alt="Meus Vídeos" />
                                    <p>MEUS VÍDEOS</p>
                                </div>
                            </li>
                            <li>
                                <div className="--menu-item">
                                    <img src={userIcon} alt="Usuários" />
                                    <p>USUÁRIOS</p>
                                </div>
                            </li>
                            <li>
                                <div className="--menu-item">
                                    <img
                                        src={notificationIcon}
                                        alt="Notificações"
                                    />
                                    <p>NOTIFICAÇÕES</p>
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
                                            content="Configurações"
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
                                            content="Informação"
                                            direction="right"
                                        >
                                            <img
                                                src={infoIcon}
                                                alt="Informação"
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
