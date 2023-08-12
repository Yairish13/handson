const app = require('./config/express');
require("dotenv").config();
const port = process.env.PORT || 4001;
const env = process.env.NODE_ENV || 'develop';

app.listen(port, () => console.log(`server started on port ${port} (${env})`));

module.exports = app;