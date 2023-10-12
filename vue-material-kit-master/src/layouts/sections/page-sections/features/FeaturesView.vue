<template>
  <div>
    <button @click="searchSync">동기 검색</button>
    <button @click="searchAsync">비동기 검색</button>
    <button @click="searchMultithreaded">멀티 스레딩 검색</button>
    <result-area :result="searchResult" />
  </div>
</template>

<script>
import ResultArea from './components/ResultArea.vue';
import axios from 'axios';

export default {
  components: {
    ResultArea
  },
  data() {
    return {
      searchResult: '',
    };
  },
  methods: {
    async searchSync() {
      try { 
        console.log('동기 발생')
        const response = await axios.get('http://localhost:5000/search?type=sync');
        this.searchResult = response.data.result;
        console.log('동기 끝')
      } catch (error) {
        console.error('동기 검색 요청 중 에러 발생:', error);
      }
    },
    async searchAsync() {
      try {
        console.log('비동기발생')
        const response = await axios.get('http://localhost:5000/search?type=async');
        this.searchResult = response.data.result;
        console.log('비동기 끝')
      } catch (error) {
        console.error('비동기 검색 요청 중 에러 발생:', error);
      }
    },
    async searchMultithreaded() {
      try {
        console.log('멀티스레딩')
        const response = await axios.get('http://localhost:5000/search?type=multithread');
        this.searchResult = response.data.result;
        console.log('멀티스레딩 끝')
      } catch (error) {
        console.error('멀티 스레딩 검색 요청 중 에러 발생:', error);
      }
    },
  },
};
</script>