export const state = () => ({
    counter: 0,
    windowWidth: 0
})
export const mutations = {
    increment(state) {
        state.counter++
    },
    setWindowWidth(state,payload){
        state.windowWidth = payload
    }
}