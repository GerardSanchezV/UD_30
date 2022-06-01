function comprobarTipoLetra(cadena){
    for(let i = 0; i < cadena.length; i++){
        if(cadena.charAt(i) == cadena.charAt(i).toUpperCase()){
            mayusculas++;
            console.log("Mayúsculas " + mayusculas);
        } else if (cadena.charAt(i) == cadena.charAt(i).toLowerCase()){
            minusculas++;
            console.log("Minúsculas " + minusculas);
        }
    }

    if ((mayusculas > 0) && (minusculas == 0)){
        alert(`La cadena introducida está en mayúsculas.`);
        console.log('es mayus');
    } else if((mayusculas == 0) && (minusculas > 0)){
        alert(`La cadena introducida está en minúsculas`);
        console.log('es minus');
    } else if((mayusculas > 0) && (minusculas > 0)){
        alert(`La cadena contiene mayúsculas y minúsculas.`);
        console.log('Contiene ambas');
    }
}comprobarTipoLetra(HolA);
