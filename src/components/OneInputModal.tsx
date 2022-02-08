import { XIcon } from "@heroicons/react/outline";
import { MouseEventHandler } from "react";

const OneInputModal = ({ exitHandler, title, btnTitle, inputTitle }: {exitHandler: () => void, title: string, btnTitle: string, inputTitle: string}) => {
  return (
    <div className="bg-white max-w-[450px] text-xs xs:text-base w-11/12 rounded-md overflow-hidden shadow-lg shadow-purple-300">
      <div className="flex justify-between items-center p-4 border-b">
        <p>{title}</p>
        <button onClick={exitHandler}>
          <XIcon className="h-6 w-6 text-red-400 hover:text-red-500 active:text-red-600" />
        </button>
      </div>
      <label className="flex flex-col px-8 py-12">
        <p className="text-sm">{inputTitle}</p>
        <input
          className="px-4 py-2 border border-gray-300 rounded transition-colors duration-200 focus:border-purple-500 focus:border-2"
          placeholder="Type Here"
        />
      </label>
      <button className="p-4 text-center w-full border-t font-bold bg-purple-500 hover:bg-purple-600 active:bg-purple-700 transition-colors duration-200 text-white tracking-wider">{btnTitle}</button>
    </div>
  );
};

export default OneInputModal;
