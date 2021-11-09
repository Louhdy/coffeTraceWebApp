<template>
  <div class="center">
    <p @click="redirect">
      <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
    </p>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue'

export default {
  name: "Qr",
  components: {
    QrcodeVue,
  },
  layout: 'client',
  data() {
    return {
      value: 'http://localhost:3000/cliente/producto/c3371eaa-bc95-4cd0-b76f-92ad235ea51e',
      size: 300,
    }
  },
  methods: {
    redirect() {
      this.$router.push('/cliente/producto/c3371eaa-bc95-4cd0-b76f-92ad235ea51e');
    }
  }
}
</script>

<style scoped>
.center{
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100%;
}
</style>
