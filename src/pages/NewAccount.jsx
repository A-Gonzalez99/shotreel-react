import { useNavigate } from "react-router-dom";
import { Personal } from "../components/Login/Personal";

export function NewAccount() {
  
    const navigate = useNavigate();

    function changePage(page) {
      navigate(page);
    }

  

    return (
      <>
       <div className="backGroundLoging">
        <h1>Shot Reel</h1>
            <div className="panelLogin">
            <div className="panelLoginButtonNewUserTop">
                <button className="buttonLogin">Personal</button>
                <div className="LoginSeparator"></div>
                <button className="buttonBack">Company</button>
            </div>

                <Personal/>
                <p style={{ fontSize:"14px", color:"#0b2130", margin:"0px", marginTop: "6px"}}>
                    By registering, you agree to our [Terms of Service] and our [Privacy Policy]. We will keep you informed about the latest news through notifications. You can deactivate them at any time
                </p>
                <button className="buttonLogin" style={{marginTop:"6px"}} onClick={()=>changePage('/home')}>Register</button>
                <p className="buttonPassword" onClick={()=>changePage('/login')}>Do you already have an account? </p>

            </div>
       </div>
      </>
    );
  }
  