import React from 'react';
import Searchbar from '../Searchbar';
import ProfileSection from '../ProfileSection';
import {
    HeaderContainer,
    HeaderContent,
    HeaderLeft,
    HeaderMiddle,
    HeaderRight,
} from './styles';
import MenuMobile from '../MenuMobile';
import Breadcrumbs from '../Breadcrumbs';
import useWindowSize from '../../hooks/useWindowSize';

const items = [
    { to: '/', label: 'Home' },
    { to: '/canal', label: 'Nome do Canal aqui' },
    { to: '/aula', label: 'Aula Interativa 01' },
];

function breadcrumbMaxCharacter(width) {
    let limit = 0;

    if (width < 1280) {
        limit = 11;
    }

    if (width < 900) {
        limit = 8;
    }

    if (width < 850) {
        limit = 6;
    }

    return limit;
}

function Header() {
    const { width } = useWindowSize();

    return (
        <HeaderContainer>
            <HeaderContent>
                <HeaderLeft>
                    <Breadcrumbs
                        items={items}
                        maxCharacters={breadcrumbMaxCharacter(width)}
                    />
                </HeaderLeft>
                <HeaderMiddle>
                    <Searchbar />
                </HeaderMiddle>
                <HeaderRight>
                    <ProfileSection />
                </HeaderRight>
            </HeaderContent>
            <MenuMobile />
        </HeaderContainer>
    );
}

export default Header;
