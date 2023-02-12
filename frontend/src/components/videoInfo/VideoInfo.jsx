import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { format } from "timeago.js";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import "./VideoInfo.css";

export const VideoInfo = (props) => {
  const params = useParams();
  const videoId = params.video_id;
  const [data, setData] = useState({});
  const [commentData, setCommentData] = useState({});

  useEffect(() => {
    get_videoInfo();
    getComments();
  }, []);

  const get_videoInfo = async () => {
    const data = await (await axios(`${props.URL}?q=${videoId}`)).data;
    setData(data);
  };

  const getComments = async () => {
    const data = await (await axios(`/comment?q=${videoId}`)).data;
    setCommentData(data);
  };
  return (
    <div className="main">
      {data.thumbnails ? (
        data.thumbnails.map((thumbnail, idx) => (
          <a href={`https://www.youtube.com/watch?v=${videoId}`} key={idx}>
            <div className="videoInfoContainer">
              <div className="videoInfoWrapper">
                <div className="thumbnail">
                  <img src={thumbnail} alt="" />
                </div>
                <div className="videoDesc">
                  <span className="videoTitle">{data.videoTitles[idx]}</span>
                  <span className="channelTitle">
                    {data.channelTitles[idx]}
                  </span>
                  <span className="description">{data.descriptions[idx]}</span>
                </div>
              </div>
            </div>
          </a>
        ))
      ) : (
        <></>
      )}
      <div className="commentContainer">
        <div className="commentWrapper">
          <span className="commentTitle">コメント</span>
          <hr className="commentHr" />
          {commentData.comments ? (
            commentData.comments.map((comment, idx) => (
              <div className="comment" key={idx}>
                <div className="commentUser">
                  <span className="authorName">{commentData.authors[idx]}</span>
                  <span className="commentPublishedAt">
                    {format(commentData.publishedAt[idx])}
                  </span>
                </div>

                <div className="commentMain">
                  <span className="commentDisplay">{comment}</span>
                </div>

                <div className="commentBottom">
                  <ThumbUpOffAltIcon />
                  <span className="likes">{commentData.likeCounts[idx]}</span>
                </div>
                <hr className="commentHr" />
              </div>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
