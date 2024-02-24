


// let x = 12
// function foo(arg){
//     let result = `parz`
//     for(let i =2;i<arg/2;i++){
//         if(arg % i === 0){
//          result = `bard`
//         }
//     }
//     return result
// }

// console.log(foo(x));




// parzel tiv@ zuyg e te kent
// 2


// let x = 23
// function foo(arg){
//     let result = true
//     if(arg % 2 === 0){
//         result
//     }else{result = false}
//     return result
// }
// console.log(foo(x));





// cankacac tiv darcnum e darashrjani tesqov
// 3


// function foo(arg){
//     if(typeof arg === `string`){
//         if(arg.slice(-2) === `00`){
//             return arg.slice(0,2)
//         }else{
//             return (Math.floor(+arg/100) + 1)
//         }
//     }else if(typeof arg === `number`){
//         return (Math.floor((arg - 1)/100) + 1)
//     }else{return undefined}
// }
// console.log(foo(1001));













// gtnel minchev 100 mijakayqum bolor zuyg tver@
// 5

// for(let i = 2; i<= 100;i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }




// gtnel minchev 100 mijakayqum bolor kent tver@
// 6


// for(let i = 1;i<100;i++){
//     if(i%2 !== 0){
//         console.log(i);
//     }
// }


// gtnel minchev 100 mijakayqum bolor ayn tver@ voronq aranc mnacord bajanvelov 4in 
// 7


// for(let i = 4;i<100;i++){
//     if(i%4 === 0){
//         console.log(i);
//     }
// }


// gtnel zangvaci mijic amenamec tiv@
// 8
// let array = [2,3,4,5,6,7]
// let foo = (args) =>{
//     let res = 0
//     for(let i = 0;i<args.length;i++){
//         if(args[i]>res){
//             res = args[i]
//         }
//     }
//     return res
// }

// console.log(foo(array));


// gtnel zangvaci mijic amenapoqr tiv@
// 9
// let array = [2,4,5,6,77,2,1,6]

// let foo = (args) =>{
//     let result = args[0]
//     for(let i = 0;i<args.length;i++){
//         if(args[i]<=result){
//             result = args[i]
//         }
//     }
//     return result
// }
// console.log(foo(array));


// gtnel zangvaci mijic bolor zuyg tver@ ev texapoxel urish zangvaci mej
// 10

// let array = [2,4,5,6,7,8]
// let foo = (args) =>{
//     let result = [];
//     for(let i = 0;i<args.length;i++){
//         if(args[i]%2 === 0){
//             result.push(args[i])
//         }
//     }
//     return result
// }

// console.log(foo(array));





// gtnel trvac tivn ardyoq uni anmnacord qarakusi armat
// 12
// let number = 26
// if(number% Math.sqrt(number) === 0){
//     console.log(true);
// }else{console.log(false);}



// gtnel zangvaci miji irar koxq amenamec bazmapatik tiv@
// 14
// let array = [12,3,5,6,8,14]
// let foo = (args) =>{
//     let result = args[0]*args[1]
//    for(let i = 0;i<args.length;i++){
//     if(args[i]*args[i+1] > result){
//         result = args[i]*args[i+1]
//     }
//    }
//     return result
// }

// console.log(foo(array));


// gtnel zangvaci miji bolor stringer@ ev lcnel nor zangvaci
// 15
// let array = [32,3,4,`3`,`Hello`]
// let foo = (args) => {
//     let res = []
//     args.map(el => typeof el === `string` && el?res.push(el):res)
//     return res
// }
// console.log(foo(array));


// gtnel zangvaci meji falsy arjeqner@
// 16
// let array = [1,2,3,0,NaN,``,null]
// let foo = (args) =>{
//     let res  = []
//     args.map(el => el === 0 || el === undefined || el === null || isNaN(el) || el === ``|| el === false ? res.push(el):res)
//     return res
// }
// console.log(foo(array));


// zangvaci andamner@ objekti mej texadrel vorpes key isk dranc qanak@ vorpes value
// 17
// let array = [1,1,1,2,3,3,3,4,4,5,]
// let foo = (args)=>{
// let object = {}
//     for(let i = 0;i<args.length;i++){
//         if(object[args[i]]){
//             object[args[i]]+= 1
//         }else{
    // object[args[i]] = 1
// }
//     }
   
    
//     return object
// }
// console.log(foo(array));


