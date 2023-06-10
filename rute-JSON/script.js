fetch("rute.json")
.then(function(response){
    return response.json();
})
.then(function(products){
    let placeholder = document.querySelector("#data-output");
    let out ="";
    for(let product of products){
        out +=`
            <tr>
                <td> <img src='${product.Gambar}'> </img></td>
                <td>${product.Koridor}</td>
                <td>${product.Rute}</td>
                <td>${product.Pemberhentian}</td>
            </tr>
         `;
    }

    placeholder.innerHTML = out;    
});