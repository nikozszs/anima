import type { Commit } from 'vuex'
interface State {
  error: string | null,
  success: boolean
}

export default {
  namespaced: true,

  state: {
    error: null,
    success: false
  },

  mutations: {
    setError(state: State, payload: string | null) {
      state.error = payload
    },

    setSuccess(state: State, payload: boolean) {
      state.success = payload
    },

    resetForm(state: State) {
      state.error = null
      state.success = false
    }
  },

  actions: {
    async sendForm(
      {commit}: {commit: Commit},
      payload:{ userName: string, userPhone: string, agreed: boolean}
    ) {
      commit('setError', null)

      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        commit('setSuccess', true)

        return {
          success: true,
          data: payload,
          message: 'Форма успешно отправлена'
        }
      } catch (e) {
        console.log(e)
        commit('setError', 'Произошла ошибка при отправке данных')
      }
    }
  }
}