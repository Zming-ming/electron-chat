import { ipcRenderer } from 'electron';
export default {
    data(){
        return{
            version:require('../../../../package.json').version,
            single:false,
        }
    },
    methods:{
        //去注册页面
        toRegister() {
            this.$router.push({
                name:'register'
            })
        },
        //登陆
        handleSubmit() {
            this.$router.push({
                name:'index'
            })
        },
        //关闭
        closeWindow() {
            ipcRenderer.send('close')
        }
    }
}