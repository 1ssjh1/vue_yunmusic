//该文件用于创建Vuex中最为核心的store
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
import logins from './login'
import users from './user'
import songs from './song'
import swipers from "./swiper"
import oneLists from './oneList'
import bottomsongs from "./bottomsong"
//应用Vuex插件
Vue.use(Vuex)

//创建并暴露store
export default new Vuex.Store({
    modules: {
        login: logins,
        user: users,
        song: songs,
        swiper: swipers,
        oneList: oneLists,
        bottomsong: bottomsongs
            // personAbout:personOptions
    }
})