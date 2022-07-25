//人员管理相关的配置
// import axios from 'axios'
// import { nanoid } from 'nanoid'
import { getMusicItemList, getItemList } from "@/request/api/item";
export default {
    namespaced: true,
    actions: {
        addOneList: async function(context, value) {
            let res = await getMusicItemList(value)
            context.commit("ADDONELIST", res.playlist)


        },
        addItem: async function(context, value) {

            let data = { id: value, limit: 10, offset: 0 }

            let res = await getItemList(data)
                // context.commit("ADDONELIST", res)
                //     let response = {
                //         name: res.son.al.name,
                //         picUrl: res.al.picUrl,
                //         ar: res.ar,
                //         playCount: res.dt

            // }
            context.commit("ADDITEM", res.songs)
        },

    },
    mutations: {
        ADDONELIST(state, res) {

            state.playlist = {
                    coverImgUrl: res.coverImgUrl,
                    playCount: res.playCount,
                    name: res.name,
                    nickname: res.nickname,
                    backgroundUrl: res.creator.backgroundUrl,
                    description: res.description,
                    commentCount: res.commentCount,
                    shareCount: res.shareCount,
                }
                // state.playlist.coverImgUrl = res.coverImgUrl
                // state.playlist.name = res.name

            // state.playlist.commentCount = res.commentCount

            // state.playlist.playCount = res.playCount

            // state.playlist.description = res.description

            // state.playlist.backgroundUrl = res.creator.backgroundUrl

            // state.playlist.shareCount = res.shareCount
            // state.playlist.nickname = res.nickname



            console.log(res)
                // state.playlist = playlist
        },
        ADDITEM(state, songs) {
            songs.forEach(item => {
                state.subscribedCount = songs[0].sq.br
                state.itemList.push({
                    name: item.al.name,
                    picUrl: item.al.picUrl,
                    ar: item.ar,
                    playCount: item.dt

                })
            });
        },

    },
    state: {
        playlist: {
            coverImgUrl: "https://img2.sycdn.imooc.com/5333a0780001a6e702200220-100-100.jpg",
            playCount: "99999",
            name: "冲出地球",
            nickname: "redrock",
            backgroundUrl: "https://img2.sycdn.imooc.com/5333a0780001a6e702200220-100-100.jpg",
            description: "这个作者很懒 啥都没写",
            commentCount: "123",
            shareCount: "123456789"

        },
        itemList: [],
        subscribedCount: "49137652"

    },
    getters: {
        firstPersonName(state) {
            return state.personList[0].name
        }
    },
}