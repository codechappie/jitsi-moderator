import React from "react";

const JitsiContainer = ({ classroom }) => {
  return (
    <div className="jitsi-container">
      <a
        href={`https://moderated.jitsi.net/${classroom}`}
        target="_blank"
        rel="noreferrer"
      >Ingresar al salon como profesor</a>
    </div>
  );
};

export default JitsiContainer;
