<template>
  <v-container class="pa-16">
    <v-row justify="space-around">
      <v-col>
        <v-card width="30vw" color="cardbg">
          <v-card-title class="title"><span class="pr-4">Contact me by Email</span> <v-icon color="primary">mdi-email</v-icon></v-card-title>
          <div class="pa-8">
            <v-text-field label="Subject" outlined v-model="subject"></v-text-field>
            <v-textarea no-resize rows="15" outlined label="Message body" v-model="body"></v-textarea>
            <v-card-actions>
              <v-btn @click="sendEmail()" outlined color="primary">Send email <v-icon right>mdi-email-fast</v-icon></v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card width="10vw" color="cardbg">
          <v-card-title class="title"><span class="pr-4">Contact info</span> <v-icon color="primary">mdi-email</v-icon></v-card-title>
          <div class="pa-8">
            <v-text-field label="Phone number" color="secondary" prefix="+47" readonly @click="clickPhone()" :value="phone"></v-text-field>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Contact',
    components: {
      
    },
    data: function () {
      return {
        subject: "",
        body: "",
        phone: "98028998"
      }
    },
    methods: {
      sendEmail(){
        var email = "patrickjoh33@hotmail.com";
        var link = `mailto:${email}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
        console.log("link:", link);
        window.location.href = link;
      },
      clickPhone(){
        navigator.clipboard.writeText(this.phone);
        window.location.href = "tel:" + this.phone
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

<style lang="scss">

</style>  