const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";

async function handleSubmit(event) {
    event.preventDefault()

    const name = document.querySelector("#name").value
    const description = document.querySelector("#description").value
    const brand = document.querySelector("#brand").value
    const imageUrl = document.querySelector("#image").value
    const price = document.querySelector("#price"). value

    const response = await fetch(ENDPOINT, {
        method: "POST",
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