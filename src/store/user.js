export default {
    namespaced: true,
    state: {
        personList: {
            name: "小孙砸",
            imageUrl: "https://img01.yzcdn.cn/vant/logo.png",
            sex: "男",
            university: "重庆邮电大学",
            content: "这个人很懒没有简介",
            city: ["重庆市", "重庆市"],
            tag: "没有签儿"
        },
        cityCode: [10000, 10100]
    },
    actions: {
        change_name(context, value) {
            console.log("第一个被调用了");
            context.commit('CHANGE_name', value)

        },
        change_sex(context, value) {
            console.log("第一个被调用了");
            context.commit('CHANGE_sex', value)

        },


        change_city(context, value) {
            console.log("第一个change_city被调用了");
            context.commit('CHANGE_city', value)

        },
        change_uni(context, value) {
            console.log("第一个change_uni被调用了");
            context.commit('CHANGE_uni', value)

        },
        // addPersonServer(context){
        // 	axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        // 		response => {
        // 			context.commit('ADD_PERSON',{id:nanoid(),name:response.data})
        // 		},
        // 		error => {
        // 			alert(error.message)
        // 		}
        // 	)
        // }
    },
    mutations: {
        CHANGE_name(state, value) {
            console.log('mutations中的ADD_PERSON被调用了')
            state.personList.name = value
        },
        CHANGE_sex(state, value) {
            console.log("第二个被调用了");
            state.personList.sex = value

        },
        CHANGE_city(state, value) {
            console.log("第二个CHANGE_city被调用了");
            state.personList.city[0] = value[0][0]
            state.personList.city[1] = value[0][1]

        },
        CHANGE_uni(state, value) {
            console.log("第二个CHANGE_uni被调用了");
            state.personList.university = value;


        },
    },

    getters: {
        get_playLits(state) {
            return state.personList[0]
        }
    },
}