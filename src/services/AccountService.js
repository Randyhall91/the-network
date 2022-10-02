import { AppState } from '../AppState'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger'
import { Sandboxapi } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await Sandboxapi.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
  async editAccount(formData) {
    const res = await Sandboxapi.put('/account', formData)
    AppState.account = new Account(res.data)
    AppState.activeProfile = new Account(res.data)
    // console.log(res.data);

  }
}

export const accountService = new AccountService()
