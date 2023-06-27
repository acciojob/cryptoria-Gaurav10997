//your JS code here. If required.

function decryptMessage(str , shift){
    let newStr = "";
    for(let i = 0 ; i< str.length ; i++){
        if(str.charAt(i)==" "){
            newStr+=" "; 
            continue;
        } 
        newStr+=String.fromCharCode((((((str.charAt(i).charCodeAt(0))+shift)-97)%26)+97))
    }
    return newStr;
}

arr1 =  [
        { date: "2023-04-09", content: "Coduin gchiere" }, 
        { date: "2023-04-10", content: "Anothe_ test message" }, 
        { date: "2023-04-11", content: "This is a test message" }, 
        { date: "2023-04-12", content: "Regisnein ghitke" }
    ];

function sortMessages(arr){
    const realmsg=[]
    arr.sort((a,b)=>{
        return(
            a.date-b.date

        )
    })
    for(let i = 0 ; i< arr.length ; i++){
         realmsg.push(arr[i])
    }
    return realmsg;

}




function storeMessages(arr){
    localStorage.setItem('messages',arr)
}


