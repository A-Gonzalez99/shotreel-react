import { render, screen,fireEvent } from "@testing-library/react";
import { Login } from './Login'; 

describe("Login", () => {

  test("Login: Usuario y contraseña", async () => {    
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.change(emailInput, { target: { value: 'Ana@gmail.com' } });
    fireEvent.change(passwordInput, { target: { value: 'Manzana' } });

    expect(emailInput).toHaveValue('Ana@gmail.com');
    expect(passwordInput).toHaveValue('Manzana');
  });

  test("Login: Campos vacíos al inicio", () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    expect(emailInput).toHaveValue('');
    expect(passwordInput).toHaveValue('');
   
  });
})