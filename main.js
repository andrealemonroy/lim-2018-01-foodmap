window.filterRestaurants = (restaurants, search) => {
    filter = search.trim(); // tiene la cadena ingresada sin espacios
    length = filter.length;
    arrayFilter = [];
    if (length > 0) { // esta condición determina si hay algo en el texto de búsqueda
        var i = 0;
        var countdata = restaurants.length;

        strhtml = '';
        if (countdata > 0) {
            while (i < countdata) {
                name = restaurants[i].name.toUpperCase(); // obtiene el nombre de cada usuario
                ubication = name.indexOf(filter); // ubica la cadena en otra
                if (ubication > -1) { // si la variable tiene un número mayor a 0 la cadena existe en el nombre
                    arrayFilter.push(restaurants[i]);
                    strhtml += '<div class="card w-75 mt-3">' + restaurants[i].name + '</div>'
                }
                ++i;
            }
            document.getElementById('restaurants').innerHTML = strhtml;
        }
    } else { // en caso que no haya nada el texto solo muestra la data en pantalla
        var i = 0;
        var countdata = restaurants.length;
        var strhtml = '';
        document.getElementById('restaurants').innerHTML = "";
        if (countdata > 0) {
            while (i < countdata) {
                arrayFilter.push(restaurants[i]);
                strhtml += '<div class="card w-75 mt-3">' + restaurants[i].name + '</div>'
                    ++i;
            }
            document.getElementById('restaurants').innerHTML = strhtml;
        }
    }
    return arrayFilter;
}
window.order = (arrayFilter) => {
    document.getElementById('restaurants').innerHTML = "";
    const restaurantsOptions = document.getElementById("selectRestaurants");
    let value = restaurantsOptions.options[restaurantsOptions.selectedIndex].value;
    orderArray = []
    print = '';
    length = arrayFilter.length;
    let i = 0;
    while (i < length) {
        if (value == "Italiana") {
            if (arrayFilter[i].type == "Italiana") {
                print += '<a href="#" data-target="#exampleModal"  data-toggle="modal" class="card w-75 mt-3" id="italiana">' + arrayFilter[i].name + '</a>';
                document.getElementById("exampleModalLabel").innerHTML=arrayFilter[i].name;
                document.getElementById("body").innerHTML=arrayFilter[i].address;
                orderArray.push(print);
            }
        } else if (value == "Vegetariana/Vegana") {
            if (arrayFilter[i].type == "Vegetariana/Vegana") {
                print += '<a href="#" data-target="#exampleModal"  data-toggle="modal" class="card w-75 mt-3" id="vegetariana">' + arrayFilter[i].name + '</a>';
                document.getElementById("exampleModalLabel").innerHTML=arrayFilter[i].name;
                document.getElementById("body").innerHTML=arrayFilter[i].address;
                orderArray.push(print);
            }
        } else if (value == "Vegana") {
            if (arrayFilter[i].type == "Vegana") {
                print += '<a href="#" data-target="#exampleModal"  data-toggle="modal" class="card w-75 mt-3" id="vegana">' + arrayFilter[i].name + '</a>';
                document.getElementById("exampleModalLabel").innerHTML=arrayFilter[i].name;
                document.getElementById("body").innerHTML=arrayFilter[i].address;
                orderArray.push(print);
            }
        } else if (value == "Japonesa") {
            if (arrayFilter[i].type == "Japonesa") {
                print += '<a href="#" data-target="#exampleModal"  data-toggle="modal" class="card w-75 mt-3" id="japonesa">' + arrayFilter[i].name + '</a>';
                document.getElementById("exampleModalLabel").innerHTML=arrayFilter[i].name;
                document.getElementById("body").innerHTML=arrayFilter[i].address;
                orderArray.push(print);
            }
        } else if (value == "Fusión") {
            if (arrayFilter[i].type == "Fusión") {
                print += '<a href="#" data-target="#exampleModal"  data-toggle="modal" class="card w-75 mt-3" id="fusion">' + arrayFilter[i].name + '</a>';
                document.getElementById("exampleModalLabel").innerHTML=arrayFilter[i].name;
                document.getElementById("body").innerHTML=arrayFilter[i].address;
                orderArray.push(print);
            }
        } else if (value == "Marina") {
            if (arrayFilter[i].type == "Marina") {
                print += '<a href="#" data-target="#exampleModal"  data-toggle="modal"  class="card w-75 mt-3" id="marina">' + arrayFilter[i].name + '</a>';
                document.getElementById("exampleModalLabel").innerHTML=arrayFilter[i].name;
                document.getElementById("body").innerHTML=arrayFilter[i].address;
                orderArray.push(print);
            }
        } else if (value == "Criolla") {
            if (arrayFilter[i].type == "Criolla") {
                print += '<a href="#" data-target="#exampleModal"  data-toggle="modal" class="card w-75 mt-3 id="criolla">' + arrayFilter[i].name + '</a>';
                                document.getElementById("exampleModalLabel").innerHTML=arrayFilter[i].name;
                document.getElementById("body").innerHTML=arrayFilter[i].address;
                orderArray.push(print);
            }
        }
        i++;
    }

    document.getElementById('order').innerHTML = print;
    return orderArray

}

// window.modal = (orderArray) => {
//     let i = 0
//     lengthArray = orderArray.length;
//     while (i < lengthArray) {
//         let optionModal = orderArray[i];


// }