import { useContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BoardsGrid from "./components/BoardsGrid";
import CreateAnyModal from "./components/CreateAnyModal";
import LinkBoard from "./components/LinkBoard";
import ModalWrapper from "./components/ModalWrapper";
import OneInputModal from "./components/OneInputModal";
import Sidebar from "./components/Sidebar";
import GlobalContext from "./context/globalContext";

const boards = [
  {
    id: 1,
    name: "My Board",
    urls: ["https://google.com/", "https://daraz.pk/", "https://google.com/", "https://daraz.pk/"],
  },
  
  {
    id: 2,
    name: "Your Board",
    urls: ["https://googleasdhasdhadasi.com/", "https://daraz.pk/"],
  },
  {
    id: 3,
    name: "Our Board",
    urls: ["https://google.com/", "https://daraz.pk/"],
  },
];


//TODO Connect Firebase

function App() {

  const [state, dispatch] = useContext(GlobalContext);

  return (
    <div className="App w-full h-full font-pf overflow-hidden">
      <CreateAnyModal type={state.modalType} />
      <Routes>
        <Route
          path="/"
          element={
            <Sidebar>
              <BoardsGrid boards={boards} />
            </Sidebar>
          }
        />
      </Routes>
    </div>
  );
}

export default App;