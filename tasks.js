// const factorial = n => {
//     let res = 0;
//     if(n == 0 || n == 1){
//         return 1;
//     }   else {
//         res = n * factorial(n - 1);
//     }
//     return res;
//   };
// console.log(factorial(0));
// console.log(factorial(1));
// console.log(factorial(3));
// console.log(factorial(4));
// console.log(factorial(5));

// function strong(n) {
//     let arr = (String(n)).split('');
//     let sumA = 0;
//     let sumB = 0;
//     if(arr.length == 1){
//     //   return  n == 1? 1: n * strong(n - 1);
//         let c = arr.map(item => {
//             if(item == 1 || item == 2){
//                  sumA = +item;
//                 // console.log(sumA)
//             } else{
//                  sumB = item * strong(item - 1);
//                 //  console.log(sumB)
//             }
//         });
        
//         if(+c == n ){
//             return "STRONG!!!!";
//         } else{
//             return "Not Strong !!";
//         }
//     } else if( arr.length > 1) {

//         let b = arr.map(item => {
//             if(item == 1){
//                 return sumA = +item;
//             } else {
//                 return sumB = item * strong(item - 1);
//             }
//             // return sumA + sumB;
//         }).reduce((s,c) => s + c, 0);
//         if(b == n ){
//             return "STRONG!!!!";
//         } else{
//             return "Not Strong !!";
//         }
//     }

// }
// console.log(strong(2));
// console.log(strong(145));
// // console.log(strong(2));
// // console.log(strong(1));
// // console.log(strong(5));



// function removeSmallest(numbers) {
//     if(numbers.length > 0){
//         let numSort = [...numbers].sort((a, b) => a - b)[0];
//         let numbersNew = [...numbers];
//         let numInd = numbersNew.findIndex(item => item == numSort);
//         numbersNew.splice(numInd, 1);
//         return numbersNew;
//     } else {
//         return numbers;
//     }
//   }
// console.log(removeSmallest([1, 2, 3, 4, 5]));
// console.log(removeSmallest([5, 3, 2, 1, 4]));
// console.log(removeSmallest([2, 2, 1, 2, 1]));

// function dotCalculator (equation) {
//     let [a, op, b] = equation.split(" ");
//     a = a.split('').length;
//     b = b.split('').length;

//     const operations = {
//         "+": a + b,
//         "-": a - b,
//         "*": a * b,
//         "//": a / b,
//     };

//     return ".".repeat(operations[op]);
// }

//   console.log(dotCalculator('..'))
//   console.log(dotCalculator('.... + ....'))
//   console.log(dotCalculator('..... // ..'))


// function outed(meet, boss){
//    let meetLength = Object.values(meet).length;
//    let indexBoss = Object.keys(meet).findIndex((item) => item == boss);
//    let sum = Object.values(meet).map((item,i) => i == indexBoss? item * 2: item).reduce((s,c) => s+ c);
    
//     if(sum / meetLength <= 5){
//         return  'Get Out Now!';
//     } else {
//         return 'Nice Work Champ!';
//     }

// }


// console.log(outed({'tim':0, 'jim':2, 'randy':0, 'sandy':7, 'andy':0, 'katie':5, 'laura':1, 'saajid':2, 'alex':3, 'john':2, 'mr':0}, 'laura'));

// console.log(outed({'tim':1, 'jim':3, 'randy':9, 'sandy':6, 'andy':7, 'katie':6, 'laura':9, 'saajid':9, 'alex':9, 'john':9, 'mr':8}, 'katie'));

// console.log(outed({'tim':2, 'jim':4, 'randy':0, 'sandy':5, 'andy':8, 'katie':6, 'laura':2, 'saajid':2, 'alex':3, 'john':2, 'mr':8}, 'john'));




// _______________________________________________
// const urlResponse = 'https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=hWfHpLg4xMevjAzG0kz1nsknGcod7WD7';

// function get(url){
//     return fetch(url);
// }

// get(urlResponse)
//     .then(response => response.json())
//     .then(data => getWeather(data))


// function getWeather(a, one, two, three){
//     let day = a.data.timelines[0].intervals;

//     // Data
//     let dayDataOne = (day[one].startTime).slice(0, 10);
//     let dayDataTwo = (day[two].startTime).slice(0, 10);
//     let dayDataThree = (day[three].startTime).slice(0, 10);
//     // Temperature
//     let dayOneTemperature = day[one].values.temperature;
//     let dayTwoTemperature = day[two].values.temperature;
//     let dayThreeTemperature = day[three].values.temperature;

//     //set data
//     document.querySelector('.data-one').append(dayDataOne);
//     document.querySelector('.data-two').append(dayDataTwo);
//     document.querySelector('.data-three').append(dayDataThree);
//     //set temperature
//     document.querySelector('.degree-one').append(dayOneTemperature);
//     document.querySelector('.degree-two').append(dayTwoTemperature);
//     document.querySelector('.degree-three').append(dayThreeTemperature);
// }

// let now = new Date();
// let today = new Date().toISOString().slice(0, 13)
// let tomorrow = new Date(now.getTime() + (24 * 60 * 60 * 1000)).toISOString().slice(0, 13)
// let dayAfterTomorrow = new Date(now.getTime() + (48 * 60 * 60 * 1000)).toISOString().slice(0, 13)
// console.log(today )
// console.log(tomorrow )
// console.log(dayAfterTomorrow )




// ______________________________________________________________


// const urlResponse = 'https://api.tomorrow.io/v4/timelines?location=-73.98529171943665,40.75872069597532&fields=temperature&timesteps=1h&units=metric&apikey=hWfHpLg4xMevjAzG0kz1nsknGcod7WD7';

// function get(url){
//     return fetch(url);
// }

// get(urlResponse)
//     .then(response => response.json())
//     .then(data => getWeather(data));


