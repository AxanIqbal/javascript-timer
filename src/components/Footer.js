import React from 'react';
import {IconButton} from "@material-ui/core";
import {FaGithub} from "react-icons/all";

function Footer() {
    return <footer>
        <div>
            Sound from <a href="https://www.zapsplat.com/author/adam-a-johnson/" rel="noreferrer noopener" target="_blank">Adam A Johnson @ Zapsplat.com</a>, licensed under <a href="https://www.zapsplat.com/license-type/standard-license/" rel="noreferrer noopener" target="_blank">Standard License</a>
        </div>
        <IconButton href={"https://github.com/AxanIqbal/javascript-timer"}><FaGithub/></IconButton>
    </footer>;
}

export default Footer;