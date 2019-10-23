
import Cookies from 'js-cookie'
import settings from "../../settings.js"
const state = {
  sidebarOpened: Cookies.get('sidebarOpened') ? !!+Cookies.get('sidebarOpened') : !settings.defaultsidebarOpened,
 // showSettings: Cookies.get('showSettings') ? !!+Cookies.get('showSettings') : true,
  tagsView: Cookies.get('tagsView') ? !!+Cookies.get('tagsView') : settings.defaulttagsView,
  fixedHeader: Cookies.get('fixedHeader') ? !!+Cookies.get('fixedHeader') : settings.defaultfixedHeader,
  sidebarLogo: Cookies.get('sidebarLogo') ? !!+Cookies.get('sidebarLogo') : settings.defaultsidebarLogo,
}

const mutations = {
  CHANGE_SETTING: (state, { key, value }) => {
    if (state.hasOwnProperty(key)) {
      console.log(key)
      state[key] = value
      if (value) {
        Cookies.set(key, 1)
      }
      else {
        Cookies.set(key, 0)
      }
    }
  }
}

const actions = {
  changeSetting({ commit }, data) {
    commit('CHANGE_SETTING', data)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