// gtnel te zangvaci mej qani chkrknvogh andam ka veradarcnel qanak
// 18
// let arrayCount = [1,2,2,2,3,3,3,4,4,5]
// let foo = (args) =>{
//     let object = {}
//     let res = []
//     for(let i = 0;i<args.length;i++){
//         if(object[args[i]]){
//             object[args[i]]+= 1
//         }else{
//             object[args[i]]=1
//         }
//     }
// }
//         for(let key in object)
//         if(object[key]=== 1){
//             res.push(Number(key))
//         }
//         return res
//     }
        

// console.log(foo(arrayCount));

// unenq 2 zangvac gtnel dranc miji amenamec tveri tarberutyun@
// 19
// let array = [1,2,23,34,5,67]
// let array2 = [1,2,2,3,33,44,55]
// let foo = (a,b)=>{
//     let num = a[0]
//     let num2 = b[0]
//     a.map(el => el>num?num = el:num)
//     b.map(el => el>num2?num2 = el:num2)
//     return num>num2?num-num2:num2-num
// }
// console.log(foo(array,array2));

// unenq zangvac sortavorel zangvaci miji tver@ mecic poqr
// 20

// let array = [1,2,3,4,5,6,7]
// let foo = (args) =>{
//    return args.sort((a,b)=> b-a)

// }
// console.log(foo(array));

// sortavorel zangvaci miji barer@
// 21

// let array = [`Hello`,`Taron`,`How`,`Are`,`You`]
// let foo = (args) => {
//   return  args.sort((a,b)=> a.localeCompare(b))
// }
// console.log(foo(array));





// let array = [
//     employee = {
//         name : `Taron`,
//         salary:`1200000`,
//         skills:`js,react`
//     },
//     employee = {
//         name:`Romik`,
//         salary:`13000000`,
//         skills:`C#,.NET`
//     },
//     employee = {
//         name:`Edo`,
//         salary:`15000000`,
//         skills:`operator`
//     }
// ]
// let foo = (args) =>{
//     let money = 0
//     let userName = 0
//     for(let i = 0;i<args.length;i++){
//         if(args[i].salary>money){
//             money = args[i].salary;
//             userName = args[i].name
//         }
       
//     }
//     return  money,
//         userName
    
       
// }

// console.log(foo(array));

// grel funkcia vor@ veradarcnum e erku tveri bazmapatik@

// let foo = (a,b) =>{
//     return a*b
// }
// console.log(foo(2,6));


// grel funkcia vor@ veradarcnum e erku tveri gumar@

// let foo = (a,b) =>{
//     return a+b
// }
// console.log(foo(2,3));


// gtnel funkcian polidrom e te voch

// let string = `mom` 

// let foo = (args) =>{
//     let result = ``
//     for(let i = args.length - 1;i>= 0;i--){
//         result = result + args[i]
//     }
//     return args === result? true:false
// }

// console.log(foo(string));


// klonavorel object@ voch xor@ dzevov

// let object = {
//     name:`Taron`,
//     surname:`Muradyan`,
//     age:23,
//     todo: () => {

//         }
// }


// let clonedObject = JSON.stringify(object)
// console.log(clonedObject);


// function foo(x){
//     if(x < 2){
//         return x
//     }else{
//         return foo(x-1) + foo(x-2)
//     }
// }
// console.log(foo(8));


// function solution(n) {
//     if(n < 2){
//        return n
//     }else{
//         return n =  solution(n-1) + (n-1)*4
//     }
// }
// console.log(solution(4));

// function* generateSecuance(start,end){
//     for(let i = start;i <= end;i++) yield i;
//    }
// function* generatePasswordCode(){
//     yield* generateSecuance(48,57);
//     yield* generateSecuance(65,90);
//     yield* generateSecuance(97,122);
// }
// let str = ``;
// for(let code of generatePasswordCode()){
//     str += String.fromCharCode(code)
// }
// console.log(str);

// function* gen(){
//    let result =  yield `2 + 2 = ?`
//    console.log(result);
// }

// let generator = gen()
// let first = generator.next().value
// generator.next(4)

// function* gen(){
//     yield 1;
//     yield 2;
//     yield 3;
// }
// let generator  = gen()


// let num = 5n/2n
// console.log(num);

// let to = ! + [] + !![] + !![] + !![] + !![] +!![] + !![] + !![] + !![]
// console.log(to);

// how can i count simple numbers with recursia?   

// let library = {
//     book: "a",
//     pages:1,
    
// }

// let collator = new Intl.Collator(undefined,{
//     sensitivity: `accent`
// })

