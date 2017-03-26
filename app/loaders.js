const hotels = require('../db/hotels.json')

exports.hotelLoader = {
  load: (ids) => hotels.filter(({ id }) => ids.includes(id)),
  loadAll: ({ limit }) => hotels.slice(0, limit)
}