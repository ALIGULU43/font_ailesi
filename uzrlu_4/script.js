let Kapital_Bank = (maas, mebleg,muddet) => {

    const MAXmuddet = 36

    const MAXmebleg = maas * 10

    const MAXodenis = maas * 0.45


    let faiz;

    if (muddet <= 12) {

        faiz = 0.13;

    } else if (muddet <= 24) {

        faiz = 0.15;

    } else if (muddet <= 36) {  

        faiz = 0.17;
    }


    let aylig_Odenis = (mebleg + (mebleg * faiz)) / muddet;

    if (muddet > MAXmuddet || mebleg > MAXmebleg || aylig_Odenis > MAXodenis) {

        return "Size bu shertlerle kredit dusmur";
        
    } else {

        return ` ${ mebleg } Azn mebleg size ${ faiz * 100 }%-le ${ muddet } ay muddetine aylig  ${ aylig_Odenis } manat odenis etmek serti ile verilir`;
    }
}

console.log(Kapital_Bank(400, 2500, 18));