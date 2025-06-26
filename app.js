import express from "express";
import router from "./router/movies.js";

const app = express()
const port = 3000

app.use(express.json());
app.use(express.static("public"))


app.get("/" , (req, res) => {
    res.json({
        data: "Welcome"
    })
});

app.use("/movies", router)

app.listen(port, () => {
console.log(`Server in ascolto su ${port}`)
})


