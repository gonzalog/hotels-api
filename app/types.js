const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLInputObjectType,
  GraphQLBoolean }= require('graphql')

exports.HotelType = new GraphQLObjectType({
  name: 'HotelType',
  fields: {
  	id: { type: GraphQLInt },
    name: { type: GraphQLString },
    stars: { type: GraphQLString },
    price: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    recommended: { type: GraphQLBoolean },
    discount: { type: GraphQLInt }
  }
})

exports.AvailabilityInputType = new GraphQLInputObjectType({
  name: 'AvailabilityInputType',
  fields: {
  	from: { type: GraphQLString },
  	upTo: { type: GraphQLString },
  	guests: { type: GraphQLInt }
  }
})

