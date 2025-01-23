import CardProyects from "../components/cards/cardsProyects/CardProyects";
import Header from "../components/header/Header";
import ButtonTopMenu from "../components/topmenu/ButtonTopMenu";
import TopMenu from "../components/topmenu/TopMenu";
import { useNavigate } from 'react-router-dom';

export function Home() {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const myItems = [<ButtonTopMenu icon={"add"} text={""} click={() => useNavigate("/newproyect")}/>];
  return (
    <>
      <TopMenu />
      <Header title="Proyects" button={myItems} />

      <div>
        <div className="proyectContent">
          <CardProyects />
        </div>
      </div>
    </>
  );
}

export default Home;
