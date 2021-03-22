import styled from 'styled-components';

export const ItemWrapper = styled.ol`
    list-style: none;
    display: flex;
    align-items: center;
    color: white;

    a {
        font-size: clamp(12px, 0.2em + 1vw, 1em);
        color: #fff;
        text-transform: uppercase;
        font-weight: bold;
        text-decoration: none;
        &.current {
            margin-left: 4px;
            color: #ff8f63;
        }
    }

    .breadcrumb-separator {
        color: #fff;
        margin: auto 6px;
        user-select: none;
    }
`;
