import { State_T } from "./contextTypes";

const defaultGlobalState: State_T = {
    modalVisible: false,
    modalType: 'board',
    boards: [],
}

export default defaultGlobalState;