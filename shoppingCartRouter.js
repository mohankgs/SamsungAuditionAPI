var express = require('express')


var shoppingCart = {

    items  : [
      {
        "id" : 092093773,
        "name" : "Dell Laptop 1",
        "price" : "899.99",
        "quantity" : 1
      },
      {
        "id" : 08098098,
        "name" : "Laptop bag",
        "price" : "49.99",
        "quantity" : 1
      }
    ],

    getItems : function(){
      return this.items
    },

    findItemById  :  function(itemId){
      if(itemId){
        for(var i=0; i<this.items.length; i++){
          if(this.items[i].id == itemId){
            return this.items[i]
          }
        }
      }
    },

    addShoppingCartItems : function(itemsParam){
      if(itemsParam){
        for(var i=0; i<itemsParam.length; i++){
          var item = {
            id : Math.round(Math.random()*1000000000),
            name : itemsParam[i].name,
            price: itemsParam[i].price,
            quantity : itemsParam[i].quantity
          }
          this.items.push(item)
        }
      }
    },

    deleteShoppingCartItem : function(id){
      var deleted = false
      if(id){
        for(var i=0; i<this.items.length; i++){
          if(this.items[i].id == id){
            this.items.splice(i, 1)
            deleted = true
            break;
          }
        }
      }
      return deleted
    },

    deleteShoppingCart : function(){
      this.items = []
    },

    updateShoppingCartItem : function(itemId, quantity){
      var updated = false
      for(var i=0; i<this.items.length; i++){
        if(this.items[i].id == itemId){
          this.items[i].quantity = quantity
          updated = true
          break
        }
      }
      return updated
    }
}

var routes = function(){

  var itemRouter = express.Router()

  // Deal with invididual items in the cart
  itemRouter.route('/items/:itemId')
    .get(function(req, res){
      var returnItem = shoppingCart.findItemById(req.params.itemId)
      if(returnItem)
        res.status(200).json(returnItem)
      else
        res.status(404).send("Item cannot be found.")
    })
    .put(function(req, res){
        var updated = shoppingCart.updateShoppingCartItem(req.params.itemId, req.body.quantity)
        if(!updated){
          res.status(404).send('Item not found')
        }else{
          res.status(200).send(shoppingCart.items)
        }
    })
    .delete(function(req, res){
      var deleted = shoppingCart.deleteShoppingCartItem(req.params.itemId)
      if(deleted){
        res.status(200).json(shoppingCart.items)
      }else{
        res.status(404).send('Item not found')
      }
    })

  // Deals with entire shoppingCart
  // POST - add one or many items to the cart
  // GET - returns the entire cart
  // DELETE - delete all the items in the cart
  itemRouter.route('/items')
    .post(function(req, res){
      var items = req.body.items
      if(items){
        shoppingCart.addShoppingCartItems(items)
        res.status(201).send(shoppingCart.items)
      }else{
        res.status(404).send('No items found.')
      }
    })
    .get(function(req, res){
        if(shoppingCart.items.length < 1)
          res.status(200).send('Shopping Cart is empty')
        else
          res.json(shoppingCart.items)
    })
    .delete(function(req, res){
      shoppingCart.deleteShoppingCart()
      res.status(200).send('Shopping Cart is empty')
    })

    return itemRouter
}
module.exports = routes
