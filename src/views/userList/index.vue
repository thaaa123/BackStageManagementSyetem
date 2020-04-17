<template>
  <div class="user-list-container">
    <el-form ref="userDetail" :model="form" :rules="rules" :inline="true" label-width="120px">
      <el-form-item>
        <el-button type="primary" @click="onSubmit()">Create</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="list" border fit highlight-current-row :max-height="tableMaxheight">
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">
          {{ scope.$index }}
        </template>
      </el-table-column>
      <el-table-column label="title">
        <template slot-scope="scope">
          {{ scope.row.title }}
        </template>
      </el-table-column>
      <el-table-column label="Author" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.author }}</span>
        </template>
      </el-table-column>
      <el-table-column label="status" width="100" align="center" class-name="status-col">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | stateFilter">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Display_time" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.display_time }}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作" width="100">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagination :current-page="currentPage" :total="total" class-name="pagination" @sizeChange="handleSizeChange" @currentChange="handleCurrentChange" />
  </div>
</template>

<script>
import { getList } from '@/api/table'
import rules from './rules'
import Pagination from '@/components/Pagination'// svg component
import viewport from '@/mixins/viewport'

export default {
  name: 'UserList',
  components: {
    'pagination': Pagination
  },
  filters: {
    stateFilter(state) {
      const stateMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return stateMap[state]
    }
  },
  mixins: [viewport],
  data() {
    return {
      list: [],
      currentPage: 1,
      total: 95,
      form: {},
      rules
    }
  },
  computed: {
    tableMaxheight() {
      return this.clientHeight - 200
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      getList().then(res => {
        if (res.code === 20000) {
          this.list = res.data.items
        }
      })
    },
    handleEdit(index, row) {
      this.$router.push({
        path: '/user/editUser',
        query: { id: row.id }
      })
    },
    handleCurrentChange(page) {
      console.log('handleCurrentChange', page)
    },
    handleSizeChange() {
      console.log('handleSizeChange')
    },
    onSubmit() {
      this.$router.push({ path: '/user/createUser' })
    }
  }
}
</script>

<style lang="scss">
  .user-list-container {
    padding: 20px 20px 0;

    .pagination {
      display: flex;
      flex-direction: row-reverse;
      padding: 15px 10px;
    }
  }
</style>
