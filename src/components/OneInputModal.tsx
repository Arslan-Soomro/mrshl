import { XIcon } from "@heroicons/react/outline";
import { MouseEventHandler, useRef } from "react";

const OneInputModal = ({
  addHandler,
  exitHandler,
  title,
  btnTitle,
  inputTitle,
}: {
  addHandler: (value: string | undefined) => void;
  exitHandler: () => void;
  title: string;
  btnTitle: string;
  inputTitle: string;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="bg-white max-w-[450px] text-xs xs:text-base w-11/12 rounded-md overflow-hidden shadow-lg shadow-purple-300">
      <div className="flex justify-between items-center p-4 border-b">
        <p>{title}</p>
        <button onClick={exitHandler}>
          <XIcon className="w-5 h-5 xs:h-6 xs:w-6 text-red-400 hover:text-red-500 active:text-red-600" />
        </button>
      </div>
      <label className="flex flex-col py-10 px-6 xs:px-8 xs:py-12">
        <p className="text-xs xs:text-sm">{inputTitle}</p>
        <input
          className="px-4 py-2 border border-gray-300 rounded transition-colors duration-200 focus:border-purple-500 focus:border-2"
          placeholder="Type Here"
          ref={inputRef}
        />
      </label>
      <button
        onClick={() => {
          addHandler(inputRef.current?.value);
          exitHandler();
        }}
        className="p-4 text-center w-full border-t font-bold bg-purple-500 hover:bg-purple-600 active:bg-purple-700 transition-colors duration-200 text-white tracking-wider"
      >
        {btnTitle}
      </button>
    </div>
  );
};

export default OneInputModal;
