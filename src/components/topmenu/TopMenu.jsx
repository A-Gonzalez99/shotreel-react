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
  


  function MenuProyect(){


    // console.log("url: "+pathname);
      return(
      <>
        {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
        <p onClick={() => useNavigate("/storyboard")}>Storyboard</p>
        {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
        <p onClick={() => useNavigate("/locations")}>Locations</p>
        {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
        <p onClick={()=> useNavigate("/sequences")}>Time line</p>
        {/* <p>Script</p>   */}
      </>
      );
    
  }


  return (
    <>
      <div className="panelTop">
        <ButtonTopMenu buttonId="button-menu" referen={button} icon="menu" click={()=>sowMenu()}/>
        {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
        <ButtonTopMenu buttonId="button-settings" icon="account_circle"  click={() => useNavigate("/usersettings")}/>
      </div>

      <div id='panel-menu' ref={paragraph}  class="hidden" onMouseLeave={()=>paragraph.current.className  = 'hidden'}>
        <div className="panelLefth">
          {/* eslint-disable-next-line react-hooks/rules-of-hooks */}
          <p className='pHome' onClick={() => useNavigate("/home")}>Home</p>
          <HorizontalDivider/>
          <MenuProyect/>
      
        </div>
      </div>
    </>
  )
}

export default TopMenu