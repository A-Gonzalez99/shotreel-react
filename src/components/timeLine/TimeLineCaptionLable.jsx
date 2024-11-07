import VerticalDivider from "../VerticalDivider";
import TimeLineCaption from "./TimeLineCaption";

function TimeLineCaptionLable() {


  return (
    <>
    <div className="panelHeaderLable">
        <VerticalDivider/>
        <p>Start</p>
        <VerticalDivider/>
        <p>End</p>

        </div>
      <div  className="panelColum">
        
       <TimeLineCaption/>

      </div>
    </>
  );
}

export default TimeLineCaptionLable;
