const ENDPOINT = "https://striveschool-api.herokuapp.com/api/product/";

const tableBody = document.querySelector("tbody");

async function getItems() {
    try {
        const response = await fetch (ENDPOINT, {
            headers: { 
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjA2YjQzNmQ2MjEyNDAwMTkwZmM1YzYiLCJpYXQiOjE3MTE3MTUzODIsImV4cCI6MTcxMjkyNDk4Mn0.xl3qoCBNgFhafgjnCXy5mPnl1jkTdNTQB7Y066JAX3U" 
            }             
        })
        const data = await response.json()
    
        console.log(data);
        return data

    } catch (error) {
        console.error("Errore nella richiesta");
        alert("ops, qualcosa è andato storto.")
    }
}

function displayItems(items) {
    let count = 0;
    tableBody.innerHTML = items.map((entry) => `
        <tr>
            <th scope="row">${count+=1}</th>
            <td>${entry.name}</td>
            <td>${entry.description}</td>
            <td>${entry.brand}</td>
            <td><a href="${entry.imageUrl}" target="_blank">Visualizza</a></td>
            <td>${entry.price} €</td>
            <td>
                <a href="/item-management.html?id=${entry._id}" class="btn btn-primary">edit</a>
                <button class="btn btn-danger" onclick = "deleteItem()">delete</button>
            </td>
  </tr>
    `).join("")
}

window.onload = async() => {
    displayItems(await getItems())
}

async function deleteItem() {
    
}

