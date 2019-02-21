<template>
  <div class="user-profile">
    <img src="user.avatar_url" alt="" class="user-profile__avatar" />
    <div class="user-profile__name">{{ user.name }}</div>
    <div class="user-profile__bio">{{ user.bio }}</div>
  </div>
</template>

<script>
export default {
  name: "UserProfile",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped></style>
