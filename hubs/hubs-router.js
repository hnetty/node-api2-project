const express = require("express");

const Hubs = require("../data/db.js");

const router = express.Router();


router.get("/", (req, res) => {

    const query = req.query;

    Hubs.find(query)
        .then(hubs => {
            res.status(200).json({ data: hubs, parameters: req.query});
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: error.message });
        });
});

router.get("/:id", (req, res) => {
    Hubs.findById(req.params.id)
        .then(hub => {
            if (hub){
                res.status(200).json(hub);
            }else {
                res.status(404).json({ message: "Hub not found" });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error getting the hub"
            });
        });
});

router.get("/:id/comments", (req, res) => {
    
})