<template>
  <v-container class="pa-16">
    <v-row justify="space-around">
      <v-card width="30vw" color="cardbg">
        <v-card-title class="title"><v-icon color="primary">mdi-email</v-icon> <span class="pl-4">Contact Patrick</span></v-card-title>
        <div class="pa-8">
          <v-text-field label="Subject" outlined v-model="subject"></v-text-field>
          <v-textarea no-resize rows="15" outlined label="Message body" v-model="body"></v-textarea>
          <v-card-actions>
            <v-btn @click="sendEmail()" outlined color="primary">Send email <v-icon right>mdi-email-fast</v-icon></v-btn>
          </v-card-actions>
        </div>
        
      </v-card>
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
        body: ""
      }
    },
    methods: {
      sendEmail(){
        var email = "patrickjoh33@hotmail.com";
        var link = `mailto:${email}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
        console.log("link:", link);
        window.location.href = link;
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