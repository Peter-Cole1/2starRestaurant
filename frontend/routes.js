var path = require("path");


module.exports={
    displayTables:function(req,res)
    {
        res.sendFile(path.join(__dirname, "tables.html"));
    },
    displayReservationForm:function(req,res)
    {
        res.sendFile(path.join(__dirname, "reserve.html"));
    }
}