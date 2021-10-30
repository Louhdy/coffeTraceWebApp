// import { injectRoleInRequest, injectTokenInRequest } from '~/helpers/requests';

export default function ({ $axios, store }) {
  // const { token, role } = store.state.auth;

  $axios.setBaseURL(process.env.apiBaseUrl);
  // injectTokenInRequest($axios, token);
  // injectRoleInRequest($axios, role);
}
