<template>
  <div class="contianer" :class="className">
    <el-pagination :current-page="currentPage" :page-sizes="pageSizes" :page-size="pageSize" :layout="layout" :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </div>
</template>

<script>

export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true,
      default: 0
    },
    total: {
      type: Number,
      required: true,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageSizes: {
      type: Array,
      default: () => [10, 20, 30, 40]
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
  },
  methods: {
    handleSizeChange(pageSize) {
      this.$emit('sizeChange', pageSize)
    },
    handleCurrentChange(currentPage) {
      this.$emit('currentChange', currentPage)
    }
  }
}
</script>

<style scoped>
</style>