// let a = `vlad` > `Vlad`
// console.log(collator.compare(a));

// console.log(! + [] + !![] + !![] + 25/!![] + !![] + !![] + !![] + !![] + 25 + (![] * 8));

// let args = `747`; args@ tiv@ haytararelu hamar popoxakana
// let result = ``; stugelu hamar em haytararel

// for(let i = args.length - 1;i>= 0;i--)<== es cikli paymani mej asel em verjic fra{
//             result = result + args[i];
//         }
//  args===result?console.log(true):console.log(false);
// es paymanna vor ete havasar en uremn true ete voch false

    // let a = 16;
    // switch(a){
    //     case 4: console.log(`its smaller`);
    //     break;
    //     case 10: console.log(`its too smaller`);
    //     break;
    //     case 16: console.log(`its fine`);
    //     break;
    //     default:console.log(`voria`);
    //     break;
    // }






//     let number = 81

// let foo = (args) =>{
//     let result = 3
//     while(result<= args){
//         if(result === args){
//             return true
//         }
//          result = result * 3
//     }
//     return false
// }
// console.log(foo(number));



// let numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// numArray = numArray.filter((number) => {
//   for (let i = 2; i <= number/2; i++) {
//     if (number % i === 0) return false;
//   }
//   return true;
// });

// console.log(numArray);


// let arr = [2,8,16,5];
// let arr2 = [4,5,6,7];
// let res = [];
// for(let i = 0;i<arr.length;i++){
//   res.push(arr[i]-arr2[i]);
  
// }
// for(let i =0;i<res.length;i++){
//   if(res[i]){
//     res[i] = `${i+1} hanum@ = ${res[i]}`
//   }
// }
// console.log(res);

// fibonachi
// let number = 16;
// let x = 1;
// let y = 1;
// let z;

// for(let i = 1;i<=number;i++){
  
//  z = x + y;
//  x = y;
//  y = z;

// }
// console.log(x);



// let array = [2,3,4,56,4,4,5];
// let array2 = [];
// 
// }

// console.log(array2);


// function foo(a,b){
  
//     for(let i = 0;i<a.length;i++){
//             if(i%2 === 0){
//                 b.push(a[i]);
//             }
//         }
//         return b
// }

// console.log(foo(array,array2));



// gtnel te qani zangvaci minimal tvic minchev maqsimal tiv@ qani bnakan tiv e bacakayum zangvaci mijic
// function solution(statues) {
//     let count = 0
//     let num = statues.sort((a,b)=> a-b);
//     for(let i = 0;i<num.length;i++){
//         if(num[i+1]-num[i] > 1){
//             count+= num[i+1]-num[i] - 1
//         }
//     }
//     return count
// }

// console.log(solution([6,3,2,8]));

// gtnel qani qaylov karox em sortavorel zangvac@ ete 1 qaylov apa veradardznel true ete mekic avel uremn false
// function solution(sequence) {
//     let found = 0;
//     for (let i=0;i<sequence.length;i++) {
    
//       if(sequence[i] <= sequence[i-1]) {
//         found++;
//         if(found > 1){
//             return false; 
//         }
//         if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) {
//             return false; 
// } 
//       }
      
//     } 
//     return true;
// }


// console.log(solution([1, 2, 3, 4, 3, 6]));




// arandznacnel zangvaci miji bolor amenaerkar stringner@

// let array = ["aba", "aa", "ad", "vcd", "aba"];


// version1
// let arr = Math.max(...array.map(el => el.length));
// let res = array.filter(el => el.length === arr);
// console.log(res);


// version 2
// let result  = 0;
// for(let i = 0;i<array.length;i++){
    
//     if(result<array[i].length){
//         result = array[i].length
//     }
// }
// let res = array.filter(el => el.length === result)

// console.log(res)


// let array = [2,2,3,45];
// let x = (e) => {return e % 2 === 0}
// console.log(array.some(x));
// console.log(array.every(x));
// array = array.find(el => el > 5);
// console.log(array);

// unenq erku string gtnel bolor ayn tareri qanak@ vor@ krknvum e orinak`
// str = 'sdada' str2= 'sad'  output` sad aysinqn 3 tar




// function solution(s1,s2) {
//       let count = 0; 
//       const obj = s2.split(""); 
//       for(const str of s1){ 
//         let idx = obj.findIndex(s => s === str); 
//         if(idx >= 0){ 
//           count++;         
                // obj.splice(idx,1)
//         } 
//       } 
//       return count; 
       
//         }

