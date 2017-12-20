<script>
import Vue from 'fis3-vue-vuex:widget/lib/vue/vue.js';
import { mapGetters, mapActions } from 'fis3-vue-vuex:widget/lib/vue/vuex.js';

export default {
    name: 'editConf',
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
            'submitBasicConf'
        ]),
        submitData() {
            this.submitBasicConf({
                img: this.basicConf.contents.img,
                des: this.basicConf.contents.des,
            })
        }
    },
    created() {}
}
</script>

<template>
    <div class="pic-editor">
        <div class="change-pic">图片样式修改</div>
        <div>
            <div class="pic-item">
                <fieldset>
                    <legend>图片设置</legend>
                    <label for="img">图片链接：</label>
                    <input class="pic-input" name="img" type="text" :value="basicConf.contents.img" v-model="basicConf.contents.img">
                </fieldset>
                <fieldset>
                    <label for="img">图片描述：</label>
                    <input class="pic-input" name="des" type="text" :value="basicConf.contents.des" v-model="basicConf.contents.des">
                </fieldset>
                <fieldset>
                    <label for="url">跳转链接：</label>
                    <input class="pic-input" name="url" type="text" :value="basicConf.contents.url" v-model="basicConf.contents.url">
                </fieldset>
                <fieldset>
                    <label for="width">PC图片宽度：</label>
                    <input class="pic-input" name="width" type="range" min="100" max="800" step="20" :value="basicConf.contents.pc.width" v-model="basicConf.contents.pc.width">{{basicConf.contents.pc.width}}
                </fieldset>
                <fieldset>
                    <label for="height">PC图片高度：</label>
                    <input class="pic-input" name="height" type="range" min="100" max="800" step="20" :value="basicConf.contents.pc.height" v-model="basicConf.contents.pc.height">{{basicConf.contents.pc.height}}
                </fieldset>
                <fieldset>
                    <label for="width">WAP图片宽度：</label>
                    <input class="pic-input" name="width" type="range" min="100" max="600" step="20" :value="basicConf.contents.wap.width" v-model="basicConf.contents.wap.width">{{basicConf.contents.wap.width}}
                </fieldset>
                <fieldset>
                    <label for="height">WAP图片高度：</label>
                    <input class="pic-input" name="height" type="range" min="100" max="600" step="20" :value="basicConf.contents.wap.height" v-model="basicConf.contents.wap.height">{{basicConf.contents.wap.height}}
                </fieldset>
                <fieldset>
                    <label for="radius">图片圆角：</label>
                    <input class="pic-input" name="radius" type="range" min="0" max="100" step="2" :value="basicConf.contents.radius" v-model="basicConf.contents.radius">{{basicConf.contents.radius}}
                </fieldset>
            </div>
        </div>
        
        <div class="submit-btn" @click="submitData">提交修改</div>
    </div>

</template>

<style scoped lang="less">

    .pic-editor {
        width: 550px;
        margin: 50px auto 20px;
        .change-pic {
            color: #000;
            font-size: 20px;
            text-align: center;
        }
        .pic-item {
            position: relative;
            border: 1px solid #e2e2e2;
            border-radius: 3px;
            padding: 15px 15px;
            margin-top: 15px;
            legend {
                position: absolute;
                top: -12px;
                background-color: #fff;
            }
            .pic-input {
                width: 70%;
                height: 20px;
            }
            .delete-pic-item {
                position: absolute;
                right: 5px;
                top: 0;
                cursor: pointer;
            }
            fieldset {
                border: none;
                padding: 2px 0;
            }
        }
        .submit-btn {
            width: 240px;
            height: 35px;
            line-height: 35px;
            text-align: center;
            color: #fff;
            margin: 0 auto;
            cursor: pointer;
            background-color: #009688;
            border-radius: 2px;
            margin-top: 30px;
        }
    }
</style>