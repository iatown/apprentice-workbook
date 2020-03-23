let log = console.log;

identical = (arr) =>{
    log(first(arr))
   

}


first = (arr) =>{
    for(let i =0; i< arr.length; i++){
        let first = arr[i]
    }
    return arr
}


identical([[1], [2], [3], [4]])