const express=require("express");
const app=express();
const PORT=process.env.PORT||3000;
const frontEndRoutes=require("./frontend/routes");
const backEndRoutes=require("./backend/routes");

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
})
