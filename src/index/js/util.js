export const nowDate = (purpose) =>{
    switch(purpose){
        case "common":
            return Math.floor(Date.now() / 1000);
        case "public":
                const now = new Date();
                const year = now.getFullYear();
                const month = String(now.getMonth() + 1).padStart(2, '0');
                const date = String(now.getDate()).padStart(2, '0');
                const hours = String(now.getHours()).padStart(2, '0');
                const minutes = String(now.getMinutes()).padStart(2, '0');
                const seconds = String(now.getSeconds()).padStart(2, '0');

                return `${year}-${month}-${date} | ${hours}:${minutes}:${seconds}`;
        case "private":
            const privatedate = new Date().toISOString();
            return privatedate.replace(/[-:]/g, '').slice(0, -5);
        default:
            console.log('nowDate error');
            throw new Error('nowDate error');
    }
}
