<template>
  <v-card height="100%">
    <v-card-title><v-icon color="primary">mdi-account-heart</v-icon><span class="pl-4">References</span></v-card-title>
    <div class="d-flex flex-wrap justify-space-around align-start" style="width: 100%; height: calc(100% - 200px); overflow-y: auto;">
      <v-card v-for="(reference, index) in references" :key="index" class="ma-4 cardMain" width="100%" height="100%" color="cardbg">
        <v-card class="d-flex pa-2" elevation="0" color="cardbg">
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
            name: "name",
            picture: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
            company: "company",
            jobTitle: "job title",
            phoneNumber: "phone number",
            referenceText: "Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige."
          },
          {
            name: "name",
            picture: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
            company: "company",
            jobTitle: "job title",
            phoneNumber: "phone number",
            referenceText: "Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige."
          },
          {
            name: "name",
            picture: "https://cdn.vuetifyjs.com/images/profiles/marcus.jpg",
            company: "company",
            jobTitle: "job title",
            phoneNumber: "phone number",
            referenceText: "Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige.Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige.Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige.Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige.Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige.Prøvet samtykker kan, undertiden pyntet innesto, innfall enkemann nedbrutt. Igjennem bille bakhånden tra foreta kvartalsrenter, oppholdt hyppigst forestillet forlatelse pines rest avser, toner nebb tåle sølen gasje. Gjestebudene herefter behøver tærer riktignok jages utsette, overs egenkjærlig velstående. Nebb prøvet støte forrykke, ovenikjøpet pine gledet romsterer underskrev illebefinnende, nyss rår bestyrelse luftdraget forretningsdyktighet. Kjoletøyer papiret pakkene fryde ivrig, måttet gripe drakt Deres ubesindighet legemlig løgnaktige."
          }
        ]
      }
    },
    methods: {
      
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
  max-width: 600px;
  max-height: 600px;
  overflow-y: hidden;
}

.cardText{
  overflow-y: auto;
  max-height: calc(100% - 124px);
}
</style>  