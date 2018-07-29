<template>
  <div class="custom-component"
    :style="{
      'background-color': backgroundColor,
      'border-color': borderColor,
      'border-style': 'solid',
      'border-width': '2px',
      'border-radius': '4px',
      'padding': '15px',
      'width': '300px',
      'margin': '0 auto'
    }"
  >
    <input v-model="name" type="text" placeholder="Name" class="input" @blur="showValue">
  </div>
</template>

<script>
export default {
  name: 'CustomComponent',
  data () {
    return {
      name: '',
      backgroundColor: '#EEE',
      borderColor: '#DDD'
    }
  },
  mounted(){
    let q = this.$router.currentRoute.query
    this.backgroundColor = q.backgroundColor
    this.borderColor = q.borderColor
  },
  methods:{
    showValue () {
      alert(this.name)
    }
  }  
}
</script>

<style>
  .input{
    width: 100%;
    padding: 2px 4px;
  }
</style>
