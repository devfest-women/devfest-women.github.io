<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center">
      <v-row justify="center">
        <v-col lg="8">
          <TitleBlack text="台風19号による影響について"></TitleBlack>
          <div class="content">
            台風19号の進路が気がかりですが、10月14日（月・祝）のDevFest Women Tokyo2019は予定どおり開催予定です。
            当日はどうかお気をつけてお出かけください。<br>
            ただし交通機関の大規模な運行停止が続くなど、やむを得ない事情で中止する可能性もあります。<br>
            中止の場合のみ、参加者のみなさまには、当日午前8時までにメール(Peatix登録メールアドレス)にお知らせします。<br>
            どうぞご了承ください。<br>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  import TitleBlack from '~/components/module/TitleBlack.vue'

  export default {
    components: {
      TitleBlack
    },
    data() {
      return {
        name: '台風19号による影響に感して'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-container{
    padding: 45px 0px 45px 0px;
    @media (max-width:960px) {
      padding: 15px 20px;
    }
  }

  .content{
    font-family: HiraginoSans-W3;
    font-size: 16px;
    line-height: 1.56;
    color: #ffffff;
    margin: 0px 0px 30px 0px;
  }
  .hashtag{
    .tag{
      color: #7a7a8c;
      font-family: HiraginoSans-W6;
      margin: 0px 10px 0px 0px;
    }
    .link{
      color: #ff6f61;
      font-weight: 900;
      font-family: Avenir;
    }
  }
</style>

