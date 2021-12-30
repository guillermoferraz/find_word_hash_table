//Busqueda de palabras repetidas en un string utilizando tablas de hash

let text = `Linus nació en Helsinki, Finlandia, el 28 de diciembre de 1969. Sus padres son Anna y Nils Torvalds 3​, ambos periodistas. Es nieto del estadístico Leo Törnqvist y del poeta Ole Torvalds, y bisnieto del periodista y soldado Toivo Karanko. Torvalds pertenece a la comunidad sueco-parlante de Finlandia. Sus padres tomaron su nombre de Linus Pauling (estadounidense, Premio Nobel de Química 1954). Comenzó sus andanzas informáticas a los 11 años cuando su abuelo, un matemático y estadístico de la Universidad, compró uno de los primeros microordenadores Commodore en 1980 y le pidió ayuda para usarlo;4​ de esta manera su primera línea de código fue hecha en lenguaje BASIC.5​

A finales de los años 1980 tomó contacto con los ordenadores IBM, PC y en 1991 adquirió un ordenador con procesador modelo 80386 de Intel. En 1988 fue admitido en la Universidad de Helsinki, donde estudió ciencias de la computación. Ese mismo año el profesor Andrew S. Tanenbaum sacó a la luz el S.O. Minix con propósitos didácticos. Su carrera académica se interrumpió después de su primer año de estudios cuando se unió a la Brigada Nyland de la Armada finlandesa en el verano de 1989, seleccionando el programa de entrenamiento de oficiales de 11 meses para cumplir con el servicio militar obligatorio de Finlandia. Obtuvo el grado de segundo teniente, con el papel de observador de artillería.3​ En 1990 empezó a aprender el lenguaje de programación C en su universidad.

A la edad de 21 años, con un año de experiencia programando (en C), ya conocía lo suficiente del sistema operativo Minix como para tomar prestadas algunas ideas y empezar un proyecto personal. Basándose en Design of the Unix Operating System, publicado por Maurice J. Bach en 1986, creó una implementación que ejecuta cualquier tipo de programa, pero sobre una arquitectura de ordenadores compatibles, IBM/PC.

Este proyecto personal desembocó el 5 de octubre de 1991 con el anuncio6​ de la primera versión de Linux capaz de ejecutar BASH (Bourne Again Shell) y el compilador conocido como GCC (GNU Compiler Collection).

En enero de 1992 se adoptó la Licencia Pública General (GPL) para Linux. Esta añade libertades de uso a Linux totalmente opuestas a las del software propietario, permitiendo su modificación, redistribución, copia y uso ilimitado. Este modelo de licencia facilita lo que es conocido como el modelo de desarrollo de bazar, que ha dado estabilidad y funcionalidad sin precedentes a este sistema operativo.

En 1997 recibió los premios 1997 Nokia Foundation Award de Nokia y Lifetime Achievement Award at Uniforum Pictures. Ese mismo año finalizó los estudios superiores (1988-1997) tras un decenio como estudiante e investigador en la Universidad de Helsinki, coordinando el desarrollo del núcleo del sistema operativo desde 1992.

Trabajó en Transmeta desde febrero de 1997 hasta junio de 2003. Actualmente trabaja para el Open Source Development Labs en Beaverton, Oregón. Solo el 2 % del código del Linux actual está escrito por él, pero, además de su paternidad, en su persona sigue descansando la dirección de la gestión núcleo del sistema operativo.

En 2005 creó Git, un software de control de versiones, pensando en la eficiencia y la confiabilidad del mantenimiento de versiones de aplicaciones cuando estas tienen un gran número de archivos de código fuente.`


function normalize(word:string){
    return word.toLocaleLowerCase().replace(/[^a-zA-Z ]/g, "")
}

function findRepeatedWords(text:string){
    let dict: {[key:string] : number} = {};
    let separedWords = text.split(" ")
    for(let word of separedWords){
        if(normalize(word) in dict){
            ++dict[normalize(word)]
        }else{            
            dict[normalize(word)] = 1;
        }
    }
    console.log(dict)
}

findRepeatedWords(text);
