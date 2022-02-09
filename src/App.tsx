import { getDatabase, onValue, ref } from "firebase/database";
import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import BoardsGrid from "./components/BoardsGrid";
import CreateAnyModal from "./components/CreateAnyModal";
import Sidebar from "./components/Sidebar";
import { updateBoardsData_ACT } from "./context/globalActions";
import GlobalContext from "./context/globalContext";
import { boardType } from "./utils/customTypes";
import fbApp from "./utils/firebase";

function App() {
  const [state, dispatch] = useContext(GlobalContext);

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

      dispatch({ type: updateBoardsData_ACT, payload: formattedData });
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
