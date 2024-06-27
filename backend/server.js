const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
console.log(`${process.env.MONGO_URL}`)
mongoose.connect(`${process.env.MONGO_URL}`).then(() => {
    console.log("MONGODB CONNECTED")
}).catch((err) => {
    console.log(err);
})
    
const postSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    count: { type: Number, required: true, default: 0 },
    description: { type: String, required: true },
    url: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema);

const LoginUsers = mongoose.model("LoginUsers", postSchema);

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
});


app.post('/api/products', async (req, res) => {
    try {
        const { name, price, count, description, url } = req.body;

        // Validate the input
        if (!name || !price || price < 0 || !count || count < 0 || !description || !url) {
            return res.status(400).send('Invalid product data provided.');
        }

        // Create a new product instance
        const newProduct = new Product({
            name,
            price,
            count,
            description,
            url
        });

        // Save the product to the database
        await newProduct.save();

        // Send a response back to the client
        res.status(201).json(newProduct);
    } catch (error) {
        console.error('Failed to add product:', error);
        res.status(500).json({ message: 'Failed to add product due to internal error.' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        console.log(req.body)
        const { username, password } = req.body;
        let exist = await LoginUsers.findOne({ username });
        if (!exist) {
            return res.status(200).json({ message: "username not found" });
        }
        if (exist.password != password) {
            return res.status(200).json({ message: "wrong password" });
        }
        let token = jwt.sign({ _id: exist._id }, process.env.JWT_SECRET);
        console.log(token)
        return res.json({
            status: 200,
            message: "user found",
            found: true,
            token: token
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).send("server error");
    }
})



app.listen(5000, () => {
    console.log("server running at http://localhost:5000/")
})