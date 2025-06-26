import connection from "./db.js";

const index = (req, res) => {

    const sql = `SELECT * FROM movies`;

    connection.query(sql, (error, results) => {
        if(error) {
            console.log(error)
        }else {
            const movies = res.data

            res.status(200).json(
                {
                    data: results
                }
            );
        }
    });
}

const show = (req, res) => {

    const id = req.params.id;

    const sql = `SELECT * FROM movies WHERE id = ?`;

    connection.query(sql, [id], (error, results) => {
        if(error) {
            console.log(error)
        }else {
            const movies = res.data

            res.status(200).json(
                {
                    data: results
                }
            );
        }
    });
}


const controller = {
    index,
    show
}

export default controller