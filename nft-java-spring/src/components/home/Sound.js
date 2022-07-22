import React, { useEffect, useState } from 'react';
import SoundFile from 'assets/music/Powerful-Trap.mp3';

export default function Sound() {
    const audioTune = new Audio(SoundFile);
    const [playInLoop, setPlayInLoop] = useState(false);
    useEffect(() => {
        audioTune.load();
        audioTune.play();
    }, [])
    useEffect(() => {
        audioTune.loop = playInLoop;
        audioTune.play();
    }, [playInLoop])
    return (
        <div>
            
        </div>
    )
}