//         console.log(solution('asdnc','kjnlkmzasx'));

// let x = 876382;
// let str = x + '';
// let count = 0;
// let res = str.split('')
// count += +res.map(el => el )
// console.log(count);


//  parzel ardyoq tiv@ erjanik e te voch

// function solution(n) {
//     let str =  n + '';
//     let res = str.split('');
//     let arr = [];
//     let count = 0;
//     let count2 = 0;
//     for(let i = 0;i<res.length/2;i++){
//         arr.push(res[i]);
//     }


//   for(let i = 0;i<arr.length;i++){
//       count2 += +arr[i];
//     //   console.log(count);
//      res.shift(res[i])
//   }
//   for(let i = 0;i<res.length;i++){
//     count += +res[i]
// }

//   if(count === count2){
//       return true
//   }
//       return false
  
    
//   }

//   console.log(solution(239017));
// matricanerna knayes


// function matrixElementsSum(matrix) {
//     var h = matrix.length;
//     var l = matrix[0].length;
//     for(var i = 0; i<h; i++){
//         for(var j=0; j<l; j++){
//             if(matrix[i][j]==0 && typeof matrix[i+1] !== 'undefined') matrix[i+1][j]=0;
//         }
//     }
//     return arrSum(matrix);
// }

// const arrSum = array =>
//     array.reduce(
//         (sum, num) => sum + (Array.isArray(num) ? arrSum(num) : num * 1),
//         0
//     );



// sortavorel zangvac@ aynpes vor -1er@ texic chsharjven

// let array = [1,2,3,4,5,-1,-1,-1,89,-1]
// function solution(a) {
//     let num = a.filter(el => el != -1);
//     num.sort((a,b) => b - a);
//     for(let i  = 0;i<a.length;i++){
//         a[i] !== -1?a[i] = num.pop():0;
//     }
//     return a
//  }
//  console.log(solution(array));


// zangvaci arajin andami tiv@ qcel arajin tmi mej 2rd@ erkrord tmi mej 3rd@ arajini mej 4rd@ erkrordi mej ev aydpes sharunak
// let a = [2,4,5,6,7]
// let team1 = 0;
// let team2 = a[0];
// let res = [];
//     for(let i = 1;i<a.length;i++){
//         if(i%2 !== 0){
//             team2 += +a[i];
//             console.log(team1);
//         }else{
//             team1 += +a[i]
//             console.log(team2);
//         }
//     }
//     res.push(team2)
// res.push(team1);

// console.log(res);




//  zangvaci stringi nisheri qanakov avelacnel zangvaci skbic u verjic asghanisher inchpes
// naev avelacnel zangvaci stringeri demic ev hetevic mekakan astghanish
// orinak ['sdf','ghj']   output = ['*****','*sdf*','*ghj*',*****]
// let array = ['asfe', 'sdfsd'];

// function solution(picture) {
//     let start = '*'.repeat(picture[0].length);
//         picture.unshift(start);
//     for(let i = 0;i<picture.length;i++){
//         picture[i]= picture[i] + '*';
//         picture[i] = '*' + picture[i]; 
//     }
//     let end = '*'.repeat(picture[1].length);
//     picture.push(end);
//     return picture;
    
// }

// console.log(solution(array));


// stugel ardyoq erku irar havasar erkarutyamb zangvacneri dasavorvac arjeqner@ irar 
// havasaren te voch ete voch apa ete mek qaylov dasavorvacutyunner@ karogh enq uxxel uremn veradarcnel true ete voch false
// function areSimilar(a, b) {
//     var are = true;
//     var av = null;
//     var bv = null;
//     var swap = false;
//     for (var i = 0; i < a.length; i++) {
//       if (a[i] !== b[i]) {
//         if (av === null || bv === null) {
//           av = a[i]; bv = b[i];
//         } else {
//           if (swap || av !== b[i] || bv !== a[i]) {
//             are = false;
//           }
//           swap = true;
//         }
//       }
//     }
//     return are
// }

// console.log([2,3,4],[5,3,4]);








// let array = [1,2,-3,45,-6];
// let num = 0
// for(let i =0;i<array.length;i++){
//     if(array[i] < 0){
//         array[i] = array[i]*(-1)
//     }
//     num+= array[i]
// }
// console.log(num);



// stringi miji tver@ veracel meki ayd dvi qanakutyuamb
// let s = 'ajsdghkj45'
// let res = ''

// for(let i = 0;i<s.length;i++){

