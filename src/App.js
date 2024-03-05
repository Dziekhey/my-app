import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Productpage from "./pages/Productpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Homepage />}></Route>
          <Route path='/About' element={<Aboutpage />}></Route>
          <Route path='/Product' element={<Productpage />}></Route>
          

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
