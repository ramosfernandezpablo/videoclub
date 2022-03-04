
/*Número de ventas realizadas por cada dependiente y ordenado del que haya hecho menos 
ventas al que hay relizado más */

db.coleccionVideoClub.aggregate
(
  [

      {
        $group: 
        {
          _id: "$dependiente",
          numeroVentas: 
          {
            $count: {},
          }
        }
      },

      {
          $sort:
          {
              numeroVentas:1
          }
      }

    ]
  )

  /*Realiza la media de precio de los alquileres realizado por cada dependiente según las ventas realizadas por 
  cada uno y ordenados de menos a mayor.*/

  db.coleccionVideoClub.aggregate([
    {
      $unwind: 
      {
        path: "$peliculas",
      },

    },

      {
        $group: 
        {
          _id: "$dependiente",
          mediaDependiente: 
          {
            $avg: 
            {
              $multiply: ["$peliculas.precioAlquiler", "$peliculas.stock"],
            }
          }
        }
      },

      {
        $sort:
          {
              numeroVentas:-1
          }
      }
      
    ]
  )

  /*Número de películas alquiladas por cada cliente */
db.coleccionVideoClub.aggregate([
  {
      $unwind:
      {
          path:"$datosAbonado"
      }
  },

  {
      $group:
      {
          _id:"$datosAbonado.nombreCliente",
          alquileresRealizados:
          {
              $sum:"$datosAbonado.alquileres"
          }
      }
  },
  {
      $sort:
      {
          alquileresRealizados:1
      }
  }
])

//Total de beneficios que han recaudado los dependientes con las ventas y alquileres de películas
db.coleccionVideoClub.aggregate([
  {
    $unwind: 
    {
      path: "$peliculas",
    },
  },
  {
    $project: 
    {
      dependiente: 1,

      diferenciaAlquileresVentas: 
      {
        $subtract: 
        [
          {
            $multiply: 
            [
                "$peliculas.precioVenta",
                "$peliculas.stock"
            ],
          },

          {
            $multiply:
            [
                "$peliculas.precioAlquiler",
                "$peliculas.stock"
            ]
          }
        ]
      }
    }
  },

  {
    $group: 
    {
      _id: "$dependiente",
      totalLiquido: 
      {
        $sum: "$diferenciaAlquileresVentas",
      }
    }
  }
])


//Películas vendidas por cada dependiente.

db.peliculas.aggregate([
{
  $lookup: 
  {
      from: 'clientes',
      localField: 'id',
      foreignField: 'dependiente',
      as: 'pelisVendidasPorDependiente'
 }
},

{   
  $addFields: 
  {
      dependiente: 
      {
      $arrayElemAt: [ '$pelisVendidasPorDependiente', 0]
      }
 }
}
]).pretty()

db.peliculas.aggregate([
  {
      $count: "peliculas.nombrePeliculas"
  }
])

/*Contabiliza todas las películas que hay en el videoclub*/

db.peliculas.aggregate([
  {
      $group: 
      {
          _id: "$nombrePelicula",
          
      }
  },
  {
      $project: 
      {
          _id: 0,
          nombrePelicula: "$_id",
          
      }
  },

  {
    $count: "nombrePelicula"
  }
])

/*Muestra los nombres y unidades de las diferentes peliculas del videoclub */

db.peliculas.aggregate([
  {
      $group: 
      {
          _id: "$nombrePelicula",
          numeroPelis: {$sum: 1}
          
      }
  },
  {
      $project: 
      {
          _id: 0,
          nombrePelicula: "$_id",
          numeroPelis: 1
          
      }
  }
])

/*Numero de ventas realizadas por los vendedores del videoclub, siendo un total de 6 */

db.clientes.aggregate([
  {
      $count: "dependiente"
  }
])

/*Numero de ventas realizadas por los vendedores del videoclub, pero diferenciando 
entre los distintos dependientes de la tienda. OPCION 1:*/

db.clientes.aggregate([
  {
      $group: 
      {
          _id: "$dependiente",
          numeroVentasRealizadas: {$sum: 1}
      }
  },
  {
      $project: 
      {
          _id: 0,
          nombreDependiente: "$_id",
          numeroVentasRealizadas: 1
      }
  }
])

