import React from 'react';
import { VideoCardContainer, InfoSection, Divider } from './styles';
import thumbnail from '../../assets/thumbnail.png';

function VideoCard() {
    return (
        <VideoCardContainer>
            <img src={thumbnail} alt="Vídeo" />

            <InfoSection>
                <h5 className="--title">Aula Interativa</h5>
                <p>Status da Live</p>
                <p className="--active">Ativo</p>
                <Divider />
                <p>Início: 20/10/2019 8:30</p>
                <p>Fim: 20/10/2019 22:30</p>
                <Divider />
                <button>Editar Conteúdo</button>
            </InfoSection>
        </VideoCardContainer>
    );
}

export default VideoCard;
