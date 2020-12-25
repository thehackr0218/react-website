import React from 'react'
import './twitch.css'
import twitchApi from 'twitch-api-v5';
import { TwitchEmbed } from 'react-twitch-embed';
import '../getScreenSize'
import useWindowDimensions from '../getScreenSize';

twitchApi.clientID = 'mpt4fesyjao2cxw9gb78dmh865nlma';




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
                <p>I stream every other day at 3:30PM, <a href="https://twitch.tv/pisanvs">follow me</a> to get notified! :)</p>
            </div>
        );
    }
}

function checkIfStreaming () {
    if(twitchApi.streams.live('524456436')){
        return true;
    }else {
        return false
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