<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center">
      <v-row justify="center">
        <v-col lg="6">
          <TitleBlack text="プライバジーポリシー"></TitleBlack>
          <p class="content">
            DevFest Women Tokyo では以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、個人情報の保護を推進致します。

            個人情報の管理

            弊社は、会員の個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備・教育の徹底等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。

            個人情報の利用目的

            お預かりした個人情報は、当グループからのご連絡や業務（展示会・セミナーなど）のご案内やご質問に対する回答として、電子メールや資料の送付に利用いたします。

            管理の委託

            弊社は、取得した個人情報の取扱いを委託する場合があります。その場合、その 受託者と必要な契約を締結し、受託者が個人情報を適切に管理するよう監督します。

            個人情報の第三者への開示・提供の禁止

            当グループは、会員よりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。

            (1) 弊社が本サービス等の一部を業務委託し、委託業務の遂行に必要な範囲で 提供する場合
            (2) 統計的情報を提供する目的で、個々の個人情報を集積または分析し、個人を識別できない形式に加工して、その統計データを開示する場合
            (3) 有料サービスを利用している利用者に利用料金を請求する目的で、弊社の 業務委託先である決済システム会社、クレジット会社および銀行に有料サービ スを利用している利用者の個人情報を預託する場合
            (4) 法令により開示又は提供が認められる場合

            個人情報の安全対策

            当グループは、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。

            ご本人の照会

            会員が本人の個人情報の照会・修正・削除などをご希望される場合には、本人であることを確認の上、対応させていただきます。

            法令、規範の遵守と見直し

            当グループは、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。

            連絡先：
            https://goo.gl/forms/wXQF47oORUS9ffsh2

            令和元年8月1日

            Women Techmakers Tokyo スタッフ一同
          </p>
        </v-col>
      </v-row>
    </v-container>>
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
        name: 'プライバシーポリシー'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-container{
    padding: 45px 0px 45px 0px;
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
