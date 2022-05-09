import { defHttp } from '/@/utils/http/axios';
import qs from 'qs';

enum Api {
  LoginLogList = '/sys/log/login/page',
  TaskLogList = '/sys/log/task/page',
}

export function getLoginLogList(params) {
  return defHttp.get<API.TableListResult<API.LoginLogListResult>>({
    url: Api.LoginLogList,
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    },
  });
}

export function getTaskLogList(params) {
  return defHttp.get<API.TableListResult<API.TaskLogListResult>>({
    url: Api.TaskLogList,
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    },
  });
}
