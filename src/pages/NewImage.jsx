import CardUpdateBanner from "../components/cards/cardUpdateBanner/CardUpdateBanner";
import Header from "../components/header/Header";
import TopMenu from "../components/topmenu/TopMenu";
import PanelButtonsBelow from "../components/Buttons/PanelButtonsBelow";

function NewImage() {
  return (
    <>
      <TopMenu />
      <Header title="New Image" />
      <div className="panelCenter">
        <CardUpdateBanner className="bannerUpdate" />
      </div>

      <div className="contentColum">
        <h2>Description</h2>
        <input
          className="inputDescription"
          placeholder="Proyect description"
        ></input>
      </div>
      <PanelButtonsBelow text="Create" icon="add" />
    </>
  );
}

export default NewImage;
