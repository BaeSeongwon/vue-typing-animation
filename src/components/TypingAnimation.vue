<template>
  <div>
    <typing-animation-text
      :props-text="wordData"
      :props-color="propsColor"
      :props-font-size="propsFontSize"/>
    <typing-animation-cursor
      :props-cursor-color="propsCursorColor"
      :props-cursor-width="propsCursorWidth"
      :props-cursor-height="propsCursorHeight"/>
  </div>
</template>

<script>
  import TypingAnimationCursor from './TypingAnimationCursor'
  import { EventBus } from './event.bus.js'
	export default {
		name: "typing-animation",
    components:{
      "typing-animation-cursor": TypingAnimationCursor
    },
    props: {
		  "typingText": {
		    type: Array,
        default () {return []}
      },
      "propsColor": {
        type: String,
        default() {return "white"}
      },
      "propsFontSize": {
        type: String,
        default() {return "50px"}
      },
      "propsCursorColor": {
		    type: String,
        default() {return "white"}
      },
      "propsCursorWidth": {
		    type: String,
        default() {return "10px"}
      },
      "propsCursorHeight": {
		    type: String,
        default() {return "50px"}
      }
    },
    methods: {
		  initWordData(word){
        this.wordData = [];
        var wordBeforData = [];
        word = word.split("");
        this.wordData = word;
        this.wordCount += 1;
      },
      nextWordData(){
		    var typingTextLength = this.$props.typingText.length;
		    if(typingTextLength == this.wordCount){this.wordCount = 0;}
        this.initWordData(this.$props.typingText[this.wordCount]);
      },
      reciveAnimationText(){
        this.nextWordData()
      }
    },
    data(){
		  return{
		    //typingText 개별 문자를 글자단위로 분활
		    wordData: [],
        wordCount: 0
      }
    },
    created(){
		  // wordData 세팅
      this.initWordData(this.$props.typingText[this.wordCount]);

      // Typing 애니메이션 종료 이벤트 리스너
      EventBus.$on('nextAnimation',this.reciveAnimationText);
    }
	}
</script>

<style scoped>

</style>
