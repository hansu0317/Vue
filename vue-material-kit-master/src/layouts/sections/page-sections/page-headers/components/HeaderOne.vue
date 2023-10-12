<template>
  <div>
    <h1>Hello World</h1>
    <input type="file" ref="fileInput" @change="uploadFile">
    <button @click="sendData">업로드</button>

    <!-- 결과를 표시할 엘리먼트들 -->
    <div v-if="result.diabetes !== undefined">Diabetes: {{ result.diabetes }}</div>
    <div v-if="result.hypertension !== undefined">Hypertension: {{ result.hypertension }}</div>
    <div v-if="result.status !== undefined">Status: {{ result.status }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      file: null,
      result: {} // 결과를 저장할 객체 추가A
    };
  },
  methods: {
    uploadFile() {
      this.file = this.$refs.fileInput.files[0];
    },
    async sendData() {
      try {
        const formData = new FormData();
        formData.append('file', this.file);
        const response = await axios.post('http://localhost:34463', formData);

        // 결과를 결과 객체에 저장
        this.result = {
          diabetes: response.data.diabetes,
          hypertension: response.data.hypertension,
          status: response.data.status,
          image_path: response.data.image_path
        };
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }
};
</script>
