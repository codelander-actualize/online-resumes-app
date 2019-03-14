<!-- <template>
  <div class="resume">
    <h1>Contact Info</h1>

    <h2>{{ student.first_name }}</h2>
    <img :src="student.photo_url" :alt="student.first_name">
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
      <p>Institution: {{ education.university_name }}</p> -->
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
      <!-- <img :src="capstone.image_url" :alt="capstone.name"> -->
    </div>

  </div>
</template>



<script>
import axios from "axios";

export default {
  data: function() {
    return {
      student: {
        id: 1,
        first_name: "test",
        last_name: "dummy",
        email: "test@gmail.com",
        phone_number: "123-4567",
        short_bio: "sdfojsfpojpwofj",
        linkedin_url: "linkedin/in/testdummy",
        twitter_handle: "@test_dummy",
        // personal_blog_website_url: "testdummy.com",
        resume_url: "testdummy.com/resume",
        github_url: "github.com/testdummy",
        photo_url: "photo_test",
        experiences: [
          {
            id: 1,
            start_date: "1-1-1",
            end_date: "12-12",
            job_title: "dummy",
            company_name: "test",
            details: "working at test company"
          },
          {
            id: 2,
            start_date: "12-1-1",
            end_date: "1-2-12",
            job_title: "dummy1",
            company_name: "test1",
            details: "working as a dummy at test company"
          }
        ],
        educations: [
          {
            id: 1,
            start_date: "12-1-1",
            end_date: "123-12",
            degree: "BA",
            // university_name: "ABC U",
            details: "Degree in sales"
          },
          {
            id: 2,
            start_date: "112-1-1",
            end_date: "2123-12",
            degree: "BAS",
            // university_name: "ABC JU",
            details: "Degree in nothing"
          }
        ],
        skills: [
          {
            id: 1,
            skill: "ruby"
          },
          {
            id: 2,
            skill: "html"
          }
        ],
        capstones: [
          {
            id: 1,
            name: "cappy",
            description: "a capstone",
            url: "capstone.com"
            // screenshot: "screenshot.com"
          },
          {
            id: 2,
            name: "cap 2",
            description: "cap 2123-12",
            url: "cap.com"
            // screenshot: "screen.com"
          }
        ]
      }
    };
  },
  // created: function() {
  //   axios.get("/api/students/" + this.$route.params.id).then(response => {
  //     console.log(response.data);
  //     this.student = response.data;
  //   });
  // },
  methods: {}
};
</script>

