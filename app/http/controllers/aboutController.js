function aboutController(){
    // factory functions: programming pattern where we use closures
    return {
         index (req, res){
            return res.render('about')     // later pizzas is of array of objects , we are sending this key value pair to home.ejs where it is using pizzas and looping the object.

        }
    }
}

module.exports = aboutController