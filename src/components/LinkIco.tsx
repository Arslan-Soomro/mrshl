import { TrashIcon } from "@heroicons/react/outline";
import { extAndGenIco } from "../utils/utils";

const LinkIco = ({
  url,
  id,
  removeHandler,
}: {
  url: string;
  id: number;
  removeHandler: () => void;
}) => {
  //console.log(extAndGenIco(url));

  return (
    <div className="flex flex-row items-center text-sm cursor-pointer justify-between w-full">
      <a
        href={url}
        target="_blank"
        className="flex flex-row items-center text-sm space-x-2 cursor-pointer w-9/12 xs:w-10/12"
      >
        <img src={extAndGenIco(url)} className="w-6 h-6" />
        <p className="text-gray-600 hover:text-gray-700 active:text-gray-800 xs:text-sm text-xs tracking-tighter truncate">
          {url}
        </p>
      </a>
      <button onClick={removeHandler}>
        <TrashIcon className="w-5 h-5 xs:w-6 xs:h-6 ml-2 cursor-pointer text-red-300 hover:text-red-400 active:text-red-500" />
      </button>
    </div>
  );
};

export default LinkIco;
