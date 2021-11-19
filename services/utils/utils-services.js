import stampit from 'stampit';
import ServiceStamp from '~/services/service';

export const UtilsServiceStamp = stampit.methods( {
  getObjectById(uuid) {
    return this.fetchApi.post('getObjectById', { uuid });
  },
  updateObjectById(object) {
    console.log("AUXLIO 2")
    return this.fetchApi.post('updateObjectById', { object });
  },
});

const UtilsServices = stampit.compose(ServiceStamp, UtilsServiceStamp);
export default UtilsServices;
