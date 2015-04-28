// ==UserScript==
// @name         My Fancy New Userscript
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       Idea Software
// @match        https://*.hipchat.com/chat
// @grant        none
// ==/UserScript==

(function ($, undefined) {

    $("head").append("<style>\
.idea-clear{float:none;}\
#idea-smileys{display:block; margin-top: 30px;}\
.emoticon-block{display: inline-block;width: 32px;height: 32px;float: left;white-space: normal;margin: 2px;}\
.emoticon-block:hover{border:1px solid red;box-sizing: border-box;}\
.emoticon-block div{display: none;}\
.emoticon-block img{width:30px !important; height: 30px !important; padding:0 !important;}\
.smileys-selection{width: 800px !important;}\
.idea-smileys-container:{left:-400px !important;}\
#idea-out{float: right;margin-top: 20px;font-style: italic;}\
                  </style>");

    var init = function () {
        $(".smileys-selection").closest(".hc-tooltip").addClass("idea-smileys-container");
        $(".smileys-selection").prepend(html);
        $(".smileys-selection .emoticon-block").click(function () {
            console.log($(this).attr("data-clipboard-text"));
        });
        var isIe = (navigator.userAgent.toLowerCase().indexOf("msie") != -1
                    || navigator.userAgent.toLowerCase().indexOf("trident") != -1);

        $("#idea-smileys .emoticon-block").hover(function () {
            $("#idea-out h6").html($(this).attr("data-clipboard-text"));
        })

        document.addEventListener('copy', function (e) {
            var textToPutOnClipboard = $("#idea-smileys .emoticon-block:hover").attr("data-clipboard-text");
            if (isIe) {
                window.clipboardData.setData('Text', textToPutOnClipboard);
            } else {
                e.clipboardData.setData('text/plain', textToPutOnClipboard);
            }
            $("#idea-out h6").html("Copied " + textToPutOnClipboard);
            e.preventDefault();
        });
    }

    var html = '\
<div class="idea-clear"/>\
<div id="idea-smileys">\
    <div class="emoticon-block" title="Click to copy (allthethings) to your clipboard." data-clipboard-text="(allthethings)">						\
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/allthethings-1414024836.png" width="25" height="25">                             \
      <div>(allthethings)</div>                                                                                                                     \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (android) to your clipboard." data-clipboard-text="(android)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/android-1414024011.png" width="25" height="25">                                  \
      <div>(android)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (areyoukiddingme) to your clipboard." data-clipboard-text="(areyoukiddingme)">             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/areyoukiddingme-1414024355.png" width="25" height="25">                          \
      <div>(areyoukiddingme)</div>                                                                                                                  \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (arrington) to your clipboard." data-clipboard-text="(arrington)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/arrington-1414023805.png" width="18" height="25">                                \
      <div>(arrington)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (arya) to your clipboard." data-clipboard-text="(arya)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/arya-1414028821.png" width="24" height="30">                                     \
      <div>(arya)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (ashton) to your clipboard." data-clipboard-text="(ashton)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ashton-1414025136.png" width="21" height="25">                                   \
      <div>(ashton)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (atlassian) to your clipboard." data-clipboard-text="(atlassian)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/atlassian-1414025304.png" width="25" height="23">                                \
      <div>(atlassian)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (awesome) to your clipboard." data-clipboard-text="(awesome)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/awesome-1417754492.png" width="30" height="30">                                  \
      <div>(awesome)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (awthanks) to your clipboard." data-clipboard-text="(awthanks)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/awthanks-1414025485.png" width="31" height="30">                                 \
      <div>(awthanks)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (aww) to your clipboard." data-clipboard-text="(aww)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/aww-1417754503.png" width="30" height="30">                                      \
      <div>(aww)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (awwyiss) to your clipboard." data-clipboard-text="(awwyiss)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/awwyiss-1417754513.png" width="18" height="26">                                  \
      <div>(awwyiss)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (awyeah) to your clipboard." data-clipboard-text="(awyeah)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/awyeah-1417750835.png" width="30" height="18">                                   \
      <div>(awyeah)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (badass) to your clipboard." data-clipboard-text="(badass)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/badass-1417750950.png" width="30" height="23">                                   \
      <div>(badass)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (badjokeeel) to your clipboard." data-clipboard-text="(badjokeeel)">                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/badjokeeel-1417751014.png" width="30" height="22">                               \
      <div>(badjokeeel)</div>                                                                                                                       \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (badpokerface) to your clipboard." data-clipboard-text="(badpokerface)">                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/badpokerface-1414089953.png" width="19" height="25">                             \
      <div>(badpokerface)</div>                                                                                                                     \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (badtime) to your clipboard." data-clipboard-text="(badtime)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/badtime-1417754523.png" width="30" height="30">                                  \
      <div>(badtime)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block emoticon-block-hover" title="Click to copy (basket) to your clipboard." data-clipboard-text="(basket)">          \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/basket-1414023854.png" width="25" height="25">                                   \
      <div>(basket)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (beer) to your clipboard." data-clipboard-text="(beer)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/beer-1414022661.png" width="20" height="20">                                     \
      <div>(beer)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (bicepleft) to your clipboard." data-clipboard-text="(bicepleft)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/bicepleft-1417754567.png" width="25" height="30">                                \
      <div>(bicepleft)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (bicepright) to your clipboard." data-clipboard-text="(bicepright)">                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/bicepright-1417754576.png" width="25" height="30">                               \
      <div>(bicepright)</div>                                                                                                                       \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (bitbucket) to your clipboard." data-clipboard-text="(bitbucket)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/bitbucket-1414026211.png" width="25" height="25">                                \
      <div>(bitbucket)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (boom) to your clipboard." data-clipboard-text="(boom)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/boom-1414103101.gif" width="30" height="30">                                     \
      <div>(boom)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (borat) to your clipboard." data-clipboard-text="(borat)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/borat-1417754598.png" width="30" height="30">                                    \
      <div>(borat)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (branch) to your clipboard." data-clipboard-text="(branch)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/branch-1414026601.png" width="16" height="16">                                   \
      <div>(branch)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (bumble) to your clipboard." data-clipboard-text="(bumble)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/bumble-1417751030.png" width="30" height="28">                                   \
      <div>(bumble)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (bunny) to your clipboard." data-clipboard-text="(bunny)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/bunny-1414023876.png" width="24" height="24">                                    \
      <div>(bunny)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (cadbury) to your clipboard." data-clipboard-text="(cadbury)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/cadbury-1414023926.png" width="25" height="18">                                  \
      <div>(cadbury)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (cake) to your clipboard." data-clipboard-text="(cake)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/cake-1414024030.png" width="24" height="24">                                     \
      <div>(cake)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (candycorn) to your clipboard." data-clipboard-text="(candycorn)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/candycorn-1414024689.png" width="14" height="27">                                \
      <div>(candycorn)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (carl) to your clipboard." data-clipboard-text="(carl)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/carl-1417754606.png" width="30" height="20">                                     \
      <div>(carl)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (caruso) to your clipboard." data-clipboard-text="(caruso)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/caruso-1417751051.png" width="30" height="22">                                   \
      <div>(caruso)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (catchemall) to your clipboard." data-clipboard-text="(catchemall)">                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/catchemall-1417754614.png" width="24" height="24">                               \
      <div>(catchemall)</div>                                                                                                                       \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (ceilingcat) to your clipboard." data-clipboard-text="(ceilingcat)">                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ceilingcat-1414025417.png" width="25" height="14">                               \
      <div>(ceilingcat)</div>                                                                                                                       \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (celeryman) to your clipboard." data-clipboard-text="(celeryman)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/celeryman-1418247558.gif" width="18" height="30">                                \
      <div>(celeryman)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (cereal) to your clipboard." data-clipboard-text="(cereal)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/cereal-1414023343.png" width="25" height="24">                                   \
      <div>(cereal)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (cerealspit) to your clipboard." data-clipboard-text="(cerealspit)">                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/cerealspit-1414026180.png" width="41" height="24">                               \
      <div>(cerealspit)</div>                                                                                                                       \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (challengeaccepted) to your clipboard." data-clipboard-text="(challengeaccepted)">         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/challengeaccepted-1417751095.png" width="23" height="28">                        \
      <div>(challengeaccepted)</div>                                                                                                                \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (chef) to your clipboard." data-clipboard-text="(chef)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/chef-1417754621.png" width="22" height="30">                                     \
      <div>(chef)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (chewie) to your clipboard." data-clipboard-text="(chewie)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/chewie-1417751139.png" width="24" height="25">                                   \
      <div>(chewie)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (chocobunny) to your clipboard." data-clipboard-text="(chocobunny)">                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/chocobunny-1414023949.png" width="25" height="25">                               \
      <div>(chocobunny)</div>                                                                                                                       \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (chompy) to your clipboard." data-clipboard-text="(chompy)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/chompy-1414025208.gif" width="25" height="25">                                   \
      <div>(chompy)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (chucknorris) to your clipboard." data-clipboard-text="(chucknorris)">                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/chucknorris-1417751159.png" width="25" height="22">                              \
      <div>(chucknorris)</div>                                                                                                                      \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (clarence) to your clipboard." data-clipboard-text="(clarence)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/clarence-1417751942.png" width="30" height="29">                                 \
      <div>(clarence)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (coffee) to your clipboard." data-clipboard-text="(coffee)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/coffee-1414375635.png" width="23" height="17">                                   \
      <div>(coffee)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (confluence) to your clipboard." data-clipboard-text="(confluence)">                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/confluence-1414026387.png" width="25" height="22">                               \
      <div>(confluence)</div>                                                                                                                       \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (content) to your clipboard." data-clipboard-text="(content)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/content-1414023392.png" width="25" height="25">                                  \
      <div>(content)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (continue) to your clipboard." data-clipboard-text="(continue)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/continue-1414026510.png" width="16" height="16">                                 \
      <div>(continue)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (cookie) to your clipboard." data-clipboard-text="(cookie)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/cookie-1417754631.png" width="30" height="30">                                   \
      <div>(cookie)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (cornelius) to your clipboard." data-clipboard-text="(cornelius)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/cornelius-1414022924.png" width="25" height="22">                                \
      <div>(cornelius)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (corpsethumb) to your clipboard." data-clipboard-text="(corpsethumb)">                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/corpsethumb-1417754640.png" width="20" height="20">                              \
      <div>(corpsethumb)</div>                                                                                                                      \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (daenerys) to your clipboard." data-clipboard-text="(daenerys)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/daenerys-1414028947.png" width="32" height="24">                                 \
      <div>(daenerys)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (dance) to your clipboard." data-clipboard-text="(dance)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/dance-1414025267.gif" width="26" height="23">                                    \
      <div>(dance)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (dealwithit) to your clipboard." data-clipboard-text="(dealwithit)">                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/dealwithit-1414024955.gif" width="35" height="22">                               \
      <div>(dealwithit)</div>                                                                                                                       \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (derp) to your clipboard." data-clipboard-text="(derp)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/derp-1417751963.png" width="28" height="29">                                     \
      <div>(derp)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (disappear) to your clipboard." data-clipboard-text="(disappear)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/disappear-1417754650.gif" width="30" height="24">                                \
      <div>(disappear)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (disapproval) to your clipboard." data-clipboard-text="(disapproval)">                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/disapproval-1414024448.png" width="23" height="18">                              \
      <div>(disapproval)</div>                                                                                                                      \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (doge) to your clipboard." data-clipboard-text="(doge)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/doge-1414029048.png" width="24" height="25">                                     \
      <div>(doge)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (doh) to your clipboard." data-clipboard-text="(doh)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/doh-1417755734.png" width="26" height="30">                                      \
      <div>(doh)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (donotwant) to your clipboard." data-clipboard-text="(donotwant)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/donotwant-1417755746.png" width="30" height="30">                                \
      <div>(donotwant)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (dosequis) to your clipboard." data-clipboard-text="(dosequis)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/dosequis-1414024105.png" width="25" height="25">                                 \
      <div>(dosequis)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (downvote) to your clipboard." data-clipboard-text="(downvote)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/downvote-1417755753.png" width="29" height="30">                                 \
      <div>(downvote)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (drevil) to your clipboard." data-clipboard-text="(drevil)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/drevil-1414025327.png" width="37" height="25">                                   \
      <div>(drevil)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (drool) to your clipboard." data-clipboard-text="(drool)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/drool-1417755763.png" width="26" height="30">                                    \
      <div>(drool)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (ducreux) to your clipboard." data-clipboard-text="(ducreux)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ducreux-1414023991.png" width="25" height="25">                                  \
      <div>(ducreux)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (dumb) to your clipboard." data-clipboard-text="(dumb)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/dumb-1417751988.png" width="25" height="30">                                     \
      <div>(dumb)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (evilburns) to your clipboard." data-clipboard-text="(evilburns)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/evilburns-1417755772.png" width="24" height="30">                                \
      <div>(evilburns)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (excellent) to your clipboard." data-clipboard-text="(excellent)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/excellent-1417755785.png" width="19" height="30">                                \
      <div>(excellent)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (facepalm) to your clipboard." data-clipboard-text="(facepalm)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/facepalm-1417752010.png" width="25" height="25">                                 \
      <div>(facepalm)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (failed) to your clipboard." data-clipboard-text="(failed)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/failed-1414026532.png" width="16" height="16">                                   \
      <div>(failed)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (feelsbadman) to your clipboard." data-clipboard-text="(feelsbadman)">                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/feelsbadman-1417755795.png" width="30" height="24">                              \
      <div>(feelsbadman)</div>                                                                                                                      \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (feelsgoodman) to your clipboard." data-clipboard-text="(feelsgoodman)">                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/feelsgoodman-1417755815.png" width="30" height="24">                             \
      <div>(feelsgoodman)</div>                                                                                                                     \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (finn) to your clipboard." data-clipboard-text="(finn)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/finn-1417755835.png" width="30" height="23">                                     \
      <div>(finn)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (fireworks) to your clipboard." data-clipboard-text="(fireworks)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/fireworks-1420575887.gif" width="22" height="30">                                \
      <div>(fireworks)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (firstworldproblems) to your clipboard." data-clipboard-text="(firstworldproblems)">       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/firstworldproblems-1414025630.png" width="30" height="25">                       \
      <div>(firstworldproblems)</div>                                                                                                               \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (fonzie) to your clipboard." data-clipboard-text="(fonzie)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/fonzie-1417752102.png" width="34" height="25">                                   \
      <div>(fonzie)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (foreveralone) to your clipboard." data-clipboard-text="(foreveralone)">                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/foreveralone-1414023140.png" width="25" height="25">                             \
      <div>(foreveralone)</div>                                                                                                                     \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (forscale) to your clipboard." data-clipboard-text="(forscale)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/forscale-1428536097.png" width="28" height="18">                                 \
      <div>(forscale)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (freddie) to your clipboard." data-clipboard-text="(freddie)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/freddie-1417752152.png" width="17" height="35">                                  \
      <div>(freddie)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (fry) to your clipboard." data-clipboard-text="(fry)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/fry-1414025241.png" width="19" height="25">                                      \
      <div>(fry)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (ftfy) to your clipboard." data-clipboard-text="(ftfy)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ftfy-1417755844.png" width="30" height="30">                                     \
      <div>(ftfy)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (fu) to your clipboard." data-clipboard-text="(fu)">                                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/fu-1414023026.png" width="24" height="25">                                       \
      <div>(fu)</div>                                                                                                                               \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (fuckyeah) to your clipboard." data-clipboard-text="(fuckyeah)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/fuckyeah-1414023828.png" width="25" height="23">                                 \
      <div>(fuckyeah)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (fwp) to your clipboard." data-clipboard-text="(fwp)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/fwp-1414025600.png" width="30" height="25">                                      \
      <div>(fwp)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (gangnamstyle) to your clipboard." data-clipboard-text="(gangnamstyle)">                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/gangnamstyle-1417752182.gif" width="19" height="36">                             \
      <div>(gangnamstyle)</div>                                                                                                                     \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (gates) to your clipboard." data-clipboard-text="(gates)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/gates-1417752311.png" width="25" height="22">                                    \
      <div>(gates)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (ghost) to your clipboard." data-clipboard-text="(ghost)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ghost-1414024665.png" width="24" height="24">                                    \
      <div>(ghost)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (giggity) to your clipboard." data-clipboard-text="(giggity)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/giggity-1417755851.png" width="28" height="30">                                  \
      <div>(giggity)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (goldstar) to your clipboard." data-clipboard-text="(goldstar)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/goldstar-1417755861.png" width="20" height="20">                                 \
      <div>(goldstar)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (goodnews) to your clipboard." data-clipboard-text="(goodnews)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/goodnews-1417752451.png" width="30" height="29">                                 \
      <div>(goodnews)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (greenbeer) to your clipboard." data-clipboard-text="(greenbeer)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/greenbeer-1414023735.png" width="20" height="20">                                \
      <div>(greenbeer)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (grumpycat) to your clipboard." data-clipboard-text="(grumpycat)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/grumpycat-1414026366.png" width="22" height="30">                                \
      <div>(grumpycat)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (gtfo) to your clipboard." data-clipboard-text="(gtfo)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/gtfo-1414026923.png" width="25" height="25">                                     \
      <div>(gtfo)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (haha) to your clipboard." data-clipboard-text="(haha)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/haha-1417755876.png" width="30" height="20">                                     \
      <div>(haha)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (haveaseat) to your clipboard." data-clipboard-text="(haveaseat)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/haveaseat-1417752572.png" width="18" height="25">                                \
      <div>(haveaseat)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (heart) to your clipboard." data-clipboard-text="(heart)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/heart-1417752586.png" width="16" height="14">                                    \
      <div>(heart)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (heygirl) to your clipboard." data-clipboard-text="(heygirl)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/heygirl-1413684451.png" width="30" height="30">                                  \
      <div>(heygirl)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (hipchat) to your clipboard." data-clipboard-text="(hipchat)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/hipchat-1414029020.png" width="25" height="25">                                  \
      <div>(hipchat)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (hipster) to your clipboard." data-clipboard-text="(hipster)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/hipster-1414025113.png" width="25" height="25">                                  \
      <div>(hipster)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (hodor) to your clipboard." data-clipboard-text="(hodor)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/hodor-1414028801.png" width="21" height="30">                                    \
      <div>(hodor)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (huehue) to your clipboard." data-clipboard-text="(huehue)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/huehue-1417755882.png" width="30" height="30">                                   \
      <div>(huehue)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (hugefan) to your clipboard." data-clipboard-text="(hugefan)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/hugefan-1417755893.png" width="30" height="30">                                  \
      <div>(hugefan)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (huh) to your clipboard." data-clipboard-text="(huh)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/huh-1414026942.png" width="25" height="25">                                      \
      <div>(huh)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (ilied) to your clipboard." data-clipboard-text="(ilied)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ilied-1417752608.png" width="29" height="25">                                    \
      <div>(ilied)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (indeed) to your clipboard." data-clipboard-text="(indeed)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/indeed-1417752694.png" width="30" height="30">                                   \
      <div>(indeed)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (iseewhatyoudidthere) to your clipboard." data-clipboard-text="(iseewhatyoudidthere)">     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/iseewhatyoudidthere-1414026019.png" width="28" height="25">                      \
      <div>(iseewhatyoudidthere)</div>                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (itsatrap) to your clipboard." data-clipboard-text="(itsatrap)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/itsatrap-1417752711.png" width="25" height="25">                                 \
      <div>(itsatrap)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (jackie) to your clipboard." data-clipboard-text="(jackie)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/jackie-1417752827.png" width="30" height="18">                                   \
      <div>(jackie)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (jaime) to your clipboard." data-clipboard-text="(jaime)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/jaime-1414028872.png" width="26" height="30">                                    \
      <div>(jaime)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (jake) to your clipboard." data-clipboard-text="(jake)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/jake-1417807978.png" width="30" height="30">                                     \
      <div>(jake)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (jira) to your clipboard." data-clipboard-text="(jira)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/jira-1414026250.png" width="18" height="23">                                     \
      <div>(jira)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (jobs) to your clipboard." data-clipboard-text="(jobs)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/jobs-1417752336.png" width="25" height="22">                                     \
      <div>(jobs)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (joffrey) to your clipboard." data-clipboard-text="(joffrey)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/joffrey-1417760026.png" width="22" height="30">                                  \
      <div>(joffrey)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (jonsnow) to your clipboard." data-clipboard-text="(jonsnow)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/jonsnow-1414028921.png" width="30" height="25">                                  \
      <div>(jonsnow)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (kennypowers) to your clipboard." data-clipboard-text="(kennypowers)">                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/kennypowers-1417752920.png" width="25" height="25">                              \
      <div>(kennypowers)</div>                                                                                                                      \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (krang) to your clipboard." data-clipboard-text="(krang)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/krang-1417752938.png" width="30" height="28">                                    \
      <div>(krang)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (kwanzaa) to your clipboard." data-clipboard-text="(kwanzaa)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/kwanzaa-1414022870.png" width="25" height="22">                                  \
      <div>(kwanzaa)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (lincoln) to your clipboard." data-clipboard-text="(lincoln)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/lincoln-1417752959.png" width="25" height="25">                                  \
      <div>(lincoln)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (lol) to your clipboard." data-clipboard-text="(lol)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/lol-1414023491.png" width="25" height="25">                                      \
      <div>(lol)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (lolwut) to your clipboard." data-clipboard-text="(lolwut)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/lolwut-1417753079.png" width="22" height="30">                                   \
      <div>(lolwut)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (megusta) to your clipboard." data-clipboard-text="(megusta)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/megusta-1414023519.png" width="24" height="25">                                  \
      <div>(megusta)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (meh) to your clipboard." data-clipboard-text="(meh)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/meh-1417755922.png" width="24" height="20">                                      \
      <div>(meh)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (menorah) to your clipboard." data-clipboard-text="(menorah)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/menorah-1414022898.png" width="23" height="25">                                  \
      <div>(menorah)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (mindblown) to your clipboard." data-clipboard-text="(mindblown)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/mindblown-1414029295.gif" width="25" height="25">                                \
      <div>(mindblown)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (motherofgod) to your clipboard." data-clipboard-text="(motherofgod)">                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/motherofgod-1417755937.gif" width="30" height="23">                              \
      <div>(motherofgod)</div>                                                                                                                      \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (ned) to your clipboard." data-clipboard-text="(ned)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ned-1414028897.png" width="23" height="25">                                      \
      <div>(ned)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (nextgendev) to your clipboard." data-clipboard-text="(nextgendev)">                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/nextgendev-1414028778.png" width="23" height="29">                               \
      <div>(nextgendev)</div>                                                                                                                       \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (nice) to your clipboard." data-clipboard-text="(nice)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/nice-1417756761.png" width="30" height="28">                                     \
      <div>(nice)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (ninja) to your clipboard." data-clipboard-text="(ninja)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ninja-1414025554.png" width="18" height="18">                                    \
      <div>(ninja)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (noidea) to your clipboard." data-clipboard-text="(noidea)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/noidea-1417756770.png" width="21" height="30">                                   \
      <div>(noidea)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (notbad) to your clipboard." data-clipboard-text="(notbad)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/notbad-1417754112.png" width="20" height="28">                                   \
      <div>(notbad)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (nothingtodohere) to your clipboard." data-clipboard-text="(nothingtodohere)">             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/nothingtodohere-1414025069.png" width="16" height="25">                          \
      <div>(nothingtodohere)</div>                                                                                                                  \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (notit) to your clipboard." data-clipboard-text="(notit)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/notit-1417756777.png" width="24" height="30">                                    \
      <div>(notit)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (notsureif) to your clipboard." data-clipboard-text="(notsureif)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/notsureif-1417754143.png" width="19" height="25">                                \
      <div>(notsureif)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (notsureifgusta) to your clipboard." data-clipboard-text="(notsureifgusta)">               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/notsureifgusta-1414025677.png" width="30" height="30">                           \
      <div>(notsureifgusta)</div>                                                                                                                   \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (obama) to your clipboard." data-clipboard-text="(obama)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/obama-1414026271.png" width="33" height="25">                                    \
      <div>(obama)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (ohcrap) to your clipboard." data-clipboard-text="(ohcrap)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ohcrap-1414023779.png" width="25" height="21">                                   \
      <div>(ohcrap)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (ohgodwhy) to your clipboard." data-clipboard-text="(ohgodwhy)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ohgodwhy-1414025393.png" width="25" height="25">                                 \
      <div>(ohgodwhy)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (ohmy) to your clipboard." data-clipboard-text="(ohmy)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/ohmy-1417756786.png" width="23" height="30">                                     \
      <div>(ohmy)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (okay) to your clipboard." data-clipboard-text="(okay)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/okay-1414023544.png" width="18" height="25">                                     \
      <div>(okay)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (omg) to your clipboard." data-clipboard-text="(omg)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/omg-1414023574.png" width="25" height="23">                                      \
      <div>(omg)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (orly) to your clipboard." data-clipboard-text="(orly)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/orly-1414025090.png" width="24" height="24">                                     \
      <div>(orly)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (paddlin) to your clipboard." data-clipboard-text="(paddlin)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/paddlin-1417756794.png" width="30" height="24">                                  \
      <div>(paddlin)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (pbr) to your clipboard." data-clipboard-text="(pbr)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/pbr-1414024081.png" width="13" height="24">                                      \
      <div>(pbr)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (philosoraptor) to your clipboard." data-clipboard-text="(philosoraptor)">                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/philosoraptor-1417754200.png" width="25" height="21">                            \
      <div>(philosoraptor)</div>                                                                                                                    \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (pingpong) to your clipboard." data-clipboard-text="(pingpong)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/pingpong-1414025441.png" width="25" height="22">                                 \
      <div>(pingpong)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (pirate) to your clipboard." data-clipboard-text="(pirate)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/pirate-1413932391.png" width="18" height="18">                                   \
      <div>(pirate)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (pokerface) to your clipboard." data-clipboard-text="(pokerface)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/pokerface-1414090721.png" width="17" height="23">                                \
      <div>(pokerface)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (poo) to your clipboard." data-clipboard-text="(poo)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/poo-1413932426.png" width="23" height="21">                                      \
      <div>(poo)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (present) to your clipboard." data-clipboard-text="(present)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/present-1417754218.png" width="16" height="16">                                  \
      <div>(present)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (pumpkin) to your clipboard." data-clipboard-text="(pumpkin)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/pumpkin-1414024641.png" width="24" height="24">                                  \
      <div>(pumpkin)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (rageguy) to your clipboard." data-clipboard-text="(rageguy)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/rageguy-1414022976.png" width="24" height="25">                                  \
      <div>(rageguy)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (rainicorn) to your clipboard." data-clipboard-text="(rainicorn)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/rainicorn-1417807924.png" width="20" height="30">                                \
      <div>(rainicorn)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (rebeccablack) to your clipboard." data-clipboard-text="(rebeccablack)">                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/rebeccablack-1414024054.png" width="20" height="25">                             \
      <div>(rebeccablack)</div>                                                                                                                     \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (reddit) to your clipboard." data-clipboard-text="(reddit)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/reddit-1417754241.png" width="18" height="25">                                   \
      <div>(reddit)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (rockon) to your clipboard." data-clipboard-text="(rockon)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/rockon-1417756812.gif" width="30" height="30">                                   \
      <div>(rockon)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (romney) to your clipboard." data-clipboard-text="(romney)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/romney-1417754260.png" width="25" height="25">                                   \
      <div>(romney)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (rudolph) to your clipboard." data-clipboard-text="(rudolph)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/rudolph-1414022810.png" width="25" height="16">                                  \
      <div>(rudolph)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (sadpanda) to your clipboard." data-clipboard-text="(sadpanda)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/sadpanda-1417754292.png" width="28" height="30">                                 \
      <div>(sadpanda)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (sadtroll) to your clipboard." data-clipboard-text="(sadtroll)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/sadtroll-1414023623.png" width="25" height="20">                                 \
      <div>(sadtroll)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (salute) to your clipboard." data-clipboard-text="(salute)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/salute-1417756826.png" width="30" height="22">                                   \
      <div>(salute)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (samuel) to your clipboard." data-clipboard-text="(samuel)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/samuel-1417754316.png" width="19" height="25">                                   \
      <div>(samuel)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (santa) to your clipboard." data-clipboard-text="(santa)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/santa-1414022839.png" width="25" height="23">                                    \
      <div>(santa)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (sap) to your clipboard." data-clipboard-text="(sap)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/sap-1417756835.png" width="30" height="30">                                      \
      <div>(sap)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (scumbag) to your clipboard." data-clipboard-text="(scumbag)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/scumbag-1413684123.png" width="25" height="16">                                  \
      <div>(scumbag)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (seomoz) to your clipboard." data-clipboard-text="(seomoz)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/seomoz-1414023675.png" width="21" height="25">                                   \
      <div>(seomoz)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (shamrock) to your clipboard." data-clipboard-text="(shamrock)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/shamrock-1414023710.png" width="22" height="21">                                 \
      <div>(shamrock)</div>                                                                                                                         \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (shrug) to your clipboard." data-clipboard-text="(shrug)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/shrug-1414032234.png" width="64" height="15">                                    \
      <div>(shrug)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (skyrim) to your clipboard." data-clipboard-text="(skyrim)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/skyrim-1417754336.png" width="17" height="30">                                   \
      <div>(skyrim)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (standup) to your clipboard." data-clipboard-text="(standup)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/standup-1417756844.gif" width="16" height="30">                                  \
      <div>(standup)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (stare) to your clipboard." data-clipboard-text="(stare)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/stare-1414024815.png" width="34" height="25">                                    \
      <div>(stare)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (stash) to your clipboard." data-clipboard-text="(stash)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/stash-1414028743.png" width="23" height="25">                                    \
      <div>(stash)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (success) to your clipboard." data-clipboard-text="(success)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/success-1414025948.png" width="25" height="25">                                  \
      <div>(success)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (successful) to your clipboard." data-clipboard-text="(successful)">                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/successful-1414026553.png" width="16" height="16">                               \
      <div>(successful)</div>                                                                                                                       \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (sweetjesus) to your clipboard." data-clipboard-text="(sweetjesus)">                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/sweetjesus-1417754353.png" width="28" height="25">                               \
      <div>(sweetjesus)</div>                                                                                                                       \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (tableflip) to your clipboard." data-clipboard-text="(tableflip)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/tableflip-1414031937.png" width="147" height="16">                               \
      <div>(tableflip)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (taco) to your clipboard." data-clipboard-text="(taco)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/taco-1417756862.png" width="30" height="26">                                     \
      <div>(taco)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (taft) to your clipboard." data-clipboard-text="(taft)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/taft-1417754373.png" width="25" height="25">                                     \
      <div>(taft)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (tea) to your clipboard." data-clipboard-text="(tea)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/tea-1414025463.png" width="24" height="24">                                      \
      <div>(tea)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (thatthing) to your clipboard." data-clipboard-text="(thatthing)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/thatthing-1417756953.png" width="30" height="22">                                \
      <div>(thatthing)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (theyregreat) to your clipboard." data-clipboard-text="(theyregreat)">                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/theyregreat-1417756964.png" width="30" height="30">                              \
      <div>(theyregreat)</div>                                                                                                                      \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (toodamnhigh) to your clipboard." data-clipboard-text="(toodamnhigh)">                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/toodamnhigh-1417756973.png" width="30" height="28">                              \
      <div>(toodamnhigh)</div>                                                                                                                      \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (tree) to your clipboard." data-clipboard-text="(tree)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/tree-1414022753.png" width="24" height="24">                                     \
      <div>(tree)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (troll) to your clipboard." data-clipboard-text="(troll)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/troll-1414023002.png" width="25" height="25">                                    \
      <div>(troll)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (truestory) to your clipboard." data-clipboard-text="(truestory)">                         \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/truestory-1413920318.png" width="29" height="27">                                \
      <div>(truestory)</div>                                                                                                                        \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (trump) to your clipboard." data-clipboard-text="(trump)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/trump-1414026327.png" width="30" height="25">                                    \
      <div>(trump)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (turkey) to your clipboard." data-clipboard-text="(turkey)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/turkey-1414028694.png" width="25" height="17">                                   \
      <div>(turkey)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (twss) to your clipboard." data-clipboard-text="(twss)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/twss-1417754388.png" width="20" height="25">                                     \
      <div>(twss)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (tyrion) to your clipboard." data-clipboard-text="(tyrion)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/tyrion-1414028850.png" width="27" height="31">                                   \
      <div>(tyrion)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (tywin) to your clipboard." data-clipboard-text="(tywin)">                                 \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/tywin-1414028997.png" width="22" height="30">                                    \
      <div>(tywin)</div>                                                                                                                            \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (unacceptable) to your clipboard." data-clipboard-text="(unacceptable)">                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/unacceptable-1417756981.png" width="20" height="30">                             \
      <div>(unacceptable)</div>                                                                                                                     \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (unknown) to your clipboard." data-clipboard-text="(unknown)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/unknown-1414026584.png" width="16" height="16">                                  \
      <div>(unknown)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (upvote) to your clipboard." data-clipboard-text="(upvote)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/upvote-1417756989.png" width="29" height="30">                                   \
      <div>(upvote)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (vote) to your clipboard." data-clipboard-text="(vote)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/vote-1415153517.png" width="30" height="30">                                     \
      <div>(vote)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (waiting) to your clipboard." data-clipboard-text="(waiting)">                             \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/waiting-1417756997.gif" width="30" height="30">                                  \
      <div>(waiting)</div>                                                                                                                          \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (washington) to your clipboard." data-clipboard-text="(washington)">                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/washington-1414023164.png" width="25" height="25">                               \
      <div>(washington)</div>                                                                                                                       \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (wat) to your clipboard." data-clipboard-text="(wat)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/wat-1414024905.png" width="25" height="25">                                      \
      <div>(wat)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (whoa) to your clipboard." data-clipboard-text="(whoa)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/whoa-1417757013.png" width="30" height="28">                                     \
      <div>(whoa)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (whynotboth) to your clipboard." data-clipboard-text="(whynotboth)">                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/whynotboth-1414029073.gif" width="37" height="37">                               \
      <div>(whynotboth)</div>                                                                                                                       \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (wtf) to your clipboard." data-clipboard-text="(wtf)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/wtf-1417754405.png" width="25" height="30">                                      \
      <div>(wtf)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (yey) to your clipboard." data-clipboard-text="(yey)">                                     \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/yey-1414023049.png" width="25" height="25">                                      \
      <div>(yey)</div>                                                                                                                              \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (yodawg) to your clipboard." data-clipboard-text="(yodawg)">                               \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/yodawg-1417754419.png" width="30" height="30">                                   \
      <div>(yodawg)</div>                                                                                                                           \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (youdontsay) to your clipboard." data-clipboard-text="(youdontsay)">                       \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/youdontsay-1417757028.png" width="30" height="18">                               \
      <div>(youdontsay)</div>                                                                                                                       \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (yougotitdude) to your clipboard." data-clipboard-text="(yougotitdude)">                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/yougotitdude-1414026430.gif" width="48" height="25">                             \
      <div>(yougotitdude)</div>                                                                                                                     \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (yuno) to your clipboard." data-clipboard-text="(yuno)">                                   \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/yuno-1417754433.png" width="30" height="30">                                     \
      <div>(yuno)</div>                                                                                                                             \
    </div>                                                                                                                                          \
        <div class="emoticon-block" title="Click to copy (zoidberg) to your clipboard." data-clipboard-text="(zoidberg)">                           \
      <img src="https://dujrsrsgsd3nh.cloudfront.net/img/emoticons/zoidberg-1417754444.png" width="30" height="24">                                 \
      <div>(zoidberg)</div>                                                                                                                         \
    </div></div><div id="idea-out"><h6>Hover Emoticon and Ctrl+C to copy</h6><div>'


    setTimeout(init, 2000);


}(jQuery))
