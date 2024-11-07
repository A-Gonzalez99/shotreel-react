import { useRef } from "react";
import VerticalDivider from "../VerticalDivider";
import { GetDataBaseSequences } from "../../dataBase/DataBaseSequences";


function TimeLineCaption(){
    const db = GetDataBaseSequences();

    return (
        <>
            {db.map((b, index) => Caption(b, index))}
        </>
    )
}


function Caption({name,color,start,end}) {
  const panelCaption = useRef(null);

  function mouseEnter() {
    if (panelCaption.current.className === "timeLineCaption") {
      panelCaption.current.className = "timeLineCaptionOver";
    } else {
      panelCaption.current.className = "timeLineCaption";
    }
  }

  return (
    <>
      <div ref={panelCaption} className="timeLineCaption">
        <div
          onMouseEnter={() => mouseEnter()}
          onMouseLeave={() => mouseEnter()}
          className="timeLineCaptionContainer"
        >
          <div className="colorCaption" style={{ backgroundColor: color }}></div>
          <VerticalDivider />
          <div className="nameTimelineContainer">
            <p>{name}</p>
          </div>
          <VerticalDivider />
          <p>{start}</p>
          <VerticalDivider />
          <p>{end}</p>
        </div>
      </div>
    </>
  );
}

export default TimeLineCaption;
