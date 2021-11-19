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
      value: 'http://localhost:3000/cliente/producto/895588fd-7c2a-41ca-a51b-75fa0c4bd907',
      size: 300,
    }
  },
  methods: {
    redirect() {
      this.$router.push('/cliente/producto/895588fd-7c2a-41ca-a51b-75fa0c4bd907');
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
