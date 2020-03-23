greatest = (int1, int2) =>{
  let log = console.log;  
    while (int2 != 0){
        r = int1
        int1 = int2
        int2 = r % int2
    }
    log(int1)
}

greatest(17, 13)