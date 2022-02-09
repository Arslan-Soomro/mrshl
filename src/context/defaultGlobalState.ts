import { State_T } from "./contextTypes";

const defaultGlobalState: State_T = {
    modalVisible: false,
    modalType: 'board',
    boards: [],
    currentBoardId: undefined,
}

export default defaultGlobalState;