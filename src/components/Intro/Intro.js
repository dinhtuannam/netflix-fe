import ReactPlayer from 'react-player';
import { VscMute, VscUnmute } from 'react-icons/vsc';
import './Intro.css';
import { useState } from 'react';
import NetflixIntro from '../../assets/video/netflix-intro.mp4';
function Intro() {
    const [isMuted, setIsMuted] = useState(true);

    return (
        <div className="IntroContainer">
            <ReactPlayer
                playing={true}
                width="100%"
                height="100%"
                volume={1}
                muted={isMuted}
                loop={true}
                controls={false}
                url={NetflixIntro}
                className="videoIntro"
            />
            <div className="infoIntro hidden lg:block md:block">
                <h1 className="headingIntro">Netflix Elite</h1>
                <p className="overviewIntro">
                    Netflix Elite Launch Campaign Director: Fernanda Weinfeld Production Company: Awake Film Agency:
                    Akqa
                </p>
            </div>
            {isMuted ? (
                <VscMute className="btnVolume" onClick={() => setIsMuted((prev) => !prev)} />
            ) : (
                <VscUnmute className="btnVolume" onClick={() => setIsMuted((prev) => !prev)} />
            )}
            <div className="fadeBottom h-2 lg:h-10"></div>
        </div>
    );
}

export default Intro;

