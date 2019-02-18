<template>
  <div>
    <VUserSearchForm />
    <VUserProfile :user="user" />
  </div>
</template>

<script>
import VUserSearchForm from "@/components/VUserSearchform";
import VUserProfile from "@/components/VUserProfile";

export default {
  name: "UserView",
  components: {
    VUserProfile,
    VUserSearchForm
  },
  data() {
    return {
      user: { name: "" }
    };
  }
};
</script>

<style scoped></style>
