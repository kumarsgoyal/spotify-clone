import React from 'react'
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded'
import SkipPreviousRoundedIcon from '@material-ui/icons/SkipPreviousRounded'
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded'
import SkipNextRoundedIcon from '@material-ui/icons/SkipNextRounded'
import RepeatRoundedIcon from '@material-ui/icons/RepeatRounded'
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__left'>
                <img className='footer__albumLogo'
                    src='https://upload.wikimedia.org/wikipedia/en/6/6a/Sing_Original_Motion_Picture_Soundtrack.jpeg'
                    alt='Image' />
                <div className='footer__songInfo'>
                    <h4> Yeah </h4>
                    <p> Sahil </p>
                </div>
            </div>

            <div className='footer__center'>
                <ShuffleRoundedIcon className='footer__green' />
                <SkipPreviousRoundedIcon className='footer__icon' />
                <PlayCircleOutlineRoundedIcon fontSize='large' className='footer__icon' />
                <SkipNextRoundedIcon className='footer__icon' />
                <RepeatRoundedIcon className='footer__green' />
            </div>
            <div className='footer__right'>
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Footer