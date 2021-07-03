export const state=()=>({
  loggedIn: false
})

export const mutations= {
  setLoggedIn(state, logged) {
    state.loggedIn= logged
  }
}

export const getters= {
  getLoggedIn(state){
    return state.loggedIn
  }
}
