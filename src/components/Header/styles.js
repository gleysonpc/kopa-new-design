import styled from 'styled-components';

export const HeaderContainer = styled.div`
    position: fixed;
    width: 100%;
    padding: 21px 21px 47px 105px;
    transition: all 0.5s ease-in-out;
    @media (max-width: 800px) {
        padding: 0;
        display: flex;
        flex-direction: column;
    }
`;

export const HeaderContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.5s ease-in-out;

    @media (max-width: 800px) {
        transform: translateY(-200px);
        height: 0;
    }
`;

export const HeaderLeft = styled.div``;

export const HeaderMiddle = styled.div`
    flex: 1;
    max-width: 600px;
    margin: 0 30px;
`;

export const HeaderRight = styled.div``;
