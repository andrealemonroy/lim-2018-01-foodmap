const getData = (url, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data1 = JSON.parse(xhr.responseText);
            callback(null, data1);
        }
    }
    xhr.send();
}

document.getElementById('buttonStart').addEventListener('click', () => {
    getData('restaurantes.json', (err, dataRestaurants) => {
        let filter = document.getElementById('textSearch').value.toUpperCase();
        order(filterRestaurants(dataRestaurants, filter));
    });
})

document.getElementById('textSearch').addEventListener('keyup', () => {
    document.getElementById("buttonStart").click();
});

window.onload = () => {
    document.getElementById("buttonStart").click();
}