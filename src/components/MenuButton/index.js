import React from 'react';
import { MenuButtonContainer } from './styles';

function MenuButton({ open, onClick }) {
    return (
        <MenuButtonContainer onClick={onClick}>
            <div className={`menu-btn ${open ? 'open' : undefined}`}>
                <div className="menu-btn__burger"></div>
            </div>
        </MenuButtonContainer>
    );
}

export default MenuButton;
