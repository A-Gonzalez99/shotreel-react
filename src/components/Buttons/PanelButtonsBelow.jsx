
import ButtonBelow from "../../components/Buttons/ButtonBelow";

function PanelButtonsBelow({icon ,text, clickCreate, clickCancel}) {
    return (
        <div className="panelButtonsBelow">
            <div className="panelButtonsBelowContent">
            <ButtonBelow icon={icon} text={text} click={clickCreate} clas={"buttonBelowCreate"}/>
            <ButtonBelow icon={"close"} text={"Cancel"} click={clickCancel} clas={"buttonBelowCancel"}/>
            </div>
      </div>
    )
}
export default PanelButtonsBelow