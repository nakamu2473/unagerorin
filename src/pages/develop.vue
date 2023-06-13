<script>
export default {
    data() {
        return {
            count: 1,
            isShow: true,
            number: 5,
            arr: [
                1,
                5,
                10,
                12,
                34,],
            tmpMessage: "sample",
            message: "",
            messages : [ "test", "testtest"] ,
        }
    } ,
    methods: {
        increment(){
            this.add(1)
        },
        double(){
            this.count = this.count * 2
        },
        decrement(){
            this.count--
        },
        division(){
            this.count = this.count / 2
        },
        add(num){
            this.count = this.count + num
        },
        sample(hoge){
            console.log(hoge)
        },
        addMessage(){
            this.messages.push(this.tmpMessage)
        },
        delMessage(){
            this.messages.pop()
        },

    }
}

</script>

<template>
    <div> develoooooop </div>
    <div v-if="isShow">
        <h2>七里山超えて</h2>
    </div>
    {{ count }}山超えました

    <button @click="add(1)">+1</button>
    <button @click="add(2)">+2</button>
    <button @click="add(3)">+3</button>

    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
    <button @click="double">*2</button>
    <button @click="division">/2</button>

    <button @mouseover="increment">+1</button>
    <button @click="isShow=false">きえる</button>
    <button @click="sample($event) ">sample</button>

    <div v-for="(item, key) in number" :key="key">
        <button @click="add(item)">{{item}}山超える</button>
    </div>

    <div v-for="(item, key) in arr" :key="key">
        <button @click="add(item)">{{item}}山超える</button>
    </div>
    {{message}} 
    <input v-model="tmpMessage" />
    <button @click="addMessage()">入力</button>
    <button @click="delMessage()">消す</button>
    {{ messages }} 
    <ul>
        <li v-for="(item, key) in messages" :key="key"> {{ item }}</li>
    </ul>
</template>