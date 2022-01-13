const mongoose = require('mongoose');
const Product = require('./models/product')
const url = 'mongodb+srv://Sandeep_Rana:<password>@cluster0.pjnif.mongodb.net/products_test?retryWrites=true&w=majority' // Your MongoDB Password

mongoose.connect(url, {             // Setting up connection
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('connection successfull'))
    .catch((err) => console.log(err))

const createProduct = async (req, res, next) => {           // create  a new product
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price,
    })
    const result = await createdProduct.save()
    res.json(result)
}

const getProducts = async (req, res, next) => {      // get all product
    const products = await Product.find().exec()
    res.json(products)
}

exports.createProduct = createProduct
exports.getProducts = getProducts 
