import styled from 'styled-components';

const theme = {
    lineHeight: 3,
    background: '#ff7a6e',
    buttonWidth: 80,
    lineSpace: 11,
};

export const MenuButtonContainer = styled.div`
    padding: 10px;
    cursor: pointer;

    .menu-btn {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;
        transition: all 0.5s ease-in-out;
    }

    .menu-btn__burger {
        width: 30px;
        height: ${theme.lineHeight}px;
        background: ${theme.background};
        border-radius: 5px;
        box-shadow: 0 2px 5px 212032;
        transition: all 0.5s ease-in-out;
    }

    .menu-btn__burger::before,
    .menu-btn__burger::after {
        content: '';
        position: absolute;
        width: 30px;
        height: ${theme.lineHeight}px;
        background: ${theme.background};
        border-radius: 5px;
        box-shadow: 0 2px 5px 212032;
        transition: all 0.5s ease-in-out;
    }

    .menu-btn__burger::before {
        transform: translateY(-${theme.lineSpace}px);
    }

    .menu-btn__burger::after {
        transform: translateY(${theme.lineSpace}px);
    }

    /* ANIMATION */
    .menu-btn.open .menu-btn__burger {
        transform: translateX(-50px);
        background: transparent;
        box-shadow: none;
    }

    .menu-btn.open .menu-btn__burger::before {
        transform: rotate(45deg) translate(35px, -35px);
    }

    .menu-btn.open .menu-btn__burger::after {
        transform: rotate(-45deg) translate(35px, 35px);
    }
`;
