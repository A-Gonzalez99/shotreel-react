import Header from "../../components/header/Header";
import ButtonTopMenu from "../../components/topmenu/ButtonTopMenu";
import TopMenu from "../../components/topmenu/TopMenu";
import { useNavigate } from 'react-router-dom';

function Scenes() {
  const navigate = useNavigate();

  const myItems = [<ButtonTopMenu icon={"add"} text={""} click={() => navigate("/newproyect")}/>];
  return (
    <>
      <TopMenu />
      <Header title="Scenes" button={myItems} />

      <div>
        
      </div>
    </>
  );
}

export default Scenes;
