db.coleccionVideoClub.drop();
db.coleccionVideoClub.insertMany([
    {
        id: 1,
        peliculas:
        [
            {
                nombrePelicula: "El Señor de los Anillos: El Retorno del Rey",
                precioAlquiler: 3.23,
                precioVenta: 9.99,
                disponibilidad: true,
                stock: 2,
                detalles:
                {
                    director: "Peter Jackson",
                    paisProduccion: "Nueva Zelanda",
                    fechaProduccion: new Date (1999-03-11),
                    duracion: 201,
                    genero: ["Aventura", "Fantasía épica"],
                    productora: ["WingNut Films", "The Saul Zaentz Company"]
                },
            },

            {

                nombrePelicula: "El Señor de los Anillos: El Retorno del Rey (edición extendida Blu-Ray)",
                precioAlquiler: 5.70,
                precioVenta: 15.00,
                disponibilidad: true,
                stock: 1,
                detalles:
                {
                    director: "Peter Jackson",
                    paisProduccion: "Nueva Zelanda",
                    fechaProduccion: new Date (1999-05-19),
                    duracion: 263,
                    genero: ["Aventura", "Fantasía épica"],
                    productora: ["WingNut Films", "The Saul Zaentz Company"]
                },

            },

            {

                nombrePelicula: "El Señor de los Anillos: El Retorno del Rey (edición especial extendida DVD)",
                precioAlquiler: 4.50,
                precioVenta: 12.30,
                disponibilidad: false,
                stock: 2,
                detalles:
                {
                    director: "Peter Jackson",
                    paisProduccion: "Nueva Zelanda",
                    fechaProduccion: new Date (1999-11-28),
                    duracion: 254,
                    genero: ["Aventura", "Fantasía épica"],
                    productora: ["WingNut Films", "The Saul Zaentz Company"]
                }
            },           
        ],

        dependiente: "Roberto Leal",
        datosAbonado:
        [
            {
                numeroAbonado:255,
                dni: "12345678M",
                nombreCliente: "Paco",
                apellidosCliente: "Kagawa Son",
                email: "pacoeldeltaco@outlook.es",
                foto: true,
                alquileres: 1
            },

            {
                numeroAbonado:321,
                dni: "99358593T",
                nombreCliente: "Adolfo",
                apellidosCliente: "Cansado Sorda",
                email: "cansadosorda33@hotmail.com",
                foto: false,
                alquileres: 2
            },

            {
                numeroAbonado:72,
                dni: "54643211G",
                nombreCliente: "Antonio",
                apellidosCliente: "Román Seco",
                email: "antromsec@gmail.com",
                foto: true,
                alquileres: 3
            }

        ]
    },

    {
        id:2,
        peliculas:
        [
            {
                nombrePelicula: "Harry Potter y la piedra filosofal",
                precioAlquiler: 1.55,
                precioVenta: 3.10,
                disponibilidad: false,
                stock: 2,
                detalles:
                {
                    director: "Chris Columbus",
                    paisProduccion: "Reino Unido",
                    fechaProduccion: new Date (2001-05-07),
                    duracion: 152,
                    genero: ["Fantasía", "Aventuras"],
                    productora: ["Heyday Films", "1492 Pictures"]
                },

            },

            {

                nombrePelicula: "Harry Potter y la cámara secreta",
                precioAlquiler: 1.70,
                precioVenta: 3.40,
                disponibilidad: true,
                stock: 7,
                detalles:
                {
                    director: "Chris Columbus",
                    paisProduccion: "Reino Unido",
                    fechaProduccion: new Date (2002-01-31),
                    duracion: 161,
                    genero: ["Fantasía", "Aventuras"],
                    productora: ["Heyday Films", "1492 Pictures", "MIRACLE Productions GmbH & Co. KG"]
                },
            
            },

            {

                nombrePelicula: "Harry Potter y el prisionero de Azkaban",
                precioAlquiler: 1.75,
                precioVenta: 3.22,
                disponibilidad: false,
                stock: 3,
                detalles:
                {
                    director: "Chris Columbus",
                    paisProduccion: "Reino Unido",
                    fechaProduccion: new Date (2004-12-12),
                    duracion: 141,
                    genero: ["Fantasía", "Aventuras"],
                    productora: ["Heyday Films", "1492 Pictures"]
                },

            },

            {

                nombrePelicula: "Harry Potter y el cáliz de fuego",
                precioAlquiler: 1.60,
                precioVenta: 2,
                disponibilidad: true,
                stock: 1,
                detalles:
                {
                    director: "Chris Columbus",
                    paisProduccion: "Reino Unido",
                    fechaProduccion: new Date (2005-03-27),
                    duracion: 141,
                    genero: ["Fantasía", "Aventuras"],
                    productora: ["Heyday Films", "Patalex IV Productions"]
                },

            },

            {
                nombrePelicula: "El Señor de los Anillos: El Retorno del Rey",
                precioAlquiler: 3.23,
                precioVenta: 9.99,
                disponibilidad: true,
                stock: 2,
                detalles:
                {
                    director: "Peter Jackson",
                    paisProduccion: "Nueva Zelanda",
                    fechaProduccion: new Date (1999-03-11),
                    duracion: 201,
                    genero: ["Aventura", "Fantasía épica"],
                    productora: ["WingNut Films", "The Saul Zaentz Company"]
                },
            },

            {

                nombrePelicula: "Harry Potter y la Orden del Fénix",
                precioAlquiler: 1.82,
                precioVenta: 1.99,
                disponibilidad: true,
                stock: 5,
                detalles:
                {
                    director: "David Yates",
                    paisProduccion: "Reino Unido",
                    fechaProduccion: new Date (2007-12-11),
                    duracion: 138,
                    genero: ["Fantasía", "Aventuras"],
                    productora: "Heyday Films"
                },

            },

            {

                nombrePelicula: "Harry Potter y el misterio del príncipe",
                precioAlquiler: 2.10,
                precioVenta: 2.55,
                disponibilidad: true,
                stock: 2,
                detalles:
                {
                    director: "David Yates",
                    paisProduccion: "Reino Unido",
                    fechaProduccion: new Date (2009-03-11),
                    duracion: 153,
                    genero: "Fantasía",
                    productora: ["Heyday Films", "Warner Bros Pictures"]
                },

            },

            {

                nombrePelicula: "Harry Potter y las reliquias de la Muerte: parte 1",
                precioAlquiler: 2.50,
                precioVenta: 2.44,
                disponibilidad: true,
                stock: 6,
                detalles:
                {
                    director: "David Yates",
                    paisProduccion: "Reino Unido",
                    fechaProduccion: new Date (2010-09-13),
                    duracion: 146,
                    genero: ["Fantasía", "Acción", "Aventuras"],
                    productora: ["Heyday Films", "Warner Bros Pictures"]
                },

            },

            {

                nombrePelicula: "Harry Potter y las reliquias de la Muerte: parte 2",
                precioAlquiler: 2.50,
                precioVenta: 3,
                disponibilidad: true,
                stock: 4,
                detalles:
                {
                    director: "David Yates",
                    paisProduccion: "Reino Unido",
                    fechaProduccion: new Date (2011-05-03),
                    duracion: 130,
                    genero: ["Fantasía", "Acción", "Aventuras"],
                    productora: "Heyday Films"
                }

            }
                       
        ],

        dependiente: "Valeria Ross",
        datosAbonado:
        [
            {
                numeroAbonado:133,
                dni: "22324417D",
                nombreCliente: "Luis",
                apellidosCliente: "García Mera",
                email: "garciamera11@outlook.com",
                foto: false,
                alquileres: 5
            },

            {
                numeroAbonado:222,
                dni: "43955533B",
                nombreCliente: "Carlos",
                apellidosCliente: "Bustamante Marín",
                email: "boostrap@hotmail.es",
                foto: true,
                alquileres: 2
            },

            {
                numeroAbonado:87,
                dni: "32495670F",
                nombreCliente: "Miguel",
                apellidosCliente: "Reyes Ortiz",
                email: "miguelitopeligroso@gmail.com",
                foto: true,
                alquileres: 3
            }

        ]
    },

    {
        id:3,
        peliculas:
        [
            {
                nombrePelicula: "The Fast and the Furious",
                precioAlquiler: 1,
                precioVenta: 0.50,
                disponibilidad: true,
                stock: 2,
                detalles:
                {
                    director: "Rob Cohen",
                    paisProduccion: "Estados Unidos",
                    fechaProduccion: new Date (2001-01-21),
                    duracion: 107,
                    genero: ["Acción", "Aventura", "Suspense"],
                    productora: ["Universal Pictures"]
                },
            },

            {
                nombrePelicula: "2 Fast 2 Furious",
                precioAlquiler: 0.75,
                precioVenta: 0.50,
                disponibilidad: false,
                stock: 1,
                detalles:
                {
                    director: "John Singleton",
                    paisProduccion: "Estados Unidos",
                    fechaProduccion: new Date (2003-10-09),
                    duracion: 107,
                    genero: ["Acción", "Aventura", "Suspense", "Crimen"],
                    productora: ["Universal Pictures", "Original Film"]
                },
            
            },

            {
                nombrePelicula: "Turbo-Charged Prelude",
                precioAlquiler: 0.25,
                precioVenta: 1,
                disponibilidad: false,
                stock: 2,
                detalles:
                {
                    director: "Philip Atwell",
                    paisProduccion: "Estados Unidos",
                    fechaProduccion: new Date (2003-12-20),
                    duracion: 6,
                    genero: ["Acción", "Suspense", "Crimen"],
                    productora: ["Mikona Productions", "Original Film"]
                },
            },

            {

                nombrePelicula: "The Fast and the Furious: Tokyo Drift",
                precioAlquiler: 0.60,
                precioVenta: 1.11,
                disponibilidad: true,
                stock: 3,
                detalles:
                {
                    director: "Justin Lin",
                    paisProduccion: "Estados Unidos",
                    fechaProduccion: new Date (2006-07-19),
                    duracion: 104,
                    genero: ["Acción", "Suspense", "Aventura"],
                    productora: ["Universal Pictures", "Original Film", "Relativity Media"]
                },

            },

            {
                nombrePelicula: "Fast & Furious: Aún más rápido",
                precioAlquiler: 0.75,
                precioVenta: 1,
                disponibilidad: false,
                stock: 8,
                detalles:
                {
                    director: "Justin Lin",
                    paisProduccion: ["Estados Unidos", "Japón", "Mexico"],
                    fechaProduccion: new Date (2009-02-22),
                    duracion: 107,
                    genero:  ["Acción", "Aventura", "Suspense", "Crimen"],
                    productora:  ["Universal Pictures", "One Race Films", "Relativity Media"]
                },

            },

            {

                nombrePelicula: "Fast & Furious 3.5: Los Bandoleros",
                precioAlquiler: 1,
                precioVenta: 1.25,
                disponibilidad: true,
                stock: 2,
                detalles:
                {
                    director: "Vin Diesel",
                    paisProduccion: ["República Dominicana", "Estados Unidos"],
                    fechaProduccion: new Date (2009-08-17),
                    duracion: 20,
                    genero: ["Acción", "Suspense", "Crimen"],
                    productora: "Universal Pictures"
                },

            },

            {
                nombrePelicula: "Fast Five",
                precioAlquiler: 1.55,
                precioVenta: 1.97,
                disponibilidad: false,
                stock: 8,
                detalles:
                {
                    director: "Justin Lin",
                    paisProduccion: ["Estados Unidos", "Brasil"],
                    fechaProduccion: new Date (2011-12-05),
                    duracion: 130,
                    genero: ["Acción", "Aventura", "Suspense", "Crimen"],
                    productora: ["Original Film", "One Race Films"]
                },

            },

            {

                nombrePelicula: "Fast & Furious 6",
                precioAlquiler: 1.50,
                precioVenta: 2.10,
                disponibilidad: true,
                stock: 9,
                detalles:
                {
                    director: "Justin Lin",
                    paisProduccion: ["Estados Unidos", "Reino Unido", "España"],
                    fechaProduccion: new Date (2013-06-27),
                    duracion: 130,
                    genero: ["Acción", "Aventura", "Suspense", "Crimen"],
                    productora: ["Original Film", "One Race Films"]
                },

            },


            {
                nombrePelicula: "Fast & Furious 7",
                precioAlquiler: 1.60,
                precioVenta: 2,
                disponibilidad: true,
                stock: 5,
                detalles:
                {
                    director: "James Wan",
                    paisProduccion: ["Estados Unidos", "Arabia Saudí"],
                    fechaProduccion: new Date (2015-03-11),
                    duracion: 137,
                    genero: ["Acción", "Aventura", "Suspense", "Crimen", "Drama"],
                    productora: ["Original Film", "One Race Films"]
                },

            },

            {

                nombrePelicula: "The Fate of the Furious",
                precioAlquiler: 2.53,
                precioVenta: 4.40,
                disponibilidad: true,
                stock: 7,
                detalles:
                {
                    director: "F. Gary Gray",
                    paisProduccion: ["Estados Unidos", "Cuba", "Rusia"],
                    fechaProduccion: new Date (2017-08-10),
                    duracion: 136,
                    genero: ["Acción", "Aventura", "Suspense", "Crimen"],
                    productora: ["Original Film", "One Race Films"]
                },

            },

            {

                nombrePelicula: "F9",
                precioAlquiler: 3.10,
                precioVenta: 5.65,
                disponibilidad: true,
                stock: 9,
                detalles:
                {
                    director: "Justin Lin",
                    paisProduccion: ["Estados Unidos", "Canadá", "Reino Unido", "Georgia", "Tailandia"],
                    fechaProduccion: new Date (2021-05-03),
                    duracion: 143,
                    genero: ["Acción", "Aventura", "Suspense", "Crimen", "Ciencia Ficción"],
                    productora: ["Perfect Storm Entertainment", "Original Film", "One Race Films"]
                },

            },

            {
                nombrePelicula: "Fast & Furious 10",
                precioAlquiler: 5.95,
                precioVenta: 15.75,
                disponibilidad: false,
                stock: 3,
                detalles:
                {
                    director: "Justin Lin",
                    paisProduccion: "Estados Unidos",
                    fechaProduccion: new Date (2023-06-14),
                    duracion: 154,
                    genero: ["Acción", "Aventura", "Suspense", "Crimen", "Ciencia Ficción"],
                    productora: ["Perfect Storm Entertainment", "Original Film", "One Race Films"]
                }
            }         
        ],

        dependiente: "Roberto Leal",
        datosAbonado:
        [
            {
                numeroAbonado: 999,
                dni: "44312109J",
                nombreCliente: "Chari",
                apellidosCliente: "Almensilla Morón",
                email: "charito_92@hotmail.com",
                foto: true,
                alquileres: 1
            },

            {
                numeroAbonado: 172,
                dni: "43248798L",
                nombreCliente: "Manolo",
                apellidosCliente: "el del Bombo Leño",
                email: "arribaespaña@outlook.es",
                foto: true,
                alquileres: 3
            },

            {
                numeroAbonado: 222,
                dni: "73224976T",
                nombreCliente: "Javier",
                apellidosCliente: "Maroto Sequeiro",
                email: "javilito@gmail.com",
                foto: false,
                alquileres: 6
            }

        ]
    },

    {
        id:4,
        peliculas:
        [
            {
                nombrePelicula: "Animales fantásticos y donde encontrarlos",
                precioAlquiler: 2.33,
                precioVenta: 7.20,
                disponibilidad: true,
                stock: 2,
                detalles:
                {
                    director: "David Yates",
                    paisProduccion: ["Reino Unido", "Estados Unidos"],
                    fechaProduccion: new Date (2016-01-17),
                    duracion: 133,
                    genero: ["Acción", "Aventuras", "Fantasía"],
                    productora: "Heady Films"
                }
            },           
        ],

        dependiente: "Valeria Ross",
        datosAbonado:
        [
            {
                numeroAbonado: 64,
                dni: "92364910Q",
                nombreCliente: "David",
                apellidosCliente: "Gonzalez Sanchez",
                email: "gonzsanchez@gmail.es",
                foto: true,
                alquileres: 2
            },

            {
                numeroAbonado:01,
                dni: "26453311D",
                nombreCliente: "María de la O",
                apellidosCliente: "Yaneli García",
                email: "suh_maiahlayane@hotmail.com",
                foto: true,
                alquileres: 2
            },

            {
                numeroAbonado:37,
                dni: "04467851F",
                nombreCliente: "Jose Luis",
                apellidosCliente: "Tirado Maldonado",
                email: "jose3672@outlook.es",
                foto: false,
                alquileres: 1
            }

        ]
    },

    {
        id:5,
        peliculas:
        [
            {
                nombrePelicula: "Animales fantásticos: Los crímenes de Grindelwald",
                precioAlquiler: 3.45,
                precioVenta: 9.20,
                disponibilidad: true,
                stock: 5,
                detalles:
                {
                    director: "David Yates",
                    paisProduccion: ["Reino Unido", "Estados Unidos"],
                    fechaProduccion: new Date (2018-11-15),
                    duracion: 134,
                    genero: ["Acción", "Aventuras", "Fantasía"],
                    productora: "Heady Films"
                }
            },           
        ],

        dependiente: "Roberto Leal",
        datosAbonado:
        [
            {
                numeroAbonado: 733,
                dni: "28002137",
                nombreCliente: "Gonzalo",
                apellidosCliente: "Lebron Morales",
                email: "gonzo@hotmail.es",
                foto: false,
                alquileres: 1
            },

            {
                numeroAbonado: 847,
                dni: "99123456G",
                nombreCliente: "Pepe",
                apellidosCliente: "Botella Seca",
                email: "botellincruzcampo@outlook.com",
                foto: true,
                alquileres: 3
            },

            {
                numeroAbonado: 55,
                dni: "45547117R",
                nombreCliente: "Pablo Jose",
                apellidosCliente: "Almendralejo Martinez",
                email: "martinezGBD@gmail.com",
                foto: false,
                alquileres: 2
            }

        ]
    },

    {
        id:6,
        peliculas:
        [
            {
                nombrePelicula: "Animales fantásticos: Los secretos de Dumbledore",
                precioAlquiler: 5.50,
                precioVenta: 15.50,
                disponibilidad: false,
                stock: 1,
                detalles:
                {
                    director: "David Yates",
                    paisProduccion: ["Reino Unido", "Estados Unidos"],
                    fechaProduccion: new Date (2022-07-27),
                    duracion: 147,
                    genero: ["Drama", "Aventuras", "Fantasía"],
                    productora: "Heady Films"
                }
            },           
        ],

        dependiente: "Roberto Leal",
        datosAbonado:
        [
            {
                numeroAbonado: 111,
                dni: "43756134P",
                nombreCliente: "Emilio",
                apellidosCliente: "Lopez de la Calle",
                email: "delacalle92@hotmail.com",
                foto: true,
                alquileres: 3
            },

            {
                numeroAbonado: 871,
                dni: "73020019D",
                nombreCliente: "Daniel Jose",
                apellidosCliente: "Sevilla LLena",
                email: "danonino@hotmail.es",
                foto: false,
                alquileres: 1
            },

            {
                numeroAbonado: 649,
                dni: "45674578B",
                nombreCliente: "Diego",
                apellidosCliente: "Barrios Mahadahonda",
                email: "diegobarman@gamil.com",
                foto: true,
                alquileres: 2
            },

            {
                numeroAbonado:72,
                dni: "54643211G",
                nombreCliente: "Antonio",
                apellidosCliente: "Román Seco",
                email: "antromsec@gmail.com",
                foto: true,
                alquileres: 1
            },

            {
                numeroAbonado:133,
                dni: "22324417D",
                nombreCliente: "Luis",
                apellidosCliente: "García Mera",
                email: "garciamera11@outlook.com",
                foto: false,
                alquileres: 3
            }

        ]
    }


    
])