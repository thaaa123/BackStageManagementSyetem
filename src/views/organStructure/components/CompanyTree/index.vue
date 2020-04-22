<template>
  <div class="company-tree-container">
    <el-input v-model="filterText" placeholder="输入关键字进行过滤" />
    <el-tree ref="tree" class="filter-tree" :data="data" :props="defaultProps" default-expand-all :filter-node-method="filterNode" @node-click="handleCLickNote" />
  </div>
</template>

<script>
import { debounce } from 'lodash'

export default {
  name: 'CompanyTree',
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      filterText: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  mounted() {
    console.log('data', this.data)
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    handleCLickNote: debounce(function(data) {
      this.$emit('clickCompanyNote', data)
    }, 300)
  }
}
</script>

<style lang="scss">
</style>
