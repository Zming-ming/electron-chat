import { ipcRenderer } from 'electron';
export default {
    data() {
        return {
            tabIndex: 0,
            list:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T']
        };
    },
    mounted () {
        this.changWindowSize()
    },
    methods: {
        //切换tab菜单
        tabChange(index) {
            if(this.tabIndex == index){
                return;
            }
            this.tabIndex = index;
        },
        //切换窗口大小
        changWindowSize() {
            ipcRenderer.send('changWindowSize')
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
        }
    }
}