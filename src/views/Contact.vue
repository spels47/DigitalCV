<template>
  <v-container class="pa-16">
    <v-row justify="space-around">
      <v-col>
        <v-card width="30vw" color="cardbg">
          <v-card-title class="title"><span class="pr-4">{{$t("contact.contactByEmail")}}</span> <v-icon color="primary">mdi-email</v-icon></v-card-title>
          <div class="pa-8">
            <v-text-field :label="$t('contact.subject')" outlined v-model="subject"></v-text-field>
            <v-textarea no-resize rows="15" outlined :label="$t('contact.messageBody')" v-model="body"></v-textarea>
            <v-card-actions>
              <v-btn @click="sendEmail()" outlined color="primary">{{$t("contact.sendEmail")}} <v-icon right>mdi-email-fast</v-icon></v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
      <v-col>
        <v-card width="15vw" color="cardbg">
          <v-card-title class="title"><span class="pr-4">{{$t("contact.contactInfo")}}</span> <v-icon color="primary">mdi-email</v-icon></v-card-title>
          <div class="pa-8">
            <v-text-field class="pointerLink" :label="$t('contact.phoneLabel')" color="secondary" prefix="+47" persistent-hint :hint="copiedPhone ? 'copied to clipboard!' : ''" readonly @click="clickPhone()" :value="phone"></v-text-field>
            <v-text-field class="pointerLink" :label="$t('contact.emailLabel')" color="secondary" prefix="@" persistent-hint :hint="copiedEmail ? 'copied to clipboard!' : ''" readonly @click="clickEmail()" :value="email"></v-text-field>
            <v-btn color="blue ligthen-1" block href="https://www.linkedin.com/in/patrick-88a4a1179" target="_blank">linkedin</v-btn>
            <v-btn class="mt-4" color="purple lighten-1" block href="https://github.com/spels47" target="_blank">github</v-btn>
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
        phone: "98028998",
        email: "patrickjoh33@hotmail.com",
        copiedEmail: false,
        copiedPhone: false,
        copyPhoneTimeout: null,
        copyEmailTimeout: null,
      }
    },
    methods: {
      sendEmail(){
        var link = `mailto:${this.email}`;
        if(this.subject) link += `?subject=${encodeURIComponent(this.subject)}`
        if(this.body){
          if(link.includes('?')) link += '&';
          else link += '?';
          link += `body=${encodeURIComponent(this.body)}`;
        }
        window.location.href = link;
      },
      clickPhone(){
        this.copiedPhone = true;
        clearTimeout(this.copyPhoneTimeout);
        navigator.clipboard.writeText(this.phone);
        this.copyPhoneTimeout = setTimeout(() => {
          this.copiedPhone = false;
        }, 3000);
        window.location.href = "tel:" + this.phone
      },
      clickEmail(){
        this.copiedEmail = true;
        clearTimeout(this.copyEmailTimeout);
        navigator.clipboard.writeText(this.email);
        this.copyEmailTimeout = setTimeout(() => {
          this.copiedEmail = false;
        }, 3000);
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
  .pointerLink{
    cursor: pointer;
  }
</style>  