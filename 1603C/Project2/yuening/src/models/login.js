import { routerRedux } from 'dva/router';
import { stringify } from 'qs';
import { fakeAccountLogin, getFakeCaptcha } from '@/services/api';
import { setAuthority } from '@/utils/authority';
import { getPageQuery, setToken } from '@/utils/utils';
import { reloadAuthorized } from '@/utils/Authorized';
import md5 from 'md5';

export default {
  namespace: 'login',

  state: {
    status: undefined,
    token: ''
  },

  effects: {
    *login({ payload }, { call, put }) {
      console.log('payload...', payload);
      payload.username = payload.userName;
      payload.password = md5(payload.password+'hello world');
      delete payload.userName;
      const response = yield call(fakeAccountLogin, payload);
      console.log('response...', response, payload);
      // 设置token
      setToken(response.data.token);
      // return;
      yield put({
        type: 'changeLoginStatus',
        payload: response,
      });
      // Login successfully
      if (response.code === 1) {
        reloadAuthorized();
        const urlParams = new URL(window.location.href);
        const params = getPageQuery();
        let { redirect } = params;
        if (redirect) {
          const redirectUrlParams = new URL(redirect);
          if (redirectUrlParams.origin === urlParams.origin) {
            redirect = redirect.substr(urlParams.origin.length);
            if (redirect.startsWith('/#')) {
              redirect = redirect.substr(2);
            }
          } else {
            window.location.href = redirect;
            return;
          }
        }
        yield put(routerRedux.replace(redirect || '/'));
      }
    },

    *getCaptcha({ payload }, { call }) {
      yield call(getFakeCaptcha, payload);
    },

    *logout(_, { put }) {
       // 设置token
      setToken('');
      yield put({
        type: 'changeLoginStatus',
        payload: {
          data: {
            auths: ''
          },
          status: false,
        },
      });
      reloadAuthorized();
      yield put(
        routerRedux.push({
          pathname: '/user/login',
          search: stringify({
            redirect: window.location.href,
          }),
        })
      );
    },
  },

  reducers: {
    changeLoginStatus(state, { payload }) {
      setAuthority(payload.data.auths);
      return {
        ...state,
        status: 'ok',
        token: payload.data.token,
        type: payload.type,
      };
    },
  },
};
