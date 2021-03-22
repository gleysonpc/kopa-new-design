import styled from 'styled-components';

export const DropdownContainer = styled.div`
    position: relative;
    .left {
        left: 0;
    }

    .right {
        right: -11px;
    }

    .top {
        top: 100%;
        margin-top: 10px;
    }

    .bottom {
        bottom: 100%;
        margin-bottom: 10px;
    }
`;

export const DropdownButtonWrapper = styled.div`
    outline: none;
    cursor: pointer;
`;

export const DropdownList = styled.div`
    background: #212436;
    display: block;
    z-index: 99;
    -webkit-box-shadow: 0px 5px 8px -4px #000000;
    box-shadow: 0px 5px 8px -4px #000000;
    border-radius: 6px;
    position: absolute;
    margin-top: 5px;
    min-width: 145px;

    li {
        list-style: none;
        padding: 10px;
        color: #d5d5d5d5;
        &:first-child {
            margin-top: 5px;
        }
        &:last-child {
            margin-bottom: 5px;
        }
        &:hover {
            cursor: pointer;
            color: #ff8f63;
        }
    }
`;

export const LanguageSectionContainer = styled.div`
    display: flex;
    img {
        transition: all 0.1s ease-in-out;
    }

    p {
        font-size: clamp(12px, 0.2em + 1vw, 1em);
        font-weight: bold;
        margin-right: 10px;
        color: #fff;
        text-transform: uppercase;
        &.emphasis {
            margin-left: 4px;
            color: #ff8f63;
        }
    }
    .--open {
        transform: rotate(180deg);
    }
`;
