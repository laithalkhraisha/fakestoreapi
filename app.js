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
class Parson {
    constructor(title,price,id){
this.title=title;
this.price=price;
this.id=id;
    }
}
function render2() {
    fetch("http://localhost:3000/mydata")
      .then(response => response.json())
      .then(data => {
          const products = data.map(item => new Parson(item.title, item.price ,item.id));
      
  console.log(products);
          const cards = document.getElementById('r');
          products.map(product => {
              
              const card = document.createElement('div');
              card.classList.add('col-md-4'); 
              
              card.innerHTML = `
              
              
                  <p>${product.title}</p>
                  <p>Price: ${product.price}</p>
                  <button id="${product.id}" onclick="updateitem(this)">update </button>
                  <button id="${product.id}" onclick="deleteItem(this)">  delete </button>
              `;
              cards.appendChild(card);
          });
      })
  }
 render2()

  function deleteItem(e) {
    const deletitem=e.id;
    console.log(deletitem);
    fetch(`http://localhost:3000/mydata/${deletitem}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            
        },
    })
    
  }
  function updateitem(e) {
    let updateite =e.id;

    
    let tt=document.getElementById("title").value;
    let pr=document.getElementById("price").value;
    fetch(`http://localhost:3000/mydata/${updateite}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            
        },
        body: JSON.stringify({
            "title":tt,
            "price":pr
        }),

        
    })
    
  }