const getStoreReadList = () =>{
        //read-list
        const StoredListStr = localStorage.getItem('read-list');
        if(StoredListStr){
            const storedList = JSON.parse(StoredListStr);
            return storedList;
        }else{
            []
        }
}

const addToStoredReadList = (id) =>{
    const storedList = getStoreReadList();
    if(storedList.includes(id)){
        //Already exist:
        console.log(id,'achii re vaii... aciiii!')
    }else{
        storedList.push(id);
        const StoredListStr = JSON.stringify(storedList);
        localStorage.setItem('read-list',StoredListStr);
    }
}

export default { addToStoredReadList };