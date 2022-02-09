import {
  PlusIcon,
  ViewGridAddIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import { FC, useContext } from "react";
import { toggleBoardModal_ACT } from "../context/globalActions";
import GlobalContext from "../context/globalContext";

const Sidebar: FC = ({ children }) => {

  const [state, dispatch] = useContext(GlobalContext);

  return (
    <div className="flex w-full h-full bg-gray-50">

      {/* Button For Mobile View */}
      <button className="absolute shadow-xl xs:hidden bg-purple-100 rounded-full p-2 z-20 right-10 bottom-10" onClick={() => dispatch({type: toggleBoardModal_ACT})}>
        <ViewGridAddIcon className="w-8 h-8 text-purple-500 hover:text-purple-600 transition-colors active:text-purple-700" />
      </button>

      <div className="hidden max-w-[80px] w-[80px] bg-white border-purple-600 h-full xs:flex justify-center items-center">
        <div className="border-purple-500 w-full flex flex-col justify-center items-center py-4 space-y-6">
          <button className="bg-purple-100 rounded-full p-2" onClick={() => dispatch({type: toggleBoardModal_ACT})}>
            <ViewGridAddIcon className="w-8 h-8 text-purple-500 hover:text-purple-600 transition-colors active:text-purple-700" />
          </button>
          <button className="bg-purple-100 rounded-full p-2">
            <ViewGridIcon className="w-8 h-8 text-purple-500 hover:text-purple-600 transition-colors active:text-purple-700" />
          </button>
        </div>
      </div>
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

export default Sidebar;

