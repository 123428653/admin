<template>
  <div>
    <el-row class="container">
      <el-col :span="24" class="header">顶部</el-col>
    </el-row>
    <div class="main">
        <div class="main-left"><div>左侧导航</div></div>
        <div class="main-right"><div>右侧内容</div></div>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name:'Home',
    data() {
      return {}
    },
  };
</script>
<style scoped>

  .header{
    color:#fff;
    font-size:25px;
    text-align:center;
    height:90px;
    line-height:90px;
    background-color:#409EFF
  }
  .main{
    color:#fff;
    position:absolute;
    top:90px;
    right:0;
    bottom:0;
    left:0;
  }
  .main-left{width:180px;height:100%;background-color:#606266;}
  .main-left div,.main-right div{text-align:center;padding-top:100px;}
  .main-right div{height:1500px;}
  .main-right{position:absolute;left:180px;right:0;bottom:0;top:0;background-color:#F56C6C;overflow:auto;}
</style>