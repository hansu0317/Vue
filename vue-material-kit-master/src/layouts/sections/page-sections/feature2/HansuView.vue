<template>
  <div>
    <search-bar @update-value="search" @search="search" />
    <result-area :result="searchResult" />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import ResultArea from './components/ResultArea.vue';
import axios from 'axios';  // axios를 import 합니다.
export default {
  components: {
    SearchBar,
    ResultArea
  },
  data() {
    return {
      searchTerm: '',
      searchResult: '',
    };
  },
  methods: {
    async search(newValue) {
      try {
        console.log(newValue);
        const response = await axios.get(`http://localhost:2000/search?query=${newValue}`);
        this.searchResult = response.data.result;
        console.log(this.searchResult);
      } catch (error) {
        console.error('검색 요청 중 에러 발생:', error);
      }
    },
  },
};
</script>

