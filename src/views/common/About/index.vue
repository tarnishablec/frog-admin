<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="$router.push('a/b')">Test</el-button>
    <router-view/>
  </div>
</template>
