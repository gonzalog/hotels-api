const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql')
const { HotelType } = require('./types.js')
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
          }
        },
        resolve: (root, { ids, count }) => {
          if(ids)
            return hotelLoader.load(ids)
          else
            return hotelLoader.loadAll({ limit: count })
        }
      }
    }
  })
});
