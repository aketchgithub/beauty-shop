# Beauty Bliss
Beauty Bliss is a web based application that provides an ecommerce platform for beauty products. It allows users to browse, and purchase beauty products conveniently.

##  Links
 *  [deployed api](https://beaty-product-shop.onrender.com)
*  [LIve link]

#Features
- Browse beauty products by category or brand.
- Detailed product descriptions and reviews.
- Add products to the cart and proceed to checkout.
- Secure payment processing.
- User authentication and account management.
- Integration with a backend Ruby on Rails API.
- Responsive and intuitive user interface built with React.

## Technologies Used

- Ruby on Rails: Backend API development.
- React: Frontend user interface development.
- PostgreSQL: Database management system.
- RESTful API architecture.
- HTML, CSS, and JavaScript: Frontend development.
- Git: Version control system.

## Beauty Bliss Frontend
The frontend is a responsive web application optimized for both desktop and mobile devices. It uses React, React Router, Axios, Tailwindcss, and Font Awesome.

## Beauty Bliss Backend
The backend is built with Ruby on Rails and uses PostgreSQL as the database and RSpec as the testing framework. It provides several API endpoints that the frontend uses to retrieve and manipulate data. The models used in the backend are:

- BeautyProduct: stores information about a beauty product, including its name, description, price, image URL, category, and quantity.
- Cart: stores information about a user's cart, including the beauty products in the cart, the quantity of each product, and whether the cart is active.
- CartItem: associates a beauty product with a cart and stores the quantity of the product in the cart.
- Customer: stores information about a customer, including their name, email, phone number, and address.
- Order: stores information about an order, including the total amount, the cart data, and the customer who placed the order.
- User: stores information about a user, including their username, email, and password digest.

### Setup
To set up the Beauty Bliss backend, follow these steps:

Clone the repository:
       
    
       git clone https://github.com/aketchgithub/beauty-shop

                    
### Install dependencies:

    bundle install
### Create and migrate the database:


    rake db:create
    rake db:migrate
    Seed the database:
    Copy code
    rake db:seed

### Start the server:

    rails s



## To set up the Beauty Bliss frontend, follow these steps:
#### Clone the repository:


    https://github.com/aketchgithub/beauty-shop

#### Install dependencies:

    npm install

#### Start the development server:

    npm start

#### Build the production version:


    npm run build


## Authors
- Victor Aketch
- Mutheki Njora
- Griffins Ngeno
- Casey Ochieng
- Louis Okwaro
- Abdishukri Mohammed

## Conclusion
Beauty Bliss is an e-commerce platform that provides an easy way for customers to purchase beauty products online. The frontend and backend work together seamlessly to provide users with a great shopping experience.

## Contributing

We welcome contributions to enhance the Beauty Shop App. If you want to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b my-new-feature`.
3. Make your changes and commit them: `git commit -am 'Add some feature'`.
4. Push the branch to your forked repository: `git push origin my-new-feature`.
5. Submit a pull request detailing your changes.

Please ensure your code follows the existing style conventions and includes appropriate tests.

## License

The Beauty Shop App is open source and available under the [Apache License 2.0](LICENSE).
