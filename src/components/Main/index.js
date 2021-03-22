import React from 'react';
import { MainContainer } from './styles';
import Sidebar from '../Sidebar';
import Header from '../Header';

function Main() {
    return (
        <MainContainer>
            <Header />
            <Sidebar />
        </MainContainer>
    );
}

export default Main;
