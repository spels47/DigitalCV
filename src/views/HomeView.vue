<template>
  <div>
    <hello-world />
    <v-btn><span class="test">test</span></v-btn>
  </div>
  
</template>

<script>
  import HelloWorld from '../components/HelloWorld'

  export default {
    name: 'Home',
    components: {
      HelloWorld,
    },
    methods: {
      
    }
  }
</script>

<style lang="scss">
.test{
  color: var(--v-primary-base);
}
</style>
