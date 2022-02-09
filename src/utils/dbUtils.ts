import { boardType } from "./customTypes";
import fbApp from "./firebase";
import { getDatabase, push, ref, remove } from 'firebase/database';



export const pushBoardData = (data : boardType) => {

    const db = getDatabase(fbApp);

    push(ref(db, 'boards/'), {
        name: data.name,
        urls: data.urls
    })
};

export const deleteBoardData = (id: string) => {
    const db = getDatabase(fbApp);

    const boardDataRef = ref(db, "boards/" + id);
    remove(boardDataRef);

}