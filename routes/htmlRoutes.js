var db = require("../models");

module.exports = function(app) {
    // Load index page
    app.get("/", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.render("index", {
                msg: "Welcome!",
                examples: dbExamples
            });
        });
    });

    app.get("/create", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.render("gigcreate", {
                // msg: "Welcome!",
                // examples: dbExamples
            });
        });
    });

    app.get("/helpersignup", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.render("helpersignup", {
                // msg: "Welcome!",
                // examples: dbExamples
            });
        });
    });

    app.get("/reqsignup", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.render("requestersignup", {
                // msg: "Welcome!",
                // examples: dbExamples
            });
        });
    });

    // Load example page and pass in an example by id
    app.get("/example/:id", function(req, res) {
        // eslint-disable-next-line prettier/prettier
        db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
            res.render("example", {
                example: dbExample
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};