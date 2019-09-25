const router = require("express").Router();
const friends = require("../data/friends");

router.get("/", (req, res) => {
    res.render("index")
})

router.get("/survey", (req, res) => {
    res.render("survey")
})
router.get('*', function (req, res) {
    res.render("index")
});



module.exports = router;