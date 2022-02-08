import { Action_T, State_T } from "./contextTypes";
import { toggleBoardModal_ACT, toggleLinkModal_ACT } from "./globalActions";

const globalReducer = (state: State_T, action: Action_T) => {
  switch (action.type) {
    case toggleBoardModal_ACT:
      console.log("Board-ACT");
      return {
        ...state,
        modalType: "board",
        modalVisible: state.modalVisible ? false : true,
      };
    case toggleLinkModal_ACT:
      console.log("Link-ACT");
      return {
        ...state,
        modalType: "link",
        modalVisible: state.modalVisible ? false : true,
      };
    default:
      return state;
  }
};

export default globalReducer;
