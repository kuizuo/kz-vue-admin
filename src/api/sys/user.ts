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

export const loginApi = (params: LoginParams, mode: ErrorMessageMode = 'modal') =>
  defHttp.post<LoginResultModel>({ url: Api.Login, params }, { errorMessageMode: mode });

export const registerApi = (params: RegisterParams, mode: ErrorMessageMode = 'modal') =>
  defHttp.post({ url: Api.Register, params }, { successMsg: '注册成功', errorMessageMode: mode });

export const sendCodeApi = (params: { email: string }) =>
  defHttp.post({ url: Api.SendCode, params: params }, { successMsg: '发送成功' });

export const doLogout = () => defHttp.get({ url: Api.Logout });

export const getUserInfo = () =>
  defHttp.get<GetUserInfoModel>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });

export const getPermCode = () => defHttp.get<string[]>({ url: Api.GetPermCode });