// let obj = {"data":{"timelines":[{"timestep":"1h","endTime":"2022-07-13T23:00:00Z","startTime":"2022-07-09T11:00:00Z","intervals":[{"startTime":"2022-07-09T11:00:00Z","values":{"temperature":-48.9}},{"startTime":"2022-07-09T12:00:00Z","values":{"temperature":-48.63}},{"startTime":"2022-07-09T13:00:00Z","values":{"temperature":-48.43}},{"startTime":"2022-07-09T14:00:00Z","values":{"temperature":-48.56}},{"startTime":"2022-07-09T15:00:00Z","values":{"temperature":-47.79}},{"startTime":"2022-07-09T16:00:00Z","values":{"temperature":-48.21}},{"startTime":"2022-07-09T17:00:00Z","values":{"temperature":-49.55}},{"startTime":"2022-07-09T18:00:00Z","values":{"temperature":-49.27}},{"startTime":"2022-07-09T19:00:00Z","values":{"temperature":-50}},{"startTime":"2022-07-09T20:00:00Z","values":{"temperature":-50.36}},{"startTime":"2022-07-09T21:00:00Z","values":{"temperature":-50.63}},{"startTime":"2022-07-09T22:00:00Z","values":{"temperature":-50.27}},{"startTime":"2022-07-09T23:00:00Z","values":{"temperature":-49.7}},{"startTime":"2022-07-10T00:00:00Z","values":{"temperature":-49.22}},{"startTime":"2022-07-10T01:00:00Z","values":{"temperature":-48.64}},{"startTime":"2022-07-10T02:00:00Z","values":{"temperature":-48.33}},{"startTime":"2022-07-10T03:00:00Z","values":{"temperature":-48.23}},{"startTime":"2022-07-10T04:00:00Z","values":{"temperature":-48.34}},{"startTime":"2022-07-10T05:00:00Z","values":{"temperature":-48.46}},{"startTime":"2022-07-10T06:00:00Z","values":{"temperature":-48.54}},{"startTime":"2022-07-10T07:00:00Z","values":{"temperature":-48.63}},{"startTime":"2022-07-10T08:00:00Z","values":{"temperature":-48.82}},{"startTime":"2022-07-10T09:00:00Z","values":{"temperature":-49.14}},{"startTime":"2022-07-10T10:00:00Z","values":{"temperature":-49.56}},{"startTime":"2022-07-10T11:00:00Z","values":{"temperature":-50.12}},{"startTime":"2022-07-10T12:00:00Z","values":{"temperature":-50.67}},{"startTime":"2022-07-10T13:00:00Z","values":{"temperature":-51}},{"startTime":"2022-07-10T14:00:00Z","values":{"temperature":-51.31}},{"startTime":"2022-07-10T15:00:00Z","values":{"temperature":-51.83}},{"startTime":"2022-07-10T16:00:00Z","values":{"temperature":-52.47}},{"startTime":"2022-07-10T17:00:00Z","values":{"temperature":-53.09}},{"startTime":"2022-07-10T18:00:00Z","values":{"temperature":-53.7}},{"startTime":"2022-07-10T19:00:00Z","values":{"temperature":-54.41}},{"startTime":"2022-07-10T20:00:00Z","values":{"temperature":-55.13}},{"startTime":"2022-07-10T21:00:00Z","values":{"temperature":-55.66}},{"startTime":"2022-07-10T22:00:00Z","values":{"temperature":-55.99}},{"startTime":"2022-07-10T23:00:00Z","values":{"temperature":-56.14}},{"startTime":"2022-07-11T00:00:00Z","values":{"temperature":-56.21}},{"startTime":"2022-07-11T01:00:00Z","values":{"temperature":-56.25}},{"startTime":"2022-07-11T02:00:00Z","values":{"temperature":-56.31}},{"startTime":"2022-07-11T03:00:00Z","values":{"temperature":-56.32}},{"startTime":"2022-07-11T04:00:00Z","values":{"temperature":-56.3}},{"startTime":"2022-07-11T05:00:00Z","values":{"temperature":-56.23}},{"startTime":"2022-07-11T06:00:00Z","values":{"temperature":-56.17}},{"startTime":"2022-07-11T07:00:00Z","values":{"temperature":-56.22}},{"startTime":"2022-07-11T08:00:00Z","values":{"temperature":-56.18}},{"startTime":"2022-07-11T09:00:00Z","values":{"temperature":-55.9}},{"startTime":"2022-07-11T10:00:00Z","values":{"temperature":-55.67}},{"startTime":"2022-07-11T11:00:00Z","values":{"temperature":-55.72}},{"startTime":"2022-07-11T12:00:00Z","values":{"temperature":-55.6}},{"startTime":"2022-07-11T13:00:00Z","values":{"temperature":-55.57}},{"startTime":"2022-07-11T14:00:00Z","values":{"temperature":-55.63}},{"startTime":"2022-07-11T15:00:00Z","values":{"temperature":-55.71}},{"startTime":"2022-07-11T16:00:00Z","values":{"temperature":-55.83}},{"startTime":"2022-07-11T17:00:00Z","values":{"temperature":-56.03}},{"startTime":"2022-07-11T18:00:00Z","values":{"temperature":-56.3}},{"startTime":"2022-07-11T19:00:00Z","values":{"temperature":-56.49}},{"startTime":"2022-07-11T20:00:00Z","values":{"temperature":-56.62}},{"startTime":"2022-07-11T21:00:00Z","values":{"temperature":-56.75}},{"startTime":"2022-07-11T22:00:00Z","values":{"temperature":-56.83}},{"startTime":"2022-07-11T23:00:00Z","values":{"temperature":-56.99}},{"startTime":"2022-07-12T00:00:00Z","values":{"temperature":-57.22}},{"startTime":"2022-07-12T01:00:00Z","values":{"temperature":-57.33}},{"startTime":"2022-07-12T02:00:00Z","values":{"temperature":-57.31}},{"startTime":"2022-07-12T03:00:00Z","values":{"temperature":-57.28}},{"startTime":"2022-07-12T04:00:00Z","values":{"temperature":-57.5}},{"startTime":"2022-07-12T05:00:00Z","values":{"temperature":-57.47}},{"startTime":"2022-07-12T06:00:00Z","values":{"temperature":-57.66}},{"startTime":"2022-07-12T07:00:00Z","values":{"temperature":-57.65}},{"startTime":"2022-07-12T08:00:00Z","values":{"temperature":-57.87}},{"startTime":"2022-07-12T09:00:00Z","values":{"temperature":-58.28}},{"startTime":"2022-07-12T10:00:00Z","values":{"temperature":-58.8}},{"startTime":"2022-07-12T11:00:00Z","values":{"temperature":-59.5}},{"startTime":"2022-07-12T12:00:00Z","values":{"temperature":-59.9}},{"startTime":"2022-07-12T13:00:00Z","values":{"temperature":-60.45}},{"startTime":"2022-07-12T14:00:00Z","values":{"temperature":-60.92}},{"startTime":"2022-07-12T15:00:00Z","values":{"temperature":-61.31}},{"startTime":"2022-07-12T16:00:00Z","values":{"temperature":-61.73}},{"startTime":"2022-07-12T17:00:00Z","values":{"temperature":-62.24}},{"startTime":"2022-07-12T18:00:00Z","values":{"temperature":-62.55}},{"startTime":"2022-07-12T19:00:00Z","values":{"temperature":-62.72}},{"startTime":"2022-07-12T20:00:00Z","values":{"temperature":-62.65}},{"startTime":"2022-07-12T21:00:00Z","values":{"temperature":-62.54}},{"startTime":"2022-07-12T22:00:00Z","values":{"temperature":-62.52}},{"startTime":"2022-07-12T23:00:00Z","values":{"temperature":-62.35}},{"startTime":"2022-07-13T00:00:00Z","values":{"temperature":-62.15}},{"startTime":"2022-07-13T01:00:00Z","values":{"temperature":-61.93}},{"startTime":"2022-07-13T02:00:00Z","values":{"temperature":-61.8}},{"startTime":"2022-07-13T03:00:00Z","values":{"temperature":-61.7}},{"startTime":"2022-07-13T04:00:00Z","values":{"temperature":-61.53}},{"startTime":"2022-07-13T05:00:00Z","values":{"temperature":-61.4}},{"startTime":"2022-07-13T06:00:00Z","values":{"temperature":-61.18}},{"startTime":"2022-07-13T07:00:00Z","values":{"temperature":-60.81}},{"startTime":"2022-07-13T08:00:00Z","values":{"temperature":-60.6}},{"startTime":"2022-07-13T09:00:00Z","values":{"temperature":-60.2}},{"startTime":"2022-07-13T10:00:00Z","values":{"temperature":-59.82}},{"startTime":"2022-07-13T11:00:00Z","values":{"temperature":-59.4}},{"startTime":"2022-07-13T12:00:00Z","values":{"temperature":-58.93}},{"startTime":"2022-07-13T13:00:00Z","values":{"temperature":-58.42}},{"startTime":"2022-07-13T14:00:00Z","values":{"temperature":-57.75}},{"startTime":"2022-07-13T15:00:00Z","values":{"temperature":-56.87}},{"startTime":"2022-07-13T16:00:00Z","values":{"temperature":-55.84}},{"startTime":"2022-07-13T17:00:00Z","values":{"temperature":-54.47}},{"startTime":"2022-07-13T18:00:00Z","values":{"temperature":-51.64}},{"startTime":"2022-07-13T19:00:00Z","values":{"temperature":-47.54}},{"startTime":"2022-07-13T20:00:00Z","values":{"temperature":-45.44}},{"startTime":"2022-07-13T21:00:00Z","values":{"temperature":-43.98}},{"startTime":"2022-07-13T22:00:00Z","values":{"temperature":-43.18}},{"startTime":"2022-07-13T23:00:00Z","values":{"temperature":-42.77}}]}]}};
// getWeather(obj);
// function getWeather(mainData){
//     const day = mainData.data.timelines[0].intervals;
//     const now = new Date().getHours();
//     let dayDataOne;
//     let dayDataTwo;
//     let dayDataThree;
//     let dayOneTemperature;
//     let dayTwoTemperature;
//     let dayThreeTemperature;



//     // Morning
//     function setMorning(){
//         // Data Morning
//              dayDataOne = (day[0].startTime).slice(0, 10);
//              dayDataTwo = (day[24].startTime).slice(0, 10);
//              dayDataThree = (day[48].startTime).slice(0, 10);
//         // Temperature Morning
//              dayOneTemperature = day[0].values.temperature;
//              dayTwoTemperature = day[24].values.temperature;
//              dayThreeTemperature= day[48].values.temperature;
    
//             setOnTheWindow();
//             // document.querySelector('.data-one').append(dayDataOne);
//     }
    
//     // Dinner
//     function setDinner(){
//         // Data Dinner
//              dayDataOne = (day[4].startTime).slice(0, 10);
//              dayDataTwo = (day[28].startTime).slice(0, 10);
//              dayDataThree = (day[52].startTime).slice(0, 10);
//         // Temperature Dinner
//            dayOneTemperature = day[4].values.temperature;
//              dayTwoTemperature = day[28].values.temperature;
//              dayThreeTemperature = day[52].values.temperature;
    
//             setOnTheWindow();
//     }
    
//     // Evening
//     function setEvening(){
//         // Data Evening
//              dayDataOne = (day[10].startTime).slice(0, 10);
//              dayDataTwo = (day[34].startTime).slice(0, 10);
//              dayDataThree = (day[58].startTime).slice(0, 10);
//         // Temperature Evening
//              dayOneTemperature = day[10].values.temperature;
//              dayTwoTemperature = day[34].values.temperature;
//              dayThreeTemperature = day[58].values.temperature;
    
//             setOnTheWindow();
//     }

//     function setOnTheWindow(){
//         document.querySelector('.data-one').append(dayDataOne);
//         document.querySelector('.degree-one').append(String(dayOneTemperature + 15).slice(1) + ' ℃');

//         document.querySelector('.data-two').append(dayDataTwo);
//         document.querySelector('.degree-two').append(String(dayTwoTemperature + 15).slice(1) + ' ℃');

//         document.querySelector('.data-three').append(dayDataThree);
//         document.querySelector('.degree-three').append(String(dayThreeTemperature + 15).slice(1) + ' ℃');
//     }

//     if(now <= 13 && now >= 0){
//         setMorning();
//     } else if(now >= 14  && now <= 19){
//         setDinner();
//     } else if(now >= 20 && now <= 24){
//         setEvening();
//     }
//     console.log(String(dayOneTemperature).slice(1))
// }



// console.log(parseFloat(-48.21 )+ ' ℃')


// function amIWilson(p) {
//     // check if prime is Wilson
//     // return p == 5 ||p ==  13 || p == 563? true: false;

//     return (factoriarl(p - 1) + 1) / (p * p) % 1 === 0; 
//     function factoriarl(p){
//         return p <= 1? 1: p * factoriarl(p - 1);
//     }
//   }

// console.log(amIWilson(5));
// console.log(amIWilson(9));
// console.log(amIWilson(6));
// document.querySelector('#from').addEventListener('input' , poisk )
// document.querySelector('#to').addEventListener('input' , poisk )

// function poisk(){
//     let from = document.querySelector('#from').value;
//     let to = document.querySelector('#to').value;

//     console.log(from + to)
// }


// const div = document.getElementById('root');
// const inputs = document.querySelectorAll('input');
// const from = document.querySelector('#from');
// const to = document.querySelector('#to');

// let data = [ {
//     name: 'Andy',
//     age: 13
// }, {
//     name: 'Jack',
//     age: 14
// }, {
//     name: 'Lucy',
//     age: 12
// } ]
// // В реальном проекте нам нужно отфильтровать данные в соответствии с условиями в поле фильтра. Ниже приведен метод фильтра:
// // @ условие фильтра условия
// // @ param data Данные для фильтрации
// let filter=(condition,data)=>{
// return data.filter( item => {
//     return Object.keys( condition ).every( key => {
//        return String( item[ key ] ).toLowerCase().includes( 
//                String( condition[ key ] ).trim().toLowerCase() )
//         } );
//  } );
// };


// inputs.forEach((input) => {
//     input.addEventListener('change', () => {
//         div.innerHTML = '';
//         filter({name: from.ariaValueMax, age: to.value}, data).map(
//             item => {
//                 const component = document.createElement('div');
//                 component.innerHTML = `
//                     <div>
//                         <p>Name: ${item.name}</p>
//                         <p>Name: ${item.age}</p>
//                     </div>
//                 `;
//             }
//         );
//     });
// });
// function colourAssociation(array){
//  let arr = [];

//  array.reduce((obj, element) => {
//   obj = {};
//   obj[element[0]] = element[1];
//   arr.push(obj);
//  }, {});
//  return arr;
// }
// console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"]]));

