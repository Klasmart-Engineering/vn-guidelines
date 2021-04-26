<template>
    <main class="page-guidelines" v-if="data">
        <div class="container guidelines-container">
            <div class="page">
                <section class="module-heading">
                    <div class="image-wrap">
                        <img v-if="data.introduction.image" :src="data.introduction.image" alt="">
                    </div>
                </section>

                <section class="module-title">
                    <div class="container">
                        <div class="row">
                            <div class="col-12 d-flex align-items-center justify-content-center">
                                <router-link to="/guidelines" class="logo">
                                    <div>
                                        <img src="../assets/img/kl-logo.svg" alt="">
                                        <span class="slogan">Welcome to KidsLoop</span>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 text-center">
                                <div class="lesson-unit">{{ data.unit }}</div>
                                <h1 v-html="data.introduction.name"></h1>
                            </div>
                        </div>
                        <div class="row">
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
            </div>

            <div class="page">
                <section class="module-lesson-guides">
                    <div class="container">
                        <div class="row">
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

                        <div class="row">
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

                <section class="module-lesson-table">
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
                                            <div class="object-title" v-html="item.left_content.title"></div>
                                            <div class="object-time" v-html="item.left_content.text"></div>
                                        </td>
                                        <td valign="top">
                                            <div>
                                                <ul>
                                                    <li v-for="(item, index) in item.right_content.list" :key="index">
                                                        <div v-html="item.text"></div>
                                                        <ul v-if="item.list">
                                                            <li v-for="(object, key) in item.list" :key="key" >
                                                                <div v-html="object.text"></div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
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
    </main>
</template>

<script>
    export default {
        name: 'template-a',
        props: ['data'],
        data() {
            return {
                lessonImage: ''
            }
        },
    }
</script>
