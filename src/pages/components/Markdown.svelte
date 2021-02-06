<script>
import { onMount } from 'svelte';

export let type = 'auto'
export let text = '';
export let isUnderline = false;

let markdownType = 'text';

const isNumber = str => {
  const c = str.charCodeAt(0);
  if (c >= 48 && c <= 57) return true;

  return false;
}

const setMarkdownType = () => {
  const firstChr = text.split(' ')[0];

  if (firstChr[0] == '#') {
    // Title
    markdownType = 'h' + firstChr.length;

  } else if (firstChr == '-') {
    // List
    markdownType = 'li';

  } else if (isNumber(firstChr)) {
    // Number list
    markdownType = 'ul';
  }

  console.log(firstChr, markdownType);
}

onMount(() => {
  if (type == 'auto') setMarkdownType();
});
</script>

<style>
div, .text {
  margin: 0 20px;

  font-size: 16px;
  word-wrap: break-word;
}

.underline {
  text-decoration: line-through;
}

.h1 {
  font-size: 30px;
  font-weight: bold;
}

.h2 {
  font-size: 28px;
  font-weight: bold;
}

.h3 {
  font-size: 26px;
  font-weight: bold;
}

.h4 {
  font-size: 24px;
  font-weight: bold;
}

.h5 {
  font-size: 22px;
  font-weight: bold;
}

.h6 {
  font-size: 20px;
  font-weight: bold;
}

.li {
  list-style: circle;
}
</style>

<div class="{markdownType} {isUnderline ? 'underline' : ''}">{text}</div>
