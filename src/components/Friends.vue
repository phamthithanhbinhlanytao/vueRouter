<template>
  <div>
    <h1>Friends</h1>
    {{$route.params.name}}
  </div>
</template>

<script>
export default {  
  props: [
    'name'
  ]

}
</script>

