const express=require('express');
const bodyParser = require('body-parser')
const path=require('path');
const cors = require('cors');
const userRoutes=require('./route/user');
const sequelize=require('./util/database');

const app= express();

app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRoutes);
sequelize
.sync()
.then(app.listen(7000,()=>console.log("server connected")))
.catch(err=>console.log(err));
