import styled from 'styled-components';

export const HeaderContentMobile = styled.div`
    width: 100%;
    padding: 0px 0 19px;
    border-radius: 18px;
    transition: all 0.5s ease-in-out;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;

    .--top {
        background-color: #212032;
        height: 70px;
        display: flex;
        padding: 0 0px 0 13px;
        justify-content: space-between;
        align-items: center;
        z-index: 1;
        transition: all 0.5s ease-in-out;

        .user-wrapper {
            position: absolute;
            top: -100vh;
            transition: all 0.5s ease-in-out;
            left: 37px;
        }

        .logo-wrapper {
            visibility: visible;
            transition: visibility 0.2s cubic-bezier(0.6, 0.04, 0.98, 0.335);
        }

        &.open {
            .user-wrapper {
                top: 30px;
            }
            .logo-wrapper {
                visibility: hidden;
            }
        }
    }
    .--bottom {
        height: 55px;
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: flex-end;
        padding: 0 13px;

        > div {
            flex: 1;
        }
    }

    .menu-list {
        background-color: #212032;
        width: 100%;
        height: calc(100vh - 70px);
        position: absolute;
        top: -100vh;
        transition: all 0.5s ease-in-out;
        opacity: 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-bottom: 70px;

        ul {
            list-style: none;

            li {
                .--menu-item {
                    cursor: pointer;
                    padding: 15px;
                    color: #fff;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    transition: all 100ms cubic-bezier(0.075, 0.82, 0.165, 1);
                    opacity: 0.5;
                    font-weight: bold;
                    font-size: clamp(12px, 0.2em + 1vw, 1em);
                    filter: grayscale(1);

                    &.emphasis {
                        filter: brightness(4.5);
                    }

                    &:hover {
                        filter: none;
                        opacity: 1;
                    }

                    &:active {
                        filter: none;
                        opacity: 1;
                    }

                    img {
                        margin-right: 9px;
                    }
                }
            }
        }

        &.open {
            top: 70px;
            opacity: 1;
        }

        .footer {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 70px;
            color: white;
        }
    }

    @media (min-width: 801px) {
        display: none;
    }
`;

export const ExpansionList = styled.div`
    width: 100%;
    ul {
        list-style: none;
        li {
            &:not(:last-child) {
                border-bottom: 1px solid #26253b;
            }

            .--sub-menu-item {
                display: flex;
                line-height: 56px;
                cursor: pointer;
                filter: grayscale(1);
                transition: all 100ms cubic-bezier(0.075, 0.82, 0.165, 1);
                opacity: 0.5;
                align-items: center;
                justify-content: center;

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
                    font-size: clamp(12px, 0.2em + 1vw, 1em);
                    color: #fff;
                    font-weight: bold;
                }
            }
        }
    }
`;
