<template>
  <div class="student-show">
    <h1>Student Info</h1>
</div>
</template>   
















<script>
import axios from "axios";

export default {
  data: function() {
    return {
      student: {}
    };
  },
  created: function() {
    axios.get("/api/students/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.product = response.data;
    });
  },
  methods: {}
};
</script>
