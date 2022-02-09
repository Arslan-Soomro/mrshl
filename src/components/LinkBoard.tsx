import { TrashIcon } from "@heroicons/react/outline";
import { PlusIcon } from "@heroicons/react/solid";
import { useContext, useEffect } from "react";
import { toggleBoardModal_ACT, toggleLinkModal_ACT } from "../context/globalActions";
import GlobalContext from "../context/globalContext";
import { updateLinksOfBoard } from "../utils/dbUtils";
import LinkIco from "./LinkIco";

const LinkBoard = ({
  id,
  name,
  urls,
  removeHandler
}: {
  id: string;
  name: string;
  urls: string[];
  removeHandler: (id: string) => void;
}) => {

  const [state, dispatch] = useContext(GlobalContext);

  const linkRemoveHandler = (ind: number) => {

    if(urls != undefined){
      const newUrls = urls.filter((url, i) => i !== ind);
      updateLinksOfBoard(id, newUrls);
    }
  }

  return (
    <div className="bg-white w-fit py-4 px-6 rounded min-w-[150px] max-w-[350px] shadow-md h-fit">
      <div className="flex flex-row justify-between items-center pb-6">
        <h3 className="font-bold text-base xs:text-lg text-gray-800 truncate">{name}</h3>
        <div className="space-x-2 flex justify-center items-start">
          <button className="cursor-pointer" onClick={() => removeHandler(id)}>
            <TrashIcon className="w-5 h-5 xs:w-6 xs:h-6 ml-2 cursor-pointer text-red-300 hover:text-red-400 active:text-red-500" />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => {
              dispatch({ type: toggleLinkModal_ACT, payload: { boardId : id } });
            }}
          >
            <PlusIcon className="w-5 h-5 xs:w-6 xs:h-6 text-purple-500 hover:text-purple-600 active:text-purple-700" />
          </button>
        </div>
      </div>
      <div>
        <div className="space-y-2 flex flex-col">
          {(urls && urls.length != 0) ? urls.map((str, i) => {
            return <LinkIco key={i} id={i} removeHandler={() => linkRemoveHandler(i)} url={str} />;
          }) : <p className="text-sm">Empty Board, Click the plus icon to add a link</p>}
        </div>
      </div>
    </div>
  );
};

export default LinkBoard;
