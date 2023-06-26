
<script>

export default {
  data() {
    return {
      wanwan: {}
    }
  },
  methods: {
    async dog() {
      const res = await fetch("https://dog.ceo/api/breeds/image/random", (res) => res.data())
      this.wanwan = await res.json()
    }
  }
}
</script>

<template>
  <div>
    <div> about </div>
    <button @click="dog()">dog</button>
    <!-- {{ wanwan.status }}
    {{ wanwan.message }} -->
    <img :src="wanwan.message" />
  </div>
</template>