const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000; // bardzo istotna linijka - port zostaje przydzielony przez Heroku

app.get("/data", function (req, res) {
    res.send({imie:"Katarzyna",nazwisko:"Kowalczyk",klasa:"3i2",grupa:"2"})
})

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})