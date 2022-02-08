import { createContext } from "react";
import { Dispatch_T, State_T } from "./contextTypes";
import defaultGlobalState from "./defaultGlobalState";

const GlobalContext = createContext<[State_T, Dispatch_T]>([defaultGlobalState, () => {}]);

export default GlobalContext;