import { render, fireEvent, screen } from "@testing-library/react";
import Login from "./components/Login-Component/Login";
import App from "./App";
import store from './store/store';
import { Provider } from "react-redux";


test("checking email & passwords are available", () => {

  render(<Provider store={store}><App /></Provider>);

  expect(screen.queryByTestId('emailId')).toBeInTheDocument()
  expect(screen.queryByTestId('password')).toBeInTheDocument()
  expect(screen.queryByTestId('loginButton')).toBeInTheDocument()
});