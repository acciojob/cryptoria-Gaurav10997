//your JS code here. If required.

function decryptMessage(str , shift){
    let newStr = "";
    for(let i = 0 ; i< str.length ; i++){
        newStr+=String.fromCharCode((((((str.charAt(i).charCodeAt(0))+shift)-97)%26)+97))
    }
    return newStr;
}

function sortMessages(arr){
    const realmsg=[]
    arr.sort((a,b)=>{
        return(
            a.date-b.date

        )
    })
    for(let i = 0 ; i< arr.length ; i++){
         realmsg.push(arr[i].content)
    }
    storeMessages(realmsg)
    return realmsg;

}


function storeMessages(arr){
    localStorage.setItem('messages',arr)
}
