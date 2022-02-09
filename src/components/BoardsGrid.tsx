import { boardType } from "../utils/customTypes";
import LinkBoard from "./LinkBoard";

const BoardsGrid = ({ boards }: { boards: boardType[] }) => {
  return (
    <div className="h-full w-full pt-6 px-4 flex gap-4 flex-wrap justify-center xs:justify-start">
      {boards.map((board, i) => (
        <LinkBoard key={i} id={board.id ? board.id : ''} name={board.name} urls={board.urls} />
      ))}
    </div>
  );
};

export default BoardsGrid;
