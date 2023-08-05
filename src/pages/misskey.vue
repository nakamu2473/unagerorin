
<script>
import * as Misskey from 'misskey-js';
export default {
  data() {
    return {
      mi_i: {},
      timeline: {},
      mi_stream: {},
      postContent:"",
      cli: new Misskey.api.APIClient({
	      origin: 'https://misskey.systems',
	      credential: import.meta.env.VITE_MISSKEY_TOKEN,
      }),
      isShowMe: false,
      fileList: {},
      upFileList: [],
    }
  },
  methods: {
    async iam_misskey () {
      this.mi_i = await this.cli.request('i', { detail: true });
      this.isShowMe = true
      
    },
    async postContentMsg(msg) {
      await this.cli.request('notes/create', { 
        text: msg+"びゅーどーじょーからの投稿！",
        // fileIds: this.upFileList
      });
      this.postContent = ""
    },
    async iam_misskey_stream () {
      const stream = new Misskey.Stream('https://misskey.systems', { token: import.meta.env.VITE_MISSKEY_TOKEN });
      const mainChannel = stream.useChannel('main');
      mainChannel.on('notification', notification => {
	      console.log('notification received', notification);
      });
    },
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

    async getFileList () {
      this.fileList =  await this.cli.request('drive/files', { 
        limit: 10,
      });
    },
    setFile(id) {
      this.upFileList.push(id)
      console.log(this.upFileList)
    },
  }
}
</script>

<template>
  <div>

    <v-sheet width="300" class="mx-auto">
      <v-btn
          @click="iam_misskey()"
          v-bind="props"
          color="#A7EB5E"
          size="x-large"
          text="me"
        ></v-btn>

      <p v-if="isShowMe">私は{{ mi_i.name }}です。
      <img :src="mi_i.avatarUrl" /></p>

      <p>
        <v-form @submit.prevent>
          <v-text-field
            v-model="postContent"
            :rules="rules"
            label="投稿しよう！"
          ></v-text-field>
          <v-btn
            block
            @click="postContentMsg(postContent)"
            type="submit"
            v-bind="props"
            color="#5E6EEB"
            size="x-large"
            text="投稿"
          ></v-btn>
        </v-form>
      </p>

      <!-- <v-btn @click="iam_misskey()">iam</v-btn> -->


      <!-- <v-btn @click="iam_misskey_stream()">iam_misskey_stream</v-btn>
      {{ mi_stream }} -->
      
      <!-- <p><v-btn @click="getTimeline()">reroad</v-btn></p> -->
      <p>
        <v-btn
            @click="getTimeline()"
            v-bind="props"
            color="#EB5EDF"
            size="x-large"
            text="reload"
          ></v-btn>

        <v-list-item v-for="(item, key) in timeline" :key="key">
          <v-avatar style="display: flex;">
            <v-img
              :width="300"
              aspect-ratio="16/9"
              cover
              :src="item.user.avatarUrl"
            ></v-img>
          </v-avatar>
          <v-list-item-subtitle>{{ item.createdAt }}</v-list-item-subtitle> 
          <v-list-subheader>{{ item.user.name }}</v-list-subheader>
          <v-list>{{ item.text }}</v-list>
        </v-list-item>
      </p>

      <p>
        <v-btn
            @click="getFileList()"
            v-bind="props"
            color="#EB5EDF"
            size="x-large"
            text="File取得"
          ></v-btn>

        <v-list-item v-for="(item, key) in fileList" :key="key">
            <v-img
              :width="300"
              aspect-ratio="16/9"
              cover
              :src="item.url"
              @click="setFile(item.id)"
            ></v-img>
        </v-list-item>
      </p>
    </v-sheet>
  </div>
</template>