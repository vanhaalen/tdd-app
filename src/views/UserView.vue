<template>
  <div>
    <VUserSearchForm />
    <VUserProfile :user="user" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import VUserSearchForm from "@/components/VUserSearchform";
import VUserProfile from "@/components/VUserProfile";

export default {
  name: "UserView",
  components: {
    VUserProfile,
    VUserSearchForm
  },
  computed: {
    ...mapState({
      user: "user"
    })
  }
};
</script>

<style scoped></style>
