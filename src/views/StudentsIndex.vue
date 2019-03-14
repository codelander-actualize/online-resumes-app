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
        <div class="card" style="width: 25rem;">
          <img class="card-img-top" v-bind:src="student.photo_url" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ student.full_name }}</h5>
            <p class="card-text">{{ student.short_bio }}</p>
        </div>
        <div class="card-body">
          <router-link v-bind:to="'/students/' + student.id">More Info</router-link><br>
        </div>
      </div>
    </div>  
    </div>
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
