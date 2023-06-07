<script>
import HelloWorld from './components/HelloWorld.vue'
export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      hoge:"foooooooo",
      isShow: true,
      count: 0,
   isDisabled: false
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
  <header>

    <div class="wrapper">
      <HelloWorld msg="うなげろりん!!!!" />
      <div v-if="isShow">
        <input v-model="hoge" :disabled="isDisabled"/>
      </div>
        <div :class="hoge" >
          ウヒョおおおおお
        </div>
      <div>
      {{ hoge }}
      {{ count }}
      {{ double }}

      <button @click="incremenet"> +1 </button>
    </div>
  
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="https://podcasts.apple.com/jp/podcast/%E3%83%9E%E3%83%A6%E3%83%AA%E3%82%AB%E3%81%AE%E3%81%86%E3%81%AA%E3%81%92%E3%82%8D%E3%82%8A%E3%82%93/id1575465539?i=1000528457414">#1</RouterLink>
      </nav>
    </div>
  </header>

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
