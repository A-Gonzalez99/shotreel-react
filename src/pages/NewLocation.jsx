import CardUpdateBanner from "../components/cards/cardUpdateBanner/CardUpdateBanner";
import Header from "../components/header/Header";
import TopMenu from "../components/topmenu/TopMenu";
import PanelButtonsBelow from "../components/Buttons/PanelButtonsBelow";

function NewLocation() {

  return (
    <>
      <TopMenu />
      <Header title="New Location" />
      <div className="panelCenter">
        <CardUpdateBanner className="bannerUpdate"/>
      </div>

    
        <div className="contentColum">

      
          <h2>Name</h2>
          <input className="inputName" placeholder="Location name"></input>
          <h2>Direccion</h2>
          <input className="inputDescription" placeholder="Location direccion"></input>
        
        </div>
        <PanelButtonsBelow text="Create" icon="add"/>
      
    </>
  );
}

export default NewLocation;