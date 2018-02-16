<template>
  <div :style="{ width: propsCursorWidth, height: propsCursorHeight, backgroundColor: propsCursorColor }" class="cursor"></div>
</template>

<script>
	export default {
		name: "typing-animation-cursor",
    props: {
		  "propsCursorWidth": {
		    type: String,
        default() {return "10px"}
      },
      "propsCursorHeight": {
		    type: String,
        default() {return "50px"}
      },
      "propsCursorColor": {
		    type: String,
        default() {return "white"}
      }
    }
	}
</script>

<style scoped>
  .cursor{
    display: inline-block;
    -webkit-animation: cursor-flash 0.7s infinite;
    -ms-animation: cursor-flash 0.7s infinite;
    animation: cursor-flash 0.7s infinite;
  }

  @-webkit-keyframes cursor-flash{
    from{
      opacity: 1;
    }
    to{
      opacity: 0;
    }
  }

  @-ms-keyframes cursor-flash {
    from{
      opacity: 1;
    }
    to{
      opacity: 0;
    }
  }

  @keyframes cursor-flash {
    from{
      opacity: 1;
    }
    to{
      opacity: 0;
    }
  }
</style>
