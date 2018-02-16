Vue 타이핑 애니메이션
===================

#### 소개
<a href="https://imgflip.com/gif/24od9s"><img src="https://i.imgflip.com/24od9s.gif" title="made at imgflip.com"/></a>

 Vue 타이핑 애니메이션은 입력한 문자열을 타이핑 치는 듯한 효과를 나타낸 애니메이션입니다. Vue.js 프레임워크에서 동작하는 라이브러리입니다. 아직 실력이 많이 부족하여 제대로 동작이 안될수 있습니다. 작동이 잘 안된다면 email로 문의해주시면 수정하도록 하겠습니다.

Vue Typing Animation is an animation that shows the typing effect of the input string. It is a library that works in the Vue.js framework. There is not enough skill yet and it may not work properly. If it does not work, please contact us by email.

> seongwon9179@gmail.com

#### Use
사용법은 매우 간단합니다. 컴포넌트를 import 한후 typing-animation 태그를 선언하면 됩니다.
~~~
  <typing-animation/>
~~~

#### Option 
애니메이션의 옵션을 지정할 수 있습니다.
~~~
:typingText="Array" //애니메이션에 나타낼 문자열들의 배열입니다. 필수!!
:props-color="String" //애니메이션 글자의 색깔을 결정합니다. 지정하지 않으면 흰색입니다.
:props-font-size="String" //애니메이션 글자의 크기를 결정합니다. 지정하지 않으면 50px입니다.
:props-cursor-color="String" //애니메이션의 커서 색깔을 결정합니다. 지정하지 않으면 흰색입니다.
:props-cursor-width="String" //애니메이션의 커서 가로 길이를 결정합니다. 지정하지 않으면 10px입니다.
:props-cursor-height="String" //애니메이션의 커서 세로 길이를 결졍합니다. 지정하지 않으면 50px입니다. 
~~~
