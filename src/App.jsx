import { BrowserRouter, Routes, Route } from "react-router-dom";
import PaginationApp from "./Pages/Website/Pagination/PaginationApp";
import DateCounter from "./Pages/Website/DateCounter/DateCounter";
import Steps from "./Pages/Website/Steps/Steps";
import Faraway from "./Pages/Website/Faraway/Faraway";
import FlashCardsPage from "./Pages/Website/FlashCardsPage/FlashCardsPage";
import Layout from "./Layout/Layout";
import Home from "./Pages/Website/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/pagination" element={<PaginationApp />} />

          <Route path="/counter" element={<DateCounter />} />

          <Route path="/steps" element={<Steps />} />

          <Route path="/far-away" element={<Faraway />} />

          <Route path="/flash-cards" element={<FlashCardsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
