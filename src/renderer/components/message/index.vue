<template>
  <div class="message">
    <div class="chat" id="chat_content" @click="showEmoji = false">
      <!-- <Scroll height="280"> -->
        <view class="info">更多消息!</view>
        <template v-for="(item1,index1) in list">
          <div class="item self" :key="index1" v-if="item1.class == 'self'">
            <div class="main">
              <div class="content c_self">
                <span>{{item1.content}}</span>
              </div>
            </div>
            <div class="avatar" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></div>
            <div class="date">{{item1.time}}</div>
          </div>
          <div class="item" :key="index1" v-if="item1.class == ''">
            <div class="avatar" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></div>
            <div class="main">
              <div class="content">
                <span>{{item1.content}}</span>
              </div>
            </div>
            <div class="date">{{item1.time}}</div>
          </div>
        </template>
      <!-- </Scroll> -->
    </div>
    <div class="bottom">
      <div class="menu">
        <Icon type="md-happy" size="20" @click="showEmoji = !showEmoji"/>
        <Icon type="md-image" size="20"/>
        <Icon type="md-folder" size="20"/>
        <Icon type="md-crop" size="20"/>
        <Button type="primary" style="height:20px;float:right;margin-top:5px;margin-right:20px;" @click="sendMsg">发送</Button>
      </div>
      <div class="textarea">
        <textarea v-model="msg"></textarea>
      </div>
    </div>
   
    <div class="emoji-list" v-show="showEmoji">
      <ul class="list-ul">
        <Scroll height="200">
          <li @click="addPhiz" v-for="(item, index) in emojiList" :key="index">{{ item }}</li>
        </Scroll>
      </ul>
      <div class="bottom-bar">
        <div class="select-btn" @click="selectEmojiMenu(1)">😀</div>
        <div class="select-btn" @click="selectEmojiMenu(2)">🐶</div>
        <div class="select-btn" @click="selectEmojiMenu(3)">🍔</div>
        <div class="select-btn" @click="selectEmojiMenu(4)">🏠</div>
        <div class="select-btn" @click="selectEmojiMenu(5)">💋</div>
      </div>
    </div>
    
  </div>
</template>

