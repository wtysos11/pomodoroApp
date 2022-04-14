/* eslint-disable */
<template>
  <header class="header">
    <h1 class="title">Vue js - Route demo</h1>
    <div id="nav">
      <router-link to="/pomodoro" class="active">番茄钟</router-link> |
      <router-link to="/todo">任务列表</router-link> |
      <router-link to="/statistic">统计信息</router-link> |
      <router-link to="/setting">设置</router-link>
    </div>
    <router-view />
  </header>
</template>

<script>
export default {
  name: "layout-header"
}
</script>

<style>
</style>


