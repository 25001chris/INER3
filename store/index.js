export const state = () => ({
    counter: 0,
    windowWidth: 0,
    windowHeight: 0
})
export const mutations = {
    increment(state) {
        state.counter++
    },
    setWindowWidth(state,payload){
        state.windowWidth = payload
    },
    setWindowHeight(state,payload){
        state.windowHeight = payload
    }
}
export const getters = {
    ishorizontal: (state) => {
        return state.windowWidth === 1318
    }
}