
import ButtonBelow from "../../components/Buttons/ButtonBelow";
import { useNavigate } from 'react-router-dom';

function PanelButtonsBelow({icon ,text, clickCreate, clickCancel}) {
    const navigate = useNavigate();


 
    if(clickCancel==null){
        clickCancel = ()=>navigate(-1) ;
    }

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