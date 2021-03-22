import React, { useState } from 'react';
import { TooltipWrapper } from './styles';

const Tooltip = (props) => {
    let timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, props.delay || 100);
    };

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    };

    return (
        <TooltipWrapper onMouseEnter={showTip} onMouseLeave={hideTip}>
            {props.children}
            {active && (
                <div className={`Tooltip-Tip ${props.direction || 'top'}`}>
                    {props.content}
                </div>
            )}
        </TooltipWrapper>
    );
};

export default Tooltip;
