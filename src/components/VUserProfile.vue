<template>
  <div>
    UserProfile
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    user: {
      type: Object,
      required: true,
      default: () => ({})
    }
  }
};
</script>

<style scoped></style>
