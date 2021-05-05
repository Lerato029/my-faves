/* ============================================Server with Express========================================*/
//Exporting express module
const express = require("express");

//used to visualize endpoints/requests on the terminal when testing server with postman
const morgan = require("morgan");

//cors to allow interaction between different end points
const cors = require("cors");

//importing helmet to secure my code
const helmet = require("helmet");

//importing routes module
const routes = require("./routes");

//initialize express function
const app = express();

/* =====================================Deployment Prep====================== */
//require path...
const path = require("path");
// let backend server know to serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('frontEnd/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontEnd', 'build', 'index.html'));
  });
}

/* =====================================Use Method To Initiate Modules ====================== */
//initiate helmet
app.use(helmet());

app.use(cors());

app.use(express.json());

app.use(morgan("dev"));

//Access routes folder
app.use("/api", routes);

/* =====================================Defining Root Route PORT============================= */

//Port dynamically set
const PORT = process.env.PORT || 8080 ;
app.listen(PORT, () =>
  console.log(`listening on PORT:${PORT}`)
);