// function howMuchILoveYou(nbPetals) {
//     // your code
//   const arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
//     for( let i = 1; i <= nbPetals; i++){
//         if(i == nbPetals - 1) {
//             return arr[i % 6];
//         }
//     }
// }

// console.log(howMuchILoveYou(7))
// console.log(howMuchILoveYou(3))
// console.log(howMuchILoveYou(6))

// function SubtractSum(n){
    
//     let obj = {
//         1: 'kiwi',
//         2: 'pear',
//         3: 'kiwi',
//         4: 'banana',
//         5: 'melon',
//         6: 'banana',
//         7: 'melon',
//         8: 'pineapple',
//         9: 'apple',
//         10: 'pineapple',
//         11:'cucumber',
//         12:'pineapple',
//         13:'cucumber',
//         14:'orange',
//         15:'grape',
//         16:'orange',
//         17:'grape',
//         18:'apple',
//         19:'grape',
//         20:'cherry',
//         21:'pear',
//         22:'cherry',
//         23:'pear',
//         24:'kiwi',
//         25:'banana',
//         26:'kiwi',
//         27:'apple',
//         28:'melon',
//         29:'banana',
//         30:'melon',
//         31:'pineapple',
//         32:'melon',
//         33:'pineapple',
//         34:'cucumber',
//         35:'orange',
//         36:'apple',
//         37:'orange',
//         38:'grape',
//         39:'orange',
//         40:'grape',
//         41:'cherry',
//         42:'pear',
//         43:'cherry',
//         44:'pear',
//         45:'apple',
//         46:'pear',
//         47:'kiwi',
//         48:'banana',
//         49:'kiwi',
//         50:'banana',
//         51:'melon',
//         52:'pineapple',
//         53:'melon',
//         54:'apple',
//         55:'cucumber',
//         56:'pineapple',
//         57:'cucumber',
//         58:'orange',
//         59:'cucumber',
//         60:'orange',
//         61:'grape',
//         62:'cherry',
//         63:'apple',
//         64:'cherry',
//         65:'pear',
//         66:'cherry',
//         67:'pear',
//         68:'kiwi',
//         69:'pear',
//         70:'kiwi',
//         71:'banana',
//         72:'apple',
//         73:'banana',
//         74:'melon',
//         75:'pineapple',
//         76:'melon',
//         77:'pineapple',
//         78:'cucumber',
//         79:'pineapple',
//         80:'cucumber',
//         81:'apple',
//         82:'grape',
//         83:'orange',
//         84:'grape',
//         85:'cherry',
//         86:'grape',
//         87:'cherry',
//         88:'pear',
//         89:'cherry',
//         90:'apple',
//         91:'kiwi',
//         92:'banana',
//         93:'kiwi',
//         94:'banana',
//         95:'melon',
//         96:'banana',
//         97:'melon',
//         98:'pineapple',
//         99:'apple',
//         100:'pineapple',
//     };

//     let one = String(n).split('').reduce((s,i) => +s + +i);
//     let two = n - one;
//     for(let key in obj){
//         if(two == key){
//             return obj[key]
//         } 
//     }
//   }
//   console.log((SubtractSum(5)));


// function index(array, n){
//     //your code here
//     if(array.length - 1 < n){
//       return -1;
//     } else {
//       return array[n] ** n;
//     }
//   }

//   console.log(index([4,5,9,4,10], 5))


// function points(g) {
//     let num = 0;
//     g.map((item, i) => {
//         if(item[0] > item[2] ){
//             num += 3;
//         } else if(item[0] < item[2]){
//             num += 0;
//         } else {
//             num += 1;
//         }

//    });
//    return num
//   }


// console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
// console.log(points(["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]));
// console.log(points(['0:1','0:2','0:3','0:4','1:2','1:3','1:4','2:3','2:4','3:4']));

// console.log(points(["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]));


// function pickIt(arr){
//     var odd=[],even=[];
//     //coding here
//     // arr.map(item => item % 2 == 0? even.push(item): odd.push(item));
    
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 == 0){
//             even.push(arr[i]);
//         } else {
//             odd.push(arr[i]);
//         }
//     }
//     return [odd,even];
//   }

// //   console.log(pickIt([1,2]));
// //   console.log(pickIt([1,2,3]));
// //   console.log(pickIt([3,2,1]));
//   console.log(pickIt([93,4,33,60,40,97,20,30,7,77,89,82,18,91,17,96,65,7,73,73]));


// var summation = function (num) {
//     // Code here
//     let a = 0;
//     for(let i = 1; i <= num; i++){
//       a += i;
//     }
//     return a;
//   };

// console.log(summation(8));

// function strCount(str, letter){  
//     //code here
//     let re = new RegExp(letter, 'g');
//     let check = str.match(re);
//     return check == null? 0: check.length;
     
//   }

// console.log(strCount('Hello', 'o'));
// console.log(strCount('Hello', 'l'));
// console.log(strCount('Hello', 'z'));


function unusualFive() {
    return ['a', 'b', 'c', 'd', 'e'].length;
  }

// console.log(unusualFive( ));

function multipleOfIndex(array) {
    return array.filter((item, i) => item % i == 0);
  }

// console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));


function multiTable(number) {
    let str = '';
    for(let i = 1; i <= 10; i++){
        str += `${i} * ${number} = ${number * i} \n` ;
    }
    return str;
  }

// console.log(multiTable(3));

function typeOfSum(a, b) {
    let sum = a + b;
    return typeof(sum);
  }
// console.log(typeOfSum(12, 'a'));

function toBinary(n){
    if(n == 1){
        return 1;
      } else{
        return Number(n.toString(2));
      }   
    }

// console.log(toBinary(5))


function move (position, roll) {
  return roll * 2 + position;
}

// console.log(move(0, 4));
// console.log(move(3, 6));
// console.log(move(2, 5));

function removeEveryOther(arr){
  return arr.filter((item, i) => i % 2 == 0);
}

// console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']));
// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function pillars(numPill, dist, width) {
  if(numPill == 1){
    return 0;
  } else if(numPill == 2){
    return (numPill - 1 )* dist * 100;
  } else {
    return (numPill - 1 )* dist * 100 + (width * (numPill - 2));
  }
  
}

// console.log(pillars(1, 10, 10));
// console.log(pillars(2, 20, 25));
// console.log(pillars(11, 15, 30));




function sumOfDifferences(arr) {
  if(arr.length == 0){
    return 0;
  } else {
    let a = arr.concat().sort((a, b) => b - a);
    let b = arr.sort((a, b) => b - a).reverse();
    return a[0] - b[0];
  }
}

// console.log(sumOfDifferences([1, 2, 10])); //9//
// console.log(sumOfDifferences([-3, -2, -1])); //2//


// console.log(sumOfDifferences([-2,-1,0,1,-1,0,1,1,1,-2,-1,-2,1,-2,-1,0,1,-2,-1])); //3//
// console.log(sumOfDifferences([0,-9,-9,-7,6])); //15//


function findAverage(array) {
  if(array.length == 0){
    return 0;
  }
  return array.reduce((c, i) => c + i, 0) / array.length;
}

// console.log(findAverage([1,1,1]));
// console.log(findAverage([1,2,3]));
// console.log(findAverage([1,2,3,4]));



function whatday(num) { 
  let arr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
 // return arr[(num - 1) % arr.length]; // Считает любое число
  return num <= arr.length && num > 0? arr[num - 1]:   'Wrong, please enter a number between 1 and 7';
}

// console.log(whatday(-31));
// console.log(whatday(1));
// console.log(whatday(2));
// console.log(whatday(3));
// console.log(whatday(7));
// console.log(whatday(20)); //saturday//


function hasUniqueChars(str){
  let arr =  [...str];
  let uniq =  new Set(arr);
  return [...uniq].length == str.length;
}

// console.log(hasUniqueChars("  nAa"));
// console.log(hasUniqueChars("abcdef"));
// console.log(hasUniqueChars("aA"));
// console.log(hasUniqueChars("++-"));




function XO(str) {
  let lower = str.toLowerCase();
  let regO = /o/gi;
  let regX = /x/gi;
  let checkO = lower.match(regO);
  let checkX = lower.match(regX);
    if(regO.test(lower) && regX.test(lower)){
      if(checkO.length == checkX.length){
          return true;
        } else if(checkO.length != checkX.length){
          return false;
        }
    } else  if(regX.test(lower) || regO.test(lower)){
      return false;
    }  else {
      return true;
    }
}

// console.log(XO('xoXOXOXOX'));
// console.log(XO('xoXOXOXO'));
// console.log(XO('az'));
// console.log(XO('axz'));



function _if(bool, func1, func2) {

  if(bool == true){
    func1();
  } else{
    func2();
  }
}



function sumEvenNumbers(input) {
  let num = 0;
  // input.map(item => {
  //   if(item % 2 == 0){
  //     num += item;
  //   }
  // });
  input.map(item => item % 2 == 0? num += item: 0);
  return num;
}


// console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));



function numberToPower(number, power){
  // return power == 0? 1: Math.pow(number, power);
  if(power == 0){
    return 1;
  } else{
   return number * numberToPower(number, power - 1);
  }
}

// console.log(numberToPower(3,2));
// console.log(numberToPower(4,2));
// console.log(numberToPower(10, 6));
// console.log(numberToPower(2,3));
// console.log(numberToPower(10,0));


function first(arr, n) {
  let arrNew = [];
    if(n == 0){
      return [];
    } else if(n == null){
      return [arr[0]];
    } else if(n > arr.length){
      return arr;
    } else {
      for(let i = 0; i < n; i++){
        arrNew.push(arr[i]);
      }
    }
    return arrNew;
}

// const a = ['a', 'b', 'c', 'd', 'e'];
// console.log(first(a, 10));
// console.log(first(a));
// console.log(first(a, 3));
// console.log(first(a, 0));


function doubleInteger(i) {
  return i * 2;
}



function isItANum(str) {
    if(str.match(/\d/gi)[0] != 0){
      return "Not a phone number";
    }
    return str.match(/\d/gi).length == 11?   str.match(/\d/gi).join(''): "Not a phone number";
  }

// console.log(isItANum("S:)0207ERGQREG88349F82!efRF)"));
// console.log(isItANum("sjfniebienvr12312312312ehfWh"));
// console.log(isItANum("0192387415456"));
// console.log(isItANum("v   uf  f 0tt2eg qe0b 8rtyq4eyq564()(((((165"));

