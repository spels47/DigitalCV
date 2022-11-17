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
            name: "name",
            picture: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
            company: "company",
            jobTitle: "job title",
            phoneNumber: null,
            link: null,
            referenceText: "Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige."
          },
          {
            name: "name",
            picture: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
            company: "company",
            jobTitle: "job title",
            phoneNumber: null,
            link: null,
            referenceText: "Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige.Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige.Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige.Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige.Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige.Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige."
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