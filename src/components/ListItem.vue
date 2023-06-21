<template>
    <li>{{ msg }}  - <button>btn</button></li>
 </template>
  
  
  <script> 
  export default {
    props: {
        msg: {
        type: String,
        default: "Hi"
      }
    }
  }
  
  
  </script>