function toNumberArray(stringarray){
  return stringarray.map(item => Number(item));
}

// console.log(toNumberArray(["1.1","2.2","3.3"]));


function dutyFree(normPrice, discount, hol){
    return Math.floor(hol /  (normPrice * discount / 100));
}

// console.log(dutyFree(12, 50, 1000));
// console.log(dutyFree(17, 10, 500));
// console.log(dutyFree(24, 35, 3000));


function squareDigits(num){
  return num == 0? 0:
    Math.round(String(num)
    .split('')
    .map(item => item * item)
    .join(''));
}

// console.log(squareDigits(9119));
// console.log(squareDigits(3212));
// console.log(squareDigits(2112));

function updateLight(current) {

  if(current == "green"){
    return "yellow";
  } else if(current == "yellow"){
    return "red";
  } else if(current == 'red') {
    return "green";
  }
}


function twiceAsOld(dadYearsOld, sonYearsOld) {
  if(sonYearsOld == 0){
    return dadYearsOld;
  } else if(dadYearsOld / sonYearsOld == 2){
    return 0;
  } else if(dadYearsOld / sonYearsOld < 2){
    return -(dadYearsOld - sonYearsOld - sonYearsOld);
  } else {
    return dadYearsOld - (sonYearsOld * 2);
  }
}

// console.log(twiceAsOld(36,7));
// console.log(twiceAsOld(55,30));
// console.log(twiceAsOld(42,21));
// console.log(twiceAsOld(29,0));


function generateShape(integer){
  let str = '';
  for(let i = 0; i < integer; i++){
      str += '+' ;
      for(let k = 0; k < integer - 1; k++){
        str += '+' ;
     }
     str += '\n';
  }
  return str.slice(0, -1) ;
}

// console.log(generateShape(8));
// console.log(generateShape(3));

function descendingOrder(n){
  return +(String(n).split('').sort((a,b) => b - a).join(''));
}

// console.log(descendingOrder(0));
// console.log(descendingOrder(1));
// console.log(descendingOrder(111));
// console.log(descendingOrder(1021));
// console.log(descendingOrder(123456789));\n





function basicOp(operation, value1, value2)
{
    if(operation == '+'){
      return value1 + value2;
    } else if(operation == '-'){
      return value1 - value2;
    } else if(operation == '/'){
      return value1 / value2;
    }else {
      return value1 * value2;
    }

}

// console.log(basicOp('+', 4, 7));
// console.log(basicOp('-', 15, 18));
// console.log(basicOp('/', 49, 7));


function shortcut (string) {
  return string.replace(/[aeiou]/g, '');
}

// console.log(shortcut('haello'));

function check(a,x){
  return a.includes(x);
}

// console.log(check([66, 101], 66));


function vaporcode(string) {
  return string.toUpperCase().match(/[A-Z]/g).join('  ');
}

// console.log(vaporcode("Lets go to the movies"));
// console.log(vaporcode("Why isnt my code working"));

function modifyMultiply (str,loc,num) {
  let newString = '';
  let word =  str.split(' ')[loc];
  for(let i = 0; i < num; i++){
      num == 1? newString = word: newString += `${word}-`;
  }
  return newString.includes('-')? newString.slice(0, -1): newString;
} 

// console.log(modifyMultiply("This is a string",3 ,5));
// console.log(modifyMultiply("This is a string",2 ,1));\n






let v1 = 50,
v2 = 100,
v3 = 150,
v4 = 200,
v5 = 2,
v6 = 250;

function equal1(){
let a = v1,   
  b = v1;   
return a + b;
}

function equal2(){
let a =  v3, //set number value to a
  b =  v1; //set number value to b
return a - b;
}

function equal3(){
let a =  v1, //set number value to a
  b =  v5; //set number value to b
return a * b;
}

function equal4(){
let a =  v4, //set number value to a
  b =  v5; //set number value to b
return a / b;
}

function equal5(){
let a =  v2 , //set number value to a
  b =  v6; //set number value to b
return a % b;

}
// console.log(equal1());
// console.log(equal2());
// console.log(equal3());
// console.log(equal4());
// console.log(equal5());



function flyBy(lamps, drone){
  let letterX =  lamps.length - drone.length ;
  let str = '';

  if(drone.length > lamps.length){
    for(let i = 0; i < lamps.length; i++){
      str += 'o';
    }
  } else {
    for(let i = 0; i < drone.length; i++){
      str += 'o';
    }
    for(let i = 0; i < letterX; i++){
      str += 'x';
    }
  }
  return str;
}
// console.log(flyBy('xxxxxxxxx', '==T'));
// console.log(flyBy('xxxxxx', '====T'));
// console.log(flyBy('xx', '==T'));



function weatherInfo (temp) {
  var c = convertToCelsius(temp);
  if (c < 0)
    return (c + " is freezing temperature");
  else
    return (c + " is above freezing temperature");
}

function convertToCelsius (tempertur) {
  var celsius = ((tempertur) - 32) * (5/9);
  return celsius;
}

// console.log(weatherInfo(23));
// console.log(weatherInfo(50));
// console.log(weatherInfo(56));
// console.log(convertToCelsius(56));



function isIsogram(str){
  return [...new Set(str.toLowerCase())]
  .join('')
  .length < str.length? false: true; 
}

// console.log( isIsogram("Dermatoglyphics"));
// console.log( isIsogram("isogram"));
// console.log( isIsogram("moOse"));


function inAscOrder(arr) {
  let a = Object.values(arr).join('');
  let b = arr.sort((a,b) => a - b ).join('');
  return a == b;

}

// console.log(inAscOrder([1, 6, 10, 18, 2, 4, 20]));
// console.log(inAscOrder([1, 2, 4, 7, 19]));


// _=()=>('!'=='!')+('!'=='!')+('!'=='!')+('!'=='!')+('!'=='!');
// console.log(_());


function sortDict(dict) {
  return isFinite(Object.entries(dict)[0][0])? Object.entries(dict).sort((a, b) => b[1] - a[1]).map((item, i) => [+item[0], item[1]]): Object.entries(dict).sort((a, b) => +b[1] - +a[1]);
  }

// console.log(sortDict({1:3,2:2,3:1}));
// console.log(sortDict({1:5,3:10,2:2,6:3,8:8}));
// console.log(sortDict({'a':6,'b':2,'c':4}));


function shorter_reverse_longer(a,b){
  if(a.length == 0){
    return a + b.split('').reverse().join('') + a;
  } else if (b.length == 0){
    return b + a.split('').reverse().join('') + b;
  }
  return a.length == b.length || a.length > b.length? b + a.split('').reverse().join('') + b :  a + b.split('').reverse().join('') + a;
}


// console.log((shorter_reverse_longer("first", "abcde")));
// console.log((shorter_reverse_longer("hello", "bau")));
// console.log((shorter_reverse_longer("fghi", "abcde")));
// console.log((shorter_reverse_longer("", "abcde")));


function vowelOne(s){
  return s.split('')
  .map(item => item.match(/o|e|a|u|i|O|E|A|U|I/)? item.replace(/o|e|a|u|i|O|E|A|U|I/, '1'): 0)
  .join('');
}

// console.log(vowelOne("vowelOne"));
// console.log(vowelOne("123, arou"));
// console.log(vowelOne("abceios"));
// console.log(vowelOne("aeiou, abc"));
// console.log(vowelOne("y'RM5q"));\n


function getSumOfDigits(integer) {
  if(integer == 0){
    return 0;
  }
  return ('' + (integer)).split('').reduce((c, i) => +c + +i);
  }

// console.log(getSumOfDigits(123));


function disemvowel(str) {
  return str.replace(/[aeoui]/gi, '');
}

// console.log(disemvowel("This website is for losers LOL!"));\n




function quadratic(x1, x2){
  let a = 1;
  let b = -x1 - x2;
  let c = x1 * x2;
  return [a, b, c];
}

// console.log(quadratic( 0,  1));
// console.log(quadratic( 1,  1));
// console.log(quadratic(-4, -9));
// console.log(quadratic( -5, -4));\n




function search(budget, prices) {

  let arr = [];
  prices.filter(item => item <= budget? arr.push(item): 0);
  return arr.sort((a,b) => a - b).join(',');
  
  }

// console.log(search(3, [6, 1, 2, 9, 2]));
// console.log(search(14, [7, 3, 23, 9, 14, 20, 7]));\n

function barTriang(p1, p2, p3){

  let a = +((p1[0] + p2[0] + p3[0]) / 3).toFixed(4);
  let b = +((p1[1] + p2[1] + p3[1]) / 3).toFixed(4);
  return [a, b];
}

// console.log(barTriang([4, 6], [12, 4], [10, 10]));\n


let litres = time =>  time < 2? 0: Math.floor(time / 2);

// console.log(litres(2));


function bmi(weight, height) {
  let a = (weight / (height *height));
  if(a <= 18.5){
    return  "Underweight";
  } else if(a <= 25.0){
    return "Normal";
  } else if(a <= 30.0){
    return  "Overweight";
  } else if(a > 30){
    return "Obese";
  }
} 

// console.log(bmi(80, 1.80));

// Return the nth triangular number
function triangular( n ) {
  if(n <= 0){
    return 0;
  }
  if(n == 1){
    return 1;
  }
  let num = 0;
  for(let i = 1; i<= n; i++){
    num += i;
  }
  return num;
}

// console.log(triangular(5));
// console.log(triangular(0));
// console.log(triangular(-55));



function spoonerize(words) {
  let firstWord = words.split(' ')[0];
  let firstLetterOfFirstWord = firstWord[0];
  let secondWord = words.split(' ')[1];
  let secondLetterOfSecondWord = secondWord[0];
  return secondLetterOfSecondWord + firstWord.slice(1) + ' ' + firstLetterOfFirstWord + secondWord.slice(1);
}

// console.log(spoonerize("nit picking"));
// console.log(spoonerize("wedding bells"));
// console.log(spoonerize("jelly beans"));


function removeExclamationMarks(s) {
  return s.replace(/!/g, '');
}
// console.log(removeExclamationMarks("Hello World!!!!"));


var isAnagram = function(test, original) {
  return test.toLowerCase().split('').sort().join('') == original.toLowerCase().split('').sort().join('');
};

