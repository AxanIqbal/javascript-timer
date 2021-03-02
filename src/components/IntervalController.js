import React from 'react';
import {Card, CardContent, CardHeader, IconButton} from "@material-ui/core";
import {BiDownArrow, BiUpArrow} from "react-icons/all";

function IntervalController(props){
    const type = props.type;
    return <Card variant={"outlined"}>
        <CardHeader id={`${type}-label`} title={props.type} />
        <CardContent>
            <IconButton id={`${type}-decrement`} onClick={props.handleChange}>
                <BiUpArrow/>
            </IconButton>
            {/*<button id={`${type}-decrement`} onClick={props.handleChange}>&#9660;</button>*/}
            <p id={`${type}-length`}>{props.length}</p>
            <IconButton id={`${type}-increment`} onClick={props.handleChange}>
                <BiDownArrow/>
            </IconButton>
            {/*<button id={`${type}-increment`} onClick={props.handleChange}>&#9650;</button>*/}
        </CardContent>
    </Card>;
}

export default IntervalController;