import React from 'react';
import { UserSectionContainer, ImageFrame } from './styles';

function UserSection() {
    return (
        <UserSectionContainer>
            <ImageFrame>
                <img
                    src="https://ca.slack-edge.com/TE50K4F8C-UF14Y45SL-67088fc7b6b6-512"
                    alt="Perfil"
                />
            </ImageFrame>
            <p>Maria da Silva</p>
        </UserSectionContainer>
    );
}

export default UserSection;
