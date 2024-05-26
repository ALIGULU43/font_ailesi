const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', ]
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: '' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
 countries.forEach(salamlar=>{
    console.log(salamlar);
 })

 names.forEach(netersen=>{
    console.log(netersen);
 })

 numbers.forEach(sukur=>{
    console.log(sukur);
 })

 const newarr = countries.map(tezedi=>{
    return tezedi.toUpperCase();
 })
 console.log(newarr);

 const newcountries = countries.map(tezedi=>{
    return tezedi.length;
 })

 console.log(newcountries);
  
 const newnumbers = numbers.map(good=>{
    return good**2;
 })
console.log(newnumbers);

const newnames =names.map(addida=>{
    return addida.toUpperCase();
 })
 console.log(newnames);

 const newproducts = products.map(bizde_yox_yoxdu=>{
    return bizde_yox_yoxdu.product + '-' + bizde_yox_yoxdu.price ;
 })
 console.log(newproducts);

 const ncountries = countries.map(tezedi=>{
    return tezedi.toLowerCase();
 })

 console.log(ncountries);

 const filtercountries = ncountries.filter(i=>{
    return i.includes("land") ;
 })
 console.log(filtercountries);

 const acountries = countries.filter(herf=>{
    if (herf.length==6 ) {
        return herf ;
    }
 })
  console.log(acountries);

  const bcountries = countries.filter(herf=>{
    if (herf.length >=6 ) {
        return herf ;
    }
 })
  console.log(bcountries);

const ccountries = countries.filter(soz=>{
    if (soz[0]==='E') {
        return soz ;    
    }
})
 console.log(ccountries);

 



