## Componentes
- pages/home
    - página muy presiosa con cosas que se muevan, estrellitas y pijaditas
    - botones que redirijan a las distintas tiradas
    - breve explicación de lo que es el tarot y sus usos
    - un poquito de info de las autoras de la app (nosotras)(quizá con enlaces a nuestros portafolios)
- pages/consejo
    - 1º carta: energías que aprovechar (interpretacion_positiva)
    - 2ºcarta: energías que evitar (interpretacion_negativa)
- pages/si_o_no
    - 1 carta (si_o_no)
- pages/autoestima
    - 3 cartas (cualidades)

## Rutas
- /home
- /consejo 
- /si_o_no
- /autoestima

## Promesas
- getAll devuelve un array de objetos
- getById devuelve un objeto:
        {
            "_id": {"$oid": "65089c2945bead3641965b43"},
            "numero": 3,
            "nombre": "La Emperatriz",
            "descripcion": "Abundancia, fertilidad, creatividad",
            "interpretacion_positiva": "Conecta con tu lado más creativo, dale vida a tus proyectos, reconecta con la naturaleza y respeta tus tiempos",
            "interpretacion_negativa": "Evita ser demasiado posesivo o controlador. No te excedas en tu deseo de proteger a los demás y evita la dependencia. No descuides tu autocuidado por el cuidado a los demás. Debes encontrar el equilibrio.",
            "cualidades": "Tienes una gran capacidad para generar ideas creativas y proyectos exitosos. Representas la protección, el cuidado y la empatía hacia los demás. Eres un ejemplo de solidez y liderazgo.",
            "si_o_no": "Sí",
            "imagen": "https://enriquefornesangelesmyblog.files.wordpress.com/2011/08/img3-la-emperatriz1.jpg",
            "reverso": "https://img.freepik.com/vector-gratis/fondo-pantalla-mistico-dibujado-mano_23-2149459343.jpg?w=360&         t=st=1694264117~exp=1694264717~hmac=707048db6cd45ed26f54c696169d1eaf9a975464956853cee7f92f105283cb72"
        }