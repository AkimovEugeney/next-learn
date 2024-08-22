import { IAuthForm, IAuthRes } from '@/types/auth.types'

import { axiosOutAuth } from '@/api/interceptors'

import { removeTokenStorage, saveTokenStorage } from './auth-token.service'

export const authService = {
  async main(type: 'login' | 'register', data: IAuthForm) {
    const response = await axiosOutAuth.post<IAuthRes>(`/auth/${type}`, data)
    if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
    return response
  },

  async getNewTokens() {
    const response = await axiosOutAuth.post<IAuthRes>(
      `/auth/login/access-token`
    )
    if (response.data.accessToken) saveTokenStorage(response.data.accessToken)
    return response
  },

  async logout() {
    const response = await axiosOutAuth.post<boolean>(`/auth/logout`)
    if (response.data) removeTokenStorage()

    return response
  }
}
