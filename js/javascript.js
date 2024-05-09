function alimentos () {
    var nombrealimentos = ["bread", "milk", "cheese", "hummus", "noodles"]


    console.log (nombrealimentos[0] + "-"+ nombrealimentos[1]+"-" + nombrealimentos[2] + "-"+ nombrealimentos[3]+"-"+ nombrealimentos[4])


    for (let i =0; i <nombrealimentos.length;i++) {
  
        console.log(nombrealimentos[i])
  
      }

}

function díasSem () {
    var díasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes","Sábado","Domingo"]


    console.log (díasSemana[0] + "-"+ díasSemana[1]+"-" + díasSemana[2] + "-"+ díasSemana[3]+ "-"+ díasSemana[4]+ "-"+ díasSemana[5]+ "-"+ díasSemana[6])

    
    for (let i =0; i <díasSemana.length;i++) {
  
        console.log(díasSemana[i])
  
      }

}



function Users() {

    let usuarios = [
                                {
                                    "nombre" : "Mónica",
                                    "apellido" : "Escobar",
                                    "Telefono" : "11111",
                                    "edad" : "48 años"

                                },
                                {
                                    "nombre" : "Mario",
                                    "apellido" : "Moreno",
                                    "Telefono" : "22222",
                                    "edad" : "50 años"
                                },
                                {
                                    "nombre" : "Hector",
                                    "apellido" : "León",
                                    "Telefono" : "33333",
                                    "edad" : "62 años"
                                },
                                {
                                    "nombre" : "Wilson",
                                    "apellido" : "Buitrago",
                                    "Telefono" : "44444",
                                    "edad" : "49 años"
                                },
                                {
                                    "nombre" : "Emilce",
                                    "apellido" : "Abril",
                                    "Telefono" : "55555",
                                    "edad" : "25 años"
                                }
                    ]

    for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].apellido)
                        
}
                    
    console.log (usuarios)    
                  
}



function MatHob() {

    let MateriasHobbies = [
                                                    {
                                                        "nombre" : "Mónica",
                                                        "apellido" : "Escobar",
                                                        "Telefono" : "11111",
                                                        "edad" : "48 años",
                                                        "materias" : ["ingles","física","religión"],
                                                        "hobbies" : ["ciclismo","natación","futbol"]
                    
                                                    },
                                                    {
                                                        "nombre" : "Mario",
                                                        "apellido" : "Moreno",
                                                        "Telefono" : "22222",
                                                        "edad" : "50 años",
                                                        "materias" : ["ingles","religión"],
                                                        "hobbies" : ["ciclismo"]
                                                    },
                                                    {
                                                        "nombre" : "Hector",
                                                        "apellido" : "León",
                                                        "Telefono" : "33333",
                                                        "edad" : "62 años",
                                                        "materias" : ["matematicas","física","deportes"],
                                                        "hobbies" : ["karate", "baloncesto"]
                                                    },
                                                    {
                                                        "nombre" : "Wilson",
                                                        "apellido" : "Buitrago",
                                                        "Telefono" : "44444",
                                                        "edad" : "49 años",
                                                        "materias" : ["física","química","sociales"],
                                                        "hobbies" : ["karate", "baile"]
                                                    },
                                                    {
                                                        "nombre" : "Emilce",
                                                        "apellido" : "Abril",
                                                        "Telefono" : "55555",
                                                        "edad" : "25 años",
                                                        "materias" : ["física","robotica","programación"],
                                                        "hobbies" : ["alpinismo", "futbol"]
                                                    }
                                ]                             
                    
     for (let i = 0; i < MateriasHobbies.length; i++) {
     console.log(MateriasHobbies[i].hobbies[0])
                                            
    }
                                        
    console.log (MateriasHobbies)    
                                      
    }



    function Bebidas () {
        var nombres = ["Gaseosa", "Jugo", "Agua", {"Tamaño": ["Grande","Mediano","Pequeño"]}]
    
    
        console.log (nombres[0] + "-"+ nombres[1]+"-" + nombres[2] + "-"+ nombres[3])
    
        
        for (let i =0; i <nombres.length;i++) {
      
            console.log(nombres[i])
      
          }
   
    }