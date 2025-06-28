import express from "express";
import router from "./router/movies.js";
import errorHandler from "./middleware/errorsHandler.js";
import notFound from "./middleware/notfound.js";
import cors from "cors"
const app = express()
const port = 3000


app.use(cors({
    origin: "http://localhost:5173"
}))
app.use(express.json());
app.use(express.static("public"))


app.get("/" , (req, res) => {
    res.json({
        data: "Welcome"
    })
});

app.use("/movies", router)

app.use(errorHandler)
app.use(notFound)

app.listen(port, () => {
console.log(`Server in ascolto su ${port}`)
})


