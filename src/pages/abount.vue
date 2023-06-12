
<script>
import TheWelcome from "../components/TheWelcome.vue"

export default {
  components: {
     TheWelcome
  }
}
</script>

<template>
  <div>
    <div> about </div>
    <router-link to="/">home</router-link>
    <router-link to="/develop">develop</router-link>
    <TheWelcome />

  </div>
</template>