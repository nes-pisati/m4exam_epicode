const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";

const cardContainer = document.querySelector(".card-container")

function createCard(items) {

    cardContainer.innerHTML = items.map((item) => `
    <div class="card col-6 col-md-4 col-lg-3">
        <img src="${item.imageUrl}" class="card-image mt-2" alt="image">
        <div class="card-body">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item card-brand">${item.brand}</li>
            <li class="list-group-item card-price">${item.price} €</li>
        </ul>
        <div class="card-body d-flex justify-content-around">
            <a href="/details.html?id=${item._id}" class="card-link btn btn-primary p-2">Discover More</a>
            <a href="#" class="card-link btn btn-success p-2">Add to cart</a>
        </div>
    </div>
`).join(""); 

}

const getItems = async ()=> {
    try {
        const response = await fetch(ENDPOINT, {
            headers: { 
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA2YjQzNmQ2MjEyNDAwMTkwZmM1YzYiLCJpYXQiOjE3MTE3MTUzODIsImV4cCI6MTcxMjkyNDk4Mn0.xl3qoCBNgFhafgjnCXy5mPnl1jkTdNTQB7Y066JAX3U" 
            }   
        })
        const data = await response.json()
        console.log(data);

        return data

    } catch (error) {
        console.error("Errore nel caricamento");
    }
}

window.onload = async() => {
    createCard(await getItems())
} 