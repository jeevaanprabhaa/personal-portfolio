import React, { useEffect, useState } from 'react';
import './Intro.css';

const NAME = 'Jeevaan';

function Intro({ onComplete }) {
    const [sliding, setSliding] = useState(false);
    const [textFading, setTextFading] = useState(false);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const textFadeTimer = setTimeout(() => setTextFading(true), 1900);
        const slideTimer = setTimeout(() => setSliding(true), 2100);
        const doneTimer = setTimeout(() => {
            setDone(true);
            if (onComplete) onComplete();
        }, 3100);

        return () => {
            clearTimeout(textFadeTimer);
            clearTimeout(slideTimer);
            clearTimeout(doneTimer);
        };
    }, [onComplete]);

    if (done) return null;

    return (
        <div className="intro">
            <div className={`intro--panel-left${sliding ? ' slide-left' : ''}`} />
            <div className={`intro--panel-right${sliding ? ' slide-right' : ''}`} />
            <div className={`intro--text${textFading ? ' fade-out' : ''}`}>
                <div className="intro--name">
                    {NAME.split('').map((letter, i) => (
                        <span
                            key={i}
                            style={{ animationDelay: `${0.08 * i + 0.2}s` }}
                        >
                            {letter}
                        </span>
                    ))}
                </div>
                <div className="intro--line" />
                <p className="intro--subtitle">Portfolio</p>
            </div>
        </div>
    );
}

export default Intro;
