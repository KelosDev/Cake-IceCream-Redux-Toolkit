const { cakeActions } = require('../cake/cakeSlice')

const createSlice = require('@reduxjs/toolkit').createSlice

const initialState = {
    numOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numOfIcecreams--
        },
        restocked: (state, action) => {
            state.numOfIcecreams += action.payload
        },
    },
    // extraReducers: { // quando vendo una torta regalo un gelato, quindi devo decrementare il numero di gelati ogni volta che viene venduta una torta
    //     ['cake/ordered']: (state) => {
    //         state.numOfIcecreams--
    //     }
    // } // sotto una sintassi migliore usando una build function

    extraReducers: (builder) => {
        builder.addCase(cakeActions.ordered, state => {
            state.numOfIcecreams--
        })
    }


})

module.exports = icecreamSlice.reducer
module.exports.icecreamActions = icecreamSlice.actions