<template>
  <div class="students-index">

    <h1>All Students</h1>

    <div>
      Search By Name: <input type="text" class="form-control" v-model="nameFilter" list="studentNames">
    </div><br>

    <datalist id="studentNames">
      <option v-for="student in students"> {{ student.full_name }}</option>
    </datalist>

    <div>
      <button class="btn btn-success" v-on:click="setSortAttribute('full_name')">Sort by Name 
        <i v-if="sortAttribute == 'full_name' && sortAscending == 1"></i>
        <i v-if="sortAttribute == 'full_name' && sortAscending == -1"></i>
      </button>
    </div><br>


    <div v-for="student in orderBy(filterBy(students, nameFilter, 'full_name'), sortAttribute, sortAscending)" v-bind:key="student.id">
      <h2>{{ student.full_name }}</h2>
      <img v-bind:src="student.photo">
      <p>{{ student.short_bio }}</p>
    </div>

    <router-link v-bind:to="'/students/' + student.id">More Info</router-link><br>
    

  </div>
</template>


<style>
img {
  width: 200px;
}
</style>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      students: [
        {
          id: 1,
          full_name: "Mo Money",
          short_bio: "Hello I'm Mo Money and I'm on a day pass from a mental health facility."
        },
        { id: 2, full_name: "No Money", short_bio: "Hello I'm No Money and I'd like to work at a bank." }
      ],
      nameFilter: "",
      sortAttribute: "full_name",
      sortAscending: 1
    };
  },
  // created: function() {
  //   axios.get("/api/students").then(response => {
  //     this.students = response.data;
  //   });
  // },
  methods: {
    setSortAttribute: function(attribute) {
      if (this.sortAttribute === attribute) {
        this.sortAscending = this.sortAscending * -1;
      } else {
        this.sortAscending = 1;
      }
      this.sortAttribute = attribute;
    }
  }
};
</script> -->
