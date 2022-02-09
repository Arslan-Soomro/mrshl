import { getDatabase, onValue, ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BoardsGrid from "./components/BoardsGrid";
import CreateAnyModal from "./components/CreateAnyModal";
import LinkBoard from "./components/LinkBoard";
import ModalWrapper from "./components/ModalWrapper";
import OneInputModal from "./components/OneInputModal";
import Sidebar from "./components/Sidebar";
import { updateBoardsData_ACT } from "./context/globalActions";
import GlobalContext from "./context/globalContext";
import { boardType } from "./utils/customTypes";
import { pushBoardData } from "./utils/dbUtils";
import fbApp from "./utils/firebase";

/*
const boards = [
  {
    id: "1",
    name: "My Board",
    urls: [
      "https://google.com/",
      "https://daraz.pk/",
      "https://google.com/",
      "https://daraz.pk/",
    ],
  },

  {
    id: "2",
    name: "Your Board",
    urls: ["https://googleasdhasdhadasi.com/", "https://daraz.pk/"],
  },
  {
    id: "3",
    name: "Our Board",
    urls: ["https://google.com/", "https://daraz.pk/"],
  },
];
*/
//TODO Connect Firebase

function App() {
  const [state, dispatch] = useContext(GlobalContext);

  //TODO update boards to add links to db
  //TODO update boards to delete links from db

  useEffect(() => {
    const db = getDatabase(fbApp);
    const boardDataRef = ref(db, "boards/");
    onValue(boardDataRef, (snapshot) => {
      const data = snapshot.val();

      //Data we receive from firebase is in key value pairs
      //so we format it into an array so it is usable here

      const formattedData = Object.entries(data).map((item) => {
        return {
          id: item[0],
          name: (item[1] as boardType).name,
          urls: (item[1] as boardType).urls,
        };
      });

      console.log(formattedData);
      dispatch({type: updateBoardsData_ACT, payload: formattedData});
    });
  }, []);

  return (
    <div className="App w-full h-full font-pf overflow-hidden">
      <CreateAnyModal type={state.modalType} />
      <Routes>
        <Route
          path="/"
          element={
            <Sidebar>
              <BoardsGrid boards={state.boards} />
            </Sidebar>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
