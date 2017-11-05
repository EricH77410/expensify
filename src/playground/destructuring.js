// const Person = {
//     name: 'Miles',
//     age:17,
//     location: {
//         city:'Fresnes sur marne',
//         temp: 12
//     }
// }

// const {name: firstname='Rico',age} = Person

// console.log(firstname+' is '+age)

// const { city, temp: temperature } = Person.location 

// if(city && temperature){
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday',
//     publisher:{
//         //name:'Penguin'
//     }
// }

// const { name: publisherName='Self publishing' } = book.publisher

// console.log(publisherName);


// Array

const address = ['4 rue des petits jardins','Fresnes sur marne','Seine et marne','77410']
const[,city,state,zip] = address
console.log(`you are in ${city}, ${state}`)

const item =['Coffee (hot)', '2.00 €','2.50 €','2.80 €']

const[drink,small,medium,large] = item

console.log(`A large ${drink} cost : ${large}`)
console.log(`A medium ${drink} cost : ${medium}`)