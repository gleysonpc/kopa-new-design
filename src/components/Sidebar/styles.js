import styled from 'styled-components';

export const SidebarWrapper = styled.div`
    padding: 25px 12px;
    height: 100vh;
    width: 100px;
    position: relative;
    transition: all 0.5s ease-in-out;

    @media (max-width: 800px) {
        transform: translateX(-200px);
    }
`;

export const SidebarContainer = styled.div`
    background-color: #212032;
    width: 70px;
    height: 100%;
    border-radius: 18px;
    -webkit-box-shadow: 0px 0px 10px -4px #000000;
    box-shadow: 0px 0px 10px -4px #000000;
    z-index: 100;
    position: relative;

    ul {
        list-style: none;
    }

    .--menu-item {
        padding: 15px;
        cursor: pointer;
        filter: grayscale(1);
        &.emphasis {
            filter: brightness(4.5);
        }
        transition: all 100ms cubic-bezier(0.075, 0.82, 0.165, 1);
        opacity: 0.5;
        &:hover {
            transform: scale(1.1);
            filter: none;
            opacity: 1;
        }
        &:active {
            transform: scale(1);
        }
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    position: relative;
    cursor: pointer;

    &::after {
        content: '';
        position: absolute;
        background-color: #1a1a2a;
        height: 4px;
        width: 30px;
        bottom: 0;
    }
`;

export const SidebarToggler = styled.div`
    cursor: pointer;
    background-color: #ff8f63;
    height: 18px;
    width: 18px;
    position: absolute;
    border-radius: 100%;
    right: 9px;
    top: 60px;
    border: 3px solid #282b3a;
    z-index: 150;
    display: flex;
    transition: all 500ms ease-in-out;

    &:hover {
        transform: scale(1.2);
        border: 3px solid #282b3a;
    }
    &:active {
        transform: scale(1);
    }
    &.expanded {
        right: -220px;
    }

    img {
        &.left {
            transform: rotate(180deg);
        }
    }
`;

export const SidebarMenu = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    height: calc(100% - 100px);
`;

export const SidebarMenuTop = styled.div``;

export const SidebarMenuBottom = styled.div``;

export const SidebarExpansion = styled.div`
    width: 0px;
    height: calc(100% - 50px);
    border-radius: 18px;
    -webkit-box-shadow: 0px 0px 10px -4px #000000;
    box-shadow: 0px 0px 10px -4px #000000;
    z-index: 100;
    position: absolute;
    left: 60px;
    z-index: 1;
    background-color: #272636;
    transition: all 500ms ease-in-out;
    opacity: 0;
    padding: 17px 24px 17px 40px;

    &.expanded {
        width: 250px;
        opacity: 1;
    }
`;

export const ExpansionHeader = styled.div`
    height: 57px;
    background-color: #232233;
    border-radius: 3px;
    padding: 10px;
    position: relative;

    small {
        font-size: 10px;
        color: #fff;
    }

    p {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        width: 170px;
        font-size: 16px;
        color: #ff8f63;
        font-weight: bold;
    }

    img {
        position: absolute;
        right: 4px;
        top: 28px;
        &.up {
            transform: rotate(180deg);
        }
    }
`;

export const ExpansionList = styled.div`
    ul {
        list-style: none;
        margin-top: 20px;
        li {
            .--menu-item {
                min-width: 200px;
                display: flex;
                padding: 15px 0;
                cursor: pointer;
                filter: grayscale(1);
                transition: all 100ms cubic-bezier(0.075, 0.82, 0.165, 1);
                opacity: 0.5;
                align-items: center;

                &:hover {
                    transform: scale(1.05);
                    filter: none;
                    opacity: 1;
                }

                &:active {
                    transform: scale(1);
                }

                img {
                    width: 20px;
                }

                p {
                    margin-left: 10px;
                    font-size: 16px;
                    color: #fff;
                    font-weight: bold;
                }
            }
        }
    }
`;