<script>
import emoji from '@/assets/emoji/emoji.json'
export default {
  data () {
    return {
      showEmoji: false,
      emojiList: [],
      list:[
        {'class':'self','content':'喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！','time':'2018年3月23日 13:23'},
        {'class':'','content':'喵喵喵！喵喵喵！','time':'2018年3月23日 13:23'},
        {'class':'','content':'喵喵喵！喵喵喵！','time':'2018年3月23日 13:23'},
        {'class':'','content':'喵喵喵！喵喵喵！','time':'2018年3月23日 13:23'}
      ],
      msg:''

    }
  },
  components: {},
  methods: {
    selectEmojiMenu (flag) {
      this.emojiList = []
      switch (flag) {
        case 1:
          this.initEmoji('0x1F64F', '0x1F601')
          break
        case 2:
          this.initEmoji('0x1F40C', '0x1F43C', true)
          break
        case 3:
          this.initEmoji('0x1F354', '0x1F372', true)
          break
        case 4:
          this.initEmoji('0x1F3E0', '0x1F3F0', true)
          break
        case 5:
          this.initEmoji('0x1F48B', '0x1F4E6', true)
          break
      }
    },
    /**
     * 表情的unicode
     * https://apps.timwhitlock.info/emoji/tables/unicode#
     * startUnicode 开始的编码
     * endUnicode 结束的编码
     * flag 相反
     */
    initEmoji (startUnicode, endUnicode, flag) {
      let start
      let end
      if (flag) {
        start = startUnicode
        end = endUnicode
      } else {
        start = endUnicode
        end = startUnicode
      }
      for (let i = start; i <= end; i++) {
        let emoji = String.fromCodePoint(i)
        this.emojiList.push(emoji)
      }
    },
    addPhiz (ev) {
      console.log(ev.target.innerText)
      this.msg = this.msg + ev.target.innerText
    },
    sendMsg(){
      this.showEmoji = false
      if(this.msg == ''){
        return
      }
      let data =  {'class':'self','content':this.msg,'time':'2018年3月23日 13:23'}
      this.list.push(data)
      this.msg = ''
      this.scrollBootom()
    },
    scrollBootom(){
      setTimeout(function (){
        var div = document.getElementById("chat_content");
         div.scrollTop = div.scrollHeight;
      }, 200);
    }
  },
  created () {
    this.initEmoji('0x1F64F', '0x1F601')
  }
}
</script>
<style lang="less" scoped>
  .message{
    width: 460px;
    height: 420px;
    .chat{
      width: 460px;
      height: 300px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      overflow:auto;
      .item{
        width: 440px;
        display: flex;
        padding: 15px 15px 35px;
        position: relative;
        .main{
          max-width: 320px;
          margin: 0 20px;
          display: flex;
          align-items: center;
        }
        .content{
          padding: 10px;
          border-radius: 3px;
          display: inline-flex;
          max-width: 100%;
          align-items: center;
          font-size: 15px;
          position: relative;
          min-height: 40px;
          line-height: 20px;
          text-align: left;
          background-color: #ffffff;
          color: #333333;
        }
        .content::before{
          content: "";
          top: 15px;
          transform: rotate(45deg);
          position: absolute;
          z-index: -1;
          display: inline-block;
          overflow: hidden;
          width: 12px;
          height: 12px;
          left: -6px;
          right: initial;
          background-color: inherit;
          filter: blur(3px);
          opacity: 0.3;
        }
        .content::after{
          content: "";
          top: 13px;
          transform: rotate(45deg);
          position: absolute;
          z-index: 100;
          display: inline-block;
          overflow: hidden;
          width: 12px;
          height: 12px;
          left: -6px;
          right: initial;
          background-color: inherit;
        }
        .c_self::after{
          content: "";
          top: 13px;
          transform: rotate(45deg);
          position: absolute;
          z-index: 100;
          display: inline-block;
          overflow: hidden;
          width: 12px;
          height: 12px;
          right: -6px;
          left: initial;
          background-color: inherit;
        }
        .avatar{
          font-variant: small-caps;
          margin: 0;
          padding: 0;
          display: inline-flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          background-color: #ccc;
          color: #ffffff;
          white-space: nowrap;
          position: relative;
          width: 32px;
          height: 32px;
          background-size: cover;
          background-position: center;
          vertical-align: middle;
          font-size: 1.5em;
          border-radius: 3px;
        }
        .date{
          position: absolute;
          font-size: 12px;
          color: #8799a3;
          width: 300px;
          bottom: 10px;
          left: 70px;
        }
      }
      .item.self{
        justify-content: flex-end;
        text-align: right;
      }
    }
    .bottom{
      width: 459px;
      height: 120px;
      border-top: solid 1px #c5c8ce;
      border-left: solid 1px #c5c8ce;
      background-color: rgba(240, 236, 235, 0.8);
      .menu{
        width: 459px;
        height: 30px;
        padding-left: 10px;
        line-height: 30px;
      }
      .textarea{
        width: 459px;
        height: 89px;
        padding: 0 15px;
        textarea{
          display: block;
          width: 429px;
          height: 89px;
          line-height: 20px;
          border: none;
          overflow: auto;
          resize: none;
          background: 0 0;
        }
        textarea:focus {
          outline: 0;
        }
      }
    }
    .emoji-list{
      width: 220px;
      height: 230px;
      background-color: #ffffff;
      border-radius: 4px;
      position: absolute;
      left: 0;
      top: 130px;
      z-index: 100;
      ul li{
        list-style-type:none;
      }
      ul{
        width: 220px;
        height: 200px;
        li{
          float: left;
          padding: 4px;
        }
      }
      .bottom-bar{
        width: 220px;
        height: 30px;
        border-top: solid 1px #c5c8ce;
        .select-btn{
          width: 30px;
          height: 30px;
          float: left;
          line-height: 30px;
          text-align: center;
        }
      }
    }
  }
  ::-webkit-scrollbar {  
    display: none;  
    width: 0 !important;  
    height: 0 !important;  
    -webkit-appearance: none;  
    background: transparent;  
}
  /deep/.ivu-scroll-loader{
    height: 0;
  }
  /deep/.ivu-input{
    background-color: transparent !important;
    border: transparent !important;
  }
  /deep/.ivu-input:focus{
    border: transparent !important;
  }
  /deep/.ivu-input:hover{
    border: transparent !important;
  }
  /deep/input{ 
    outline: none;
  }
</style>