/* ================================================================ *
    ajaxzip3.js ---- AjaxZip3 郵便番号→住所変換ライブラリ

    Copyright (c) 2008-2015 Ninkigumi Co.,Ltd.
    http://ajaxzip3.github.io/

    Copyright (c) 2006-2007 Kawasaki Yusuke <u-suke [at] kawa.net>
    http://www.kawa.net/works/ajax/AjaxZip2/AjaxZip2.html

    Permission is hereby granted, free of charge, to any person
    obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without
    restriction, including without limitation the rights to use,
    copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following
    conditions:

    The above copyright notice and this permission notice shall be
    included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
    OTHER DEALINGS IN THE SOFTWARE.
* ================================================================ */

function $yubin(a){AjaxZip3.callback(a)}AjaxZip3=function(){},AjaxZip3.VERSION="0.51",AjaxZip3.JSONDATA="https://yubinbango.github.io/yubinbango-data/data",AjaxZip3.CACHE=[],AjaxZip3.prev="",AjaxZip3.nzip="",AjaxZip3.fzip1="",AjaxZip3.fzip2="",AjaxZip3.fpref="",AjaxZip3.addr="",AjaxZip3.fstrt="",AjaxZip3.farea="",AjaxZip3.ffocus=!0,AjaxZip3.onSuccess=null,AjaxZip3.onFailure=null,AjaxZip3.PREFMAP=[null,"北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"],AjaxZip3.zip2addr=function(a,e,i,p,t,n,A){if(AjaxZip3.fzip1=AjaxZip3.getElementByName(a),AjaxZip3.fzip2=AjaxZip3.getElementByName(e,AjaxZip3.fzip1),AjaxZip3.fpref=AjaxZip3.getElementByName(i,AjaxZip3.fzip1),AjaxZip3.faddr=AjaxZip3.getElementByName(p,AjaxZip3.fzip1),AjaxZip3.fstrt=AjaxZip3.getElementByName(n,AjaxZip3.fzip1),AjaxZip3.farea=AjaxZip3.getElementByName(t,AjaxZip3.fzip1),AjaxZip3.ffocus=void 0===A||A,AjaxZip3.fzip1&&AjaxZip3.fpref&&AjaxZip3.faddr){var r=AjaxZip3.fzip1.value;if(AjaxZip3.fzip2&&AjaxZip3.fzip2.value&&(r+=AjaxZip3.fzip2.value),r){AjaxZip3.nzip="";for(var f=0;f<r.length;f++){var x=r.charCodeAt(f);x<48||(x>57||(AjaxZip3.nzip+=r.charAt(f)))}if(!(AjaxZip3.nzip.length<7)){var j=AjaxZip3.nzip.substr(0,3),Z=AjaxZip3.CACHE[j];if(Z)return AjaxZip3.callback(Z);AjaxZip3.zipjsonpquery()}}}},AjaxZip3.callback=function(a){function e(){"function"==typeof AjaxZip3.onFailure&&AjaxZip3.onFailure()}var i=a[AjaxZip3.nzip],p=AjaxZip3.nzip-0+4278190080+"";if(!i&&a[p]&&(i=a[p]),i){var t=i[0];if(t){var n=AjaxZip3.PREFMAP[t];if(n){var A=i[1];A||(A="");var r=i[2];r||(r="");var f=i[3];f||(f="");var x=AjaxZip3.faddr,j=A;if("select-one"==AjaxZip3.fpref.type||"select-multiple"==AjaxZip3.fpref.type)for(var Z=AjaxZip3.fpref.options,l=0;l<Z.length;l++){var u=Z[l].value,s=Z[l].text;Z[l].selected=u==t||u==n||s==n,Z[l].selected&&$(AjaxZip3.fpref).trigger("change")}else AjaxZip3.fpref.name==AjaxZip3.faddr.name?j=n+j:AjaxZip3.fpref.value=n;if(AjaxZip3.farea?(x=AjaxZip3.farea,AjaxZip3.farea.value=r):j+=r,AjaxZip3.fstrt&&(x=AjaxZip3.fstrt,AjaxZip3.faddr.name==AjaxZip3.fstrt.name?j+=f:f&&(AjaxZip3.fstrt.value=f)),AjaxZip3.faddr.value=j,"function"==typeof AjaxZip3.onSuccess&&AjaxZip3.onSuccess(),AjaxZip3.ffocus&&x&&x.value){var o=x.value.length;if(x.focus(),x.createTextRange){var c=x.createTextRange();c.move("character",o),c.select()}else x.setSelectionRange&&x.setSelectionRange(o,o)}}else e()}else e()}else e()},AjaxZip3.getResponseText=function(a){var e=a.responseText;if(navigator.appVersion.indexOf("KHTML")>-1){var i=escape(e);i.indexOf("%u")<0&&i.indexOf("%")>-1&&(e=decodeURIComponent(i))}return e},AjaxZip3.getElementByName=function(a,e){if("string"==typeof a){var i=document.getElementsByName(a);if(!i)return null;if(i.length>1&&e&&e.form){for(var p=e.form.elements,t=null,n=0;n<p.length;n++)p[n].name==a&&(t=p[n]);return t}return i[0]}return a},AjaxZip3.zipjsonpquery=function(){var a=AjaxZip3.JSONDATA+"/"+AjaxZip3.nzip.substr(0,3)+".js",e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("charset","UTF-8"),e.setAttribute("src",a),document.getElementsByTagName("head").item(0).appendChild(e)};
