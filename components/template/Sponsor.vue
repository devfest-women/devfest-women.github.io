<template>
  <div class="bg">
    <v-container class="about-container d-flex flex-column justify-center align-center">
      <v-row justify="center">
        <v-col lg="6">
          <SessionTitle text="スポンサー"></SessionTitle>
          <div class="content">
            DevFest Women Tokyo 2019 をよりよいイベントにするため、スポンサーを募集しています。 ご希望の企業様は、以下よりお申し込みください。ご応募の締め切りは、2019年9月30日です。
          </div>
          <div class="d-flex justify-center">
            <Button text="スポンサー申し込み" link="https://docs.google.com/forms/d/e/1FAIpQLSfwIrV6HXRztZF0L6Z0aBj4zdmV5AWtbyVWg77i0Ho25LANVA/viewform"></Button>
          </div>
        </v-col>
      </v-row>
    </v-container>>
  </div>
</template>

<script>
  import SessionTitle from '~/components/module/SessionTitle.vue'
  import Button from '~/components/module/Button.vue'

  export default {
    components: {
      SessionTitle,
      Button
    },
    data() {
      return {
        name: 'Sponcer'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .about-container{
    padding: 45px 0px 45px 0px;
  }

  .content{
    font-family: HiraginoSans-W3;
    font-size: 16px;
    line-height: 1.56;
    color: #ffffff;
    margin: 0px 0px 30px 0px;
  }
</style>

