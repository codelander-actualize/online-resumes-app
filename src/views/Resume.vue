<template>
  <div class="resume">
    <div class="container">

    <router-link v-bind:to="'/'">Back to All Students</router-link><br>   


    <h2>{{ student.first_name + " " + student.last_name }}</h2><br>
    <div class="card mx-auto" style="width: 18rem;">
      <img class="card-img-top" :src="student.photo_url" alt="Card image cap">
      <div class="card-body">
      
        <p class="card-text">First Name: {{ student.first_name }}</p>
        <p class="card-text">Last Name: {{ student.last_name }}</p>
        <p class="card-text">Email: {{ student.email }}</p>
        <p class="card-text">Phone Number: {{ student.phone_number }}</p>
        <p class="card-text">Bio: {{ student.short_bio}}</p>
        <p class="card-text">LinkedIn: {{ student.linkedin_url }}</p>
        <p class="card-text">Twitter: {{ student.twitter_handle }}</p>
        <p class="card-text">Website/Blog: {{ student.personal_blog }}</p>
        <p class="card-text">GitHub: {{ student.github_url }}</p>
      </div>
    </div><br>

    <h4>Experience</h4><br>
      <div v-for="experience in student.experiences" class="card">
        <div class="card-header">
        <p style="text-align:left;"> 
        <span class="font-weight-bold">
        {{ experience.company_name }}</span>
        <span style="float:right;">{{ experience.start_date }} - {{ experience.end_date }}</span></p>
        </div>
        <div class="card-body">
          <p><u>{{ experience.job_title }}</u></p>
          <p>{{ experience.details }}</p>
        </div>
      </div><br>
     
 
    <h4>Education</h4><br>
    <div class="row">
      <div v-for="education in student.educations" class="card" v-bind:class="{'mx-auto': student.educations.length < 3}">
        <div class="card-header">
        <p style="text-align:left;"> 
        <span class="font-weight-bold">
        {{ education.university_name }}</span>
        <span style="float:right;">{{ education.start_date }} - {{ education.end_date }}</span></p>
        </div>
        <div class="card-body">
          <h5>{{ education.degree }}</h5>
          <p>{{ education.details }}</p>
        </div>
      </div><br>
   </div>


    <h4>Skills</h4><br>
    <div v-for="skill in student.skills" class="card mx-auto" style="width: 18rem;">
       <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ skill.skill }}</li>
      </ul>
    </div><br>


    <h4>Capstones</h4><br>
   <div v-for= "capstone in student.capstones" class="card mx-auto" style="width: 18rem;">
     <img class="card-img-top" :src="capstone.image_url" :alt="capstone.name">
     <div class="card-body">
       <h5 class="card-title">{{ capstone.name }}</h5>
       <p class="card-text">{{ capstone.description }}</p>
       <button v-on:click="capstone.url" class="btn-primary">View Project</button>
     </div>
   </div><br>

   <router-link v-bind:to="'/'">Back to All Students</router-link><br> 

    

    </div>
  </div> 
</template>  

<style>
/*.card {
  max-width: 75%;
  text-align: center;
}*/
</style>



<script>
import axios from "axios";

export default {
  data: function() {
    return {
      student: {}
      //   id: 1,
      //   first_name: "test",
      //   last_name: "dummy",
      //   email: "test@gmail.com",
      //   phone_number: "123-4567",
      //   short_bio: "sdfojsfpojpwofj",
      //   linkedin_url: "linkedin/in/testdummy",
      //   twitter_handle: "@test_dummy",
      //   // personal_blog_website_url: "testdummy.com",
      //   resume_url: "testdummy.com/resume",
      //   github_url: "github.com/testdummy",
      //   photo_url:
      //     "https://i.pinimg.com/736x/b0/a1/e0/b0a1e0896805b18dabcb1e0d5a0de39b--cat-in-suit-artist-portfolio.jpg",
      //   experiences: [
      //     {
      //       id: 1,
      //       start_date: "1-1-1",
      //       end_date: "12-12",
      //       job_title: "dummy",
      //       company_name: "test",
      //       details: "working at test company"
      //     },
      //     {
      //       id: 2,
      //       start_date: "12-1-1",
      //       end_date: "1-2-12",
      //       job_title: "dummy1",
      //       company_name: "test1",
      //       details: "working as a dummy at test company"
      //     }
      //   ],
      //   educations: [
      //     {
      //       id: 1,
      //       start_date: "12-1-1",
      //       end_date: "123-12",
      //       degree: "BA",
      //       university_name: "ABC U",
      //       details: "Degree in sales"
      //     },
      //     {
      //       id: 2,
      //       start_date: "112-1-1",
      //       end_date: "2123-12",
      //       degree: "BAS",
      //       university_name: "ABC JU",
      //       details: "Degree in nothing"
      //     }
      //   ],
      //   skills: [
      //     {
      //       id: 1,
      //       name: "ruby"
      //     },
      //     {
      //       id: 2,
      //       name: "html"
      //     }
      //   ],
      //   capstones: [
      //     {
      //       id: 1,
      //       name: "cappy",
      //       description: "a capstone",
      //       url: "google.com",
      //       image_url: "screenshot.com"
      //     },
      //     {
      //       id: 2,
      //       name: "cap 2",
      //       description: "cap 2123-12",
      //       url: "cap.com",
      //       image_url: "screen.com"
      //     }
      //   ]
      // }
    };
  },
  created: function() {
    axios.get("/api/students/" + this.$route.params.id).then(response => {
      console.log(response.data);
      this.student = response.data;
    });
  },
  methods: {}
};
</script>
