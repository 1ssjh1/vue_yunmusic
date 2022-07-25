//人员管理相关的配置
// import axios from 'axios'
// import { nanoid } from 'nanoid'

import { getMusicList } from "../request/api/home"
export default {
    namespaced: true,


    state: {
        palyList: [

            {}
        ]
    },
    actions: {

        addSongs: async function(context, value) {
            let res = await getMusicList()

            await context.commit('ADDSONGS', res.result)
                //  console.log(res.result);

        }
    },
    mutations: {

        ADDSONGS(state, value) {
            console.log('mutations中的ADDSONGS被调用了')
            value.map((item) => {
                state.palyList.push(item)
            })

        },

    },

    getters: {
        get_palyList(state) {
            return state.palyList
        }
    },
}