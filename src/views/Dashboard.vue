<template>
  <div>
    <hello-world />
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
  background-color: var(--v-background-base);
}
</style>
