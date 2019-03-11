<template>
  <div class="students-index">

    <div>
      Search By Name: <input type="text" class="form-control" v-model="nameFilter" list="studentNames">
    </div><br>

    <datalist id="studentNames">
      <option v-for="student in students"> {{ student.full_name }}</option>
    </datalist>

    <h1>All Students</h1>
    <div v-for="student in orderBy(students, nameFilter, 'first_name', 'last_name', 'full_name')">
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
      students: [],
      nameFilter: ""
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


<!-- Email
Phone Number
Short Bio
LinkedIn URL
Twitter Handle
Personal Blog/Website URL
Online Resume URL
Github URL
Photo
 -->