// console.log(isAnagram("foefet", "toffee"));
// console.log(isAnagram("Buckethead", "DeathCubeK"));
// console.log(isAnagram("dumble", "bumble"));


function isLeapYear(year) {
  if(Number.isInteger(year / 400)){
    return true;
  }
  if(Number.isInteger(year / 100)){
    return false;
  }

  return Number.isInteger(+year / 4)? true: false;
}
// console.log(isLeapYear(1234));
// console.log(isLeapYear(1984));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(2010));
// console.log(isLeapYear(2013));


function filter_list(l) {
  return l.filter(item => Number.isInteger(item));
}
// console.log(filter_list([1,2,'a','b']));
// console.log(filter_list([1,'a','b',0,15]));
// console.log(filter_list([1,2,'aasf','1','123',123]));

function solution(nums){
  return nums == null || nums.length == 0? []: nums.sort((a,b) => a - b);

}
// console.log(solution([1,2,3,10,5]));
// console.log(solution(null));
// console.log(solution([2, 20, 10]));



function gooseFilter (birds) {
  Array.prototype.diff = function(a) {
    return this.filter(function(i){return a.indexOf(i) < 0;});
};
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
 return birds.diff(geese)
}
// console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))

function sumStr(a,b) {
  return String(+a + +b);
}

// console.log(sumStr("4","5"));


function isInStrictMode() {
	return this === undefined;
}
// console.log(isInStrictMode());

function DNAStrand(dna){
  return dna.split('').map(el => el == 'A'? el = "T":
  el == 'T'? el = 'A':
  el == 'C'? el = 'G':
  el == 'G'? el ='C'
  : el).join('');
}
// console.log(DNAStrand("AAAA"));
// console.log(DNAStrand("ATTGC"));
// console.log(DNAStrand("GTAT"));




// const names = [
//   {name: 'Nick', age: 21, isMarried: true, scores: 14},
//   {name: 'John', age: 14, isMarried: false, scores: 55},
//   {name: 'Mick', age: 41, isMarried: true, scores: 53},
//   {name: 'Alex', age: 22, isMarried: true, scores: 23},
//   {name: 'blex', age: 22, isMarried: true, scores: 23},
// ];

// console.log(names.sort((a,b) => a.name.localeCompare(b.name)));

function findShort(s){
  return s.split(' ').map(item => item.length).sort((a,b) => a - b)[0];
}
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// console.log(findShort("turns out random test cases are easier than writing out basic ones"));
// console.log(findShort("Let's travel abroad shall we"));
// console.log(findShort("Steem Steem BTC Classic BTC Ethereum Steem Dash ProofOfWork BTC 21inc BTC ProofOfStake"));

function otherAngle(a, b) {
  return 180 - a - b;
}
// console.log(otherAngle(43, 78));


function geo_mean(nums, arith_mean) {
  return nums.reduce((a,i) => a + i, 0) / arith_mean/ arith_mean;
}

function grow(x){
  return x.reduce((a,i) => a * i);
}


function numberJoy(n) {
    const sum =  String(n).split('').reduce((a,i) => +a + +i);
    const sumMirror = String(sum).split('').reverse().join('');
    return sum * sumMirror === n;
}
// console.log(numberJoy(1997));
// console.log(numberJoy(1998));
// console.log(numberJoy(81));
// console.log(numberJoy(1729));


const repeatString = (str, num, sign) => {
  let result = '';
    for(let i = 0; i < num; i++){
      result += str + sign;
    }
    return result.slice(0, -1);
};
// console.log(repeatString('yo', 3, ' '));
// console.log(repeatString('yo', 3, ','));

const checkStart = (str,checkStr) => {
    let strLength = checkStr.length;
    return str.toLowerCase().slice(0, strLength) === checkStr;
};

// console.log(checkStart("Incubator", "inc"));
// console.log(checkStart("Incubator", "yo"));



const truncateString = (str,num) => {
  return str.substr(0, num) + '...';
  
};

// console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10));



const setUpperCase = (str) => {
  return str.toLowerCase()
  .split(' ')
  .map(el => el[0].toUpperCase() + el.slice(1))
  .join(' ');
};
// console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"));

const isIncludes = (str, inc) => {
  let newInc = ([...new Set(inc.toLowerCase())]).join('');
  let a ='';
  for(let i = 0; i < str.length; i++){
     for(let k = 0; k < newInc.length; k++){
      if(str.toLowerCase()[i].includes(newInc[k])){
        a += str[i];
      }
     }
  }
   return a.length == newInc.length;
  };
  
  // console.log(isIncludes("Incubator", "Cut"));
  // console.log(isIncludes("Incubator", "table"));
  // console.log(isIncludes("Incubator", "inbba"));
  // console.log(isIncludes("Incubator", "inba"));
  // console.log(isIncludes("Incubator", "Incubatorrr"));
  
  



  function highAndLow(numbers){
    let max = [...numbers].join('').split(' ').sort((a, b) => b - a)[0];
    let min = [...numbers].join('').split(' ').sort((a, b) => a - b)[0];

    return  max + ' '  + min;
  }

  // console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));


  function past(h, m, s){
    let minutes = h * 60;
    let seconds = (minutes + m) * 60;
    let mlSeconds = (seconds + s) * 1000;
  return  mlSeconds;
}
// console.log(past(1,1,1));
// console.log(past(0,1,1));

function addLength(str) {
  return str.split(' ').map(el => `${el} ${el.length}`);
}
// console.log(addLength('apple ban'));  


function countConsonants(str) {
  return new Set(str.toLowerCase().replace(/[a | e | i | o | u | ! ]/g, '').replace(/[0-9]/, '')).size;
}
// console.log(countConsonants("add"));
// console.log(countConsonants("Dad"));
// console.log(countConsonants("aeiou"));
// console.log(countConsonants("sillystring"));
// console.log(countConsonants("abcdefghijklmnopqrstuvwxyz"));
// console.log(countConsonants("Count my unique consonants!!"));
// console.log(countConsonants("2"));

function consonantCount(str) {
  // return str.split('').map(el => isFinite(+el)? '': el)
return str.split('').map(el => isFinite(+el)? '': el).join('').replace(/[aeiou_]/gi, '').replace(/\W/gi, '').length;
} 
// console.log(consonantCount(''));
// console.log(consonantCount('aaaaa'));
// console.log(consonantCount('XaeiouX'));
// console.log(consonantCount('Bbbbb'));
// console.log(consonantCount('helLo world'));
// console.log(consonantCount('h^$&^#$&^elLo world'));
// console.log(consonantCount('0123456789'));
// console.log(consonantCount('012345_Cb'));

const isEvenIndexSumGreater = (a, b, c) => {
  let isTriagle = (a + b) > c && (b + c) > a && (a + c) > b ? true : false;

  return a == b && b == c ? '10' :
      (isTriagle && (a === b || b == c || a == c)) ? '01' :
        iTriagle ? '11' :
         '00';
};
// console.log(isEvenIndexSumGreater(1, 1, 1)); //10
// console.log(isEvenIndexSumGreater(2, 3, 3));  //01
// console.log(isEvenIndexSumGreater(3, 3, 2)); //01
// console.log(isEvenIndexSumGreater(4, 5, 3)); //00
// console.log(isEvenIndexSumGreater(10, 2, 2)); //01


function minMinMax(array) {
let min = +[...array].sort((a, b) => a - b).splice(0,1);
let max = +[...array].sort((a, b) => b - a).splice(0,1);
let num = [];
for(let i = min+ 1; i <max; i++){
 num.push(i);
}
let middle =  +num.filter(el => ![...array].includes(el)).splice(0, 1);
  return [min, middle, max];
}
// console.log(minMinMax([1, 3, -3, -2, 8, -1]));


const solutionTask = (str, ending) => ending.length === 0? true:str.substr(-ending.length)=== ending;
// console.log(solutionTask('abcde', 'cde'));
// console.log(solutionTask('abcde', 'abc'));
// console.log(solutionTask('abc', ''));


function trim(str, size) {
  return str.length <= size? str: str.slice(0, (size - 3 <= 0? size: size - 3)) + '...';
}

// console.log(trim("Creating kata is fun", 14)); //"Creating ka..."
// console.log(trim("He", 1)); //"H..."
// console.log(trim("Code Wars is pretty rad", 50));  //"Code Wars is pretty rad"
// console.log(trim("ucu",4)); // ucu



function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter++){
    newArray.push(counter);
  }
  
  return newArray;
}

// console.log(createArray(3));


function covfefe(str){
  return (
      str === 'covfefe' || !str.includes('coverage')? 
      str + ' covfefe':
      str.replace(/coverage/gi, 'covfefe')
      );
}
// console.log(covfefe("coverage"));
// console.log(covfefe("coverage coverage"));
// console.log(covfefe("nothing"));
// console.log(covfefe("double space "));
// console.log(covfefe("covfefe"));
// console.log(covfefe("usfb9coveragesuixd tg35i w9h1rcoverage j12xf fqi8i"));

function convertHashToArray(hash){
  return Object.entries(hash).sort((a, b) => a > b? 1: -1);
}

// console.log(convertHashToArray({name: "Jeremy", age: 24, role: "Software Engineer"}));

function isDivisible(n, x, y) {
  return Number.isInteger(n / x) && Number.isInteger(n / y);
}
// console.log(isDivisible(3,3,4));


function smash (words) {
  return words.join(' ');
}
// console.log(smash(['hello', 'world', 'this', 'is', 'great']));


function sumOfMinimums(arr) {
  return arr.map(el => el.sort((a, b) => a > b? 1: -1)[0]).reduce((c, i) => c + i, 0);
}

// console.log(sumOfMinimums( [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]));

function sumTwoSmallestNumbers(numbers) {  
  return numbers.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b); 
}
// console.log(sumTwoSmallestNumbers( [5, 8, 12, 19, 22]));


var cubeChecker = function(volume, side){
 return !Number.isInteger(volume) || side <= 0 || volume !== side * side * side? false: true;
};
// console.log(cubeChecker(56.3, 1));
// console.log(cubeChecker(-1, 2));
// console.log(cubeChecker(8, 3));
// console.log(cubeChecker(8, 2));


function solution(string) {
    return string.length == 0? '': 
                            string.split('')
                            .map(el => el == el.toUpperCase()? ' ' + el: el )
                            .join('');
}

// console.log(solution('camelCasing'));


