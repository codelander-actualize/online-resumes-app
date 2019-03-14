<template>
  <div class="students-index">
    <div class="container">

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

        <div class="container m-2">
          <div class="media border p-2">
            <img v-bind:src="student.photo_url" alt="Photo of Student" class="mr-3 mt-3 rounded-circle" style="width:60px;">
            <div class="media-body">
            <div class="text-md-left p-2">{{ student.full_name }}</div>
            <div class="text-md-left">{{ student.short_bio }}</div>    
            </div>
          </div>
        </div>
        </div>
      </div>
  </div>
<!--      <img class="card-img-top" v-bind:src="student.photo_url" alt="Card image cap"> -->
<!--      <div class="card" style="width: 58rem;">
          <div class="card-body">
            <h5 class="card-title">{{ student.full_name }}</h5>
          </div> -->

<!--      <div class="media">
          <img class="img-thumbnail" v-bind:src="student.photo_url" alt="Student image">
          <div class="w-100 shadow p-2 mb-4 bg-white rounded">
            <div class="media-body">
              <h5 class="m-n6 ">{{ student.full_name }} {{ student.short_bio }}</h5>
              <p class="media-text">{{ student.short_bio }}</p>
              <router-link v-bind:to="'/students/' + student.id">{{ student.full_name}}'s Resume</router-link><br>
            </div>
          </div> -->          
</template>


<style>
img {
  width: 75px;
  height: 75px;
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
          short_bio: "Hello I'm Mo Money and I'm on a day pass from a mental health facility.",
          photo_url: "https://i.imgur.com/8hV0g5C.jpg"
        },
        {
          id: 2,
          full_name: "No Money",
          short_bio: "Hello I'm No Money and I'd like to work at a bank.",
          photo_url:
            "https://i.pinimg.com/736x/b0/a1/e0/b0a1e0896805b18dabcb1e0d5a0de39b--cat-in-suit-artist-portfolio.jpg"
        }
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
