<template>
  <div class="students-index">
    <div class="container">

      <div>
        Search By Name: <input type="text" class="form-control" v-model="nameFilter" list="studentNames">
      </div><br>

      <datalist id="studentNames">
        <option v-for="student in students"> {{ student.full_name }}</option>
      </datalist>


      <h1>All Students</h1>
      <div v-for="student in students">
    <!--     <div v-for="student in orderBy(filterBy(students, nameFilter, 'first_name', 'last_name', 'full_name'), sortAttribute, sortAscending)"> ###not sure if this helps with filtering -->
        <h2>{{ student.full_name }}</h2>
        <img v-bind:src="student.photo">
        <p>{{ student.short_bio }}</p>
      <div class="card" style="width: 70rem;">
        <img class="card-img-top" v-bind:src="student.photo" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <div class="card-body">
          <a href="#" class="card-link">Card link</a>
<!--           <a href="#" class="card-link">Another link</a> -->
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

export default {
  data: function() {
    return {
      message: "Welcome to Vue.js!",
      students: [
        {
          full_name: "Mo Money",
          short_bio: "Hello I'm Mo Money and I'm on a day pass from a mental health facility.",
          photo: "https://www.parentmap.com/images/article/9463/GeekCover.jpg"
        },
        {
          full_name: "No Money",
          short_bio: "Hello I'm No Money and I'd like to work at a bank.",
          photo: "https://images.halloweencostumes.com/products/4096/1-1/child-class-nerd-costume.jpg"
        }
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