/*Numero de ventas realizadas por los vendedores del videoclub, pero diferenciando 
entre los distintos dependientes de la tienda. OPCION 2:*/

db.clientes.aggregate([
  {
      $sortByCount: "$dependiente"
  },
  {
      $project: {
          _id: 0,
          nombreDependiente: "$_id",
          numeroVentasRealizadas: "$count"
      }
  }
])

db.clientes.aggregate([
  {
      $sortByCount: "$datosAbonado.nombreCliente"
  },
  {
      $project: {
          _id: 0,
          nombreCliente: "$_id",
          numeroAlquileresRealizados: "$count"
      }
  }
])

db.peliculas.aggregate( [
  {
    $addFields: {
      totalHomework: { $sum: "$peliculas." } ,
      totalQuiz: { $sum: "$quiz" }
    }
  },
  {
    $addFields: { totalScore:
      { $add: [ "$totalHomework", "$totalQuiz", "$extraCredit" ] } }
  }
] )


/*Agrupa los datos de las peliculas con los de los clientes correspondientes que alquilaro o compraron 
dichas peliculas*/
db.peliculas.aggregate([
  {
      $lookup: {
          from: 'clientes',
          localField: 'id',
          foreignField: '_id',
          as: 'abonados'
     }
  },
  
  {   
      $addFields: {
          seller: {
          $arrayElemAt: [ '$abonados', 0]
          }
     }
  },
  {
      $project: {
        abonados: 0
      }
  }
  ]).pretty()

/*----------------------------- APORTACIÓN PERSONAL------------------------------------------- */

/*En la siguiente operación, los documentos de entrada se agrupan en cuatro cubos según los valores 
del campo precio alquiler, mostrando un límite inferior y un limite superior */

db.peliculas.aggregate( [
  {
    $bucketAuto: {
        groupBy: "$precioAlquiler",
        buckets: 4
    }
  }
] )

/*Elimina el campo que le especifiquemos en mi caso dentro de detalles: director. */

db.peliculas.aggregate([
   { 
     $unset: [ "detalles.director" ] 
   } 
  ]).pretty()

  /** Muestra el nombre de la pelicula junto a dinero generado por las ventas de todas las peliculas.*/

  db.peliculas.aggregate(
    [
      {
        $group:
          {
            _id: "$nombrePelicula",
            precioMaximoUnidadesPrecioVenta: { $max: { $multiply: [ "$precioVenta", "$stock" ] } },
            precioMaximoPelicula: { $max: "$precioVenta" }
          }
      }
    ]
 )

 /* Calcula la varianza al numero de Abonado del cliente*/
 db.clientes.aggregate([
  { 
    $project: 
    { varianzaNumeroAbonado: 
      { $pow: 
        [ 
          { $stdDevPop: "$datosAbonado.numeroAbonado" }, 2 
        ] 
      } 
    } 
  }
])



/*----------------------------------------------------------------------------------------------------- 
                        DIVISIONES DE LA BASE DE DATOS EN DOS: CLIENTES Y PELICULAS
 
 CLIENTES*/
db.coleccionVideoClub.aggregate([
  {
    $project:
      {
        "peliculas":0
      }
    },
  {
    $out:
      {
        db:"videoclub",coll:"clientes"
      }
  }
]
)

/*PELÍCULAS */

db.coleccionVideoClub.aggregate([
  { 
      $unwind: "$peliculas"
  },
  {
      $project: 
      {
          id: 1,
          peliculas: 1,
          _id:0
      }
  },
  {
      $project: 
      {
          id: 1,
          nombrePelicula: "$peliculas.nombrePelicula",
          precioAlquiler: "$peliculas.precioAlquiler",
          precioVenta: "$peliculas.precioVenta",
          disponibilidad: "$peliculas.disponibilidad",
          stock: "$peliculas.stock",
          detalles: "$peliculas.detalles"
      }
  },
  {
      $out:{
          db:"videoclub",
          coll:"peliculas"
      }
  }
])
