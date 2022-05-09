import { h } from 'vue';
import { Avatar, Space, Tag } from 'ant-design-vue';
import { BasicColumn } from '/@/components/Table';
import { FormSchema } from '/@/components/Table';
import { formatToDateTime } from '/@/utils/dateUtil';
import { getAllRoleList } from '/@/api/admin/system/role';

export const columns: BasicColumn[] = [
  {
    title: '头像',
    width: 80,
    dataIndex: 'avatar',
    customRender: ({ record }) => {
      return h(Avatar, { size: 60, src: record.avatar }, () => '');
    },
  },
  {
    title: '用户名',
    dataIndex: 'username',
    width: 120,
  },
  {
    title: '昵称',
    dataIndex: 'nickName',
    width: 80,
  },
  {
    title: 'QQ',
    dataIndex: 'qq',
    width: 100,
  },
  {
    title: '邮箱',
    dataIndex: 'email',
    width: 150,
  },
  {
    title: '角色',
    dataIndex: 'roleNames',
    width: 180,
    customRender: ({ record }) => {
      const roleNames = record.roleNames;

      return h(Space, {}, () =>
        roleNames.map((r) => {
          return h(Tag, { color: 'green' }, () => r);
        }),
      );
    },
  },
  {
    title: '状态',
    dataIndex: 'status',
    width: 80,
    customRender: ({ record }) => {
      const status = record.status;
      const enable = ~~status === 1;
      const color = enable ? 'green' : 'red';
      const text = enable ? '启用' : '停用';
      return h(Tag, { color: color }, () => text);
    },
  },
  {
    title: '备注',
    dataIndex: 'remark',
  },
  {
    title: '创建时间',
    dataIndex: 'createdAt',
    width: 150,
    format: (text) => {
      return formatToDateTime(text);
    },
  },
];

export const searchFormSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    colProps: { sm: 12, xl: 6 },
  },
  {
    field: 'nickName',
    label: '昵称',
    component: 'Input',
    colProps: { sm: 12, xl: 6 },
  },
  {
    field: 'email',
    label: '邮箱',
    component: 'Input',
    colProps: { sm: 12, xl: 6 },
  },
  {
    field: 'qq',
    label: 'QQ',
    component: 'Input',
    colProps: { sm: 12, xl: 6 },
  },
  {
    field: 'status',
    label: '状态',
    component: 'Select',
    componentProps: {
      options: [
        { label: '启用', value: 1 },
        { label: '停用', value: 0 },
      ],
    },
    colProps: { sm: 12, xl: 6 },
  },
];

export const formSchema: FormSchema[] = [
  {
    field: 'username',
    label: '用户名',
    component: 'Input',
    rules: [
      {
        required: true,
        message: '请输入用户名',
      },
      // {
      //   validator(_, value) {
      //     return new Promise((resolve, reject) => {
      //       isUserExist(value)
      //         .then(() => resolve())
      //         .catch((err) => {
      //           reject(err.message || '验证失败');
      //         });
      //     });
      //   },
      // },
    ],
  },
  {
    field: 'password',
    label: '密码',
    component: 'InputPassword',
    componentProps: {
      placeholder: '无需修改请留空',
    },
  },
  {
    label: '角色',
    field: 'roles',
    component: 'ApiSelect',
    componentProps: {
      api: getAllRoleList,
      labelField: 'name',
      valueField: 'id',
      mode: 'multiple',
    },
    colProps: { span: 24 },
    rules: [
      {
        validator(_, value) {
          console.log(value);
          if (value === undefined) return Promise.resolve();
          if (value?.length > 0) {
            return Promise.resolve();
          }

          return Promise.reject('请输入角色');
        },
      },
    ],
  },
  {
    field: 'nickName',
    label: '昵称',
    component: 'Input',
  },
  {
    field: 'qq',
    label: 'QQ',
    component: 'Input',
    required: true,
  },
  {
    label: '邮箱',
    field: 'email',
    component: 'Input',
    required: true,
  },
  {
    label: '备注',
    field: 'remark',
    component: 'InputTextArea',
  },
  {
    field: 'status',
    label: '状态',
    component: 'RadioButtonGroup',
    defaultValue: 1,
    componentProps: {
      options: [
        { label: '启用', value: 1 },
        { label: '禁用', value: 0 },
      ],
    },
  },
];
