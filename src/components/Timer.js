import React from 'react';
import saxMP3 from '../sax-alarm.mp3';
import {Card, CardContent, CardHeader, IconButton, Typography} from "@material-ui/core";
import {BiPauseCircle, BiPlayCircle, BiReset} from "react-icons/all";

function Timer(props) {
    return <Card variant={"outlined"} id="timer">
        <CardHeader id="timer-label" title={props.interval}/>
        <CardContent>
            <Typography id="time-left">{props.time}</Typography>
            <IconButton id="start_stop" onClick={props.isPaused ? props.start : props.pause}>
                {props.isPaused ? <BiPlayCircle/> : <BiPauseCircle/>}
            </IconButton>
            <IconButton id="reset" onClick={props.reset}>
                <BiReset/>
            </IconButton>
        </CardContent>
        {/*<h2 id="timer-label">{props.interval}</h2>*/}
        {/*<p id="time-left">{props.time}</p>*/}
        {/*<button id="start_stop" onClick={props.isPaused ? props.start : props.pause}>&#9199;</button>*/}
        {/*<button id="reset" onClick={props.reset}>&#8634;</button>*/}
        <audio src={`${saxMP3}`} id="beep" type="audio/mpeg"></audio>
    </Card>;
}

export default Timer;