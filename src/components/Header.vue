/* eslint-disable */
<template>
  <header class="header">
    <h1 class="title">Vue js - Route demo</h1>
    <div id="nav">
      <router-link to="/" class="active">番茄钟</router-link> |
      <router-link to="/todo">任务列表</router-link> |
      <router-link to="/statistic">统计信息</router-link> |
      <router-link to="/setting">设置</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "layout-header"
}
</script>

<style scoped>
  .title{
    margin-bottom: 20px;
  }
  .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }

  .header a {
    color: #d4d4d4;
    padding-right: 5px;
    text-decoration: none;
    transition: all .3s;
  }

  .header a.active,
  .header a:hover,
  .header a:focus {
    color: #fff;
  }
</style>


