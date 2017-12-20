/**
 * @file store
 * @author Troy.Bi
 * http://vuex.vuejs.org/zh-cn/intro.html
 */
import Vue from 'fis3-vue-vuex:widget/lib/vue/vue.js';
import Vuex from 'fis3-vue-vuex:widget/lib/vue/vuex.js';
import apis from '../api/api.es6.js';
import $ from 'fis3-vue-vuex:widget/lib/jquery/jquery.js';

import {
    SUBMIT_BASIC_CONF
} from './mutation-type.es6.js';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        basicConf: {
            "type": "pic",
            "title": "图片",
            "mid": 1513251527229,
            "contents": {
              "img": "http://iknow-base.bj.bcebos.com/pai-pc%2Fwangzherongyao%2Fhudong2.png",
              "des": "法师、坦克、射手、战士、刺客、辅助...哪种类型你更擅长？",
              "pc": {
                "width": 500,
                "height": 500
              },
              "wap": {
                "width": 300,
                "height": 300
              },
              "radius": "50"
            }
        }
    },
    mutations: {
        [SUBMIT_BASIC_CONF](state, data) { // 配置内容信息
            alert('提交成功');
        }
    },
    actions: {
        // 配置内容信息
        submitBasicConf({commit}, param) {
            return apis.submitBasicConf(param).then(json => {
                if(json.errno === 0) {
                    commit(SUBMIT_BASIC_CONF, json.data);
                } else {
                    alert(json.errMsg || '内容配置失败');
                    return;
                }
                return Promise.resolve(json);
            });
        }
    },
    getters: {
        basicConf: (state, getters) => state.basicConf
    }
});

export default store;