import InternalCollapse from '@kunukn/react-collapse';
import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    margin-bottom: 10px;
    margin: 0 auto;
`;

export const CollapseButton = styled.button`
    outline: none;
    font-size: clamp(12px, 0.4em + 1vw, 1.5em);
    box-shadow: none;
    border: 1px solid #ccc;
    width: 100%;
    border: 1px solid transparent;
    text-transform: uppercase;
    line-height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: #212032;
    transition: background-color 300ms;
    cursor: pointer;

    &:hover {
        background-color: #26253b;
    }

    &.isOpen {
        background-color: #26253b;
    }
`;

export const CollapseButtonText = styled.p`
    color: #fff;
    font-weight: bold;
    display: flex;
    img {
        margin-right: 10px;
    }
`;

export const Collapse = styled(InternalCollapse)`
    width: 100%;
    display: block;
    position: relative;
    overflow: hidden;
    transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
    &--gradient {
        .app__content {
            border-color: transparent;
        }
        &:after {
            pointer-events: none;
            transition: opacity 300ms;
            will-change: opacity;
            opacity: 1;
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(transparent 50%, white);
        }
    }
    &--active {
        &:after {
            opacity: 0;
        }
    }
    &__toggle-text {
        font-size: clamp(12px, 0.2em + 1vw, 1em);
    }
`;

export const Content = styled.div`
    border: 1px solid transparent;
    padding: 1rem 0;
    position: relative;
    transition: 300ms;
    padding: 10px 15px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    background-color: #1d1c2e;
`;

export const CollapseIconWrapper = styled.div`
    transition: transform 300ms cubic-bezier(0, 1, 0, 1);
    will-change: transform;
    svg {
        width: 1em;
        height: 1em;
        fill: #fff;
        transition: transform 300ms cubic-bezier(0, 1, 0, 1);
        will-change: transform;
    }
`;
