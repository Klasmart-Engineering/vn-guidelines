<template>
    <div>
        <main class="page-guidelines">
            <div class="container guidelines-container">
                <div class="page">
                    <section class="module-heading">
                        <div class="image-wrap">
                            <img v-if="data.lesson_banner" :src="data.lesson_banner" alt="">
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
                                    <div class="lesson-unit">{{ data.unit_name }}</div>
                                    <h1>{{ data.lesson_name }}</h1>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-12">
                                    <ul>
                                        <li v-for="(item, index) in data.children_block" :key="index">
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
                                    <h2 class="title-has-color is-secondary">{{ data.learning_block.learning_title }}</h2>
                                    <h3>{{ data.learning_block.learning_subtitle }}</h3>
                                    <ul class="ul-custom">
                                        <li v-for="(item, index) in data.learning_block.learning_list" :key="index" v-html="item.text">
                                            <ul v-if="item.list">
                                                <li v-for="(object, key) in item.list" :key="key" v-html="object.text"></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-12">
                                    <h2 class="title-has-color">{{ data.materials_block.materials_title }}</h2>
                                    <ul class="ul-custom">
                                        <li v-for="(item, index) in data.materials_block.materials_list" :key="index" v-html="item.text"></li>
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
                                            <td colspan="2">{{ data.lesson_block.lesson_title }}</td>
                                        </tr>
                                        <tr v-for="(item, index) in data.lesson_block.lesson_list" :key="index">
                                            <td valign="top">
                                                <div class="object-title" v-html="item.col_left.title"></div>
                                                <div class="object-time" v-html="item.col_left.text"></div>
                                            </td>
                                            <td valign="top">
                                                <div>
                                                    <ul>
                                                        <li v-for="(item, index) in item.col_right.list" :key="index" v-html="item.text">
                                                            <ul v-if="item.list">
                                                                <li v-for="(item, key) in item.list" :key="key" v-html="item.text"></li>
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
    </div>
</template>

<script>
    export default {
        name: 'gl-template-01',
        props: ['data'],
        data() {
            return {
                lessonImage: ''
            }
        },
    }
</script>
