import React from 'react'
import './twitch.css'
import { TwitchEmbed } from 'react-twitch-embed';
import '../getScreenSize'
import useWindowDimensions from '../getScreenSize';





function SwitchStreamOrSchedule (props) {
    let streamUp = props.streamUp;
    const { width } = useWindowDimensions();
    if (streamUp){
        return (
            <div className="worked">
              <TwitchEmbed
                channel="pisanvs"
                id="pisanvs"
                theme="dark"
                height={750}
                width={(90 / 100) * width}
                muted
              />
            </div>
          );
    }else{
        return(
            <div className="didnt">
                <p>I stream every other day at 3:30PM, <a href="https://twitch.tv/pisanvs" className="followme">follow me</a> to get notified! :)</p>
            </div>
        );
    }
}

function checkIfStreaming() {
    let now = new Date();
    let start = new Date(now.getFullYear(), 0, 0);
    let diff = now - start;
    let oneDay = 1000 * 60 * 60 * 24;
    let day = Math.floor(diff / oneDay);
    const startTime = 15 * 60 + 30;
    const endTime =  18 * 60 + 30;
    const date = new Date(); 
    const nowTime = date.getHours() * 60 + date.getMinutes();
    if (day % 2 === 0 && startTime <= nowTime && nowTime <= endTime) {
        return true;
    }else {
        return false;
    }
}

function twitch () {
        return(
            <div className="twitch">
                <SwitchStreamOrSchedule streamUp={checkIfStreaming()}/>
            </div>
        );
}

export default twitch;