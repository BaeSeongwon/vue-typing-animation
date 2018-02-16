import TypingAnimation from './components/TypingAnimation'
import TypingAnimationCursor from './components/TypingAnimationCursor'
import TypingAnimationText from './components/TypingAnimationText'

const install = function (Vue) {
  Vue.component("typing-animation",TypingAnimation)
  Vue.component("typing-animation-cursor",TypingAnimationCursor)
  Vue.component("typing-animation-text",TypingAnimationText)
};

export default {
  install
}
