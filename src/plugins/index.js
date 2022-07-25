import { Dialog, Field, Swipe, SwipeItem, Card, Button, Overlay, Popup, Tab, Tabs, ActionSheet, Area, Sticky } from 'vant';
// 放入数组中
import Vue from 'vue'
import { Image as VanImage } from 'vant';
let plugins = [
    Dialog, Field, Swipe, SwipeItem, Button, Card, Popup, Tab, Overlay, Tabs, ActionSheet, Area, Sticky
]



Vue.use(VanImage)
plugins.forEach((item) => {
    return Vue.use(item)
})