import React from 'react';
import { ProfileSectionContainer, Divider } from './styles';
import UserSection from '../UserSection';
import SelectLanguage from '../SelectLanguage';

function ProfileSection() {
    return (
        <ProfileSectionContainer>
            <UserSection />
            <Divider />
            <SelectLanguage position="top right" />
        </ProfileSectionContainer>
    );
}

export default ProfileSection;
