<template>
  <div class="bg">
    <v-container class="section-container d-flex flex-column justify-center align-center">
      <v-row justify="center">
        <v-col lg="6">
          <TitleBlack text="行動規範"></TitleBlack>
          <p class="content">
            Women Techmakers Tokyo(以下、本コミュニティ)、または、本コミュニティが主催するイベントに参加する全てのメンバーは、以下の行動規範に従う義務を負います。
          </p>
          <p class="content">
            本コミュニティは全ての人を歓迎します。
            そのために、いかなる理由があろうとも、他者を差別・蔑視する発言・行動等はそれがどのような形であっても許容されません。
          </p>
          <p class="content">
            全てのメンバーは他のメンバーの様々な背景に配慮し、あなたの何気ない発言や行動で他のメンバーを傷つける可能性があることを忘れないでください。
          </p>
          <p class="content">
            本コミュニティは全てのメンバーの権利を守るため、本規範に反する言動を行った方へは、払い戻しなしでイベントまたはコミュニティからの追放、法的機関への相談などを含む、適切とみなされる措置を講じることができます。
          </p>
          <p class="content">
            もしあなたが迷惑な行為を受けた、または、他のメンバーが迷惑な行為を受けているのことを発見した場合、すぐに近くのスタッフに連絡してください。
            本コミュニティは、必要な対応を速やかに行います。
            また、取得した情報は、法的な情報開示の必要性がある場合を除いて、あなたの同意がないかぎり匿名で扱います。
          </p>
          <p class="content">
            連絡先：
          <a href="https://goo.gl/forms/wXQF47oORUS9ffsh2">https://goo.gl/forms/wXQF47oORUS9ffsh2</a>
          </p>
          <p class="content">
            令和元年8月1日
          </p>
          <p class="content">
            Women Techmakers Tokyo スタッフ一同
          </p>
          <p class="content">
            本文章はWomen Techmakers Community Code of Conduct コミュニティ行動規範 で公開された文書を元にしています
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
        name: '行動規範'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .section-container{
    padding: 45px 0px 45px 0px;
    @media (max-width:960px) {
      padding: 30px 20px 0px 20px;
    }
  }
  .content{
    font-family: HiraginoSans-W3;
    font-size: 16px;
    line-height: 1.56;
    color: #ffffff;
  }
  a{
    color: #7a7a8c;
    text-decoration: none;
  }
</style>
