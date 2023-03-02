import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import data from "./data.json";
import { useState } from "react";
import SelectedBeast from "./Components/SelectedBeast";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [theBeast, setTheBeast] = useState({});

  function handleModal(beast) {
    setModalShow(!modalShow);
    setTheBeast(beast);
    console.log(beast);
  }

  return (
    <div className="App">
      <Header />
      <Main data={data} handleModal={handleModal} />
      {modalShow && (
        <SelectedBeast theBeast={theBeast} handleModal={handleModal} />
      )}
      <Footer />
    </div>
  );
}

export default App;
