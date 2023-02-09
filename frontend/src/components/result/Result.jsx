import React from "react";
import { format } from "timeago.js";
import "./Result.css";

export const Result = (props) => {
  const data = props.data;

  return (
    <div className="main">
      <div className="mainWrapper">
        {data.thumbnails ? (
          data.thumbnails.map((thumbnail, idx) => {
            return (
              <a
                href={`https://www.youtube.com/watch?v=${data.videoIds[idx]}`}
                className="videoLink"
                key={idx}
              >
                <div className="videoContainer">
                  <div className="videoContainerWrapper">
                    <div className="videoImg">
                      <img src={thumbnail} alt="" className="img" />
                    </div>
                    <div className="desc">
                      <span className="videoTitle">
                        {data.videoTitles[idx]}
                      </span>
                      <span className="channelTitle">
                        {data.channelTitles[idx]}
                      </span>
                      <span className="publishTime">
                        {format(data.publishTimes[idx])}
                      </span>
                      <hr className="resultHr" />
                      <span className="VideoDescription">
                        {data.descriptions[idx]}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};
