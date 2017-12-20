<script>
import Vue from 'fis3-vue-vuex:widget/lib/vue/vue.js';
import { mapGetters, mapActions } from 'fis3-vue-vuex:widget/lib/vue/vuex.js';

export default {
    name: 'previewConf',
    data() {
        return {};
    },
    computed: {
        ...mapGetters([
            'basicConf'
        ])
    },
    methods: {
        ...mapActions([
            'addLayoutData'
        ])
    },
    created() {},
    mounted() {},
    watch: {}
}
</script>

<template>
    <div class="component-item">
        <div class="pic-sigle">
            <div class="img" :style="'background-image: url('+basicConf.contents.img+');width:'+basicConf.contents.pc.width+'px;height:'+basicConf.contents.pc.height+'px;border-radius:'+basicConf.contents.radius+'%'"></div>
            <div class="img-des" v-if="basicConf.contents.des">
                {{basicConf.contents.des}}
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
    .component-item {
        margin-top: 30px;
        box-sizing: border-box;
        cursor: pointer;
    }
    .pic-sigle {
        margin: 0 5px 25px;
        text-align: center;
        .img {
            background-size: cover;
            background-position: 50% 50%;
            margin: 0 auto;
            max-width: 100%;
        }
        .img-des {
            min-width: 20%;
            max-width: 80%;
            min-height: 22px;
            display: inline-block;
            padding: 10px;
            margin: 0 auto;
            border-bottom: 1px solid #d9d9d9;
            font-size: 14px;
            color: #969696;
            line-height: 1.7;
        }
    }

</style>