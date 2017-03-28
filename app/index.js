const express = require('express');
const graphqlHTTP = require('express-graphql');
const { schema } = require('./schema.js')

const app = express();

app.use('/', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

console.log(process.env.PORT)
const PORT = process.env.PORT || 4000
app.listen(PORT)
console.log(`Listening on port ${PORT}`)
