import { boardType } from "../utils/customTypes";
import { deleteBoardData } from "../utils/dbUtils";
import LinkBoard from "./LinkBoard";

const BoardsGrid = ({ boards }: { boards: boardType[] }) => {
  return (
    <div className="h-full w-full py-6 px-4 flex gap-4 flex-wrap justify-center xs:justify-start overflow-y-auto">
      {(boards && boards.length != 0) ? boards.map((board, i) => (
        <LinkBoard removeHandler={(boardId) => deleteBoardData(boardId)} key={i} id={board.id ? board.id : ''} name={board.name} urls={board.urls} />
      )) : <div className="h-full w-full flex items-center justify-center"><div className="spinner"></div></div>}
    </div>
  );
};

export default BoardsGrid;
