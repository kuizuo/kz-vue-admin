import { defHttp } from '/@/utils/http/axios';

enum Api {
  EmailConfig = '/tools/email/config',
  Send = '/tools/email/send',
}

export function getEmailConfig() {
  return defHttp.get({
    url: Api.EmailConfig,
  });
}

export function saveEmailConfig(params) {
  return defHttp.post({
    url: Api.EmailConfig,
    params,
  });
}

export function sendEmail(params) {
  return defHttp.post(
    {
      url: Api.Send,
      params,
    },
    { successMsg: '发送成功' },
  );
}
