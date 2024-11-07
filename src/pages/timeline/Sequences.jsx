import Header from "../../components/header/Header";
import TimeLineBlock from "../../components/timeLine/TimeLineBlock";
import TimeLineCaptionLable from "../../components/timeLine/TimeLineCaptionLable";
import TimeLineH from "../../components/timeLine/TimeLineH";
import ButtonTopMenu from "../../components/topmenu/ButtonTopMenu";
import TopMenu from "../../components/topmenu/TopMenu";
import { useNavigate } from 'react-router-dom';

function Sequences() {
  const navigate = useNavigate();

  const myItems = [
    <ButtonTopMenu icon={"edit"} text={""} click={() => navigate("/newproyect")}/>,
    <ButtonTopMenu icon={"add"} text={""} click={() => navigate("/newproyect")}/>
  ];
  return (
    <>
      <TopMenu />
      <Header title="Sequences" button={myItems} />

      <div >
      <div className="timeLineP">

       <TimeLineBlock/>
        </div>
        <TimeLineCaptionLable/>
      </div>
    </>
  );
}

export default Sequences;
