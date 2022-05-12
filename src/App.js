import "./App.css";
import styled from "styled-components";
import NavBar from "./components/navbar/NavBar";
import ItemListContainer from "./components/container/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
}

export default App;
