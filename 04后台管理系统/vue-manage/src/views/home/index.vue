<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 10px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userimg" />
          <div class="userinfo">
            <p class="name">孙笑川</p>
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2022-5-27</span></p>
          <p>上次登录地点：<span>武汉</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 10px; height: 350px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <el-col :span="16" style="margin-top: -10px">
      <div class="num">
        <el-card
          v-for="item in countData"
          :key="item.name"
          :body-style="{ display: 'flex', padding: 0 }"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">${{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>

      <el-card style="height: 200px">此处要用echarts数据可视化知识，先不写</el-card>

      <div class="graph">
        <el-card style="height: 225px">此处要用echarts数据可视化知识，先不写</el-card>
        <el-card style="height: 225px">此处要用echarts数据可视化知识，先不写</el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import {getData} from '@/api/data.js' 
export default {
  name: "home",
  data() {
    return {
      userimg: require("@/assets/images/sxc.jpg"),
      tableData:[],
      tableLabel: {
        name: "课程",
        totalBuy: "今日购买",
        monthBuy: "本月购买",
        totalBuy: "总购买",
      },
      countData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "今日收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        {
          name: "本月收藏订单",
          value: 210,
          icon: "star-on",
          color: "#ffb980",
        },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
    };
  },
  mounted() {
    getData().then(res=>{
      const {code,data}=res.data;
      if (code===20000){
        this.tableData=data.tableData
      }
      console.log(res);
    })
  },
};
</script>

<style>
</style>