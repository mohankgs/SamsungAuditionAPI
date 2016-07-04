# ShoppingCartAPI

##Overview
Shopping Cart API provides REST interface for a typical shopping cart functionality. 

##Installation
Download the repositry as a zip file and unzip it in a folder. 
Go to the project folder in a command prompt or terminal window and run the following command to install all the node modules

```
npm install
```
This should install all the dependent modules used by this project. If you are behind firewall make sure to set proxy using the following command

```
npm config set proxy 
```
Once all the modules are installed run the following command to start the server

```
node index.js
```
You should see a message on which port the server is listening. By default it is listening on port 3000.

##Operations

Use PostMan or other REST clients to do the following operations

To list items in the shopping cart do GET - http://localhost:3000/v1/api/items. By default you should see two items in the cart.

To list an item do GET on http://localhost:3000/v1/api/items/{id}. From the previous query you can get a id.

To add items to the cart do POST to http://localhost:3000/v1/api/items. Pass the following items in the body and set the header  "Content-Type" to "application/json". Output should be combined list of old and new items in the cart, so in this case you should see four items.
```
{
"items" : [
  {
    "name": "Dell Laptop 2",
    "price": "599.99",
    "quantity": "1"
  },
  {
    "name": "Laptop bag 2",
    "price": "49.99",
    "quantity": "1"
  }
]
}
```
To delete an item from the cart use DELETE on http://localhost:3000/v1/api/items/{id}. Output should be remaining cart items without this item.

To update quantity for an item in the cart use PUT on http://localhost:3000/v1/api/items/{id} and pass the following in the body. Output should be cart items with updated quantity.

```
{
  "quantity":"3"
}
```
To delete an entire cart use DELETE on http://localhost:3000/v1/api/items/ . Output should be the following message - "Shopping cart is empty.




 
