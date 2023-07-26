
<script>

export default {
  data() {
    return {
      mi_i: {}
    }
  },
  methods: {

    async iam () {
      const url = "https://misskey.systems/api/i";
      const params = {
        method : "POST", 
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify({i : "J1whtBfjRS0mvq5jC8razVB7J2JZfq9R"})};

      const response = await fetch(url, params);
      this.mi_i = await response.json();
      console.log(mi_i);
    }
  }
}
</script>

<template>
  <div>
    <div> misskey </div>
    <v-btn @click="iam()">iam</v-btn>
    
    私は{{ mi_i.name }}です。
    <img :src="mi_i.avatarUrl" />
  </div>
</template>