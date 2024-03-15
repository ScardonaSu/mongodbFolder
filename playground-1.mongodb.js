

db.createCollection('users')

db.users.insertMany([
    {
      nombres: "Diego",
      apellidos: "Gonzalez",
      correo: "diego@example.com",
      ciudad: "Ciudad de Mexico",
      país: "Mexico",
      salario: 52000,
      edad: 29,
      altura: 165,
      peso: 135
    },
    {
      nombres: "Monica",
      apellidos: "Herrera",
      correo: "monica@example.com",
      ciudad: "Bogota",
      país: "Colombia",
      salario: 48000,
      edad: 31,
      altura: 175,
      peso: 160
    },
    {
      nombres: "Carlos",
      apellidos: "Jimenez",
      correo: "carlos@example.com",
      ciudad: "Lima",
      país: "Peru",
      salario: 55000,
      edad: 27,
      altura: 160,
      peso: 125
    },
    {
      nombres: "Gabriela",
      apellidos: "Ramirez",
      correo: "gabriela@example.com",
      ciudad: "Santiago",
      país: "Chile",
      salario: 42000,
      edad: 33,
      altura: 175,
      peso: 170
    },
    {
      nombres: "Paul",
      apellidos: "Vargas",
      correo: "paul@example.com",
      ciudad: "Buenos Aires",
      país: "Argentina",
      salario: 60000,
      edad: 30,
      altura: 170,
      peso: 140
    },
    {
      nombres: "Sandra",
      apellidos: "Santos",
      correo: "sandra@example.com",
      ciudad: "Caracas",
      país: "Venezuela",
      salario: 51000,
      edad: 32,
      altura: 178,
      peso: 155
    },
    {
      nombres: "Erick",
      apellidos: "Suarez",
      correo: "erick@example.com",
      ciudad: "Lima",
      país: "Peru",
      salario: 49000,
      edad: 29,
      altura: 165,
      peso: 135
    },
    {
      nombres: "Francisco",
      apellidos: "Gomez",
      correo: "francisco@example.com",
      ciudad: "Montevideo",
      país: "Uruguay",
      salario: 53000,
      edad: 34,
      altura: 180,
      peso: 165
    },
    {
      nombres: "Laura",
      apellidos: "Torres",
      correo: "laura.torres@example.com",
      ciudad: "Medellin",
      país: "Colombia",
      salario: 47000,
      edad: 28,
      altura: 165,
      peso: 150
    },
    {
      nombres: "Miguel",
      apellidos: "Martin",
      correo: "miguel@example.com",
      ciudad: "Madrid",
      país: "Espana",
      salario: 58000,
      edad: 31,
      altura: 175,
      peso: 160
    },
    {
      nombres: "Cristina",
      apellidos: "Morales",
      correo: "cristina@example.com",
      ciudad: "Lima",
      país: "Peru",
      salario: 57000,
      edad: 33,
      altura: 168,
      peso: 145
    },
    {
      nombres: "Raul",
      apellidos: "Gutierrez",
      correo: "raul@example.com",
      ciudad: "Santiago",
      país: "Chile",
      salario: 48000,
      edad: 30,
      altura: 172,
      peso: 155
    },
    {
      nombres: "Ana",
      apellidos: "Luna",
      correo: "ana@example.com",
      ciudad: "Bogota",
      país: "Colombia",
      salario: 62000,
      edad: 35,
      altura: 170,
      peso: 150
    },
    {
      nombres: "Manuel",
      apellidos: "Perez",
      correo: "manuel@example.com",
      ciudad: "Ciudad de Mexico",
      país: "Mexico",
      salario: 53000,
      edad: 32,
      altura: 178,
      peso: 165
    },
    {
      nombres: "Liliana",
      apellidos: "Alvarez",
      correo: "liliana@example.com",
      ciudad: "Lima",
      país: "Peru",
      salario: 51000,
      edad: 29,
      altura: 163,
      peso: 140
    },
    {
      nombres: "Javier",
      apellidos: "Mendoza",
      correo: "javier@example.com",
      ciudad: "Montevideo",
      país: "Uruguay",
      salario: 49000,
      edad: 27,
      altura: 175,
      peso: 160
    },
    {
      nombres: "Elena",
      apellidos: "Garcia",
      correo: "elena.garcia@example.com",
      ciudad: "Medellin",
      país: "Colombia",
      salario: 50000,
      edad: 30,
      altura: 165,
      peso: 145
    },
    {
      nombres: "Ricardo",
      apellidos: "Castro",
      correo: "ricardo@example.com",
      ciudad: "Caracas",
      país: "Venezuela",
      salario: 48000,
      edad: 28,
      altura: 175,
      peso: 155
    },
    {
      nombres: "Marina",
      apellidos: "Ortega",
      correo: "marina@example.com",
      ciudad: "Buenos Aires",
      país: "Argentina",
      salario: 55000,
      edad: 31,
      altura: 170,
      peso: 145
    },
    {
      nombres: "Daniel",
      apellidos: "Navarro",
      correo: "daniel@example.com",
      ciudad: "Lima",
      país: "Peru",
      salario: 58000,
      edad: 32,
      altura: 180,
      peso: 170
    }
  ])



// Obtener todos los usuarios que sean mayores de 18 años.

db.users.find({edad: {$gte: 18}})

