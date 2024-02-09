import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Box } from '@material-ui/core';

const SocialSection = () => {
    return (
        <Box display="flex" justifyContent="space-between">
        <a rel = "noopener noreferrer" href="https://www.facebook.com/kshitiz.gupta.712" target = "_blank">
            <FacebookIcon color="secondary" />
        </a>
        <a rel = "noopener noreferrer" href="https://www.linkedin.com/in/kshitiz-gupta-28a38012b" target = "_blank">
            <LinkedInIcon color="secondary" />
        </a>
        <a rel = "noopener noreferrer" href="https://www.instagram.com/kshitiz.gupta.712" target = "_blank">
            <InstagramIcon color="secondary" />
        </a>
        <a rel = "noopener noreferrer" href="https://twitter.com/Kshitiz0496" target = "_blank">
            <TwitterIcon  color="secondary"/>
        </a>
        <a rel = "noopener noreferrer" href="https://github.com/Kshitiz294" target = "_blank">
            <GitHubIcon  color="secondary" />
        </a>
        </Box>
    )
}

export default SocialSection;