//Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​
const data = [
    {
      name: 'Butters',
      age: 3,
      type: 'dog',
    },
    {
      name: 'Lizzy',
      age: 6,
      type: 'dog',
    },
  
    {
      name: 'Red',
      age: 1,
      type: 'cat',
    },
    {
      name: 'Joey',
      age: 3,
      type: 'dog',
    },
  ];

  let totalAgeDog = data.filter(animal=>{
      if(animal.type === 'dog'){
          return animal.name
      }
  })
  .map(animal=> animal.age)
  .reduce((cont, number)=> cont + number)

  console.log(totalAgeDog)