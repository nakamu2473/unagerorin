
<script>

export default {
  data() {
    return {
      mi_i: {},
      timeline: {}
    }
  },
  methods: {

    async iam () {
      const url = "https://misskey.systems/api/i";
      const params = {
        method : "POST", 
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify({i : import.meta.env.VITE_MISSKEY_TOKEN})};

      const response = await fetch(url, params);
      this.mi_i = await response.json();
    },

    async getTimeline () {
      const url = "https://misskey.systems/api/notes/local-timeline";
      const params = {
        method : "POST", 
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify(
          {
            withFiles: false,
            limit: 10,
          }
        )};

      const response = await fetch(url, params);
      this.timeline = await response.json();
    },
  }
}
</script>

<template>
  <div>
    <div> misskey </div>
    <v-btn @click="iam()">iam</v-btn>
    
    <p>私は{{ mi_i.name }}です。</p>
    <p><img :src="mi_i.avatarUrl" /></p>
    
    <p><v-btn @click="getTimeline()">Timeline</v-btn></p>
    <!-- <p><pre> {{timeline }} </pre></p> -->

    <div v-for="(item, key) in timeline" :key="key">
      <v-avatar>
        <v-img
          :width="300"
          aspect-ratio="16/9"
          cover
          :src="item.user.avatarUrl"
        ></v-img>
      </v-avatar>
      <v-list>{{ item.createdAt }}</v-list> 
      <v-list>{{ item.user.name }}</v-list>
      <v-list>{{ item.text }}</v-list>

     </div>
  </div>
</template>