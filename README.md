# ShoppingCartAPI

##Overview
Shopping Cart API provides REST interface for a typical shopping cart functionality. 

##Installation
Download the repositry in a folder. This node project has gulp, so to start the server run the following command - gulp from the downloaded folder.

##Operations
Once the node is running which will listen in port 8000. Use PostMan or other REST clients to do the following operations

To list items in the shopping cart do GET - http://localhost:8000/v1/api/items. By default you should see two items in the cart.

To list one item do GET to http://localhost:8000/v1/api/items/{id}. From the previous query you can get a id.

To add items to the cart do POST to http://localhost:8000/v1/api/items. Pass the following items in the body 
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
To delete an item from the cart use DELETE to http://localhost:8000/v1/api/items/{id}

To update quantity for an item in the cart use PUT to http://localhost:8000/v1/api/items/{id} and pass the following in the body

```
{
  "quantity":"3"
}
```
To delete an entire cart use DELETE on http://localhost:8000/v1/api/items/




 
