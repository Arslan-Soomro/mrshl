import { useContext } from "react";
import {
  toggleBoardModal_ACT,
  toggleLinkModal_ACT,
} from "../context/globalActions";
import GlobalContext from "../context/globalContext";
import { pushBoardData, updateLinksOfBoard } from "../utils/dbUtils";
import ModalWrapper from "./ModalWrapper";
import OneInputModal from "./OneInputModal";

const boardAddHandler = (value: string | undefined) => {
  if (value != undefined) {
    pushBoardData({
      name: value,
      urls: [],
    });
  }
};

const CreateAnyModal = ({ type }: { type: "board" | "link" }) => {
  const [state, dispatch] = useContext(GlobalContext);

  const addLinkHandler = (value: string | undefined) => {
    //Get the current Board
    const thisBoardData = state.boards.filter((item, i) => item.id === state.currentBoardId)[0];
  
    if(thisBoardData.id && value){
      if(thisBoardData.urls == undefined){
        updateLinksOfBoard(thisBoardData.id, [value]);
      }else{
        updateLinksOfBoard(thisBoardData.id, [...thisBoardData.urls, value]);
      }
    }
    
  }

  if (!state.modalVisible) return null;

  //TODO save input data to firebase with proper data

  if (type === "board") {
    return (
      <ModalWrapper>
        <OneInputModal
          addHandler={boardAddHandler}
          exitHandler={() => {
            dispatch({ type: toggleBoardModal_ACT });
          }}
          title="Create Board"
          inputTitle="Enter Board Name"
          btnTitle="Create Board"
        />
      </ModalWrapper>
    );
  } else if (type === "link") {
    return (
      <ModalWrapper>
        <OneInputModal
          addHandler={addLinkHandler}
          exitHandler={() => {
            dispatch({ type: toggleLinkModal_ACT });
          }}
          title="Add a Link"
          inputTitle="Enter Link Address"
          btnTitle="Add Link"
        />
      </ModalWrapper>
    );
  }

  return null;
};

export default CreateAnyModal;
