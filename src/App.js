import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Kezdolap from "./pages/Kezdolap";
import Kepek from "./pages/Kepek";
import KepOldal from "./components/KepOldal";
import NoPages from "./pages/NoPages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Kezdolap />} />

          <Route path="kepfeltoltes" element={<Kepek />} />
          <Route path="kepoldal" element={<KepOldal />} />
      
          <Route path="*" element={<NoPages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;