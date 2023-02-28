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

// const IntroContainer = styled.div`
//     background-color: var(--color-background);
//     position: relative;
//     color: var(--color-white);
//     padding-top: 56%;
//     .videoIntro {
//         position: absolute;
//         top: 0;
//         left: 0;
//     }
//     .infoIntro {
//         position: absolute;
//         top: 140px;
//         left: 30px;

//         .headingIntro {
//             font-size: 60px;
//             transition: all 0.3s ease;
//         }

//         .overviewIntro {
//             max-width: 550px;
//             width: 100%;
//             line-height: 1.3;
//             padding-top: 25px;
//             font-size: 18px;
//         }
//     }
//     .btnVolume {
//         position: absolute;
//         height: 40px;
//         width: 40px;
//         right: 10%;
//         top: 50%;
//         cursor: pointer;
//         border-radius: 50%;
//         padding: 6px;
//         color: #bbb;
//         border: #fff solid 1px;
//         transition: all 0.3s ease;
//         transform: scale(1);
//         &:hover {
//             color: #fff;
//             transform: scale(1.2);
//             background-color: rgba(211, 211, 211);
//         }
//     }

//     .fadeBottom {
//         position: absolute;
//         bottom: 0;
//         width: 100%;
//         height: 120px;
//         background-image: linear-gradient(
//             180deg,
//             transparent,
//             rgba(15, 15, 15, 0.7) 40%,
//             rgb(17, 17, 17),
//             rgb(17, 17, 17)
//         );
//     }
// `;
