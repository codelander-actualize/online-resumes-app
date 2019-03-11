<template>
  <div class="students-index">
    <h1>All Students</h1>
    <div v-for="student in students">
      <h2>{{ student.full_name }}</h2>
      <img v-bind:src="student.photo">
      <p>{{ student.short_bio }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      students: []
    };
  },
  created: function() {
    // axios.get("/api/students").then(response => {
    //   this.students = response.data;
    // });
  },
  methods: {}
};
</script>


Email
Phone Number
Short Bio
LinkedIn URL
Twitter Handle
Personal Blog/Website URL
Online Resume URL
Github URL
Photo
