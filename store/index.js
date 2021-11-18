export const state = () => ({
    counter: 0,
    windowWidth: 0,
    windowHeight: 0,
    announceList:null,
    loginStatus:0
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
    },
    saveAnnounceList(state,payload){
        state.announceList = payload
    },
    setLoginStatus(state,payload){
        state.loginStatus = payload.status
    }
}
export const getters = {
    ishorizontal: (state) => {
        return state.windowWidth === 1318
    }
}