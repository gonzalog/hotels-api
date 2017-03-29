const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType } = require('graphql')

exports.HotelType = new GraphQLObjectType({
  name: 'HotelType',
  fields: {
  	id: { type: GraphQLInt },
    name: { type: GraphQLString },
    stars: { type: GraphQLString },
    price: { type: GraphQLString }
  }
})

exports.AvailabilityInputType = new GraphQLInputObjectType({
  name: 'AvailabilityType',
  fields: {
  	from: { type: GraphQLString },
  	upTo: { type: GraphQLString },
  	guests: { type: GraphQLInt }
  }
})

