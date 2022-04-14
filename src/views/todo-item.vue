<template>
  <div id="app">
    <vHeader/>
    <h1>Todo</h1>
    <p>This is the home page content</p>
  </div>
</template>

<script>
import vHeader from "../components/Header.vue"

export default {
  name: 'view-todo',
  components: {
    vHeader
  }
}
</script>
