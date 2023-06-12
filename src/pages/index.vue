<script>
import HelloWorld from '../components/HelloWorld.vue'
import TheWelcome from '../components/TheWelcome.vue'
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
    <div> home </div>
    <router-link to="/about">about</router-link>
    <router-link to="/develop">develop</router-link>
    <header>

    <div class="wrapper">
      <div v-if="isShow">
        <input v-model="hoge" :disabled="isDisabled"/>
      </div>
      <div v-if="isShow">
        {{ hoge }}
      </div>
      <button @click='isShow = !isShow'>表示toggle</button>

      <ul>
        <li v-for="item in arr" :key="item"> {{ item }}</li>
      </ul>

      <ul>
        <li v-for="(item, key) in car" :key="key"> {{ key }} - {{ item }}</li>
      </ul>
      <div v-for="item in arr">
        <HelloWorld :msg="item" />
      </div>
      <div v-for="item in car">
        <HelloWorld :msg="item" />
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
    </div>
  </header> 
  </template>