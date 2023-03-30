<template>
  <div>
    <h1>test 123</h1>
     <v-btn  variant=outlined  @click="showMessageFromBackend">Show message from backend</v-btn>
    <div v-for='msg in response'>{{  msg  }}</div>
  </div>
</template>

<script setup>

  const response = ref([])

//const {data:response } = await useFetch("/api/test");

  async function showMessageFromBackend() {
    // console.log("here")
   // ?response.value = "test";
    
   const {data:reply } =  await useFetch("/api/test")
    // response = r.data;
    response.value = reply.value.msg
    console.log(reply.value)
  }
</script>