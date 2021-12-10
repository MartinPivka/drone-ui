<template>
  <div class="container">
    <Alert>
      No access!
    </Alert>
  </div>
</template>

<script>
import Alert from "@/components/Alert.vue";
export default {
  name: "no-access",
  components: {
    Alert
  }
};
</script>

<style scoped>
div.container {
  align-items: center;
  background: #fbfbfb;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  padding: 30px;
  height: 100%;
  width: 100%;
}

div.container > div {
  min-width: 300px;
}
</style>
