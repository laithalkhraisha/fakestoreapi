class Product {
  constructor(title, price,image) {
      this.title = title;
      this.price = price;     
      this.image = image;
  }
}


function render() {
  fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => {
        const products = data.map(item => new Product(item.title, item.price,  item.image));
    
console.log(products);
        const cards = document.getElementById('main');
        products.map(product => {
            
            const card = document.createElement('div');
            card.classList.add('col-md-4'); 
            card.innerHTML = `
            
            <img src="${product.image}" alt="${product.title}"  style="max-width:60px;">
                <p>${product.title}</p>
                <p>Price: ${product.price}</p>
               
            `;
            cards.appendChild(card);
        });
    })
}
render()


function postd() {
    const formdata =new FormData(document.getElementById('formdata'));
    const jsonData = {};
    formdata.forEach((value, key) => {
        jsonData[key] = value;
    });


fetch('http://localhost:3000/mydata',{
  method:'POST',
  headers:{
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(jsonData),
  
}).then(response => response.json()) .then(data => console.log(data))

}

function render2() {
    fetch("http://localhost:3000/mydata")
      .then(response => response.json())
      .then(data => {
          const products = data.map(item => new Product(item.title, item.price ));
      
  console.log(products);
          const cards = document.getElementById('r');
          products.map(product => {
              
              const card = document.createElement('div');
              card.classList.add('col-md-4'); 
              
              card.innerHTML = `
              
              
                  <p>${product.title}</p>
                  <p>Price: ${product.price}</p>
                  <button onclick="updateitem()">update </button>
                  <button onclick="deleteItem()">  delete </button>
              `;
              cards.appendChild(card);
          });
      })
  }
 render2()

  function deleteItem() {
    
    fetch(`http://localhost:3000/mydata/2`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            
        },
    })
   
  }
  function updateitem() {
    let tt=document.getElementById("title").value;
    let pr=document.getElementById("price").value;
    fetch(`http://localhost:3000/mydata/2`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({ tt, pr }),

        
    })
   
  }