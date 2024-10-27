import './topMenu.css'
import { useNavigate } from 'react-router-dom';
import ButtonTopMenu from './ButtonTopMenu'
import HorizontalDivider from '../HorizontalDivider';
import { useEffect, useRef } from 'react';

/* /usersettings */
function TopMenu() {
  
  const button = useRef(null);
  let paragraph = useRef(null);
  function sowMenu(){
    if (paragraph.current.className === 'parent-container') {
      paragraph.current.className  = 'hidden';
    } else {
      paragraph.current.className  = 'parent-container';
    }
  }
  
  const navigate = useNavigate();
  function pa(pageUrl){
    navigate(pageUrl);
  }

  return (
    <>
      <div className="panelTop">
        <ButtonTopMenu buttonId="button-menu" referen={button} icon="menu" click={()=>sowMenu()}/>
        <ButtonTopMenu buttonId="button-settings" icon="account_circle"  click={() => pa("/usersettings")}/>
      </div>

      <div id='panel-menu' ref={paragraph}  class="hidden">
        <div className="panelLefth">
          <p onClick={() => pa("/home")}>Home</p>
          <HorizontalDivider/>
          <p>Storyboard</p>
          <p>Time line</p>
          <p>Script</p>
        </div>
      </div>
    </>
  )
}
  
export default TopMenu