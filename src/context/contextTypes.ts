import { boardType } from "../utils/customTypes";

export type Action_T = { type: string, payload?: any};
export type Dispatch_T = (action: Action_T) => void;
export type State_T = {
    modalVisible: boolean,
    modalType : 'board' | 'link',
    boards: boardType[],
    currentBoardId: string | undefined, //Current Board that we need to insert the link in
}