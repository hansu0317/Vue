<template>
    <div>
      <textarea class="my-textarea" :value="result" readonly></textarea>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      result: String,
    },
  };
  </script>

<style scoped>
.my-textarea {
  max-width: 100%;
  width: 80%;
  height: 80%;
}
</style>