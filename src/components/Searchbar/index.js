import React from 'react';
import { SearchbarContainer, SearchButton } from './styles';
import searchIcon from '../../assets/search-icon.svg';
import { useState } from 'react';

function Searchbar({ mobile = false }) {
    const [focus, setFocus] = useState(false);
    function toggle() {
        setFocus((state) => !state);
    }
    return (
        <SearchbarContainer
            className={`${focus ? 'focus' : undefined} ${
                mobile ? 'mobile' : undefined
            }`}
        >
            <input
                onFocus={toggle}
                onBlur={toggle}
                type="text"
                placeholder="QUAL CANAL VOCÊ PROCURA?"
            />
            <SearchButton>
                <img src={searchIcon} alt="Procurar" />
            </SearchButton>
        </SearchbarContainer>
    );
}

export default Searchbar;
