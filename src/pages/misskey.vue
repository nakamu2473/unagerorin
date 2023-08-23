
<script>
import * as Misskey from 'misskey-js';
export default {
  data() {
    return {
      mi_i: {},
      timeline: {},
      mi_stream: {},
      postContent:"",
      cre: import.meta.env.VITE_MISSKEY_TOKEN,
      cli: new Misskey.api.APIClient({
	      origin: 'https://misskey.systems',
	      credential: import.meta.env.VITE_MISSKEY_TOKEN,
      }),
      isShowMe: false,
      fileList: {},
      upFileList: [],
      upFile: {},
      dojoMessage: "びゅーどーじょーからの投稿！",
    }
  },
  methods: {
    async iam_misskey () {
      this.mi_i = await this.cli.request('i', { detail: true });
      this.isShowMe = true
      
    },
    async postContentMsg(msg) {
      await this.cli.request('notes/create', { 
        text: msg+this.dojoMessage,
        fileIds: this.upFileList
      });
      this.postContent = ""
    },
    // async iam_misskey_stream () {
    //   const stream = new Misskey.Stream('https://misskey.systems', { token: import.meta.env.VITE_MISSKEY_TOKEN });
    //   const mainChannel = stream.useChannel('main');
    //   mainChannel.on('notification', notification => {
	  //     console.log('notification received', notification);
    //   });
    // },
    async iam () {
      const url = "https://misskey.systems/api/i";
      const params = {
        method : "POST", 
        headers: {'Content-Type': 'application/json'},
        body : JSON.stringify({i : this.cre})};

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
      this.upFileList.push(id);
    },
    async uploadImage() {
      const params = new FormData();
      params.append("file", this.$refs.image.files[0]);
      params.append("i", this.cre);
      params.append("force", this.$refs.image.files[0]);
      params.append("name", this.$refs.image.files[0].name);
      const response = await fetch(`${this.cli.origin}/api/drive/files/create`, {
        method: 'POST',
        body: params,
        credentials: 'omit',
        cache: 'no-cache',
      })
      this.upFile = await response.json();
      this.setFile(this.upFile.id);
    },
  }
}
</script>

<template>
  <div>
    <div>
    <!-- ファイルアップロード用の input -->
    <input
      type="file"
      ref="image"
      accept="image/*"
      name="image"
      @change="uploadImage()"
    />
  </div>
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