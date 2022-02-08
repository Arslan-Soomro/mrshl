import { useContext } from "react";
import { toggleBoardModal_ACT, toggleLinkModal_ACT } from "../context/globalActions";
import GlobalContext from "../context/globalContext";
import ModalWrapper from "./ModalWrapper";
import OneInputModal from "./OneInputModal";

const CreateAnyModal = ({ type }: { type: 'board' | 'link'}) => {

    const [state, dispatch] = useContext(GlobalContext);

    if(!state.modalVisible) return null;

    if(type === 'board'){
        return(
            <ModalWrapper><OneInputModal exitHandler={() => {dispatch({type: toggleBoardModal_ACT})}} title="Create Board" inputTitle="Enter Board Name" btnTitle="Create Board" /></ModalWrapper>
        )
    }else if(type === 'link'){
        return(
            <ModalWrapper><OneInputModal exitHandler={() => {dispatch({type: toggleLinkModal_ACT})}} title="Add a Link" inputTitle="Enter Link Address" btnTitle="Add Link" /></ModalWrapper>
        )
    }

    return null
}

export default CreateAnyModal;