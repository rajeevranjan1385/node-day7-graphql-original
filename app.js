const express = require('express');
const expressGraphQL = require('express-graphql');
var schema = require('./schema/schema');

const port = 8700;
const app = express();

app.use('/graphql', expressGraphQL({
    schema,         //we need to provide what schema we use
    graphiql: true  //we need to make this true as this provides the interface otherwise it wont give me interface
}))

app.listen(port, (err)=>{
    if(err) throw err;
    console.log(`The server is listening at port ${port}`);
})
