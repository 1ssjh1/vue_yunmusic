<template>
  <div id="app">
    <router-view />
    <FooterMusic />
  </div>
</template>
<script>
import FooterMusic from "./components/item/FooterMusic.vue";
export default {
  components: {
    FooterMusic,
  },
};
</script>


<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  touch-action: pan-y;
}
.icon {
  width: 0.5rem;
  height: 0.5rem;
}
a {
  color: black;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

* {
  box-sizing: border-box;
}

body {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: 12px -apple-system, sans-serif, "Microsoft Yahei";
  color: #000;
  background-color: rgb(245, 245, 245);
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
  margin: 0;
  padding: 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: #222;
}

body {
  margin: 0;
}

main {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

hr {
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}

pre {
  font-family: monospace, monospace;
  font-size: 1em;
}

a {
  background-color: transparent;
}

abbr[title] {
  border-bottom: none;
  text-decoration: underline;
  text-decoration: underline dotted;
}

strong {
  font-weight: bolder;
}

img {
  border-style: none;
}

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

template {
  display: none;
}

[hidden] {
  display: none;
}

input {
  border: none;
  outline: none;
  background: none;
}

ul,
li {
  padding: 0;
  list-style: none;
}

p {
  margin: 0;
}

img {
  display: block;
  width: 100%;
}
</style>
