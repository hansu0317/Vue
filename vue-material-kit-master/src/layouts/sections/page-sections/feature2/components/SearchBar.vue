<template>
  <div>
    <input v-model="searchTerm" @keyup.enter="search" placeholder="입력하세요" />
    <button @click="handleSearch">검색</button>
  </div>
</template>

<script>
  export default {
  // value prop을 사용하여 searchTerm을 받습니다.
  props: {
    value: String,
  },
  data() {
    return {
      // value prop을 초기화합니다.
      searchTerm: this.value,
    };
  },
  methods: {
    async handleSearch() {
      try {
        this.$emit('update-value', this.searchTerm);
      } catch (error) {
        console.error('검색 요청 중 에러 발생:', error);
      }
    },
  },
};
</script>