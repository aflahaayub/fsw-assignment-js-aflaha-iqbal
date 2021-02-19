const numbers = [20, 30, 40, 50, 60, 70];

//1. Carilah element array terkecil dan terbesar
let max = Math.max(...numbers); // ... adalah spread operator yang berguna untuk membagi elemen berbentuk array menjadi element tunggal. Digunakan untuk membaca array
let min = Math.min(...numbers);
console.log(`1. Element terbesar: ${max}, dan Element terkecil: ${min}`);

//2. Urutkan array secara descending
function descendingArr(a, b){
  if(a > b){
    return -1; //If compareFunction(a, b) returns less than 0, leave a and b unchanged
  } else if(a < b){
    return 1; //If compareFunction(a, b) returns greater than 0, sort b before a
  } else{
    return 0 //If compareFunction(a, b) returns 0, leave a and b unchanged with respect to each other, but sorted with respect to all different elements.
  }
}
console.log(numbers.sort(descendingArr));

//3. Cari tanggal today, yesterday, tomorrow using D-M-YYYY
const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

function formattedDate(date){
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`
}

console.log(`3. Today: ${formattedDate(today)}, Yesterday: ${formattedDate(yesterday)}, Tomorrow: ${formattedDate(tomorrow)}`);

//4. Buatlah arr numbers diatas menjadi string seperti: 39, 59, 79, 99, 119, 139
//map: mengeluarkan isi satu persatu array nya
let result = numbers.reverse().map(angka => angka * 2 - 1); //yang diminta di dalam map adalah callback atau function tanpa nama
console.log('4. ' + result.toString());