let express = require("express")
let cors = require("cors")
const { default: mongoose } = require("mongoose")
let bcrypt = require("bcrypt")
// const { default: Contact } = require("../src/components/pages/Contact")
let app = express()

app.use(cors())
app.use(express.json())

app.get("/fttfy", (req, res) => {
    res.send("server start")
})


let ContactSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    }
})

let Contacts = mongoose.model("contact", ContactSchema)
app.post("/api/contact", async (req, res) => {
    let data = req.body
    console.log(data)
    try {
        await Contacts.create(data)
        res.status(200).json({ msg: "Data Save !" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Errror !" })
    }

});


app.get("/api/allContact", async (req, res) => {
    try {
        let allContact = await Contacts.find()
        res.status(200).json({ allContact })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Server Error" })
    }
})
app.delete("/api/deleteContact/:id", async (req, res) => {
    let id = req.params.id
    try {
        await Contacts.findOneAndDelete({ _id: id })
        res.status(200).json({ msg: " data Delete! " })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Server Error" })
    }
})


let AddBlogSchema = mongoose.Schema({
    title: {
        type: String
    },
    des: {
        type: String
    },
    poston: {
        type: String
    },
    postby: {
        type: String
    },
    img: {
        type: String
    }
})

let Blogs = mongoose.model("blog", AddBlogSchema)

app.post("/api/AddBlog", async (req, res) => {
    let data = req.body

    try {
        await Blogs.create(data)
        res.status(200).json({ msg: "Data Save !" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Errror !" })
    }

});

app.get("/api/allblog", async (req, res) => {

    try {
        let allblog = await Blogs.find()
        res.status(200).json({ allblog })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Server Error" })
    }
})

app.delete("/api/deleteBlog/:id", async (req, res) => {
    let id = req.params.id
    try {
        await Blogs.findOneAndDelete({ _id: id })
        res.status(200).json({ msg: " data Delete! " })
    } catch (error) {
        console.log(error)
        res.status(500).json({ msg: "Server Error" })
    }
})


let signSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
})

let Users = mongoose.model("user", signSchema)

app.post("/api/signup", async (req, res) => {
    let data = req.body
    try {

        let salt = await bcrypt.genSalt()
        let newPassword = await bcrypt.hash(data.password, salt)
        data.password = newPassword
        await Users.create(data)
        res.status(200).json({ msg: " user sign up !" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Errror !" })
    }

});


app.post("/api/signin", async (req, res) => {
    let data = req.body
    try {
        let find = await Users.findOne({ email: data.email })
        if (!find) {
            return res.status(400).json({ msg: "User not found ! " })
        }
        let match = await bcrypt.compare(data.password, find.password)


        if (!match) {
            return res.status(400).json({ msg: "password not match  ! " })
        }
        res.status(200).json({ msg: " user Login  !", userid: find._id })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Errror !" })
    }

});

let PricingSchema = mongoose.Schema({
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    price: {
        type: String
    },

})


let Pricing = mongoose.model("Pricing", PricingSchema)



app.post("/api/addOrder", async (req, res) => {
    let data = req.body
    console.log(data);

    try {
        await Order.create(data)
        res.status(200).json({ msg: "DOne !" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Errror !" })
    }

});

app.get("/api/allOrder", async (req, res) => {
    try {
        let allData = await Order.find().populate("userID")
        res.status(200).json(allData)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Errror !" })
    }
})


app.post("/api/addPricing", async (req, res) => {
    let data = req.body
    console.log(data);

    try {
        await Pricing.create(data)
        res.status(200).json({ msg: "DOne !" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Errror !" })
    }

});



app.get("/api/allpricing", async (req, res) => {
    try {
        let allData = await Pricing.find().populate("userID")
        res.status(200).json(allData)
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Errror !" })
    }
})


let OrderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    totalAmount: {
        type: String
    },
    address: {
        name: {
            type: String
        },

        lastname: {
            type: String
        },
        streetname: {
            type: String

        },
        postalcode: {
            type: String
        },
        state: {
            type: String
        },
        number: {
            type: String
        },
        city: {
            type: String
        },
        country: {
            type: String

        },
        floor: {
            type: String

        },


    },
    paymentId: {
        type: String
    },
    paymentStatus: {
        type: String
    }
})

let Order = mongoose.model("Order", OrderSchema)

app.post("/api/orders/checkout", async (req, res) => {
    try {
        const { userId, address, totalAmount } = req.body;
        const newOrder = new Order({
            userId,
            address,
            totalAmount,
        });
        await newOrder.save();
        res.status(201).json({ success: true, order: newOrder });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message });
    }
})



app.put("/api/orders/:orderId", async (req, res) => {
    const { orderId } = req.params;
    const { paymentId, paymentStatus } = req.body;
    try {
        const updateOrder = await Order.findByIdAndUpdate(
            orderId,
            { paymentId, paymentStatus },
            { new: true }
        );
        res.status(200).json({ msg: "okk" });
    } catch (err) {
        res.status(500).json({ message: " Filed to update payment", error: err });
    }
})
app.get("/api/my-order/:userId" , async (req, res) => {
    try{
        const orders = await Order.find({ userId: req.params.userId})
        res.json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error.message});
    }
})

mongoose
    .connect("mongodb://127.0.0.1:27017/project")
    .then(() => {
        app.listen(4000, () => {
            console.log(" server Start");
        });
    })
    .catch((error) => {
        console.log(error)
    })