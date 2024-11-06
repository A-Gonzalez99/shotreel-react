import CardUpdateBanner from "../components/cards/cardUpdateBanner/CardUpdateBanner";
import Header from "../components/header/Header";
import TopMenu from "../components/topmenu/TopMenu";
import PanelButtonsBelow from "../components/Buttons/PanelButtonsBelow";
import { useNavigate } from "react-router-dom";
import {
  GetDataBaseStoryBoard,
  UpdateDataBaseStoryBoard,
} from "../dataBase/DataBaseStoryBoard";
import { useRef, useState } from "react";
import RemoveBelow from "../components/remove/RemoveBelow";

function EditImage() {
  const num = localStorage.getItem("date");
// Si num es nulo (no existe la clave), creamos la entrada
  if (num === null) {
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toISOString();
    localStorage.setItem("date", 0);
    console.log("Clave 'date' creada con la fecha actual:", fechaFormateada);
  } else {
    console.log("Clave 'date' ya existe:", num);
  }

  const db = GetDataBaseStoryBoard();
  const inputText = useRef(null);
  const [description, setDescription] = useState(db[num].tittle);
  const navigate = useNavigate();

  function Update() {
    UpdateDataBaseStoryBoard(num, description);
    navigate(-1);
  }

  return (
    <>
      <TopMenu />
      <Header title="Edit Image" />
      <div className="panelCenter">
        <CardUpdateBanner
          text="Update Image"
          imagen={db[num].imag}
          className="bannerUpdate"
        />
      </div>

      <div className="contentColum">
        <h2>Description</h2>
        <input
          ref={inputText}
          className="inputDescription"
          placeholder="Proyect description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </div>
      <PanelButtonsBelow clickCreate={() => Update()} text="Save" icon="add" />
      <RemoveBelow text="Remove Image" />
    </>
  );
}

export default EditImage;
