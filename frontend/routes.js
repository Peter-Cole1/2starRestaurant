var path = require("path");


module.exports={
    displayTables:function(req,res)
    {
        res.sendFile(path.join(__dirname, "/frontend/tables.html"));
    },
    displayReservationForm:function(req,res)
    {
        res.sendFile(path.join(__dirname, "/frontend/reserve.html"));
    }
}