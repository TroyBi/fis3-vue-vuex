<script>
import Vue from 'fis3-vue-vuex:widget/lib/vue/vue.js';
import Vuex from 'fis3-vue-vuex:widget/lib/vue/vuex.js';

import previewConf from './previewConf.vue';
import editConf from './editConf.vue';

export default {
    components: {previewConf, editConf},
    data() {
        return {};
    },
    created () {
    }
}
</script>

<template>
    <div class="message-body-wrapper">
        <preview-conf></preview-conf>
        <edit-conf></edit-conf>
    </div>
</template>

<style lang="less" scoped>
</style>
