// JS LOOPS
// Rubén Álvarez

/* **Iteración #2: Condicionales avanzados**

Comprueba en cada uno de los usuarios que tenga al menos dos
trimestres aprobados y añade la propiedad ***isApproved***
a true o false en consecuencia. Una vez lo tengas compruébalo
con un ***console.log***. */

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];


for (let index = 0; index < alumns.length; index++) {
    const element = alumns[index];
}


alumns.forEach(element => {
    // console.log(element);
    element.isApproved = false;
    i = 0;
    (element.T1 == true) ? i++ : 0 ;
    (element.T1 == true) ? i++ : 0 ;
    (element.T1 == true) ? i++ : 0 ;
    (i >= 2) ? element.isApproved = true : 0 ;

});

console.log(alumns);
