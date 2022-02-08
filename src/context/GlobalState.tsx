import { FC, useReducer } from "react";
import { Dispatch_T, State_T } from "./contextTypes";
import defaultGlobalState from "./defaultGlobalState";
import GlobalContext from "./globalContext";
import globalReducer from "./globalReducer";

const GlobalState: FC = ({ children }) => {

    const [state, dispatch] = useReducer<any>(globalReducer, defaultGlobalState);

    return(
        <GlobalContext.Provider value={[state as State_T, dispatch as Dispatch_T]}>{children}</GlobalContext.Provider>
    )

};

export default GlobalState;