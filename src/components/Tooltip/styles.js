import styled from 'styled-components';

const theme = {
    color: '#fff',
    backgroundColor: '#212032',
    margin: '30px',
    arrowSize: '6px',
};

export const TooltipWrapper = styled.div`
    display: inline-block;
    position: relative;

    .Tooltip-Tip {
        position: absolute;
        border-radius: 4px;
        left: 50%;
        transform: translateX(-50%);
        padding: 6px;
        color: ${theme.color};
        background: ${theme.backgroundColor};
        font-size: 14px;
        font-family: sans-serif;
        line-height: 1;
        z-index: 100;
        white-space: nowrap;
    }

    .Tooltip-Tip::before {
        content: ' ';
        left: 50%;
        border: solid transparent;
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
        border-width: ${theme.arrowSize};
        margin-left: calc(${theme.arrowSize} * -1);
    }

    .Tooltip-Tip.top {
        top: calc(${theme.margin} * -1);
    }

    .Tooltip-Tip.top::before {
        top: 100%;
        border-top-color: ${theme.backgroundColor};
    }

    .Tooltip-Tip.right {
        left: calc(100% + ${theme.margin});
        top: 50%;
        transform: translateX(0) translateY(-50%);
    }

    .Tooltip-Tip.right::before {
        left: calc(${theme.arrowSize} * -1);
        top: 50%;
        transform: translateX(0) translateY(-50%);
        border-right-color: ${theme.backgroundColor};
    }

    .Tooltip-Tip.bottom {
        bottom: calc(${theme.margin} * -1);
    }

    .Tooltip-Tip.bottom::before {
        bottom: 100%;
        border-bottom-color: ${theme.backgroundColor};
    }

    .Tooltip-Tip.left {
        left: auto;
        right: calc(100% + ${theme.margin});
        top: 50%;
        transform: translateX(0) translateY(-50%);
    }

    .Tooltip-Tip.left::before {
        left: auto;
        right: calc(${theme.arrowSize} * -2);
        top: 50%;
        transform: translateX(0) translateY(-50%);
        border-left-color: ${theme.backgroundColor};
    }
`;
