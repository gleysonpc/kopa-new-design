import styled from 'styled-components';

export const MainContainer = styled.div`
    background-color: #282b3a;
    height: 100vh;
`;

export const Content = styled.div`
    height: 100%;
    padding: 130px 0 0 100px;

    @media (max-width: 800px) {
        padding: 144px 14px 0 14px;
    }
`;
