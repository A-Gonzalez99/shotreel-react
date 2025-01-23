import { render, screen,fireEvent, getAllByText } from "@testing-library/react";
import { Sequences } from './Sequences'; 
import { GetDataBaseSequences } from "../../dataBase/DataBaseSequences";

describe("Sequences", () => {
  const db = GetDataBaseSequences();

  test("Sequences: Titulos", async () => {    
    render(<Sequences />);
    db.map((b) =>
      expect(screen.getAllByText(b.name)).toHaveLength(2)
    ) 

  });

  test("Sequences: Tineline grafico", async () => {    
    render(<Sequences />);
    db.map((b) =>
      expect(screen.getByText(b.end+'"')).toBeInTheDocument()
    )     
  });
  
})