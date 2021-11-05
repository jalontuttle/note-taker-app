const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require('uuid');


module.exports = (app) => {
    app.get('/api/notes', (req, res) => {
        fs.readFile('./db/db.json', (err, results) => {
            if(err) {
                throw err;
            } else {
                console.log(results);
                res.send(results);
            }
        })
    })

    app.post('/api/notes', (req,res) => {
        const {title, text} = req.body;

        let newNote;
        
        if(req.body) {
             newNote = {
                title,
                text,
                id: uuidv4(),
            };

            fs.readFile('./db/db.json', (err, results) => {
                if(err) {
                    throw err;
                } else {
                    var notes = JSON.parse(results);
                    notes.push(newNote);
                    console.log(notes);
                    fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
                        if(err) {
                            throw err;
                        } res.send(newNote);
                    })
                }
                
                
            })
            

        }
    })
}