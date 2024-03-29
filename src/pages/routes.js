import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoute };
