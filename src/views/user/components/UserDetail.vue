<template>
  <div class="user-detail-container">
    <el-form ref="userDetail" :model="form" :rules="rules" label-width="120px">
      <el-form-item label="Activity name" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select v-model="form.region" placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
      <el-form-item label="Activity time" required>
        <el-col :span="11">
          <el-form-item prop="date">
            <el-date-picker v-model="form.date" type="date" placeholder="Pick a date" style="width: 100%;" />
          </el-form-item>
        </el-col>
        <el-col :span="2" class="line">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker v-model="form.date2" type="fixed-time" placeholder="Pick a time" style="width: 100%;" />
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>
      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="Online activities" name="type" />
          <el-checkbox label="Promotion activities" name="type" />
          <el-checkbox label="Offline activities" name="type" />
          <el-checkbox label="Simple brand exposure" name="type" />
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio label="Sponsor" />
          <el-radio label="Venue" />
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Activity form">
        <el-input v-model="form.desc" type="textarea" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('userDetail')">Create</el-button>
        <el-button @click="onCancel">Cancel</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import rules from './rules'
import { getList } from '@/api/table'

export default {
  name: 'UserDetail',
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      form: {
        name: '',
        region: '',
        date: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: rules
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      const { id } = this.$route.query
      if (id && this.isEdit) {
        this.featData(id)
      }
    },
    featData(id) {
      getList().then(res => {
        if (res.code === 20000) {
          const user = res.data.items.find(item => item.id === id)
          this._setFormData(user)
        }
      })
    },
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: 'submit!'
          })
          this.$router.push({ path: '/user/userList' })
          this.$refs[formName].resetFields()
        }
      })
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    _setFormData(user) {
      this.form.name = user.author
    }
  }
}
</script>

<style lang="scss">
  .user-detail-container {
    .line {
      text-align: center;
    }
  }
</style>
