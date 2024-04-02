const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";
const searchParams = new URLSearchParams (window.location.search);
const id = searchParams.get("id");

const isEditing = !!id

async function handleSubmit(event) {
    event.preventDefault()

    const name = document.querySelector("#name").value
    const description = document.querySelector("#description").value
    const brand = document.querySelector("#brand").value
    const imageUrl = document.querySelector("#image").value
    const price = document.querySelector("#price").value

    const endpoint = !isEditing? ENDPOINT : ENDPOINT + id

    const response = await fetch(endpoint, {
        method: !isEditing? "POST" : "PUT",
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA2YjQzNmQ2MjEyNDAwMTkwZmM1YzYiLCJpYXQiOjE3MTE3MTUzODIsImV4cCI6MTcxMjkyNDk4Mn0.xl3qoCBNgFhafgjnCXy5mPnl1jkTdNTQB7Y066JAX3U",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name, description, brand, imageUrl, price
        })
    })

    if (response.ok) {
        alert("Richiesta eseguita con successo!")
    } else {
        alert("Errore nella richiesta")
    }
}

window.onload = async () => {
    if (!id) return

    const response = await fetch (ENDPOINT + id, {
        headers: {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA2YjQzNmQ2MjEyNDAwMTkwZmM1YzYiLCJpYXQiOjE3MTE3MTUzODIsImV4cCI6MTcxMjkyNDk4Mn0.xl3qoCBNgFhafgjnCXy5mPnl1jkTdNTQB7Y066JAX3U",
            "Content-Type": "application/json",
        }
    }) 

    const data = await response.json();
    document.querySelector("#name").value = data.name
    document.querySelector("#description").value = data.description
    document.querySelector("#brand").value = data.brand
    document.querySelector("#image").value = data.imageUrl
    document.querySelector("#price").value = data.price
}


