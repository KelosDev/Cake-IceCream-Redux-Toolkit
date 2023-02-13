const configureStore = require('@reduxjs/toolkit').configureStore
const cakeReducer = require('../features/cake/cakeSlice')
const icecreamReducer = require('../features/iceCream/icecreamSlice')
const reduxLogger = require('redux-logger')

const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // lo faccio perchè per default la funzione configureStore aggiunge alcuni middleware a redux store automaticamente
})

module.exports = store