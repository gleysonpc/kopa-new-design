import React from 'react';
import VideoCard from '../VideoCard';
import { ChannelSectionContainer } from './styles';

const channels = [
    'Canal 1',
    'Canal 2 ',
    'Canal 3',
    'Canal 4',
    'Canal 5',
    'Canal 6 ',
    'Canal 7',
    'Canal 8',
];

function ChannelSection() {
    return (
        <ChannelSectionContainer>
            {channels.map((item) => (
                <VideoCard key={item} />
            ))}
        </ChannelSectionContainer>
    );
}

export default ChannelSection;
