import { TrashIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";
import { useContext, useEffect } from "react";
import { toggleBoardModal_ACT, toggleLinkModal_ACT } from "../context/globalActions";
import GlobalContext from "../context/globalContext";
import LinkIco from "./LinkIco";

const LinkBoard = ({
  id,
  name,
  urls,
}: {
  id: number;
  name: string;
  urls: string[];
}) => {
  const [state, dispatch] = useContext(GlobalContext);

  return (
    <div className="bg-white w-fit py-4 px-6 rounded min-w-[150px] max-w-[350px] shadow-md h-fit">
      <div className="flex flex-row justify-between pb-6">
        <h3 className="font-bold text-lg text-gray-800 truncate">{name}</h3>
        <div className="space-x-2 flex justify-center items-start">
          <button className="cursor-pointer">
            <TrashIcon className="w-6 h-6 ml-2 cursor-pointer text-red-300 hover:text-red-400 active:text-red-500" />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => {
              dispatch({ type: toggleLinkModal_ACT });
              //console.log(name);
            }}
          >
            <PlusIcon className="w-6 h-6 text-purple-500 hover:text-purple-600 active:text-purple-700" />
          </button>
        </div>
      </div>
      <div>
        <div className="space-y-2 flex flex-col">
          {urls.map((str, i) => {
            return <LinkIco key={i} url={str} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LinkBoard;
