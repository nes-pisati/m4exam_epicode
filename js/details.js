const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";
const container = document.querySelector(".detail-container");

window.onload = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const itemId = searchParams.get("id");

    fetch(ENDPOINT + itemId, {
            headers: { 
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA2YjQzNmQ2MjEyNDAwMTkwZmM1YzYiLCJpYXQiOjE3MTE3MTUzODIsImV4cCI6MTcxMjkyNDk4Mn0.xl3qoCBNgFhafgjnCXy5mPnl1jkTdNTQB7Y066JAX3U" 
            }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        showDetails(data)
    })
}

function showDetails(item) {
    container.innerHTML = `
        <div class="col-4">
            <img src="${item.imageUrl}" alt="Product image" class="detail-image">
        </div>
        <div class="col-5">
            <h3 class="detail-name">${item.name}</h3>
            <p class="mb-5 ">${item.description}</p>
            <p class="detail-brand">${item.brand}</p>
            <p class="detail-price">${item.price} €</p>
        </div>
    `
}