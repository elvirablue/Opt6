export const state = () => ({
    isMobile: false,
    isTablet: false,
    //isTouchScreen: false,
})

export const getters = {
    getTypeMobile(state) {
        return state.isMobile;
    },
    getTypeTablet(state) {
        return state.isTablet;
    },
    //getTypeTouchScreen(state) {
    //    return state.isTouchScreen;
    //}
}

export const mutations = {
    setTypeMobile(state, isMobile) {
        state.isMobile = isMobile;
    },
    setTypeTablet(state, isTablet) {
        state.isTablet = isTablet;
    },
    //setTypeTouchScreen(state, isTouch) {
    //    state.isTouchScreen = isTouch;
    //},
}

export const actions = {}
