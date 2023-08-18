// ==UserScript==
// @name         YAMAP 登山計画書の表組みを編集可能に！
// @namespace    http://cync.jp/
// @version      0.1
// @description  YAMAPでプリント用に作成できる登山計画書の登山者名などの表組み部分全てをブラウザで編集出来るようにするスクリプトです。
// @author       Shuhei Koide
// @match        https://yamap.com/plans/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=yamap.com
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js
// @grant        none
// ==/UserScript==

$(function() {
   $('.Print__Table td').each(function(index) {
       $(this).attr('contentEditable','true');
   });
});
