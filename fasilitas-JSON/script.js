fetch("fasilitas.json")
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
                <td>${product.Fasilitas}</td>
                <td>${product.Deskripsi}</td>
                <td>${product.Kegunaan}</td>
            </tr>
         `;
    }

    placeholder.innerHTML = out;    
});