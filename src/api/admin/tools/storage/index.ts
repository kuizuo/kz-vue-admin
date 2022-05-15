import { defHttp } from '/@/utils/http/axios';
import qs from 'qs';

enum Api {
  List = '/tools/storage/list',
  Delete = '/tools/storage/delete',
}

export function getStorageList(params?: API.PageParams) {
  return defHttp.get<API.TableListResult<API.StorageListPageResult>>({
    url: Api.List,
    params,
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'repeat' });
    },
  });
}

export function deleteStorage(params: { ids: number[] }) {
  return defHttp.post(
    {
      url: Api.Delete,
      params,
    },
    { successMsg: '删除成功' },
  );
}
