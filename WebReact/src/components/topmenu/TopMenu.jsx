import './topMenu.css'
import { useNavigate } from 'react-router-dom';
import ButtonTopMenu from './ButtonTopMenu'
import HorizontalDivider from '../HorizontalDivider';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';



function TopMenu() {
  
  const button = useRef(null);
  let paragraph = useRef(null);
  
  function sowMenu(){
    if (paragraph.current.className === 'parent-container') {
      paragraph.current.className  = 'popUpImagesHidden';
    } else {
      paragraph.current.className  = 'parent-container';
    }
  }
  
  const navigate = useNavigate();


  function MenuProyect(){
    const location = useLocation();
    const { pathname } = location;

    // console.log("url: "+pathname);
    if(pathname!=="/home" && pathname!=="/usersettings"){
      return(
      <>
        <p onClick={() => navigate("/storyboard")}>Storyboard</p>
        <p onClick={() => navigate("/locations")}>Locations</p>
        <p onClick={()=> navigate("/sequences")}>Time line</p>
        {/* <p>Script</p>   */}
      </>
      );
    }
  }


  return (
    <>
      <div className="panelTop">
        <ButtonTopMenu buttonId="button-menu" referen={button} icon="menu" click={()=>sowMenu()}/>
        <ButtonTopMenu buttonId="button-settings" icon="account_circle"  click={() => navigate("/usersettings")}/>
      </div>

      <div id='panel-menu' ref={paragraph}  class="hidden" onMouseLeave={()=>paragraph.current.className  = 'hidden'}>
        <div className="panelLefth">
          <p className='pHome' onClick={() => navigate("/home")}>Home</p>
          <HorizontalDivider/>
          <MenuProyect/>
      
        </div>
      </div>
    </>
  )
}

export default TopMenu