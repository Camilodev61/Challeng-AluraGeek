document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const form = document.getElementById('add-product-form');

    // Fetch products from Fake Store API
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const productCard = createProductCard(product.title, product.price, product.image);
                productList.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching products:', error));

    // Add new product functionality
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('product-name').value;
        const price = document.getElementById('product-price').value;
        const image = document.getElementById('product-image').value;

        const newProductCard = createProductCard(name, price, image);
        productList.appendChild(newProductCard);

        form.reset();
    });

    // Function to create product cards
    function createProductCard(name, price, image) {
        const card = document.createElement('div');
        card.classList.add('product-card');

        const img = document.createElement('img');
        img.src = image;
        img.alt = name;

        const title = document.createElement('h3');
        title.textContent = name;

        const priceTag = document.createElement('p');
        priceTag.textContent = `$${price}`;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(priceTag);

        return card;
    }
});