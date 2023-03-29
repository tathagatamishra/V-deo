import React from "react";
import youtubeApi from "./Api";
import Search from "./Search";

import VideoList from "./VideoList";
import Videoplayer from "./VideoPlayer";

import "./App.css";

const arrayDivs = [1, 2, 3, 4, 5];

export default class App extends React.Component {
  state = {
    videosMetaInfo: [],
    selectedVideoId: null,
  };
  onVideoSelected = (videoId) => {
    this.setState({ selectedVideoId: videoId });
  };
  onSearch = async (keyword) => {
    const response = await youtubeApi.get("/search", {
      params: {
        q: keyword,
      },
    });
    this.setState({
      videosMetaInfo: response.data.items,
      selectedVideoId: response.data.items[0].id.videoId,
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        {/* <div className="Header"> */}
          <VideoList
            onVideoSelected={this.onVideoSelected}
            data={this.state.videosMetaInfo}
          />
          {/* {arrayDivs.map((num) => (
            <div className="VideoCards">{num}</div>
          ))} */}
        {/* </div> */}

        <div className="Body">
          <div className="Description"></div>
          <Videoplayer videoId={this.state.selectedVideoId} />
          {/* <div className="Video"></div> */}
          <div className="Comment"></div>
        </div>

        <Search onSearch={this.onSearch} />
        {/* <form className="Footer">
          <input className="Search" type="text" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button className="Btn">Search</button>
        </form> */}
      </div>
    );
  }
}