//     if(!isNaN(Number(s[i]))){
//        res += '1'.repeat(s[i]);
//     }else{res+= s[i]}
    
// }
// console.log(res);



// function lateRide(n) {
// 	return (Math.floor(n / 60) + '' + (n % 60)).split('').map(Number).reduce((a, b) => a + b);
// }



// Некоторый уровень использования телефона можно описать следующим образом:

// первая минута разговора стоит min1центов,
// каждая минута со 2-го по 10-е (включительно) стоит min2_10центов
// каждая минута после 10 стоит min11центов.
// У вас есть sценты на вашем счету до звонка. Какова продолжительность самого длинного звонка (в минутах, округленного до ближайшего целого числа в меньшую сторону)?
// Для min1 = 3, min2_10 = 1, min11 = 2и s = 20, выход должен быть
// solution(min1, min2_10, min11, s) = 14.
// lucum
// function solution(min1, min2_10, min11, s) {
//     let num = 0;
//    if(s >= min1){
//        s-= min1;
//        num+= 1
//    }
//    if(s>= min2_10){
//        let m = Math.min(9,s/min2_10);
//        num += m;
//        s -= m*min2_10;
//    }
//    if(s>= min11){
//        num += s/min11
//    }
   
//   return Math.floor(num)
// }





// You found two items in a treasure chest! The first item weighs weight1 and is worth value1, and the second item weighs weight2 and is worth value2. What is the total maximum value of the items you can take with you, assuming that your max weight capacity is maxW and you can't come back for the items later?

// Note that there are only two items and you can't bring more than one item of each type, i.e. you can't take two first items or two second items.

// Example

// For value1 = 10, weight1 = 5, value2 = 6, weight2 = 4, and maxW = 8, the output should be
// solution(value1, weight1, value2, weight2, maxW) = 10.


// function solution(value1, weight1, value2, weight2, maxW) {
//     if(weight1 > maxW && weight2 > maxW){
//         return 0
//     }
//     if(weight1 + weight2 > maxW){
//         if((weight1>weight2 && weight1< maxW) || (weight1<weight2 && weight2 >= maxW)){
//             return value1
//         }else if((weight2 > weight1 && weight2 < maxW) || (weight2 < weight1 && weight1 >= maxW)){
//             return value2
//         }
//     }
//     return value1 + value2
// }



// stugel ete funkicayi hajord parametr avelacnenq knkni anverj cikl te voch
// while a is not equal to b do
//   increase a by 1
//   decrease b by 1

// function solution(a, b) {
//     return a%2 !== b%2 || a>b
// }



// ete a ev b arjeqneri mijev matematikakan
//  inchvor gorcoghutyun anenq +-*kam / ev havasar lini c argumentin uremn togh tpi true hak. depqum false
// function solution(a, b, c) {
//     let res = false
//     if(a*b === c || a-b === c || a+b === c || a/b === c){
//         res = true
//     }
//     return res
// }

// gtnel tvi faktoriali amenamot mec andam@ orinak 17i depqum patasxan@ = e 24i
// function solution(n) {
//     let x = 1;
//     let i = 1;
//     while(n>x){
//         i++;
//         x*= i
//     }
//     return x
//  }



// ardyoq polidrom e te voch

// function solution(inputString) {
//     let arr = inputString.split('');
//     let count = 0;
//     let el;
//     let pos;
//     while(arr.length){
//         el = arr.pop();
//         pos = arr.indexOf(el);
//         if(pos<0){
//             count++
//         }else{
//             arr.splice(pos,1);
//         }
//     }
//     return count<2
//  }



// haskanal qo u @nkerojt dzerqi ujer@ miasin havasar en te voch

// function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
//     return yourLeft === friendsRight && friendsLeft === yourRight ||yourLeft === friendsLeft && friendsRight === yourRight
// }
 
 

// gtnel ereq tveri miji maximal tarberutyun@
// function solution(inputArray) {
//     let res = 0
//     for(let i = 0;i<inputArray.length;i++){
//         if(Math.abs(inputArray[i]-inputArray[i+1]) > res){
//             res = Math.abs(inputArray[i]-inputArray[i+1]) 
//         }
//     }
//     return res
// }






// xndir
// IP-адрес — это числовая метка, присваиваемая каждому устройству (например, компьютеру, принтеру), участвующему в компьютерной сети, использующей для связи Интернет-протокол. Существует две версии интернет-протокола и, следовательно, две версии адресов. Одним из них является адрес IPv4 .

// Получив строку, выясните, удовлетворяет ли она правилам именования адресов IPv4.

