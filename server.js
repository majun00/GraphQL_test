var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
var app = express();

let listData = [{
        "name": "张三",
        "age": 12,
        "id": 0
    },
    {
        "name": "李是",
        "age": 22,
        "id": 1
    }, {
        "name": "王五",
        "age": 14,
        "id": 2
    }
]

var schema = buildSchema(`
  type Item {
    name: String,
    age: Int,
    id: Int,
  }

  type Query{
      list: [Item]
  }
`);

var root = { list: listData };

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));