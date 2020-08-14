import { ipcRenderer } from 'electron';
import userInfo from '@/components/userInfo/index';
import message from '@/components/message/index';
import newFriend from '@/components/newFriend/index';
import addFriend from '@/components/addFriend/index';
import moments from '@/components/moments/index';
import addMoments from '@/components/addMoments/index';
import friendInfo from '@/components/friendInfo/index';
import userEdit from '@/components/userEdit/index';
import img1 from '@/assets/skin/1.jpg';
import img2 from '@/assets/skin/2.jpg';
import img3 from '@/assets/skin/3.jpg';
import img4 from '@/assets/skin/4.jpg';
import img5 from '@/assets/skin/5.jpg';
export default {
    data() {
        return {
            tabIndex: 0,
            componentsView:'userInfo',
            bgImage: false,
            imgs:[
                "background-image:url("+img1+");",
                "background-image:url("+img2+");",
                "background-image:url("+img3+");",
                "background-image:url("+img4+");",
                "background-image:url("+img5+");"
            ],
            bgImg:'',
            pageType: 1
        };
    },
    components: {
        userInfo,
        message,
        newFriend,
        addFriend,
        moments,
        addMoments,
        friendInfo,
        userEdit
    },
    mounted () {
        this.changWindowSize()
    },
    methods: {
        //切换页面
        componentsChange(type){
            this.pageType = type
            switch (type) {
                case 1:
                  this.componentsView = 'userInfo'
                  break
                case 2:
                  this.componentsView = 'message'
                  break
                case 3:
                    this.componentsView = 'newFriend'
                    break
                case 4:
                    this.componentsView = 'addFriend'
                    break
                case 5:
                    this.componentsView = 'moments'
                    break
                case 6:
                    this.componentsView = 'addMoments'
                    break
                case 7:
                    this.componentsView = 'friendInfo'
                    break
                case 8:
                    this.componentsView = 'userEdit'
                    break
              }
        },
        //切换tab菜单
        tabChange(index) {
            if(this.tabIndex == index){
                return;
            }
            this.tabIndex = index;
        },
        //更换背景图片
        changeBgImg(item) {
            this.bgImg = item
        },
        //切换窗口大小
        changWindowSize() {
            ipcRenderer.send('changWindowSizeIndex')
        },
        //退出登录
        loginOut() {
            this.$router.push({name:'login'})
        },
        //最小化
        minWindow() {
            ipcRenderer.send('min')
        },
        //关闭
        closeWindow() {
            ipcRenderer.send('close')
        },
        getConfigResult (res) {
            // 接收回调函数返回数据的方法
            console.log(res)
        },
        websocketToLogin () {
            // 【agentData：发送的参数；this.getConfigResult：回调方法】
            this.socketApi.sendSock(getPlaceRevenue, this.getConfigResult)
        }
    }
}