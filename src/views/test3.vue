<template>
  <div>
    <h3>test3</h3>
    <button @click="goMain">go main</button>
  </div>
</template>
<script>
export default {
  methods: {
    goMain() {
      this.$router.push('/')
    }
  }
}
</script>