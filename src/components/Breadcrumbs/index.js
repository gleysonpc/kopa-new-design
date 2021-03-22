import React from 'react';
import { ItemWrapper } from './styles';

function limitCharacters(text, num) {
    if (num === 0) {
        return text;
    }

    if (text && num) {
        return text?.length > num ? text.substring(0, num--) + '...' : text;
    }
    return '';
}

const BreadcrumbItem = ({ children, ...props }) => (
    <li className="breadcrumb-item" {...props}>
        {children}
    </li>
);

const BreadcrumbSeparator = ({ children, ...props }) => (
    <li className="breadcrumb-separator" {...props}>
        {children}
    </li>
);

const BreadcrumbList = ({ separator = '|', ...props }) => {
    let children = React.Children.toArray(props.children);

    children = children.map((child, index) => (
        <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
    ));

    const lastIndex = children.length - 1;

    children = children.reduce((acc, child, index) => {
        const notLast = index < lastIndex;
        if (notLast) {
            acc.push(
                child,
                <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
                    {separator}
                </BreadcrumbSeparator>
            );
        } else {
            acc.push(child);
        }
        return acc;
    }, []);

    return <ItemWrapper>{children}</ItemWrapper>;
};

export default function Breadcrumbs({ items, maxCharacters = 0 }) {
    const lastItem = items[items.length - 1];

    return (
        <BreadcrumbList>
            {items.map(({ to, label }) => (
                <a
                    key={to}
                    href={to}
                    className={`${
                        lastItem.label === label ? 'current' : undefined
                    }`}
                >
                    {limitCharacters(label, maxCharacters)}
                </a>
            ))}
        </BreadcrumbList>
    );
}
