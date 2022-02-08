
export type Action_T = { type: string, payload?: any};
export type Dispatch_T = (action: Action_T) => void;
export type State_T = {
    modalVisible: boolean,
    modalType : 'board' | 'link',
}