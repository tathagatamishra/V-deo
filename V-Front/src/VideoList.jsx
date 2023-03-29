import React from "react";
import "./App.css";

import Video from "./Video";

const VideoList = ({ data, onVideoSelected }) => {
    return (
        <div className="Header">
                <Video data={data} onVideoSelected={onVideoSelected} />
        </div>
    );
};

export default VideoList;
