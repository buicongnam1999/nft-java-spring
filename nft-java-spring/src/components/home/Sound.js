import React from 'react';
import SoundFile from 'assets/music/Powerful-Trap.mp3';

export default function Sound() {
    // const audioTune = new Audio(SoundFile);
    // const [playInLoop, setPlayInLoop] = useState(false);
    // useEffect(() => {
    //     audioTune.load();
    //     audioTune.play();
    // }, [])
    // useEffect(() => {
    //     audioTune.loop = playInLoop;
    //     audioTune.play();
    // }, [playInLoop])
    return (
        <div>
            <iframe id="video-player" className="video" width="560" height="315" src={SoundFile} allow="autoplay"></iframe>
        </div>
    )
}
