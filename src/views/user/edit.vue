<template>
  <div class="edit-user-container">
    <UserDetail :is-edit="true" />
  </div>
</template>

<script>
import UserDetail from './components/UserDetail'

export default {
  name: 'EditUser',
  components: { UserDetail },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  .edit-user-container {
    padding: 20px;
  }
</style>
