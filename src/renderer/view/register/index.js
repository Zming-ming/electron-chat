import { ipcRenderer } from 'electron';
export default {
    data(){
        return{
            version:"1.0.0",
            single:false,
            count: '验证码',
            timer: null,
        }
    },
    methods:{
        //获取验证码
        getCode(){
            const TIME_COUNT = 60;
            if (!this.timer) {
            this.count = TIME_COUNT;
            this.show = false;
            this.timer = setInterval(() => {
                if (this.count > 0 && this.count <= TIME_COUNT) {
                        this.count--;
                    } else {
                        this.count = '验证码';
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }, 1000)
            }
        },
        //去登陆页面
        toLogin() {
            this.$router.push({
                name:'login'
            })
        },
        //注册
        handleSubmit() {
            this.$Notice.success({
                title: '注册成功！',
                desc: ''
            });
        },
        //关闭
        closeWindow() {
            ipcRenderer.send('close')
        }
    }
}