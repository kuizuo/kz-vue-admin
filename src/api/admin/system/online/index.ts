import { defHttp } from '/@/utils/http/axios';

enum Api {
  List = '/sys/online/list',
  Kick = '/sys/online/kick',
}

export function getOnlineList() {
  return defHttp.get<API.TableListResult<API.OnlineUserListResult>>({
    url: Api.List,
  });
}

export function kickUser(data: { id: number }) {
  return defHttp.post(
    {
      url: Api.Kick,
      data,
    },
    {
      successMsg: '下线成功',
    },
  );
}
