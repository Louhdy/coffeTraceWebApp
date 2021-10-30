import stampit from 'stampit';
import ServiceStamp from '~/services/service';

export const ReceptionServiceStamp = stampit.methods({
  getAllReceptions() {
    return this.fetchApi.get('getAllReceptions');
  },
  registerReception(reception) {
    return this.fetchApi.post('registerReception', {
      producer: reception.producer,
      seed: reception.seed,
      amountBags: reception.amountBags,
    })
  },
});

const ReceptionServices = stampit.compose(ServiceStamp, ReceptionServiceStamp);
export default ReceptionServices;
