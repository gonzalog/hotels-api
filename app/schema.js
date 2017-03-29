const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt,GraphQLString } = require('graphql')
const { HotelType, AvailabilityInputType } = require('./types.js')
const { hotelLoader } = require('./loaders.js')

exports.schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'QueryType',
    fields: {
      hotels: {
        type: new GraphQLList(HotelType),
        args: {
          count: {
            type: GraphQLInt,
            description: "Specifies how many hotels will be returned",
            defaultValue: 3
          },
          ids: {
            type: new GraphQLList(GraphQLInt),
            description: "Individually identifies which hotels should be returned"
          },
          city: {
            type: GraphQLString,
            description: "Specifies which city should hotels be selected from"
          },
          availability: {
            type: AvailabilityInputType,
            description: "Specifies required dates range and guests count"
          }
        },
        resolve: (root, { ids, count, availability, city }) => {
          if(ids)
            return hotelLoader.load(ids)
          else
            return hotelLoader.loadAll({ limit: count, availability: availability, city: city })
        }
      }
    }
  })
});
