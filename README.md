# medi-weightless-ecommerce

Quick Steps Ensure that you are on the "developement" branch.

# To get backend running:
- Run pip install -r requirements.txt
- CD into backend/django_app.
- Run python3 manage.py migrate
- Run python3 manage.py runserver
# To run frontend, in a new terminal:
- CD into medi-ecommerce
- Run npm install
- Run npm start

Enjoy!

# Notes:
You will be dropped into the listview screen initially. From there, you have the option to either "Buy It Now" or click on a product to view it's details. Once inside of the details, you will also be able to purchase that product. Once clicking "Buy It Now", the item will be added into the cart and the user will be redirected into the cart screen. This is specifically done to prevent a user to add different products to the cart, as that is not currently supported. Once inside of the cart, you have the option to increase or decrease the quantity of that item (note: you will only be able to increase the quantity until you have hit the "inventory_on_hand" value). While on this screen, please do not refresh or go back using the browser as it does not handle those yet, but does provide a back button in the nav header (note: as you will see by the message on the page, if in the cart and you choose to press the back button in the nav header, your cart will be reset). The submit will be disabled until the form fields have been filled out. Once submitted, you will be able redirected to the home page and you will notice that the product that you have just purchased will have it's "inventory_on_hand" value adjusted accordingly.

# Technologies Used:
- Javascript
- Python
- CSS/HTML
- SQL
- React
- Django
- PostgreSQL
- Redux
- React-Router
- Material UI


# APIs:
- '/products': to return list of products
- '/products/<int:product_id>/': to return individual product 
- '/products/<int:product_id>/details': to return individual product details
- '/products/<int:product_id>/purchase': to purchase a product 
