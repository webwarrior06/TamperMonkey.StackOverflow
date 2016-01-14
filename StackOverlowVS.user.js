// ==UserScript==
// @name         StackOverflow VS Theme
// @namespace    so
// @version      0.1
// @description  Makes StackOverflow darker. 
// @author       Taha Kucuk
// @match        http://stackoverflow.com/*
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

addGlobalStyle('div.container { background: #2D2D30; !important;}');
addGlobalStyle('div.post-text { color:lightgray; !important;}');
addGlobalStyle('span.comment-copy { color:gray; !important;}');
addGlobalStyle('div#content { background: #2D2D30; !important;}');
addGlobalStyle('.label-key b, .label-key strong { color: lightgray; !important;}');
addGlobalStyle('#newsletter-ad { display: none; !important;}');
addGlobalStyle('#beta-ad-container { display: none; !important;}');
addGlobalStyle('#hireme { display: none; !important;}');
addGlobalStyle('.adzerk-vote { display: none; !important;}');
addGlobalStyle('blockquote { background: teal; color:white; border-radius:4px; border-left:2px solid #fff; !important;}');
addGlobalStyle('.wmd-button-bar { background:  #fff7e5; !important;}');
addGlobalStyle('h2.space { color:  antiquewhite; !important;}');
addGlobalStyle('.bottom-notice { color:  aliceblue; !important;}');
addGlobalStyle('.subheader h2 { color:  white; !important;}');
addGlobalStyle('.post-tag { background:#353535; color:white;  !important;}');
addGlobalStyle('.post-tag:hover { background:#3399ff; color:white; !important;}');
addGlobalStyle('#question-header { border-bottom:1px solid #5a5a5a; !important;}');
addGlobalStyle('tr.comment>td { border-bottom:1px solid #5a5a5a; !important;}');
addGlobalStyle('.comments { border-top:1px solid #5a5a5a; !important;}');
addGlobalStyle('.subheader { border-bottom:1px solid #5a5a5a; !important;}');
addGlobalStyle('#tabs a.youarehere { color:#3399ff; !important;}');
addGlobalStyle('#tabs a {  background: #3A3A3A; border:none; !important;}');
addGlobalStyle('.module.community-bulletin {  display:none; !important;}');
addGlobalStyle('#sidebar h4 {  color:white; !important;}');
addGlobalStyle('.vote span {  color:white; !important;}');
addGlobalStyle('.question-status {  border-radius:5px; !important;}');
addGlobalStyle('.stats-row a {   color:white; !important;}'); 
addGlobalStyle('td {color:lightgray; !important;}');
addGlobalStyle('.subheader h1 {color:white; !important;}');
addGlobalStyle('.users-page .user-info .user-details .user-location {color:darkgray; !important;}');
addGlobalStyle('.user-card-name {color:white; !important;}');
addGlobalStyle('#chat-feature.module { display: none; !important;}');
addGlobalStyle('p {color:lightgray; !important;}');
addGlobalStyle('a { color: #07c; !important;}');
addGlobalStyle('.owner { background: transparent; !important;}');
addGlobalStyle('.user-info .user-action-time { color: white; !important;}');
addGlobalStyle('.reputation-score { color: lightgray; !important;}');
addGlobalStyle('pre { background: #1e1e1e; border-radius:6px; !important;}');
addGlobalStyle('code { background: #1e1e1e; color:white; border-radius:2px; !important;}');
addGlobalStyle('#question-header .question-hyperlink { color: white; !important;}');
addGlobalStyle('.typ { color: #569cd6; !important;}');
addGlobalStyle('.com {color:#57a64a; !important;}');
addGlobalStyle('.pln {color:gainsboro; !important;}');
addGlobalStyle('.pun {color:gainsboro; !important;}');
addGlobalStyle('.kwd {color:#569cd6; !important;}');
addGlobalStyle('.lit {color:#b5cea8; !important;}');
addGlobalStyle('.str {color:#d69d85; !important;}');
addGlobalStyle('.excerpt {color:#fff; !important;}');
addGlobalStyle('.question-status  {background:rgba(74, 74, 74, 0.73); !important;}');
addGlobalStyle('.question-status p  {color:dimgray; !important;}');
addGlobalStyle('#mainbar h2  {color:dimgray; !important;}');
