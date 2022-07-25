export default {
    namespaced: true,
    actions: {

    },
    mutations: {
        updateIsbtnShow: function(state, value) {
            state.isbtnShow = value
        },
        updatePlayList: function(state, value) {
            state.playList = value
            console.log(state.playList);
        },
        updatePlayListIndex: function(state, value) {
            state.playListIndex = value
        },

        updateDuration: function(state, value) {
            state.duration = value
        },


    },
    state: {
        playList: [{ //播放列表
            al: {
                id: 89039055,
                name: "雨爱抖音版",
                picUrl: "https://p1.music.126.net/2f6UgY8Jc0Dy6jufMdIZeQ==/109951164966568495.jpg",
                pic_str: "109951164966568495"
            },
            id: 1446137141,
            name: "雨爱（抖音版）",
        }],
        playListIndex: 0, //下标为0
        isbtnShow: true, //暂停按钮

        isLogin: false, //判断是否登录
        isFooterMusic: true, //判断底部组件是否需要显示

    },


    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    },
}