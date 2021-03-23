import React, { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import {
    DropdownContainer,
    DropdownButtonWrapper,
    DropdownList,
    LanguageSectionContainer,
} from './styles';
import arrowDownIcon from '../../assets/arrow-down-icon.svg';

const dropdownItems = [
    {
        value: 'PT - BR',
        action: () => {},
    },
    {
        value: 'EN - US',
        action: () => {},
    },
    {
        value: 'ES - ES',
        action: () => {},
    },
];

function SelectLanguage({ position }) {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    function handleClick(item) {
        if (item.action) {
            item.action();
        }
        toggle();
    }

    return (
        <OutsideClickHandler onOutsideClick={() => setOpen(false)}>
            <DropdownContainer>
                <DropdownButtonWrapper
                    tabIndex={0}
                    role="button"
                    onKeyPress={toggle}
                    onClick={toggle}
                >
                    <div className="dropdown-component">
                        <LanguageSectionContainer>
                            <p>IDIOMA:</p>
                            <p className="emphasis"> PT - BR</p>
                            <img
                                src={arrowDownIcon}
                                alt="Mostrar Mais"
                                className={`${open ? '--open' : undefined}`}
                            />
                        </LanguageSectionContainer>
                    </div>
                </DropdownButtonWrapper>
                <DropdownList
                    className={position === '' ? 'top right' : position}
                >
                    {open &&
                        dropdownItems.map((item) => (
                            <li
                                key={item.value}
                                onClick={() => handleClick(item)}
                            >
                                {item.value}
                            </li>
                        ))}
                </DropdownList>
            </DropdownContainer>
        </OutsideClickHandler>
    );
}

export default SelectLanguage;
