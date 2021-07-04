export const state = () => ({
  loggedIn: false,
  userMail: ''
})

export const mutations = {
  setLoggedIn(state, logged) {
    state.loggedIn = logged
  },
  setUserMail(state, mail) {
    state.userMail = mail
  }
}

export const getters = {
  getLoggedIn(state) {
    return state.loggedIn
  },
  getUserMail(state) {
    return state.userMail
  }
}
