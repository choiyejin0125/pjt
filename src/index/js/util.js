export const nowDate = (purpose) =>{
    switch(purpose){
        case "common":
            return new Date();
        case "public":
                const now = new Date();
                const hours = now.getHours();
                const minutes = now.getMinutes();
                const seconds = now.getSeconds();

                return {'hours': hours, 'minutes': minutes, 'seconds': seconds};
        case "private":
            const privatedate = new Date().toISOString();
            return privatedate.replace(/[-:]/g, '').slice(0, -5);
        default:
            console.log('nowDate error');
            throw new Error('nowDate error');
    }
}
