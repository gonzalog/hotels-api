const { GraphQLObjectType, GraphQLString, GraphQLInt } = require('graphql')

exports.HotelType = new GraphQLObjectType({
  name: 'HotelType',
  fields: {
  	id: { type: GraphQLInt },
    name: { type: GraphQLString },
    stars: { type: GraphQLString },
    price: { type: GraphQLString }
  }
})
