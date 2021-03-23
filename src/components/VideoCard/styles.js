import styled from 'styled-components';

export const VideoCardContainer = styled.div`
    cursor: pointer;
    display: flex;
    background-color: #212032;
    max-width: 416px;
    margin: 8px;
    border-radius: 8px;
    align-items: center;
    opacity: 0.68;
    transition: all 0.1s ease-in-out;
    img {
        width: 200px;
        border-radius: 8px;
    }

    &:hover {
        box-shadow: 0px 4px 10px -4px #000000;
        opacity: 1;
        transform: scale(1.01);
    }
`;

export const ThumbnailSection = styled.div`
    overflow: hidden;
`;

export const InfoSection = styled.div`
    opacity: 0.98;
    width: 200px;
`;

export const Divider = styled.div``;
