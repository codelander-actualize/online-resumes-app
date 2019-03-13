<template>
  <div class="students-index">

    <div>
      Search By Name: <input type="text" class="form-control" v-model="nameFilter" list="studentNames">
    </div><br>

    <datalist id="studentNames">
      <option v-for="student in students"> {{ student.full_name }}</option>
    </datalist>


    <h1>All Students</h1>
    <h1>{{ message }}</h1>
    <h2>{{ students }}</h2>
    <div v-for="student in orderBy(students, nameFilter, 'first_name', 'last_name', 'full_name')">
<!--     <div v-for="student in orderBy(filterBy(students, nameFilter, 'first_name', 'last_name', 'full_name'), sortAttribute, sortAscending)"> ###not sure if this helps with filtering -->
      <h2>{{ student.full_name }}</h2>
      <img v-bind:src="student.photo">
      <p>{{ student.short_bio }}</p>
    </div>

    

  </div>
</template>


<style>
</style>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      students: [
        { full_name: "Mo Money", short_bio: "Hello I'm Mo Money and I'm on a day pass from a mental health facility." },
        { full_name: "No Money", short_bio: "Hello I'm No Money and I'd like to work at a bank." }
      ]
    };
    nameFilter: "";
  },
  // created: function() {
  //   axios.get("/api/students").then(response => {
  //     this.students = response.data;
  //   });
  // },
  methods: {}
};
</script> -->

<!-- <script>
import axios from "axios";

export default {
  data: function() {
    return {
      students: [],
      students: [
        { full_name: "Mo Money", short_bio: "Hello I'm Mo Money and I'm on a day pass from a mental health facility." },
        { full_name: "No Money", short_bio: "Hello I'm No Money and I'd like to work at a bank." }
      ]
    };
    nameFilter: ""
  },
  created: function() {
    axios.get("/api/students").then(response => {
      this.students = response.data;
    });
  },
  methods: {}
};
</script> -->



