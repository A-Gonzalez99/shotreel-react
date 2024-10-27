import CardProyects from "../components/cards/cardsProyects/CardProyects"
import Header from "../components/header/Header"
import TopMenu from "../components/topmenu/TopMenu"

function Home() {

  const images = document.querySelectorAll('.cardProyect img');

  images.forEach(image => {
    const container = image.parentElement;
    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;
  
    if (containerHeight > containerWidth) {
      image.style.width = `${containerHeight}px`;
      image.style.height = 'auto';
    }
  });
  
  return (
    <>
      <TopMenu/>
      <Header tittle="Proyects"/>

      <div className="bodyContent">
        <div className="proyectContent">
          <CardProyects/>

        </div>
        

      </div>
    </>
  )
}

export default Home