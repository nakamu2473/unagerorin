<script>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
export default {
  components: {
    HelloWorld,
    TheWelcome
  },
  data() {
    return {
      hoge:"foooooooo",
      isShow: true,
      count: 0,
      isDisabled: false,
      arr:[1,3,5,7],
      car: {
        name :"kuruma",
        speede: "hayai",
        price: "takai"
      }
    }
  },
  methods: {
   incremenet() {
      this.count++
   }
  },
  conputed: {
    double() {
      return this.count * 2
    }
  }
}
</script>

<template>
  <HelloWorld msg="うなげろりん!!!!" />
  AppVueeeeeeeeeeee
  <RouterView />
</template>

<style scoped>
.uhyooooo {
  background-color: red;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
