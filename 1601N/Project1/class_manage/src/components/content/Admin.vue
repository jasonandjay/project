<template>
    <div>
        <div v-if="showList">
             <el-table
        :data="list.slice((this.currentPage-1)*8, this.currentPage*8)"
        style="width: 100%">
         <el-table-column
        type="selection"
        width="55">
        </el-table-column>
        <el-table-column
        label="id"
        width="180">
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
        </template>
        </el-table-column>
        <el-table-column
        label="姓名"
        width="180">
        <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.username }}</span>
        </template>
        </el-table-column>
        <el-table-column
        label="出生日期"
        width="180">
        <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
            <p>出生日期: {{ scope.row.birthday }}</p>
            <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.birthday }}</el-tag>
            </div>
            </el-popover>
        </template>
        </el-table-column>
         <el-table-column
        label="电话"
        width="180">
        <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.phone }}</el-tag>
            </div>
        </template>
        </el-table-column>
         <el-table-column
        label="地址"
        width="180">
        <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.address }}</el-tag>
            </div>
        </template>
        </el-table-column>
        <el-table-column label="操作">
        <template slot-scope="scope">
            <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑角色</el-button>
        </template>
        </el-table-column>
    </el-table>    
    <el-pagination
    page-size=8
    @current-change="changePage"
    layout="prev, pager, next"
    :total="list.length">
  </el-pagination>
        </div>
       <div v-else>

       </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  data(){
      return {
          list: [],
          showList: true,
          currentPage: 1,
          userInfo: {},
          roleList: []
      }
  },
  methods: {
    changePage(page){
        this.currentPage = page;
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


<style lang="scss" scoped>
</style>
