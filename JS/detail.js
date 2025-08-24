// const proApi = `http://localhost:3000/products/`;

// const productFunc= async ()=> {
//    try {
//     let res = await fetch(proApi)
//     let data = await res.json();
//     console.log(data)
// dataFunc();
//    } catch (error) {
//     console.log(error)
//    } 
// }


// const dataFunc = (value)=>{
// let container =document.querySelector('#product-container');

// }





    // API endpoint
    const productId = "";
    // const apiUrl = `https://fakestoreapi.com/products/${productId}`;
const apiUrl = `http://localhost:3000/products/${productId}`;
    // Fetch product details
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(product => {
        // Display the product
        const productDiv = document.getElementById('product_container');
        productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.title}" width="200" />
        <h2>${product.title}</h2>
          <p><strong>Price:</strong> $${product.price}</p>
          <p><strong>Description:</strong> ${product.description}</p>
        `;
      })
      .catch(error => {
        console.error("There was a problem with the fetch operation:", error);
      });
  