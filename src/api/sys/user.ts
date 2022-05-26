import { defHttp } from '/@/utils/http/axios';
import { LoginParams, LoginResultModel, GetUserInfoModel, RegisterParams } from './model/userModel';

import { ErrorMessageMode } from '/#/axios';

enum Api {
  Login = '/login',
  Register = '/register',
  SendCode = '/sendCode',
  Logout = '/account/logout',
  GetUserInfo = '/account/info',
  GetPermCode = '/account/perm',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginResultModel>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: user register api
 */
export function registerApi(params: RegisterParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post(
    {
      url: Api.Register,
      params,
    },
    {
      successMsg: '注册成功',
      errorMessageMode: mode,
    },
  );
}

/**
 * @description: user sendCode api
 */
export function sendCodeApi(params: { email: string }) {
  return defHttp.post(
    {
      url: Api.SendCode,
      params: params,
    },
    {
      successMsg: '发送成功',
    },
  );
}

/**
 * @description: doLogout
 */
export function doLogout() {
  return defHttp.get({ url: Api.Logout });
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

/**
 * @description: getPermCode
 */
export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}
