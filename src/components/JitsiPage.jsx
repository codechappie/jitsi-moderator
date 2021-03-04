import React, { useState } from "react";
import JitsiContainer from "./JitsiContainer";

const JitsiPage = () => {
  const [type, setType] = useState(0);
  const [classroom, setClassroom] = useState("");

  return (
    <div className="jitsi-page">
      {/* <div className="type">
        <div onClick={() => setType(0)}>Teacher</div>
        <div onClick={() => setType(1)}>Student</div>
      </div> */}
      {type === 0 && classroom === "" && (
        <div className="selector">
          <div className="item" onClick={() => setClassroom("sdfsdfsd")}>
            colegio uno sdfsdfsd
          </div>
          <div className="item" onClick={() => setClassroom("yhjhgjgh")}>
            colegio dos yhjhgjgh
          </div>
          {/* <button>Ingresar</button> */}
        </div>
      )}
      {
            classroom !== "" && type === 0 && (
                <JitsiContainer classroom={classroom} />
            )
        }
    </div>
  );
};

export default JitsiPage;
