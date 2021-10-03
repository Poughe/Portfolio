import ScrollReveal from 'scrollreveal'; //animates elems as they enter/leave the viewport
//More about ScrollReveal npm package: https://www.npmjs.com/package/scrollreveal ;  site: https://scrollrevealjs.org/

const isSSR = typeof window === 'undefined';
// if 'true' then window is undefined, if window object does not exist, then we are not in a browser environment
// source: https://stackoverflow.com/questions/32598971/whats-the-purpose-of-if-typeof-window-undefined
const sr = isSSR ? null : ScrollReveal();

export default sr;
