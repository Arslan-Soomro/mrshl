import { useContext } from "react";
import {
  toggleBoardModal_ACT,
  toggleLinkModal_ACT,
} from "../context/globalActions";
import GlobalContext from "../context/globalContext";
import { pushBoardData } from "../utils/dbUtils";
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
          addHandler={() => console.log("Link")}
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
