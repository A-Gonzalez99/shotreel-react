import { render, screen } from "@testing-library/react";
import { Home } from './Home'; 
import { GetDataBaseProyect } from "../dataBase/DataBaseProyects";


describe("Home", () => {

  test("Home: Renderiza el título de cada proyecto", () => {    
    render(<Home />);

    const db = GetDataBaseProyect();
    db.map((b) =>
      expect(screen.getByText(b.tittle)).toBeInTheDocument()
    )
  });

  test("Home: Número correcto de tarjetas de proyecto", () => {    
    render(<Home />);

    const db = GetDataBaseProyect();
    const projectCards = screen.getAllByTestId("project-card");
    expect(projectCards.length).toBe(db.length);  
  });
})