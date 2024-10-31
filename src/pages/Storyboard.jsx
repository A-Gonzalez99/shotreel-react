import CardProyects from "../components/cards/cardsProyects/CardProyects";
import CardStoryBoard from "../components/cards/CardStoryBoard";
import Header from "../components/header/Header";
import ButtonTopMenu from "../components/topmenu/ButtonTopMenu";
import TopMenu from "../components/topmenu/TopMenu";
import { useNavigate } from "react-router-dom";

function Storyboard() {
  const navigate = useNavigate();

  const myItems = [
    <ButtonTopMenu icon={"play_arrow"} text={""} />,
    <ButtonTopMenu icon={"add"} text={""} />,
  ];
  return (
    <>
      <TopMenu />
      <Header title="Storyboard" button={myItems} />

      <div>
        <div className="proyectContent">
          <CardStoryBoard />
        </div>
      </div>

        <div className="hidden">
            <p>Back</p>
            <img src=""/>
        </div>


    </>
  );
}

export default Storyboard;
