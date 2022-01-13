const mongoose = require('mongoose');
const Product = require('./models/product')
const url = 'mongodb+srv://Sandeep_Rana:Ran122015HR@cluster0.pjnif.mongodb.net/products_test?retryWrites=true&w=majority'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('connection successfull'))
    .catch((err) => console.log(err))

const createProduct = async (req, res, next) => {
    const createdProduct = new Product({
        name: req.body.name,
        price: req.body.price,
    })
    const result = await createdProduct.save()
    res.json(result)
}

const getProduct = async (req, res, next) => {
    const products = await Product.find().exec()
    res.json(products)
}

exports.createProduct = createProduct
exports.getProduct = getProduct 