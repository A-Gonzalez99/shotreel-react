import Header from "../../components/header/Header";
import TimeLineBlockScenes from "../../components/timeLine/TimeLineBlockScenes";
import TimeLineBlock from "../../components/timeLine/TimeLineBlockSequences";
import TimeLineCaptionLableScenes from "../../components/timeLine/TimeLineCaptionLableScenes";
import TimeLineCaptionLable from "../../components/timeLine/TimeLineCaptionLableSequiences";
import ButtonTopMenu from "../../components/topmenu/ButtonTopMenu";
import TopMenu from "../../components/topmenu/TopMenu";
import { useNavigate } from 'react-router-dom';

function Scenes() {

  const myItems = [
    // eslint-disable-next-line react-hooks/rules-of-hooks
    <ButtonTopMenu icon={"edit"} text={""} click={() => useNavigate("/newproyect")}/>,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    <ButtonTopMenu icon={"add"} text={""} click={() => useNavigate("/newproyect")}/>
  ];
  return (
    <>
      <TopMenu />
      <Header title="Scenes" button={myItems} />

      <div >
      <div className="timeLineP">

      <TimeLineBlockScenes/>
        </div>
        <TimeLineCaptionLableScenes/>
      </div>
    </>
  );
}

export default Scenes;
