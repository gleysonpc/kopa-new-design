import React from 'react';
import {
    Container,
    Content,
    Collapse,
    CollapseButton,
    CollapseButtonText,
    CollapseIconWrapper,
} from './styles';

function AccordionMenu({ isOpen, toggle, icon, title, children }) {
    return (
        <Container>
            <CollapseButton
                onClick={() => toggle()}
                className={`${isOpen ? 'isOpen' : undefined}`}
            >
                <CollapseButtonText>
                    {icon && icon} {title ? title : ''}
                </CollapseButtonText>
                <CollapseIconWrapper
                    style={{
                        marginLeft: 16,
                        transform: isOpen
                            ? 'rotateZ(-90deg)'
                            : 'rotateZ(90deg)',
                    }}
                >
                    <svg viewBox="6 0 12 24">
                        <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
                    </svg>
                </CollapseIconWrapper>
            </CollapseButton>
            <Collapse isOpen={isOpen}>
                <Content>{children}</Content>
            </Collapse>
        </Container>
    );
}

export default AccordionMenu;
