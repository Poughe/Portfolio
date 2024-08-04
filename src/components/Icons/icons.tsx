import React from 'react';
import { StyledIcon, StyledIconLink } from "@styles/icons/IconStyle";
import GithubIcon from './github';
import LinkedInIcon from './linkedin';
import MailIcon from './mail';

const icons = [
    { Icon: GithubIcon, url: "https://github.com/poughe" },
    { Icon: LinkedInIcon, url: "https://www.linkedin.com/in/ernestpough/" },
    { Icon: MailIcon, url: "mailto:poughe@gmail.com" },
];

const Icons = () => (
    <>
        {icons.map((icon, index) => (
            <StyledIcon key={index}>
                <StyledIconLink href={icon.url} target="_blank" rel="noopener noreferrer">
                    <icon.Icon />
                </StyledIconLink>
            </StyledIcon>
        ))}
    </>
);

export default Icons;