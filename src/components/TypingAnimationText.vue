<template>
  <div>
    <span :style="{ color: propsColor, fontSize: propsFontSize }" v-for="text in typingTexts" :key="text.id">{{text}}</span>
  </div>
</template>

<script>
  import { EventBus } from './event.bus.js'
	export default {
		name: "typing-animation-text",
    props: {
      "propsText": {
        type: Array,
        default() {return []}
      },
      "propsColor": {
        type: String,
        default() {return "white"}
      },
      "propsFontSize": {
        type: String,
        default() {return "50px"}
      }
    },
    methods: {
      writeAnimation(){
        var wordCount = 0;
        (function write(obj,wordCount) {
          setTimeout(function () {
            obj.appendTypingTexts(obj.$props.propsText[wordCount])
            if(obj.$props.propsText.length-1 > wordCount){
              write(obj,wordCount+1)
            }else{
              setTimeout(obj.deleteAnimation, 3000);
            }
          },100)
        })(this, wordCount)
      },
      deleteAnimation(){
        var wordCount = 0;
        (function deleteWord(obj,wordCount) {
          setTimeout(function () {
            obj.popTypingTexts();
            if(obj.$props.propsText.length-1 > wordCount){
              deleteWord(obj, wordCount+1)
            }else{
              EventBus.$emit('nextAnimation','next')
            }
          },100)
        })(this, wordCount)
      },
      appendTypingTexts(word){
        this.typingTexts.push(word)
      },
      popTypingTexts(word){
        this.typingTexts.pop()
      }
    },
    watch: {
      propsText(){
        this.writeAnimation();
      }
    },
    data(){
      return{
        typingTexts: []
      }
    },
    created(){
      this.writeAnimation();
    }
	}
</script>

<style scoped>
  div{
    display: inline-block;
  }
</style>
