

import { openDB } from "idb";

const dbPromise = openDB('Imgstorage', 1, {
    upgrade(db) { //db 생성
        if (!db.objectStoreNames.contains('topimages')){
            db.createObjectStore('topimages', {keyPath: 'name'});
        }
    }
});


export async function addimage(name, url){ // db에 데이터 추가
    const db = await dbPromise;
    const tx = db.transaction('topimages', 'readwrite');
    const store = tx.objectStore('topimages');

    const reader = new FileReader();

    const Incodeurl = reader.readAsDataURL(url);
    await store.add({'name': name, 'url': Incodeurl});
}