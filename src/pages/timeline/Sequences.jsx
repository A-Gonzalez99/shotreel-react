import Header from "../../components/header/Header";
import ButtonTopMenu from "../../components/topmenu/ButtonTopMenu";
import TopMenu from "../../components/topmenu/TopMenu";
import { useNavigate } from 'react-router-dom';
import TimeLineCaptionLableSequiences from "../../components/timeLine/TimeLineCaptionLableSequiences";
import TimeLineBlockSequences from "../../components/timeLine/TimeLineBlockSequences";

export function Sequences() {

  const myItems = [
    // eslint-disable-next-line react-hooks/rules-of-hooks
    <ButtonTopMenu icon={"edit"} text={""} click={() => useNavigate("/newproyect")}/>,
    // eslint-disable-next-line react-hooks/rules-of-hooks
    <ButtonTopMenu icon={"add"} text={""} click={() => useNavigate("/newproyect")}/>
  ];

  return (
    <>
      <TopMenu />
      <Header title="Sequences" button={myItems} />

      <div >
        <div className="timeLineP">

          <TimeLineBlockSequences/>
        </div>
        <TimeLineCaptionLableSequiences/>
      </div>
    </>
  );

}