// Obtener todos los usuarios que sean de Londres o de París.

db.users.find({
  $and:[
    {país: {$eq: "Peru"}},
    {país: {$eq:"Argentina"}},
  ]
})


// Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.

db.users.find({
  $and: [
    {salario: {$gte: 20000}},
    {edad: {$lte: 30}}
  ]
})



// Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.

db.users.find({
  $and:[
    {país: {$eq: "Uruguay"}},
    {salario: {$gte: 30000}}
  ]
})

// Obtener todos los usuarios que tengan entre 25 y 35 años.
db.users.find({
  $and:[
    {edad: {$gte: 25 }},
    {edad: {$lte:35}}
  ]
})
// 
// Obtener a todos los usuarios que no sean de Estados Unidos.

db.users.find({país:{$ne:"Uruguay"}})



// Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.

db.users.find({
  $and:[
      {país: {$eq: "Colombia"}},
      {salario: {$gte: 25000}}
  ]
})

// Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.

db.users.find({
  $and: [
    {país: {$eq: "Argentina"}},
    {salario: {$gte: 50000}}
  ]
})

// Obtener a todos los usuarios que no sean de Londres ni de París.

db.users.find({
  $and: [
    {país: {$ne: "Peru"}},
    {país: {$ne: "Argentina"}}
  ]
})

// Obtener a todos los usuarios que ganen menos de $2000 al mes o que tengan más de 40 años.

db.users.find({salario: {$lte: 50000}})

// Obtener a todos los usuarios que sean de Canadá y ganen más de $4000 al mes o que tengan una altura mayor a 180 cm.

db.users.find({
  $and:[
    {salario: {$gte:40000}},
    {altura: {$gte: 180}}
  ]
})
  

// Obtener todos los usuarios que sean de Italia y tengan entre 20 y 30 años.

db.users.find( {
  $and:[
    {edad: {$gt: 20}},
    {edad: {$lt: 30}},
    {país: {$eq: "Colombia"}}
  ]
})

// Obtener todos los usuarios que no tengan un correo electrónico registrado.

db.users.find({correo: {$exists: false}})


// Obtener todos los usuarios que sean de Francia y que su salario esté entre $3000 y $5000 al mes.

db.users.find({
  $and:[
    {salario: {$gte: 40000}},
    {salario: {$lte: 50000}}
  ]
})

// Obtener todos los usuarios que sean de Brasil y que tengan un peso menor a 120 libras o más de 140 libras. ////////////////////////

db.users.find({
  $and:[
    {país: {$eq: "Colombia"}},
    {salario: {$lte: 50000}},
    {salario: {$gte: 60000}}
  ]
})

// Obtener todos los usuarios que sean de Argentina o de Chile y que tengan una edad menor a 25 años.

db.users.find({
  $and:[
    {país: {$in: ["Colombia", "Argentina"]}},
    {edad: {$lte: 30}}
  ]
})


// Obtener a todos los usuarios que no sean de España ni de México y que ganen menos de $3000 al mes.

db.users.find({
  $and:[
    {país: {$in: ["Mexico", "Venezuela"]}},
    {salario: {$lte: 50000}}
  ]
})

// Obtener todos los usuarios que sean de Alemania y que tengan un salario menor a $4000 o una edad mayor a 35 años.////////////////////

db.users.find({
  $and:[
    {país: {$eq: "Colombia"}},
    {salario: {$lte: 52000}},
    {edad: {$gte: 36}}
  ]
})


// Obtener todos los usuarios que no sean de Colombia y que su altura sea menor a 170 cm.

db.users.find({
  $and:[
    {país: {$ne: "Colombia"}},
    {altura: {$eq: 165}}
  ]
})


// Obtener todos los usuarios que sean de India y que no tengan un salario registrado.

db.users.find({
  $and: [
    {país: {$eq: "Uruguay"}},
    {salario: {$exists: false}}
  ]
})



    // Obtener todos los usuarios que sean mayores de 18 años.
    db.users2.find({age: {$gte: 18}});
    
    
    // Obtener todos; los usuarios que sean de Londres o de París.
    db.users2.find({
        $and: [
            {country: "Francia"},
            {country: "Inglaterra"}
        ]
    });
    
    // Obtener a todos los usuarios que sean de Estados Unidos y que ganen más de $2500 al mes.
    db.users2.find({
        $and:[
            {country: "Estados Unidos"},
            {salary: {$gt: 2500}} 
        ]
    })

    // Obtener a todos los usuarios que ganen más de $2000 al mes y tengan menos de 30 años.
    

    // Obtener a todos los usuarios que sean de España y ganen más de $3000 al mes.
    
    
    // Obtener todos los usuarios que tengan entre 25 y 35 años.
    db.users2.find({
        $and: [
            {age: {$gte: 25}},
            {age: {$lte: 35}}
        ]
    });

    
    // Obtener a todos los usuarios que no sean de Estados Unidos.

    db.users2.find({country: {$ne:"Estados Unidos"}})
    
    // Obtener a todos los usuarios que sean de Londres y que ganen más de $2500 o que tengan más de 30 años.
    
    db.users.find({
        $and:[
            {country: {$eq: "Londres"}},
            {salary: {$gte: 2500}}
        ]
    })

    // Obtener a todos los usuarios que sean de Australia y tengan un peso mayor a 140 libras.
    
