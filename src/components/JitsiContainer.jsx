import React from "react";

const JitsiContainer = ({classroom}) => {

  return (
    <div className="jitsi-container">
      <iframe
        id="myFrame"
        src={`https://moderated.jitsi.net/${classroom}`}
        title="transmision"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default JitsiContainer;
