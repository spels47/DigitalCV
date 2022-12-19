<template>
  <v-card height="100%">
    <v-card-title><v-icon color="primary">mdi-account-heart</v-icon><span class="pl-4">{{$t("references.title")}}</span></v-card-title>
    <div class="d-flex flex-wrap justify-start align-start flexContainer">
      <v-card v-for="(reference, index) in references" :key="index" class="ma-4 cardMain" color="cardbg">
        <v-card :class="`d-flex pa-2 ${reference.link ? 'pointerLink' : ''}`" elevation="0" color="cardbg" @click="openReferenceLink(reference.link)">
          <v-avatar class="profile" color="grey" size="100">
            <v-img :src="reference.picture"></v-img>
          </v-avatar>
          <div>
            <v-card-title class="text-h6">
              {{reference.name}}
            </v-card-title>
            <v-card-subtitle class="grey--text text--lighten-1 pb-0">{{reference.jobTitle}}, {{reference.company}}</v-card-subtitle>
            <v-card-subtitle class="grey--text pt-0">{{reference.phoneNumber}}</v-card-subtitle>
          </div>
        </v-card>
        <v-card-text class="cardText">
          {{reference.referenceText}}
        </v-card-text>
      </v-card>
    </div>
  </v-card>
</template>

<script>
  export default {
    name: 'References',
    components: {
      
    },
    data: function () {
      return {
        references: [
          {
            name: "Håvard Rykkelid",
            picture: require("@/assets/references/håvard.jpg"),
            company: "ABAX",
            jobTitle: "Engineering Team Lead",
            phoneNumber: null,
            link: "https://www.linkedin.com/in/rykkelid/",
            referenceText: "Patrick is a dedicated and engaged developer. He has had the opportunity to work with many advanced technologies and is up to date on the .net platform, but is also familiar with older technology on the .net platform. Despite his knowledge of current technologies - he has also worked on legacy systems and respects existing code-bases. Patrick is interested in technology and likes a good discussion, but from a practical perspective where he is most interested in actually producing high-quality working software. Patrick is experienced with Kanban, Scrum, relational databases and document databases, RESTful APIs, MQ, CI/CD, source control, web development (HTML, javascript, CSS, angularjs, vue, etc), micro services and docker. He is young at heart and would fit particularly well in a young environment. Patrick is good at identifying challenges that may arise in development projects."
          },
          {
            name: "Terje Kolderup",
            picture: require("@/assets/references/Terje.jpg"),
            company: "Get Academy",
            jobTitle: "Gründer og fagansvarlig IT-utvikling",
            phoneNumber: null,
            link: "https://www.linkedin.com/in/kolderup/",
            referenceText: "Jeg hadde gleden av å være Patrick sin lærer da han gikk på GET Academy. Patrick var en svært engasjert elev som fikk stor tenning på programmering. Han er flink til å utforske på egenhånd - men også til spørre og hente inn feedback. Han jobber mye og med høy energi. Patrick er en som absolutt tenker selv, men som samtidig  også nysgjerrig på og åpen for andres perspektiver."
          },
          {
            name: "André Andersen Trommestad",
            picture: require("@/assets/references/AndreTrommestad.jpg"),
            company: "ABAX",
            jobTitle: "Engineering Manager & Data Protection Officer",
            phoneNumber: null,
            link: "https://www.linkedin.com/in/andr%C3%A9-andersen-trommestad-bba0346/",
            referenceText: "Patrick Johnsen worked as a Software Engineer at ABAX between July 1st, 2020 and March 31st, 2023 after completion of his internship (September 19th, 2019 – March 17th, 2020) Patrick maintained the software part of our products, created new value across the whole value chain, achieved product stability and shared technical knowledge within the department. Patrick was part of one of the biggest software projects in ABAX, implementing micro frontend for our main product. Patrick is an outgoing and positive person who works very well in a team. Patrick is an enthusiastic person that with his presence creates a good working environment, he is self-sufficient and solves tasks in a well-structured way with others, but also alone. Knowledge sharing through good documentation or through knowledge sessions is something the team appreciated. Patrick is a person who takes responsibility and ownership to projects/deliveries and will always strive to deliver good quality."
          }
        ]
      }
    },
    methods: {
      openReferenceLink(link){
        if(link) window.open(link, "_blank");
      }
    },
    computed: {
      
    },
    mounted() {
      
    },
    watch: {
      
    },
  }
</script>

<style lang="scss" scoped>
.referenceColumn{
  width: 20vw;
}

.cardMain{
  max-width: 30vw;
  max-height: 600px;
  height: 600px;
  min-width: 500px;
  overflow-y: hidden;
}

.cardText{
  overflow-y: auto;
  max-height: calc(100% - 124px);
}

.flexContainer{
  width: 100%; 
  height: calc(100% - 200px); 
  overflow-y: auto;
}

.pointerLink{
  cursor: pointer;
}

@media only screen and (max-width: 1220px) {
  .flexContainer{
    height: initial;
    max-width: 100%;
  }
  .cardMain{
    min-width: 300px;
    max-height: initial;
    height: auto;
    min-height: 600px;
  }
  .cardText{
    max-height: initial;
  }
}
</style>  