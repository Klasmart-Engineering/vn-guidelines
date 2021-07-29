<template>
  <main class="page-guidelines new" v-if="data">
    <div class="guidelines-container">
      <div class="content-wrap" v-for="(data, ckey) in data.content" :key="ckey" :class="data.lang === 'vi' ? 'vi-ver': ''">
        <div class="page" v-if="data.type !== 'others'">
          <section class="module-heading" v-if="banner">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <div class="image-wrap">
                    <img :src="banner" alt="">
                  </div>

                  <div class="div d-flex align-items-center justify-content-center">
                    <router-link to="/new" class="logo">
                      <div>
                        <img src="../assets/img/kl-logo.svg" alt="">
                        <span class="slogan">Welcome to KidsLoop</span>
                      </div>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section class="module-title">
            <div class="container">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="lesson-unit" v-if="data.unit">{{ data.unit }}</div>
                </div>
              </div>
              <div class="row" v-if="data.description">
                <div class="col-12">
                  <ul>
                    <li v-for="(item, index) in data.description" :key="index">
                      <a href="javascript:void(0);">
                        <img v-if="item.icon" :src="item.icon" alt="">
                      </a>
                      <span>{{ item.text }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section class="module-lesson-table" v-if="data.objectives">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <table class="objectives-table" width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                    <tr class="tr-thead">
                      <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                          <td colspan="2" v-if="data.objectives.title" v-html="data.objectives.title"></td>
                        </tr>
                      </table>
                    </tr>

                    <tr>
                      <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr v-for="(item, index) in data.objectives.list" :key="index">
                          <td width="20%" align="left" valign="middle" style="background-color: rgba(0, 136, 204, 0.1);">
                            <b>{{ item.name }}</b>
                          </td>
                          <td width="80%" style="padding: 0;">
                            <table width="100%" border="0" cellpadding="0" cellspacing="0" class="objectives-right">
                              <thead>
                              <tr>
                                <td width="30%" style="padding: 0;"></td>
                                <td width="70%" style="padding: 0;"></td>
                              </tr>
                              </thead>
                              <tbody>
                              <tr v-for="(item1, index1) in item.types" :key="index1">
                                <td style="background-color: #fafafa;"><b>{{ item1.name }}</b></td>
                                <td>
                                  <ul>
                                    <li v-for="(item2, index2) in item1.contents" :key="index2"> {{ item2.text }}</li>
                                  </ul>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </tr>

                    <tr>
                      <table width="100%" border="0" cellpadding="0" cellspacing="0">
                        <tr class="tr-tfoot">
                          <table width="100%" border="0" cellpadding="0" cellspacing="0">
                            <tr>
                              <td colspan="2">&nbsp;</td>
                            </tr>
                          </table>
                        </tr>
                      </table>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <section class="module-title" v-if="data.learning">
            <div class="container">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="lesson-unit blue" v-if="data.unit">{{ data.learning.title }}</div>
                </div>
              </div>
            </div>
          </section>

          <section class="module-lesson-guides" v-if="data.learning">
            <div class="container">
              <div class="row" v-if="data.learning">
                <div class="col-12">
                  <h4>{{ data.learning.subtitle }}</h4>
                  <p><i>{{ data.learning.duration }}</i></p>
                  <p><b>{{ data.learning.aim }}</b></p>
                  <p>{{ data.learning.desc }}</p>
                </div>
              </div>
            </div>
          </section>

          <section class="module-lesson-table" v-if="data.lessons">
            <div class="container">
              <div class="row">
                <div class="col-12">
                  <table class="table-wrap" width="100%" border="0" cellpadding="0" cellspacing="0">
                    <tbody>
                    <tr class="tr-thead triple">
                      <td
                          :width="item.width"
                          v-for="(item, index) in data.lessons.types" :key="index">
                        {{ item.text }}
                      </td>
                    </tr>
                    <tr v-for="(item, index) in data.lessons.list" :key="index">
                      <td
                          :colspan="!item.stage ? '2': '1'"
                          style="background-color: rgba(0, 136, 204, 0.1);"
                          v-if="item.lesson"
                          v-html="item.lesson"></td>
                      <td style="background-color: #fafafa;" v-if="item.stage" v-html="item.stage"></td>
                      <td v-if="item.procedures.list || item.procedures.text">
                        <p v-if="item.procedures.text" v-html="item.procedures.text"></p>
                        <ul v-if="item.procedures.list">
                          <li v-for="(item1, index1) in item.procedures.list" :key="index1" v-html="item1.text"></li>
                        </ul>
                        <p v-if="item.procedures.end" v-html="item.procedures.end"></p>
                      </td>
                    </tr>
                    <tr class="tr-tfoot">
                      <td colspan="3">&nbsp;</td>
                    </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="page others" v-if="data.type === 'others'">
          <div class="container">
            <div class="row" v-for="(item, index) in data.list" :key="index">
              <div class="col-12" v-if="item.img">
                <div class="img-wrap">
                  <img :src="item.img" alt="">
                </div>
              </div>

              <div class="col-12" v-if="item.text" v-html="item.text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'template-b',
  props: ['data'],
  data() {
    return {
      banner: this.data.banner
    }
  }
}
</script>
