const express = require('express');
const app = express();
const db = require("./models");
const {
  databaseMigration
} = require('./config/db.config');


if (databaseMigration == "Yes") {
    db.sequelize.sync({
      force: true
    }).then(() => {
      console.log("Migration Start");
      
    }).catch(
      console.log("Migration error"),

    )
  }
app.use(express.static('public'))
app.get('/', (req,res)=>{
    res.send('okk')
})

require('./routes/index')(app);



app.listen(4000,()=>{
    console.log('Server is running on localhost 4000');
})




