import styled from 'styled-components';

export const UserSectionContainer = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    p {
        padding-left: 35px;
        font-size: clamp(12px, 0.2em + 1vw, 1em);
        color: #fff;
        text-transform: uppercase;
    }
`;

export const ImageFrame = styled.div`
    background-image: linear-gradient(to bottom, #ff9460, #ff617a 100%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    padding-right: 4px;
    padding-top: 4px;
    position: absolute;
    left: -25px;
    img {
        width: 42px;
        height: 42px;
        border-radius: 7px;
    }
`;
