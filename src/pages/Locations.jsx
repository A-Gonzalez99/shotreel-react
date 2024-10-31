import CardProyects from "../components/cards/cardsProyects/CardProyects";
import CardStoryBoard from "../components/cards/CardStoryBoard";
import Header from "../components/header/Header";
import ButtonTopMenu from "../components/topmenu/ButtonTopMenu";
import TopMenu from "../components/topmenu/TopMenu";
import { useNavigate } from "react-router-dom";

function Locations() {
  const navigate = useNavigate();

  const myItems = [
    <ButtonTopMenu icon={"add"} text={""} />,
  ];
  return (
    <>
      <TopMenu />
      <Header title="Locations" button={myItems} />

     


    </>
  );
}

export default Locations;
