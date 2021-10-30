import { map } from 'ramda';

export default function params ({ $axios, store, $config }, inject) {

  const services = [
    { name: 'getTraceabilityService', url: $config.apiBaseUrl },
  ];

  const createService = ({ name, url }) => {
    const fetchApi = $axios.create({ baseURL: url });
    inject(name, serviceStamp => serviceStamp({ fetchApi }));
  };

  map(createService, services);
}
