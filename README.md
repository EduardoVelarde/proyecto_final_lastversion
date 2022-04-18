
# Ecommerce Backend Using JavaScript
This project consist in a backend which has databases and also authentication and autorization logic
aswell more complex behaivor using cart and adding product to the cart, when a user register in endpoint service it adds a cart to the user and the user push products to it.

## Authentication process

The firts to do is Register a user to database the database that is begin used is MongoDB, use the following endpoint to add users 

```Register
ecommerce-coder-edu.herokuapp.com/users/signup?email=eduardolopezvelardes@gmail.com
```
use the following body to add it correctly: 

```
{
    "username":String,
    "password":String,
    "name":String,
    "age":Integer,
    "avatar":String
}
```
finally use the query params to recieve an email when a user register to the app! ( this is not meant to have too many ppl using this XD)

* Login

use the following endpoint to login into the app

```Login
ecommerce-coder-edu.herokuapp.com/users/signin
```

This service only requires your username and passwor as is shown below

```
{
    "username":String,
    "password":String
}
```

 * LogOut

Heres a route to end the session in the service

```LogOut
ecommerce-coder-edu.herokuapp.com/users/logout
```

## User process

When a user has Sing in or Sign up should be able to access to the carts services and add products
Firts should have access to see all the product that is currently in the app with the follwing URL

```AllProducts
ecommerce-coder-edu.herokuapp.com/products/getAll
```

All the items and the caterogies of this one should be availabel you need to get the id of one product to add it to the cart and also having the cart id, to the cart id you need to consult the following URL

```Cart
ecommerce-coder-edu.herokuapp.com/carts/showAllItems
```
Use the final cart of the list to add items to it, in the next update this will fixed

And finally use the next endpoint to send the cart you want to purchase

```Cart
ecommerce-coder-edu.herokuapp.com/carts/confirmCart?email=eduardolopezvelardes@gmail.com
```
Use the query param to use an email and get a notify when someone send his cart to proceed with the process

## Admin Process
Only the admin has access to the following process

* save products
* update product
* delete by id
* delete All

## Admin endpoint

* save products 

```URL
ecommerce-coder-edu.herokuapp.com/products/saveProduct
```

request body:

```Body
{
    "name":String,
    "price":String,
    "description":String,
    "url":String,
    "stock":Integer
}
```

* Update By Id
```URL
ecommerce-coder-edu.herokuapp.com/products/updateProduct?id=""
```

request body:

```Body
{
    "id":mongoID,
    "name":String,
    "price":String,
    "description":String,
    "url":String,
    "stock":Integer
}
```

* Delete By Id

```URL
ecommerce-coder-edu.herokuapp.com/products/deleteProduct?id=""
```

* Delte All

```URL
ecommerce-coder-edu.herokuapp.com/products/deleteAllProduct
```
