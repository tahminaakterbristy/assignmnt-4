
//1. seer to mon
function seerToMon(seer){
   if(seer<0)
   return 'wrong insert';
   const mon = seer/40;
   return mon;

}
console.log(seerToMon(40));

//2.Total sales
function totalsales(shirt,pant,shoe){
   const shirtprice = 100;
   const pantPrice = 200;
   const shoeprice = 500;
   if(shirt < 0 pant < 0 shoe < 0){
      return "Can't be negetive";
   }
   const total = shirt * shirtprice + pant * pantPrice + shoe* shoeprice;
   return total;
}
 console.log(totalsales(1,1,1));

 //3.delivery cost

 function deliverycost(num) {
    const first100 = 100;
    const second100 = 80;
    const rest = 50;

    if (num < 100) {
       return sum * first100;
    } else if ( num > 100 & < 200){
       const first100 = 100 * first100;
       const rest100 = (num - 100) * second100;
       return first100Cost + restproduct;
    } else if(num > 200){
       const first100Cost = 100 * first100;
       const second100cost = 100 * second100;
       const restproduct = (num - 200) * rest;
       return first100 + second100 + restproduct;
    }

 }
 console.log(deliverycost(102));
 


 //4.Perfect friend


 function perfectFriend(arr){
    for (let i = 0; i < arr.length ; i++){
       const name = arr[i];
       if(name.length == 5){
          return name;
       }
    }


 }
 const friends = ["Rahim","aklima","joseph"];
 console.log(perfectFriend(friends));
