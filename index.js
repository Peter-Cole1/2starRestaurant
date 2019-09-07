const express=require("express");
const app=express();
const path = require("path");
const PORT=process.env.PORT||3000;
const frontEndRoutes=require("./frontend/routes");
const backEndRoutes=require("./backend/routes");

app.use(express.json());



//Front End Routes
app.get("/tables",frontEndRoutes.displayTables);
app.get("/reservation",frontEndRoutes.displayReservationForm);

//API Routes
app.get("/api/tables",backEndRoutes.getTables);
app.post("/api/reservation",backEndRoutes.createReservation);

app.listen(PORT,function(error){
    if(error)
        throw error;
    console.log("Server is running on port:",PORT);
    // console.log(path);
})


//-----------------------------------------------------------------


var reservartions = [];
var waitingList = [];

function createTable(){

 



}
