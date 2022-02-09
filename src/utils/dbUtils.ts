import { boardType } from "./customTypes";
import fbApp from "./firebase";
import { getDatabase, push, ref } from 'firebase/database';



export const pushBoardData = (data : boardType) => {

    const db = getDatabase(fbApp);

    push(ref(db, 'boards/'), {
        name: data.name,
        urls: data.urls
    })
}