let products = [
    {name:"carrots", count: 1},
    {name:"spinach", count: 1},
    {name:"cookies", count: 12},
    {name:"lettuce", count: 1},
    {name:"avacado", count: 1}
]
let products_list = document.getElementById('products-list');

let product_input = document.getElementById('product_input');
let sumbit_btn = document.getElementById('submit-btn');

sumbit_btn.addEventListener('click',()=>{
    if(!product_input.value){
        alert('Please, enter item name!');
        returns
    }
})


products.forEach((product, index) => {
    if(product.count>0){
    let product_node = document.createElement('li');
    product_node.innerHTML = `<a>${product.name} x ${product.count}<a/>`;
    products_list.appendChild(product_node);

    products_list.appendChild(product_node);

    let edit_node = document.createElement('i'); 
    edit_node.setAttribute('class', 'fa-solid fa-trash-can');
    product_node.appendChild(edit_node);

    let delete_node = document.createElement('i');
    delete_node.setAttributeNode('class','fa-solid fa-circle-trash');
    product_node.appendChild(delete_node);
}
});


// for (let index = 0; index < ptoducts.length; index++) {
//     const element = products[index];
    
// 