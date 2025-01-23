import { useNavigate } from "react-router-dom";

export function Login() {

  function changePage(page) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useNavigate(page);
  }
  return (
    <>
    <div className="backGroundLogingColor">
    </div>
      <div className="backGroundLoging">
        <h1>Shot Reel</h1>
        <p>
          Reel Shot helps filmmakers connect, collaborate, and manage their
          projects from script to screen.
        </p>
        <div className="panelLogin">
          <input className="inputLogin" type="text" placeholder="Email"/>
          <input className="inputLogin" type="text" placeholder="Password"/>
          <button className="buttonLogin" onClick={() => changePage("/home")}>
            Login
          </button>
          <p className="buttonPassword">Have you forgotten your password?</p>
          <button
            className="buttonBack"
            onClick={() => changePage("/newaccount")}
          >
            Create new account
          </button>
        </div>
      </div>
    </>
  );
}
