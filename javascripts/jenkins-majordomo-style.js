// ==UserScript==
// @name       Jenkins-Majordomo-Style
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://build.dev-vtpie.com/login?from=%2F
// @copyright  2012+, You
// @include    http://build.dev-vtpie.com/*
// ==/UserScript==

var NEW_JOB_URL = "/view/All/newJob";

//GLOBAL CSS
var btns = $$('button'); for (var i = 0; i < btns.length; i++) { btns[i].className ='btn'}

function appendParent(type,element){
    var wrapper = document.createElement(type);
       
    // `element` is the element you want to wrap
    var parent = element.parentNode;
    var wrapper = document.createElement(type);
    
    // set the wrapper as child (instead of the element)
    parent.replaceChild(wrapper, element);
    // set element as child of wrapper
    wrapper.appendChild(element);
    
    return wrapper;
}

var currentUrl = window.location.pathname;
if(currentUrl == NEW_JOB_URL)
{
    $('main-panel').id = "main-panel-new-job";
    $('side-panel').id = "side-panel-new-job";
    
    var wrapper = appendParent('div','wrapper-new-job',$$('[name="createItem"]')[0]);	
    wrapper.id = "wrapper-new-job";
}

document.body.className = '';
