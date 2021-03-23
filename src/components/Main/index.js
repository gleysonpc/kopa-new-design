import React from 'react';
import { MainContainer, Content } from './styles';
import Sidebar from '../Sidebar';
import Header from '../Header';
import ChannelSection from '../ChannelSection';

function Main() {
    return (
        <MainContainer>
            <Header />
            <Sidebar />
            <Content>
                <ChannelSection />
            </Content>
        </MainContainer>
    );
}

export default Main;
