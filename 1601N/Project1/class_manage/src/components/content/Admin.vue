<template>
  <div>
    <div v-if="showList">
      <el-table :data="list.slice((this.currentPage-1)*10, this.currentPage*10)" style="width: 100%">
        <!-- <el-table-column
        type="selection"
        width="55">
        </el-table-column> -->
        <el-table-column width="120" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row.id, scope.row)">编辑角色</el-button>
          </template>
        </el-table-column>
        <el-table-column label="id" width="80">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column label="姓名" width="120">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.username }}</span>
          </template>
        </el-table-column>
        <el-table-column label="出生日期" width="180">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>出生日期: {{ scope.row.birthday }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.birthday }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="电话" width="180">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.phone }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="地址" width="180">
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.address }}</el-tag>
            </div>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination @current-change="changePage" layout="prev, pager, next" :total="list.length">
      </el-pagination>
    </div>
    <div v-else>
      <div>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.username" disabled></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="form.phone" disabled></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="form.address" disabled></el-input>
          </el-form-item>
          <el-form-item label="出生日期">
            <el-input v-model="form.birthday" disabled></el-input>
          </el-form-item>
          <el-form-item label="已有权限">
            <el-tag closable v-for="(item, index) in myRoler" :key="index" @close="removeTag(item, index)">{{item.rolername}}</el-tag>
          </el-form-item>
          <el-form-item label="全部权限">
            <span v-for="(item, index) in allRoler" :key="index" @click="addTag(item)">
              <el-tag>{{item.rolername}}</el-tag>
            </span>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      showList: true,
      currentPage: 1,
      form: {},
      userInfo: {},
      roleList: [],
      allRoler: [],
      myRoler: []
    };
  },
  methods: {
    changePage(page) {
      this.currentPage = page;
    },
    handleEdit(id, row) {
      this.form = row;
      axios.get("http://169.254.239.219:9000/rolerList?id=" + id).then(res => {
        console.log("res...", res);
        if (res.data.code == 0) {
          this.allRoler = res.data.allRoler;
          this.myRoler = res.data.myRoler;
          this.showList = false;
        } else {
          this.$alert(res.data.msg);
        }
      });
    },
    addTag(item) {
      // 判断用户是否有当前角色
      let index = this.myRoler.findIndex(value => {
        return value.rid == item.id;
      });
      if (index != -1) {
        this.$alert("你已有当前角色");
        return;
      }

      // 发起请求去数据库中添加角色，成功后更新前端页面
      axios
        .get(
          `http://169.254.239.219:9000/addRoler?uid=${this.form.id}&rid=${
            item.id
          }`
        )
        .then(res => {
          console.log("res...", res);
          if (res.data.code == 0) {
            // this.allRoler = res.data.allRoler;
            // this.myRoler = res.data.myRoler;
            // this.showList = false;
            this.myRoler.push({
              rid: item.id,
              rolername: item.rolername
            });
          } else {
            this.$alert(res.data.msg);
          }
        });
    },
    removeTag(item, index) {
      axios
        .get(
          `http://169.254.239.219:9000/removeRoler?uid=${this.form.id}&rid=${
            item.rid
          }`
        )
        .then(res => {
          console.log("res...", res);
          if (res.data.code == 0) {
            // this.allRoler = res.data.allRoler;
            // this.myRoler = res.data.myRoler;
            // this.showList = false;
            this.myRoler.splice(index, 1);
          } else {
            this.$alert(res.data.msg);
          }
        });

      console.log("item...", item);
    }
  },
  mounted() {
    axios.get("http://169.254.239.219:9000/userList").then(res => {
      console.log("res...", res);
      if (res.data.code == 0) {
        this.list = res.data.data;
      } else {
        this.$alert(res.data.msg);
      }
    });
  }
};
</script>