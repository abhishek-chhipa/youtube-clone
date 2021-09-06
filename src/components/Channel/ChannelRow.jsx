import { Avatar } from "@material-ui/core";
import CheckCircleOutlineOutlinedIcon from "@material-ui/icons/CheckCircleOutlineOutlined";
import React from "react";
import "./ChannelRow.css";
function ChannelRow({
  image,
  channel,
  subs,
  verified,
  noOfVideos,
  description,
}) {
  return (
    <div className="channelRow">
      <Avatar className="channelRow__logo" alt={channel} src={image} />
      <div>
        <div className="channelRow__text">
          <h4>
            {channel} {verified && <CheckCircleOutlineOutlinedIcon />}
          </h4>
        </div>
        <p>
          {subs} subscribers • {noOfVideos} videos
        </p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ChannelRow;
