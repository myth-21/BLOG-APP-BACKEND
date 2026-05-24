import exp from 'express'
import { connect } from 'mongoose'
import { config } from 'dotenv'
import { userRoute } from './APIs/userAPI.js'
import { authorRoute } from './APIs/authorAPI.js'
import { adminRoute } from './APIs/adminAPI.js'
import { commonRouter } from './APIs/CommonAPI.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

config()  //process.env

const app=exp()  //exp() function 

app.use(cors({
    origin: [
        'http://localhost:5173',
        'http://localhost:5174',
        'https://YOUR-FRONTEND-NAME.vercel.app'
    ],
    credentials: true
}))
//add body parser middleware
app.use(exp.json())
app.use(cookieParser())
app.get('/test', (req,res)=>{
    res.send('TEST ROUTE WORKING')
})

app.use('/user-api',userRoute)
app.use('/author-api',authorRoute)
app.use('/admin-api',adminRoute)
app.use('/common-api',commonRouter)

//connect to DB
// 
const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {

        console.log("Connecting DB...");

        await connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000
        });

        console.log("DB connection success");

    } catch (err) {

        console.error("DB ERROR:");
        console.error(err.message);

    }

    app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
    });
};

startServer();
//dealing with invalid path
app.use((req,res,next)=>{
    res.json({message:`${req.url}  is Invalid path`})
});

// Consolidated error handling middleware
app.use((err, req, res, next) => {
    console.error("Error detected:", err.name, err.code, err.message);

    // Mongoose validation error
    if (err.name === "ValidationError") {
        return res.status(400).json({
            message: "Validation failed",
            error: err.message,
        });
    }

    // Invalid ObjectId
    if (err.name === "CastError") {
        return res.status(400).json({
            message: "Invalid ID format",
            error: err.message
        });
    }

    // Duplicate key
    const errCode = err.code ?? err.cause?.code ?? err.errorResponse?.code;
    if (errCode === 11000) {
        return res.status(409).json({
            message: "Duplicate entry",
            error: err.message
        });
    }

    // Custom errors
    if (err.status) {
        return res.status(err.status).json({
            message: "Error occurred",
            error: err.message,
        });
    }

    // Default 500
    res.status(500).json({
        message: "Internal Server Error",
        error: err.message
    });
});
