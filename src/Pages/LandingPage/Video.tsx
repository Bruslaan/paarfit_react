import React, {useState} from 'react';
import './Video.css';
import vidImg from '../../assets/vidImg.jpeg';

const Video = () => {
    const [videoPlaying, setVideoPlaying] = useState(false);

    const playVideo = () => {
        setVideoPlaying(true)
        const video: any = document.getElementById("trailervideo")
        video?.play()
    }

    const pauseVideo = () => {
        setVideoPlaying(false)
        const video: any = document.getElementById("trailervideo")
        video?.pause()
    }

    return (

        <div style={{display: "flex", justifyContent: "center", position: "relative"}} >
            {!videoPlaying && <button className='playIcn' onClick={() => playVideo()}>
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='0.6'
                        d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
                    />
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='0.6'
                        d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                </svg>
            </button>
            }

            <video
                onClick={()=>pauseVideo()}
                className='video'
                preload='metadata'
                id="trailervideo"
                controls={false}
                style={{
                    outline: 'none',
                    width: '80%',
                    objectFit: 'contain',
                    position: "relative"
                }}
            >

                <source
                    src="https://res.cloudinary.com/do4y3j1hu/video/upload/v1617832297/PF_Trailer_NewLogoV2_hfva89.mp4#t=0.01"
                    type='video/mp4'/>
                <source
                    src="https://res.cloudinary.com/do4y3j1hu/video/upload/v1617832297/PF_Trailer_NewLogoV2_hfva89.mp4#t=0.01"
                    type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
        </div>


    );
};

export default Video;
