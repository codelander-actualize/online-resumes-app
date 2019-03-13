<template>
  <div class="resume">
    <h1>Contact Info</h1>

    <h2>{{ student.formatted.full_name }}</h2>
    <img :src="student.photo_url" :alt="student.formatted.full_name">
    <p>First Name: {{ student.first_name }}</p>
    <p>Last Name: {{ student.last_name }}</p>
    <p>Email: {{ student.email }}</p>
    <p>Phone Number: {{ student.phone_number }}</p>
    <p>Bio: {{ student.short_bio}}</p>
    <p>LinkedIn: {{ student.linkedin_url }}</p>
    <p>Twitter: {{ student.twitter_handle }}</p>
    <p>Website/Blog: {{ student.personal_blog }}</p>
    <p>GitHub: {{ student.github_url }}</p>



    <h2>Experience</h2>
    <div v-for="experience in student.experiences">
      <p>Start Date: {{ experience.start_date }}</p>
      <p>End Date: {{ experience.end_date }}</p>
      <p>Job Title: {{ experience.job_title }}</p>
      <p>Company: {{ experience.company_name }}</p>
      <p>{{ experience.details }}</p>
    </div>


    <h2>Education</h2>
    <div v-for="education in student.educations">
      <p>Start Date: {{ education.start_date }}</p>
      <p>End Date: {{ education.end_date }}</p>
      <p>Degree: {{ education.degree }}</p>
      <p>Institution: {{ education.university_name }}</p>
      <p>{{ education.details }}</p>
    </div>


    <h2>Skills</h2>
    <div v-for="skill in student.skills">
      <ul>
        <li>{{ skill.name }}</li>
      </ul>
    </div>

    
    <h2>Capstones</h2>
    <div v-for= "capstone in student.capstones">
      <p>Name: {{ capstone.name }}</p>
      <p>{{ capstone.description }}</p>
      <p>Link: {{ capstone.url }}</p>
      <img :src="capstone.screenshot" :alt="capstone.name">
    </div>






 <script>
  import axios from "axios";

  export default {
    data: function() {
      return {
        student: {},
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
      

    
