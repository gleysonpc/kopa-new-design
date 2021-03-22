import styled from 'styled-components';

export const SearchbarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 62px;
    border-radius: 12px;
    background-color: #212436;
    padding: 0 10px;
    -webkit-box-shadow: 0px 0px 10px -4px #000000;
    box-shadow: 0px 0px 10px -4px #000000;
    transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
    &.focus {
        transform: translateY(5px) scale(1.05);
    }

    input {
        border: none;
        outline: none;
        background-color: transparent;
        color: #fff;
        letter-spacing: 0.38px;
        padding: 0 10px;
        height: 60px;
        font-weight: bold;
        width: 100%;
        ::placeholder {
            color: #fff;
            font-weight: bold;
        }
    }

    &.mobile {
        height: 36px;
        &.focus {
            transform: none;
        }

        input {
            height: 34px;
        }

        button {
            width: 27px;
            height: 25px;
            img {
                width: 15px;
                height: 15px;
            }
        }
    }
`;

export const SearchButton = styled.button`
    background-image: linear-gradient(to bottom, #ff9460, #ff617a 100%);
    width: 36px;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 7px;
    transition: all 0.1s linear;
    outline: none;
    border: none;
    &:hover {
        transform: scale(1.05);
    }
    &:active {
        transform: scale(1);
    }
`;
