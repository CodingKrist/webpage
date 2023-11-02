document.querySelector('#moda').addEventListener('click', modaVega)
document.querySelector('.portada').addEventListener('click', portadaVega)


function modaVega() {
    document.querySelector('.portada').style.display = 'none'
    document.querySelector('.twohead').innerHTML = '<img class="portada" width="300" height="300" src="./images/moda.jpeg" alt="Image description">'
}

function portadaVega() {
    document.querySelector('.portada').style.display = 'none'
    document.querySelector('.twohead').innerHTML = '<img class="portada" width="460" height="320" src="./images/vegaprincipal.jpeg" alt="Vega despeinada">'
}