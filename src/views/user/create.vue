<template>
  <div class="create-user-container">
    <userDetail />
  </div>
</template>

<script>
import UserDetail from './components/UserDetail'

export default {
  name: 'CreateUser',
  components: { UserDetail },
  data() {
    return {
    }
  },
  watch: {
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .create-user-container {
    padding: 20px;
  }
</style>
