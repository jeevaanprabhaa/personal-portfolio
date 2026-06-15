import React, { useContext } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

function Landing() {
    const { theme } = useContext(ThemeContext);

    const firstName = headerData.name.split(' ')[0];

    return (
        <div className='landing-editorial' style={{ backgroundColor: theme.secondary }}>

            <div className='le-greeting' style={{ color: theme.tertiary }}>
                <span className='le-wave'>👋</span>
                &nbsp; Hi, I'm {firstName} and I am a
            </div>

            <div className='le-hero'>
                <h1 className='le-title-filled' style={{ color: theme.tertiary }}>
                    {headerData.title.trim()}
                </h1>
                <h1 className='le-title-outline' style={{ WebkitTextStrokeColor: theme.tertiary }}>
                    &amp; Engineer
                </h1>

                <img
                    src={headerData.image}
                    alt={headerData.name}
                    className='le-photo'
                />
            </div>

            <div className='le-bottom'>
                <p className='le-tagline' style={{ color: theme.tertiary }}>
                    based in Tamil Nadu, India.
                </p>

                <div className='le-ctas'>
                    {headerData.resumePdf && (
                        <a href={headerData.resumePdf} download='resume' target='_blank' rel='noreferrer'>
                            <button className='le-btn le-btn--outline' style={{ borderColor: theme.tertiary, color: theme.tertiary }}>
                                Download CV
                            </button>
                        </a>
                    )}
                    <NavLink to='/#contacts' smooth={true} duration={2000}>
                        <button className='le-btn le-btn--filled' style={{ backgroundColor: theme.tertiary, color: theme.secondary }}>
                            Contact
                        </button>
                    </NavLink>
                </div>

                <div className='le-socials'>
                    {socialsData.github && (
                        <a href={socialsData.github} target='_blank' rel='noreferrer' style={{ color: theme.tertiary }}>
                            <FaGithub />
                        </a>
                    )}
                    {socialsData.linkedIn && (
                        <a href={socialsData.linkedIn} target='_blank' rel='noreferrer' style={{ color: theme.tertiary }}>
                            <FaLinkedin />
                        </a>
                    )}
                    {socialsData.instagram && (
                        <a href={socialsData.instagram} target='_blank' rel='noreferrer' style={{ color: theme.tertiary }}>
                            <FaInstagram />
                        </a>
                    )}
                </div>
            </div>

        </div>
    );
}

export default Landing;
