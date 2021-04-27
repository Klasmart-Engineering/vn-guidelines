<template>
    <main class="page-guidelines" v-if="data">
        <div class="guidelines-container">
            <div class="content-wrap" v-for="(data, ckey) in data.content" :key="ckey" :class="data.lang === 'vi' ? 'vi-ver': ''">
                <div class="page">
                    <section class="module-heading" v-if="banner">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <div class="image-wrap">
                                        <img :src="banner" alt="">
                                    </div>

                                    <div class="div d-flex align-items-center justify-content-center">
                                        <router-link to="/" class="logo">
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
                                    <h1 v-if="data.lesson_name" v-html="data.lesson_name"></h1>
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

                    <section class="module-lesson-guides" v-if="data.learning || data.materials">
                        <div class="container">
                            <div class="row" v-if="data.learning">
                                <div class="col-12">
                                    <h2 class="title-has-color is-secondary">{{ data.learning.title }}</h2>
                                    <h3>{{ data.learning.subtitle }}</h3>
                                    <ul class="ul-custom">
                                        <li v-for="(item, index) in data.learning.list" :key="index">
                                            <div v-html="item.text"></div>
                                            <ul v-if="item.list">
                                                <li v-for="(object, key) in item.list" :key="key" >
                                                    <div v-html="object.text"></div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="row" v-if="data.materials">
                                <div class="col-12">
                                    <h2 class="title-has-color">{{ data.materials.title }}</h2>
                                    <ul class="ul-custom">
                                        <li v-for="(item, index) in data.materials.list" :key="index">
                                            <div v-html="item.text">
                                                <ul v-if="item.list">
                                                    <li v-for="(object, key) in item.list" :key="key" >
                                                        <div v-html="object.text"></div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div class="page">
                    <section class="module-lesson-table" v-if="data.lessons">
                        <div class="container">
                            <div class="row">
                                <div class="col-12">
                                    <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                        <tbody>
                                        <tr class="tr-thead">
                                            <td colspan="2">{{ data.lessons.title }}</td>
                                        </tr>
                                        <tr v-for="(item, index) in data.lessons.list" :key="index">
                                            <td valign="top">
                                                <div v-if="item.left_content">
                                                    <div class="object-title" v-html="item.left_content.title"></div>
                                                    <div class="object-time" v-html="item.left_content.text"></div>
                                                </div>
                                            </td>
                                            <td valign="top">
                                                <div v-if="item.right_content">
                                                    <div v-for="(object1, key1) in item.right_content"
                                                         :key="key1"
                                                         :class="object1.title ? 'title-wrap-on-right' : 'content-wrap-on-right'">
                                                        <div v-if="object1.title">
                                                            <b><u>{{ object1.title}}</u></b>
                                                        </div>

                                                        <div v-if="object1.text || object1.list">
                                                            <div v-html="object1.text"></div>
                                                            <ul>
                                                                <li v-for="(object2, key2) in object1.list" :key="key2">
                                                                    <div v-html="object2.text"></div>
                                                                    <ul v-if="object2.list">
                                                                        <li v-for="(object3, key3) in object2.list" :key="key3">
                                                                            <div v-html="object3.text"></div>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'template-a',
        props: ['data'],
        data() {
            return {
                banner: this.data.banner
            }
        }
    }
</script>
