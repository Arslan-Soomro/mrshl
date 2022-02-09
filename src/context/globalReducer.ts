import { Action_T, State_T } from "./contextTypes";
import { toggleBoardModal_ACT, toggleLinkModal_ACT, updateBoardsData_ACT } from "./globalActions";

const globalReducer = (state: State_T, action: Action_T) => {
  switch (action.type) {
    case toggleBoardModal_ACT:
      return {
        ...state,
        modalType: "board",
        modalVisible: state.modalVisible ? false : true,
      };
    case toggleLinkModal_ACT:
      return {
        ...state,
        modalType: "link",
        modalVisible: state.modalVisible ? false : true,
        currentBoardId: action.payload?.boardId 
      };
    case updateBoardsData_ACT:
      if(action.payload){
        return {
          ...state,
          boards: action.payload
        }
      }
      return state;
    default:
      return state;
  }
};

export default globalReducer;
