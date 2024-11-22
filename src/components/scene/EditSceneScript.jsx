import { useRef, useEffect, useState } from "react";
import HorizontalDivider from "../HorizontalDivider";
import PanelButtonsBelow from "../Buttons/PanelButtonsBelow";
import { CardStoryBoard } from "../cards/CardStoryBoard";
import ActorsRaw from "../actors/ActorsRaw";
import UsersRaw from "../actors/UsersRaw";
import ButtonTopMenu from "../topmenu/ButtonTopMenu";

export function EditSceneScript({ valor, setValor }) {
  const popUpEditScene = useRef(null);
  const colorInput = useRef(null);
  const [borderColor, setBorderColor] = useState("black"); // Valor inicial

  useEffect(function () {
    if (valor === 1) {
      sowPopUp();
      setValor(0);
    }
  });

  // Dentro de tu componente
  useEffect(() => {
    if (colorInput.current) {
      colorInput.current.addEventListener("input", (event) => {
        setBorderColor(event.target.value);
      });
    }
  }, [colorInput]);

  function sowPopUp() {
    if (popUpEditScene.current.className === "popUpRemoveBack") {
      popUpEditScene.current.className = "hidden";
    } else {
      popUpEditScene.current.className = "popUpRemoveBack";
    }
  }

  return (
    <>
      <div ref={popUpEditScene} className="hidden">
        <div className="popUpRemovePanel">
          <p>Edit Actors</p>
          <HorizontalDivider />
          <p>My Markers</p>
          <div className="popUpRemovePanel">
            <div className="timeLineCaption">
              <div className="timeLineCaptionContainer">
                <div className="nameTimelineContainer">
                  <p className="PPopUp">Pag</p>
                  <input type="number" />
                  <p className="PPopUp">Pag</p>
                  <input type="number" />
                  <button className="buttonScript">
                    <span class="material-icons">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <HorizontalDivider />
          <p>New Marker</p>
          <div className="popUpRemovePanel">
            <div className="timeLineCaption">
              <div className="timeLineCaptionContainer">
                <div className="nameTimelineContainer">
                  <p className="PPopUp">Pag</p>
                  <input type="number" />
                  <p className="PPopUp">Pag</p>
                  <input type="number" />
                  <button className="buttonScript">
                    <span class="material-icons">delete</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PanelButtonsBelow
          text="Save"
          icon="update"
          clickCancel={() => sowPopUp()}
          clickCreate={() => sowPopUp()}
        />
      </div>
    </>
  );
}
