// 获取轮播请求  
// 轮播  vuex 管理
import { getBanner } from "../request/api/home"
export default {
    namespaced: true,
    state: {
        swiperList: []
    },
    actions: {
        addBander: async function(context, value) {
            let res = await getBanner()
            console.log(res);
            await context.commit('ADDBANdDeER', res.banners)
        }
    },
    mutations: {

        ADDBANdDeER(state, value) {
            console.log('mutations中的ADDBANdDeER被调用了')

            value.map((item) => {
                state.swiperList.push(item.pic)
            })

        }

    },

    getters: {
        get_palyList(state) {
            return state.palyList
        }
    },
}