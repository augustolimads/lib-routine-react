import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

/* CORES */
:root {
    --primary-color: ${props => props.theme.colors.primary};
    --secondary-color: ${props => props.theme.colors.secondary};
    --font-color: ${props => props.theme.colors.font};
    --bg-color: ${props => props.theme.colors.bg};
    --heading-color: ${props => props.theme.colors.heading};
}
/*-------------*/

/* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}


/* HTML5 display-role reset for older browsers */

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}

body {
    line-height: 1;
}

ol,
ul {
    list-style: none;
}

* {
    box-sizing: border-box;
}

a {
    text-decoration: none;
}

button {
    background: none;
    border: 0;
    padding: 0;
}

img {
    display: block;
    height: auto;
    max-width: 100%;
}

svg {
    fill: currentColor;
}

html {
    font-size: 16px;
    -moz-osx-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
}

b,
strong {
    font-weight: 600;
}

i,
em {
    font-style: italic;
}

input[type="search"] {
    -webkit-appearance: textfield;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
}

/*-------------*/
body {
    min-height: calc(100vh);
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    text-rendering: optimizeLegibility;
}

::selection {
    /* bota a cor principal aqui*/
    background: black;
    color: white;
}

@media (prefers-reduced-motion: reduce) {
    * {
        animation: none;
        transition: none;
    }
}
`

export default GlobalStyle;