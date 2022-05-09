import { defHttp } from '/@/utils/http/axios';

enum Api {
  List = '/sys/task/page',
  Info = '/sys/task/info',
  Add = '/sys/task/add',
  Update = '/sys/task/update',
  Delete = '/sys/task/delete',
  Once = '/sys/task/once',
  Start = '/sys/task/start',
  Stop = '/sys/task/stop',
}

type CommonParams = {
  id: number;
};

export function getTaskList(params?: API.PageParams) {
  return defHttp.get<API.TableListResult<API.SysTaskListItem[]>>({
    url: Api.List,
    params,
  });
}

export function getTaskInfo(params: CommonParams) {
  return defHttp.get<API.SysTaskInfoResult>({
    url: Api.Info,
    params,
  });
}

export function taskAdd(params?: API.SysTaskAddParams) {
  return defHttp.post(
    {
      url: Api.Add,
      params,
    },
    {
      successMsg: '添加成功',
    },
  );
}

export function taskUpdate(params?: API.SysTaskUpdateParams) {
  return defHttp.post(
    {
      url: Api.Update,
      params,
    },
    {
      successMsg: '修改成功',
    },
  );
}

export function taskDelete(params: CommonParams) {
  return defHttp.post({
    url: Api.Delete,
    params,
  });
}

export function taskOnce(params: CommonParams) {
  return defHttp.post({
    url: Api.Once,
    params,
  });
}

export function taskStart(params: CommonParams) {
  return defHttp.post({
    url: Api.Start,
    params,
  });
}

export function taskStop(params: CommonParams) {
  return defHttp.post({
    url: Api.Stop,
    params,
  });
}