// Пример

// Для inputString = "172.16.254.1", вывод должен быть
// solution(inputString) = true;
// function solution(inputString) {
//     let res = false;
//     let num = [];
//     let str = '';
//     let x;
//     for(let i = 0;i<inputString.length;i++){
//         if(inputString[i] !== '.'){
//            num.push(inputString[i])
//         }
//     }
//     console.log(num);
//     for(let i = 2;i<num.length;i++){
//         if(num[i]+ num[i-1] + num[i-2] >255){
//             res
//         }
//     }
  
//     return res 
// }
// console.log(solution('174.208.12'));



// xndir
// Вам дан массив целых чисел, представляющих координаты препятствий, расположенных на прямой.

// Предположим, что вы прыгаете с точки с координатой 0вправо. Вам разрешено совершать прыжки только на одинаковую длину, представленную некоторым целым числом.

// Найдите минимальную длину прыжка, достаточную для преодоления всех препятствий.

// Пример

// Для inputArray = [5, 3, 6, 7, 9], вывод должен быть
// solution(inputArray) = 4.
// let max = Math.max(...inputArray);
//     for(let i = 1;i<max;i++){
//         let res = inputArray.some(el => el%i == 0);
//         if(!res)return i
//     }
//     return max+1


// xndir replace zangvaci mijibolor argsRip-ov elementner@ poxel rep-i elementnerov

// let x = [2,4,5,6];
// let foo = (argsRep,rep) => {
//     return x.map(el => el === argsRep?rep:el)
// }
// console.log(foo(5,7));
    
//  chshtel ardyoq tvi bolor tvanshanner@ zuyg en te voch

// function solution(n) {
//     return String(n).split('').every(el => el%2 === 0)
//  }
 

// let x = [1,2,3,4,-8,9,0,-9];
// let num = 0;
// for(let i = 0;i<x.length;i++){
//     if(num>x[i]){
//         num = x[i]
//     }
// }
// console.log(num);


// function solution(args){
//     return args.split('').map(el => el.charCodeAt(0) === 122?'a':String.fromCharCode(el.charCodeAt(0)+1)).join('');
// }

// console.log(solution('hello'));


// Вы внесли определенную сумму денег на свой банковский счет. Каждый год ваш баланс увеличивается на такой же рост rate.
//  Предполагая, что вы не делаете никаких дополнительных депозитов, узнайте, сколько времени потребуется, чтобы ваш баланс прошел определенный threshold.

// function solution(deposit, rate, threshold) {
//     let count = 0;
//     while(deposit<threshold){
//         count ++;
//         deposit += deposit*rate/100;
//     }
//   return count
//  }















// let str = 'jdfkg4jfdg5';
// let res = '';
// for(let i = 0;i<str.length;i++){
//     if(!isNaN(Number(str[i]))){
//         res += '1'.repeat(str[i])
//     }else{
//         res+= str[i]
//     }

// }
// console.log(res);


// function solution(s) {
//     return s.split('').filter((el,i,self)=>i===self.indexOf(el)).length
// }
// console.log(solution('hello'));

// let str = '234'
// function foo(arg){
//     let res = ''
   
//     for(let i = 0;i<arg.length;i++){
//         res+=arg[i]
//         if(res.length === 10){
//             res += str
//         }
//          if( res.length>20 && res.length%10 === 2){
//             res+= str
//         }
//     }
//     return res
// }
// console.log(foo('sjdlkfjldsjflkdsjfkljdsklfjdslfjldlkjlf'));

// function foo(number){
//     let res = 0
//     for(let i = number.length-1;i >= 0;i--){
//         if(number[i] == '1'){
//             res += Math.pow(2,number.length-1 - i)
//         }
//     }
//     return res
// }
// console.log(foo('101111'));



// function solution(votes, k) {
// let max = Math.max(...votes);
// let count = 0;
// let y = 0;
// if(k === 0){
// for(let i = 0;i<votes.length;i++){
//     if(max === votes[i]){
//         y++
//     }
// }
// if(y>1){
//     return count = 0
// }else{
//    return count = 1
// }
// }else{
//  for(let i = 0;i<votes.length;i++){
//     if(votes[i] + k>max){
//     for(let j = 0;j<votes.length;j++){
//         if(votes[i] + k !== votes[j] && k>0){
//            count++
//         }
//         }
//     }
    
//     }
//     return count/votes.length
// }


// }


console.log();
console.log('F'.charCodeAt(0));
