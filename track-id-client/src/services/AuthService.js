import Api from '@/services/Api'

//Authentication service...
export default {
  register ( credentials ) {
    return Api().post('register', credentials)
  }
}