function likes(names) {
 return names.length === 0?
        'no one likes this':
        names.length === 1?
        `${names} likes this`:
        names.length === 2?
        `${names[0]} and ${names[1]} like this`:
        names.length === 3?
        `${names[0]}, ${names[1]} and ${names[2]} like this`:
        `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  
}
// console.log(likes([]));
// console.log(likes(['Peter']));
// console.log(likes(['Jacob', 'Alex']));
// console.log(likes(['Max', 'John', 'Mark']));
// console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));

function hero(bullets, dragons){
    return  (bullets / dragons) >= 2;
}
  

function noIfsNoButs(a, b) {
  let firstValue = (a - b + '')[0];
  switch(firstValue){
    case `-`:
      return `${a} is smaller than ${b}`
    break;
    case '0':
      return `${a} is equal to ${b}`
    break;
    default:
      return `${a} is greater than ${b}`
  }
}

// console.log(noIfsNoButs(45, 51));
// console.log(noIfsNoButs(1, 1));
// console.log(noIfsNoButs(100, 80));


let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  return foods[scannedItem];
}

// console.log(checkInventory("apples"));

const removeConsecutiveDuplicates = s => {
  let arr = s.split(' ');
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== arr[i + 1]){
      newArr.push(arr[i]);
    }
  }
  return newArr.join(' ');
};


// console.log(removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));



function keepOrder(ary, val) {
  let newAry = ary.map((el, i) => {
    if(el < val){
      return i;
    }
  });
  return newAry.join('').length;
}

// console.log(keepOrder([1, 2, 3, 4, 7], 5));
// console.log(keepOrder([1, 2, 3, 4, 7], 0));
// console.log(keepOrder([1, 1, 2, 2, 2], 2));
// console.log(keepOrder([1, 2, 3, 4], 5));
// console.log(keepOrder([1, 2, 3, 4], -1));



function bandNameGenerator(str) {
  return str[0] !== str.slice(-1)? 
  'The ' + str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(''):
  str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join('') + str.slice(1);
}

// console.log(bandNameGenerator('knife'));
// console.log(bandNameGenerator('tart'));
// console.log(bandNameGenerator('sandles'));
// console.log(bandNameGenerator('bed'));


const describeAge = age =>  "You're a(n) " + (age <= 12? "kid":
  age >= 13 && age <= 17? "teenager":
  age >= 18 && age <= 64?  "adult":  "elderly");

// console.log(describeAge(156));




function periodIsLate(last, today, cycleLength) {
  return ((today - last) / 24 / 60 / 60 / 1000 - cycleLength)  > 0? true: false;
}
// console.log(periodIsLate(new Date(2016, 6, 13), new Date(2016, 7, 16), 35));


function ifChuckSaysSo(){
  return 0 > 1;
}

function joinStrings(string1, string2){
  return `${string1} ${string2}`;
  }


  function maskify(cc) {
    if(cc.length<= 4){
      return cc;
    }
    let endCC = cc.slice(-4);
    let lengthCC = cc.length - 4;
    let result = '';
    for(let i = 0; i < lengthCC; i++){
      result  += '#';
    }
    return result + endCC;
  }

  // console.log(maskify('4556364607935616'));
  // console.log(maskify('1'));
  // console.log(maskify('11111'));

  function computerToPhone(numbers){
    return numbers.split('').map(el => el === '7'?
                                       el = '1':
                                       el === '1'?
                                       el = '7':
                                       el === '8'?
                                       el = '2':
                                       el === '2'?
                                       el = '8':
                                       el === '9'?
                                       el = '3':
                                       el === '3'?
                                       el = '9':
                                       el  
    ).join('');
  }
  // console.log(computerToPhone("0789456123"));


  function initials(n){
    return n.split(' ').map(el => el[0].toUpperCase()).join('.') + n.split(' ').slice(-1).join('').slice(1);
  }

  // console.log(initials('code wars'));
  // console.log(initials('Barack Hussain obama'));


  function betweenExtremes(numbers) {
    return [...numbers].sort((a, b) => b-a)[0] - [...numbers].sort((a, b) => a-b)[0];
  }

  // console.log(betweenExtremes([21, 34, 54, 43, 26, 12]));


  const hoopCount = n => n >= 10?  "Great, now move on to tricks": "Keep at it until you get it";


 const abbrevName = name => name.split(' ').map(el => el[0].toUpperCase()).join('.');

// console.log(abbrevName("Sam Harris"));


function consecutive(arr) {
  let newArr = [];
  let start= [...arr].sort((a, b) => a - b)[0];
  let end = [...arr].sort((a, b) => b - a)[0];
  for(let i = start + 1; i < end; i++){
    // newArr.push(i);
    if(!arr.includes(i)){
      newArr.push(i);
    }
  }
  return newArr.length;
}

// console.log(consecutive([4,8,6]));
// console.log(consecutive([1,2,3,4]));
// console.log(consecutive([]));
// console.log(consecutive([1]));

function sortByLength (array) {
    return array.sort((a, b) => a.length > b.length? 1 : -1);
}

// console.log(sortByLength(["Beg", "Life", "I", "To"]));

function noOdds( values ){
  return values.filter(el => el % 2 === 0);
}
// console.log(noOdds([0,1,2,3]));


function largest(n, array) {
  return array.sort((a,b) => b - a).splice(0, n).reverse();
}

// console.log(largest(2, [7,6,5,4,3,2,1]));
// console.log(largest(7, [9, 1, 50, 22, 3, 13, 2, 63, 5]));

function sixToast(num) {
  return num === 6? 0: 
  num  > 6? num  - 6  : 6 - num;

}

// console.log(sixToast(6));
// console.log(sixToast(17));
// console.log(sixToast(3));


function gimme (triplet) {
 let middleNumber = [...triplet].sort((a, b) => a - b)[1];
 return triplet.findIndex(el => el === middleNumber);
}
// console.log(gimme([2, 3, 1])); //0
// console.log(gimme([2.1, 3.2, 1.4])); // 0
// console.log(gimme([5.9, 10.4, 14.2])); // 1
// console.log(gimme([46, 5, -33])); //  2


var websites = []
let str = "codewars";
for(let i = 0; i < 1000; i++){
   websites.push(str);
}
// console.log(websites);

function goals (...a) {
  return a.reduce((c,i) => c + i);
}
// console.log(goals(43, 10, 5));


function shortenToDate(longDate) {
  let numberOfComma =  longDate.split('').findIndex(el => el === ',');
  return longDate.slice(0, numberOfComma);
}

// console.log(shortenToDate("Friday May 2, 9am"));


function nameShuffler(str){
  return str.split(' ').reverse().join(' ');
}

// console.log(nameShuffler('Mary jeggins'));

function nthEven(n){
  return n * 2 - 2;
}

// console.log(nthEven(100));
// console.log(nthEven(1));


function lastDigit(n, d) {
  let nArr = String(n).split('');
  if(d > nArr.length){
    return nArr.map(e => +e);
  } else if(d <= 0){
    return [];
  }
  return nArr.splice(nArr.length - d).map(e => +e);
}

// console.log(lastDigit(123767,4));
// console.log(lastDigit(0,1));
// console.log(lastDigit(34625647867585,10));
// console.log(lastDigit(214123444, 10));


function array(string) {
    let first = string.split('').findIndex(el => el === ',') + 1;
    let last =  -string.split('').reverse().findIndex(el => el === ',') - 1;
    let result =  string.slice(first, last).split('').map(el => el.replace(',', ' ')).join('');
    return result.length > 0? result: null;
}

// console.log(array("1,2,3,4,5"));
// console.log(array("1"));
// console.log(array('A1,B2,C3,D4,E5'));
// console.log(array('A1,B2'));
// console.log(array('1,2,3'));



function fireFight(s){
    return s.replace(/Fire/g, '~~');
}

// console.log(fireFight("Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"));

function secondSymbol(s, symbol) {
let num = s
          .split('')
          .map((e, i) => e === symbol? i: '')
          .filter( e => e !== '');
return num.length > 1? +num[1]: -1;

}

// console.log(secondSymbol('Hello world!!!','l'));
// console.log(secondSymbol('Hello world!!!','o'));
// console.log(secondSymbol('Hello world!!!','A'));
// console.log(secondSymbol('LbLNVZUmzqNUXRKUCIPNeRjuduItsoShqzdcGJNnNf', 'L'));
// console.log(secondSymbol('npBwowdspGpdbadALDVjYvTIfIsEsXnfBUTlJuGLOklceRdIsZGgzHHwNUfUyzfspdGpVLZAYOrvXuSqahzhgiiHUpaIHnyl ', 'o'));
// console.log(secondSymbol('', 'q'));



function flattenAndSort(array) {
  let newArr = [];
  array.map(el => a.push(...el));
  return newArr.sort((a,b) => a - b);
}
// console.log(flattenAndSort([[], []]));
// console.log(flattenAndSort([[], [1]]));
// console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));


function sumFactorial(arr){
  let result = [];
  arr.map(el => [el].map(e => {
    let middleResult = [];
    for(let i = 1; i <= e; i++){
      middleResult.push(i)
    }
    result.push(middleResult.reduce((c, i) => c * i));
  }));
 return result.reduce((c,i) => c + i);
}

// console.log(sumFactorial([4,6]));

function alternate(n, firstValue, secondValue){
  let arr = [];
  for(let i = 0; i < n; i ++){
    arr.push(firstValue,secondValue);
  }
  return arr.slice(0, arr.length / 2);
}

// console.log(alternate(5, true, false));
// console.log(alternate(84, 'e1ogg', '5ziqel'));


function removeChar(str){
  return str.slice(1, -1);
 }

// console.log(removeChar('eloquent'));
// console.log(removeChar('country'));


function splitAndMerge(string, separator) {
  return string
              .split(' ')
              .map(e => [...e.split('')
                             .map(e => e + separator)
                             .join('')]
                             .join('')
                             .slice(0, -1))
              .join(' ');
}

// console.log(splitAndMerge("My name is John"," "));
// console.log(splitAndMerge("My name is John","-"));



function toAcronym(inp){
  return inp.split(' ').map(e => e[0].toUpperCase()).join('');
}

// console.log(toAcronym("hyper text markup language"));


function twoOldestAges(ages){
    return ages.sort((a,b) => a - b).slice(ages.length - 2);
}
// console.log(twoOldestAges([1,5,87,45,8,8]));



// const a = parseInt(prompt('Enter a decimal number: '));

// let binary = a.toString(2);
// console.log(binary)

function reverseNumber(n) {
  return n > 0?
    +String(n).split('').reverse().join(''):
    -String(n).slice(1).split('').reverse('').join('')
}

// console.log(reverseNumber(123));
// console.log(reverseNumber(-456));
// console.log(reverseNumber(1000));

var Calculator = {
  add(...rest){
    return [...rest].reduce((c, i) => c + i);
  },
  subtract(...rest){
    return [...rest].reduce((c, i) => c - i);
  },
  multiply(...rest){
    return [...rest].reduce((c, i) => c * i);
  },
  divide(a, b){
    return a === 0 || b === 0? false: a / b;
  }
};
// console.log(Calculator.add(3, 4, 5));
// console.log(Calculator.subtract(3, 4, 5));
// console.log(Calculator.multiply(3, 4));
// console.log(Calculator.divide(0, 4));
// console.log(Calculator.divide(4, 4));



function contamination(text, char){
  let newStr = '';
  for(let i = 0; i < text.length; i++){
    newStr+= char;
  }
    return text.length === 0 || char.length === 0? '': newStr;
}

// console.log(contamination("abc","z"));
// console.log(contamination("","z"));
// console.log(contamination("_3ebzgh4","&"));
// console.log(contamination("//case"," "));


const findUserDB = (id) => {
  let users = [
    {id: 1, name: 'Alex', friends: 2},
    {id: 2, name: 'Vanya', friends: 3},
    {id: 3, name: 'Vera', friends: 4},
    {id: 4, name: 'Vlad', friends: null},
  ];

  let userFindById = users.find(el => el.id === id);

  return new Promise((res, rej) => {
    setTimeout(() => {
      if(!userFindById){
        rej('Some error');
      } else {
        res(userFindById);
      }
    }, 1000);
  });
};

// findUserDB(1)
// .then(data => {
//   console.log(data);
//   return data.friends;
// })
// .then(friend => {
//   console.log(friend);
//   return findUserDB(friend);
// })
// .then(data => {
//   console.log(data);
// });


function findNeedle(haystack) {
  let text =  "found the needle at position ";
  let ind = haystack.findIndex(el => el === "needle");
  return text + ind;
}

// console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));


function between(a, b) {
  let arr = [];
  for(let i = a; i <= b; i++){
    arr.push(i);
  }
  return arr;
}

// console.log(between(1, 4));


const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
};

// console.log(binaryArrayToNumber([0, 0, 0, 1]));
// console.log(binaryArrayToNumber([0, 1, 1, 0]));
// console.log(binaryArrayToNumber([1, 1, 1, 1]));


function oddOrEven(array) {
  if(array.length === 0){
    return 'even';
  }
  return array.reduce((c, i) => c + i) % 2 != 0? 'odd': 'even';
}

// console.log(oddOrEven([0]));
// console.log(oddOrEven([]));
// console.log(oddOrEven([0, 1, 4]));
// console.log(oddOrEven([0, -1, -5]));

function seatsInTheater(nCols, nRows, col, row) {
  return (nCols * nRows) - (row * nCols) - ((col - 1) * (nRows - row))
}
// console.log(seatsInTheater(16,11,5,3));

function position(letter){
  let alp = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  return `Position of alphabet: ${alp.findIndex(el => el === letter) + 1}`;
  }

// console.log(position("z"));
// console.log(position("e"));


function getChar(c){
  return String.fromCharCode(c);
}

// console.log(getChar(55));

function peopleWithAgeDrink(old) {
  return old <= 13? 
          "drink toddy":
          old <= 17?
          "drink coke":
          old <= 20?
          "drink beer":
          "drink whisky";
}
// console.log(peopleWithAgeDrink(22));


function pipeFix(numbers){
  let numberOne = numbers[0];
  let numberFinish = numbers[numbers.length - 1];
  let result = [];
  for(let i = numberOne; i <= numberFinish; i++){
    result.push(i);
  }
  return result;
}

// console.log(pipeFix([1,2,3,5,6,8,9]));


const stringToArray = string => string.split(' ');

// console.log(stringToArray("I love arrays they are my favorite"));



function solution(a, b){
  return a.length < b.length? a + b + a: b + a + b;
}


// console.log(solution('45', '1'));
// console.log(solution('Soon', 'Me'));


function finalGrade (exam, projects) {
  return exam > 90 || projects > 10?
        100:
        exam > 75 && projects >= 5?
        90:
        exam > 50 && projects >= 2?
        75:
        0;
}

// console.log(finalGrade(100, 12));
// console.log(finalGrade(85, 5));
// console.log(finalGrade(67, 9));


function isTriangle(a,b,c){
  return a + b > c && b + c > a && a + c > b ;
 }
// console.log(isTriangle(1, 2, 2));
// console.log(isTriangle(7, 2, 2));
// console.log(isTriangle(8,10,1));



const reverseSeq = n => {
  const arr = [];
  for(let i = 1; i <= n; i++){
    arr.push(i);
  }
  return arr.reverse();
};

// console.log(reverseSeq(5));


function friend(friends){
  const result = friends.filter(f => f.length === 4);
  return result;
}

// console.log(friend(["Ryan", "Kieran", "Mark"]));


function arrayPlusArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((c, i) => c + i, 0);
}


// console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));




function greet(language){
  const langWelcome = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso'
  };
  return !langWelcome[language]? langWelcome.english: langWelcome[language];
}

// console.log(greet('aa'));
// console.log(greet('english'));


function cookie(x){
  if(typeof(x) === 'string'){
    return "Who ate the last cookie? It was Zach!"
  } else if(typeof(x) === 'number'){
    return "Who ate the last cookie? It was Monica!"
  } else {
    return "Who ate the last cookie? It was the dog!"
  } 
}

// console.log(cookie("Ryan"));
// console.log(cookie(2.5));
// console.log(cookie(false));

function whoIsPaying(name){
  return name.length > 2? [name, name.slice(0,2)]: [name];
}
// console.log(whoIsPaying("Mexico"));
// console.log(whoIsPaying("Me"));
// console.log(whoIsPaying(""));

function powerOf4(n) {
  if(n === 1){
    return true;
  }else if(n === 0 || !Number.isInteger(n / 4)){
    return false;
  }else if(typeof n === 'number'){
    return  Number.isInteger(Math.sqrt(n));
  }
  return false;
}

// console.log(powerOf4(16));
// console.log(powerOf4(1024));
// console.log(powerOf4(32));
// console.log(powerOf4(0));
// console.log(powerOf4(1));
// console.log(powerOf4('4'));



function center (strng, width, fill = ' ') {
  let witdthOfFill = width - strng.length ;
  if(witdthOfFill < 0){
    return strng;
  } else{
    let str = '';
    for(let i = 0; i < Math.ceil(witdthOfFill / 2); i++){
      str += fill;
    }
    let result = str + strng + str;
    return !Number.isInteger(witdthOfFill / 2)?
                    result.slice(0, result.length - 1):
                    result;          
  }
}

// console.log(center('a', 3));
// console.log(center('abc', 10, '_'));
// console.log(center('abcdefg', 2));
// console.log(center("qzEWKTivCWhYjsdvXMrSlsiY", 60, 'F'));

function distinct(a) {
  return [...new Set(a)];
}
// console.log(distinct([1,2]));

var capitals = function (word) {
  let result = [];
  word.split('').filter((el, i) => el === el.toUpperCase()? result.push(i): el);
  return result;
};

// console.log(capitals('CodEWaRs'));

let candidate1 = { minSalary: 120000 },
    job1 = { maxSalary: 130000 },
    job2 = { maxSalary: 80000 },
    job3 = {};

function match(candidate, job) {
  if(!candidate.minSalary || !job.maxSalary){
    throw  'Error'
  }
  return candidate.minSalary * 0.9 <= job.maxSalary
}
// console.log(match(candidate1, job1));
// console.log(match(candidate1, job2));
// console.log(match(candidate1, job3));

function processData(data){
  return data.map(el => el[0] - el[1]).reduce((c, i) => c * i);
}
// console.log(processData([[2, 5], [3, 4], [8, 7]]));
// console.log(processData([[2, 9], [2, 4], [7, 5]]));


function areaCode(text) {
 const start = text.indexOf('(');
 const end = text.indexOf(')');
 return text.slice(start + 1, end);
}

// console.log(areaCode("The supplier's phone number is (555) 867-5309"));

function printArray(array){
  return array.join(',');
}

// console.log(printArray([2,3,4,5]));


function dropCap(n) {
  return n.split(' ')
  .map(el => el.length < 3 || el === ''? el: el[0].toUpperCase() + el.slice(1).toLowerCase())
  .join(' ');
}

// console.log(dropCap('Revelation of the contents outraged American public opinion, and helped generate'));
// console.log(dropCap('more  than    one space between words'));


function twoArePositive(a, b, c) {
  let one = a > 0;
  let two = b > 0;
  let three = c > 0;

  return one && two && !three || one && three && !two || two && three && !one;
}

// console.log(twoArePositive(2, 4, -3));
// console.log(twoArePositive(-4, 6, 0));
// console.log(twoArePositive(4, 6, 10));


function main (verb, noun){
  return verb + noun;
}

// console.log(main('take ', 'item'));

function drawStairs(n) {
  let str = '';
  for(let i = 0; i < n; i++){
    for(let k = 0; k < i; k++){
      str += ' ';
    }
    str += 'I\n';
  }
  return str.slice(0, str.length - 1) ;
}

// console.log(drawStairs(3));

function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return ({status: msg});
 
}

// console.log(getStatus(true).status);


const getASCII = c => c.charCodeAt(0);

// console.log(getASCII('A'));


function twoSort(s) {
  const firstWort = s.sort()[0];
  return firstWort.split('').map(e => e + '***').join('').slice(0, -3);
}

// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));


function to24hourtime(hour, minute, period) {
  let checkMinute = minute >= 10? minute: '0' + minute;
  let checkZero = hour === 12;
  if(period === 'am'){
    let num = hour === 10 || hour === 11;
    return num? '' + hour + checkMinute:
            checkZero? '00' + checkMinute:
            '0' + hour + checkMinute;
  } else {
    let endResult = '' + checkMinute;
    return checkZero? hour + endResult:  hour + 12 + endResult;
  }}

// console.log((to24hourtime(12,  0, "am")));
// console.log((to24hourtime(12,  51, "pm")));


function sumNoDuplicates(numList) {
  if(numList.length === 0) return 0;
  let findDublicate = numList.filter((e, i) => numList.indexOf(e) !== i);
  let result = numList.filter(e => !findDublicate.includes(e));
  return result.reduce((c, i) => c + i, 0);
}
// console.log(sumNoDuplicates([1, 1, 2, 2, 3]));

function solution(pairs){
  let str = '';
  for(let key in pairs){
    str += key + ' = ' + pairs[key] + ',' 
  }
  return str.slice(0, str.length - 1);
}

// console.log(solution({a: 1, b: '2'}));


function initializeNames(name){
  let checkName = name.split(' ').length <= 2;
  if(checkName){
    return name;
  } else {
    let newName = name.split(' ');
    let firstName = newName.splice(0, 1).join('') + ' ';
    let lastName = newName.splice(-1, 1).join('');
    let middleName = newName.map(e => e[0] + '. ').join('');
    return firstName + middleName + lastName;
  }
}

// console.log(initializeNames('Jack Ryan'));
// console.log(initializeNames('Lois Mary Lane'));
// console.log(initializeNames('Dimitri'));
// console.log(initializeNames('Alice Betty Catherine Davis'));


function getLargerNumbers(a, b) {
  return a.map((e, i )=>  e < b[i]? b[i]: e );
}

//  console.log(getLargerNumbers([1, 4, 5], [2, 6, 3]));


function factors(integer, limit){
    let arr = [];
    for(let i = limit; i <= integer; i++){
      if(integer % i === 0){
        arr.push(i);
      }
    }
    return arr;
}

// console.log(factors(30, 2));


function bigToSmall(arr){
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(...arr[i])
  }
  return newArr.sort((a, b) => a < b? 1: -1).map(e => e + '>').join('').slice(0, -1);
}

// console.log(bigToSmall([[1,2],[3,4],[5,6]]));


function whoseMove(lastPlayer, win) {
  return lastPlayer && win? lastPlayer: 
            lastPlayer === 'black'? 'white': 'black';
}

// console.log(whoseMove('white', true));

function neutralise(s1, s2) {
  let result = '';
  for(let i = 0; i < s1.length; i++){
      result += s1[i] === s2[i]? s1[i]: 0;
  }
  return result;
}

// console.log(neutralise("-+-+-+", "-+-+-+"));
// console.log(neutralise("-++-", "-+-+"));


function spinAround(turns) {
  if(turns.length < 3){
    return 0;
  } 
  const rightResult =  turns.filter(e => e === 'right').length;
  const lefttResult =  turns.filter(e => e === 'left').length;

  const result = Math.abs(rightResult - lefttResult);
  return result < 4? 0: Math.floor(result / 4);
}


// console.log(spinAround(["right","right","right","right","right","right","right","right","left","left"]));
// console.log(spinAround(['right', 'right', 'right', 'left', 'right', 'right']));
// console.log(spinAround(['right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right', 'right']));


function reverseLetter(str) {
  return str.split('').filter(e => e.match(/[a-zA-Z]/g)).reverse().join('');
}

// console.log(reverseLetter("krishan"));
// console.log(reverseLetter("ultr53o?n"));


function mergeArrays(a, b) {
  return [...new Set(a.concat(b).sort((a, b) => a - b))];
}

// console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
// console.log(mergeArrays([1, 3, 5], [1, 3, 6]));

function twoHighest(arr) {
  let uniq = [...new Set(arr)];
  if(arr.length === 0) return [];
  if(uniq.length === 1) {
    return uniq;
  }
  return uniq.sort((a, b) => b - a).slice(0, 2);
}


// console.log(twoHighest([15, 20, 20, 17]));
// console.log(twoHighest([59400,55690,24268,20708,70568]));

function hello(name = '') {
  return name === ''? 'Hello, World!': 'Hello, ' + name.split(' ').map(e => e[0].toUpperCase() + e.slice(1).toLowerCase()).join('') + '!';
}

// console.log(hello('alice'));
// console.log(hello('dsaSdsS'));
// console.log(hello(''));
// console.log(hello());


function mean(lst){
  let num = 0;
  let str = '';
  lst.map(e => {
    return isFinite(e)? num += +e: str += e;
  })
  return [num / str.length, str]
}
// console.log(mean( ["u", "6", "d", "1", "i", "w", "6", "s", "t", "4", "a", "6", "g", "1", "2", "w", "8", "o", "2", "0"]));


function calculate_total(subtotal, tax, tip) {
  return +(subtotal * (100 + tax + tip) / 100 ).toFixed(2);
  
}
// console.log(calculate_total(5, 5, 10));
// console.log(calculate_total(36.97, 7, 15));



function replace(s){
  return s.replace( /[aeiouAEIOU]/gi, '!');
}

// console.log(replace("!Hi! Hi!"));
// console.log(replace("aeiou"));
// console.log(replace("ABCDE"));


function esrever( str ){
  let mark = str.slice(-1);
  let stringReverse = str.split(' ').reverse().map(e => e.split('').reverse().join('')).join(' ')
  return stringReverse.slice(1) + mark;
}

// console.log(esrever('an Easy one?'));


function timeConvert(num) { 
  if( num === 0 || num < 0){
    return '00:00';
  } 
    if(num % 60 == 0){
      let res = num / 60 + ':00';
      return num / 60 < 10? '0' + res: res;
    } else{
        let newHour = Math.floor(num / 60);
        let newMin = num - newHour * 60;

        let resH = newHour < 10? '0' + newHour: newHour;
        let resM = newMin < 10? '0' + newMin: newMin;

        return resH + ':' + resM;
    }
}

// console.log(timeConvert(0));
// console.log(timeConvert(-6));
// console.log(timeConvert(75));
// console.log(timeConvert(970));
// console.log(timeConvert(120));
// console.log(timeConvert(60));
// console.log(timeConvert(228));

function doubleChar(str) {
    return str.split('').map(e => e.repeat(2)).join('');
}

// console.log(doubleChar("abcd"));

const arrCheck = value => {
  let checkValue = value.map(e => Array.isArray(e)? 1: -1).reduce((c,i) => c + i, 0)
  return Array.isArray(value) &&   checkValue === value.length
}

// console.log(arrCheck([]));
// console.log(arrCheck([[1],[2],[3]]));
// console.log(arrCheck([[],{}]));


function danspower(num, power) {
  let result = Math.pow(num, power)
  return num === 0 || power === 0? 0: result  % 2 === 0? result: Math.round(result /10) * 10;
}

// console.log(danspower(5, 0));
// console.log(danspower(0, 3));
// console.log(danspower(5, 3));
// console.log(danspower(6, 4));

function mygcd(x,y){
  if(y !== 0){
    const c = x % y;
    return mygcd(y, c);
  }
  return x;
}
// console.log(mygcd(30, 12));
// console.log(mygcd(36, 12));

function min(arr, toReturn) {
  let copyArr = [...arr].sort((a,b) => a - b)[0];
  return toReturn === 'value'? copyArr:arr.indexOf(copyArr); 
}

// console.log(min([1,2,3,4,5], 'index'));
// console.log(min([1,2,3,4,5], 'value'));

function getMissingElement(superImportantArray){
  for (i = 0; i <= 9; i++) {
    if (superImportantArray.indexOf(i) === -1) {
      return i;
    }
  }
}
// console.log(getMissingElement( [0,5,1,3,2,9,7,6,4]));
// console.log(getMissingElement( [3,2,4,5,7,0,8,6,1]));
// console.log(getMissingElement( [3,2,4,5,7,9,8,6,1]));

const findDigit = function(num, nth){
    if(nth <= 0) return -1;
    let newNum = (String(num)).split('').reverse('').join('')
    return isFinite(+newNum[nth - 1])? +newNum[nth - 1]: 0;
};

// console.log(findDigit(5673, 4));
// console.log(findDigit(129, 2));
// console.log(findDigit(-2825, 3));
// console.log(findDigit(-456, 4));
// console.log(findDigit(28, -8));



function cubeOdd(arr) {
  let sum = arr.map(e => e % 2 !== 0? e * e * e: 0).reduce((c,i) => c + i);
  return isFinite(sum)? sum: undefined;
}

// console.log(cubeOdd([1, 2, 3, 4]));
// console.log(cubeOdd([-3,-2,2,3]));
// console.log(cubeOdd(["a",12,9,"z",42]));


function cookingTime(eggs) {
  if(eggs > 0 && eggs < 8){
    return 5;
  } else {
    return Math.ceil(eggs / 8) * 5;
  }
}
// console.log(cookingTime(4));
// console.log(cookingTime(10));

function gordon(a){
  let vowel = /[eiou]/gi;
  let newA = a.toUpperCase().split(' ').map(e => e + '!!!! ').join('').slice(0, -1);
  return newA.replace(vowel, '*').replace(/A/g, '@');
}

// console.log(gordon('What feck damn cake'));
function moveTen(s){
  return s.split('').map(e => {
    let newChar = e.charCodeAt(0) + 10;
    return newChar > 122? String.fromCharCode(newChar - 26): String.fromCharCode(newChar);
  }).join('');
}

// console.log(moveTen("testcase"));

function arrange(arr){
  let gramm = [];
  let kg = [];
  let tonn = [];

  arr.filter(e =>{
    if(e[e.length - 2] === 'K'){
      let newE = e.slice(0, -2);
      kg.push(newE);
    } else if(e[e.length - 1] === 'T'){
      let newE = e.slice(0, -1);
      tonn.push(newE);
    } else {
      let newE = e.slice(0, -1);
      gramm.push(newE);
    }
  });

  let newGramm = gramm.length > 0 ? gramm.sort((a, b) => a - b).map(e => e + 'G'): [];
  let newKg = kg.length > 0 ? kg.sort((a, b) => a - b).map(e => e + 'KG'): [];
  let newTonn = tonn.length > 0 ? tonn.sort((a, b) => a - b).map(e => e + 'T'): [];
  return newGramm.concat(newKg, newTonn);
  
}

// console.log(arrange(["200G","300G","150G","100KG"]));


function combat(health, damage) {
  return health - damage > 0? health - damage: 0;
}

// console.log(combat(100, 5));
// console.log(combat(20, 30));