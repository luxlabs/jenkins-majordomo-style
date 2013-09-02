// ==UserScript==
// @name       jenkins-majordomo-style
// @namespace  http://use.i.E.your.homepage/
// @version    0.1
// @description  enter something useful
// @match      http://build.dev-vtpie.com/login?from=%2F
// @copyright  2012+, You
// @include    http://build.dev-vtpie.com/*
// ==/UserScript==

var currentUrl = window.location.pathname;

var URL_LOGIN 		= "/login"
var URL_LOGIN_ERROR = "/loginError"
var URL_NEW_JOB 	= "/view/All/newJob";

var login_html = '<div class="page-header" style="background-color: #2F6372;padding: 20px;margin-top: -18px;"><h1>Majordomo-ci <small>...the new STYLE for continuos integration</small></h1></div><div class="panel panel-default" style="margin: 100px"><div class="panel-body" style="background-color: #DBECED;"> <form class="form-horizontal" role="form" name="login" action="j_acegi_security_check" method="post"> <div class="form-group"> <label for="j_username" class="col-lg-2 control-label">Username</label> <div class="col-lg-10"> <div class="input-group"> <span class="input-group-addon"><span class="glyphicon glyphicon-user"></span></span> <input type="text" class="form-control" name="j_username" id="j_username" placeholder="Username"> </div> </div> </div> <div class="form-group"> <label for="inputPassword1" class="col-lg-2 control-label">Password</label> <div class="col-lg-10"> <div class="input-group"> <span class="input-group-addon"><span class="glyphicon glyphicon-lock"></span></span> <input type="password" class="form-control" name="j_password" id="j_password" placeholder="Password"> </div> </div> </div> <div class="form-group"> <div class="col-lg-offset-2 col-lg-10"> <div class="checkbox"> <label> <input type="checkbox" name="remember_me" id="remember_me"> Remember me </label> </div> </div> </div> <div class="form-group"> <div class="col-lg-offset-2 col-lg-10"> <button type="submit" class="btn btn-default" tabindex="0">Sign in</button> </div> </div> </form> </div> </div>';
var menu_html = '<ul id="gn-menu" class="gn-menu-main"><li class="gn-trigger"><a class="gn-icon gn-icon-menu"><span>Menu</span></a><nav class="gn-menu-wrapper"><div class="gn-scroller"><ul class="gn-menu"><li class="gn-search-item"><input placeholder="Search" type="search" class="gn-search"><a class="gn-icon gn-icon-search"><span>Search</span></a></li><li><a class="gn-icon gn-icon-download">Downloads</a><ul class="gn-submenu"><li><a class="gn-icon gn-icon-illustrator">Vector Illustrations</a></li><li><a class="gn-icon gn-icon-photoshop">Photoshop files</a></li></ul></li><li><a class="gn-icon gn-icon-cog">Settings</a></li><li><a class="gn-icon gn-icon-help">Help</a></li><li><a class="gn-icon gn-icon-archive">Archives</a><ul class="gn-submenu"><li><a class="gn-icon gn-icon-article">Articles</a></li><li><a class="gn-icon gn-icon-pictures">Images</a></li><li><a class="gn-icon gn-icon-videos">Videos</a></li></ul></li></ul></div><!-- /gn-scroller --></nav></li><li><a href="http://tympanus.net/codrops">Codrops</a></li><li><a class="codrops-icon codrops-icon-prev" href="http://tympanus.net/Development/HeaderEffects/"><span>Previous Demo</span></a></li><li><a class="codrops-icon codrops-icon-drop" href="http://tympanus.net/codrops/?p=16030"><span>Back to the Codrops Article</span></a></li></ul>';

function getCss(url)
{
    if (document.createStyleSheet){
        document.createStyleSheet(url);
    }
    else {
        Q("head").append(Q("<link rel='stylesheet' href='"+ url +"' type='text/css' media='screen' />"));
    }
}

document.title = "Majordomo-ci";

Q.getScript("http://tympanus.net/Tutorials/GoogleNexusWebsiteMenu/js/modernizr.custom.js");
Q.getScript("http://tympanus.net/Tutorials/GoogleNexusWebsiteMenu/js/classie.js");
Q.getScript("http://tympanus.net/Tutorials/GoogleNexusWebsiteMenu/js/gnmenu.js")
.done(function(script, textStatus) {
    if(currentUrl != URL_LOGIN && currentUrl != URL_LOGIN_ERROR){
  		new gnMenu( document.getElementById( 'gn-menu' ) );
    }
})
Q.getScript("http://netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js");

getCss("http://tympanus.net/Tutorials/GoogleNexusWebsiteMenu/css/normalize.css");
getCss("http://tympanus.net/Tutorials/GoogleNexusWebsiteMenu/css/component.css");
getCss("http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css");
getCss("http://netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap-theme.min.css");
getCss("http://tympanus.net/Tutorials/GoogleNexusWebsiteMenu/css/demo.css");

//GLOBAL CSS
var btns = $$('button');
for (var i = 0; i < btns.length; i++){ 
    btns[i].className ='btn'; 
}

function setSectionTitle(section)
{
	document.title = "Majordomo-ci - " + section;
}

function appendParent(type,element){
       
    // `element` is the element you want to wrap
    var parent = element.parentNode;
    var wrapper = document.createElement(type);
    
    // set the wrapper as child (instead of the element)
    parent.replaceChild(wrapper, element);
    // set element as child of wrapper
    wrapper.appendChild(element);
    
    return wrapper;
}

function unveil()
{
	document.body.className = '';    
}

window.setInterval(unveil,500);

if(currentUrl == URL_LOGIN)
{
    setSectionTitle("Login")
    document.body.innerHTML = login_html;
        
}else if(currentUrl == URL_NEW_JOB)
{
    setSectionTitle("New Job");
    document.body.innerHTML = menu_html;
        
    //$('main-panel').id = "main-panel-new-job";
    //$('side-panel').id = "side-panel-new-job";
    
    //var wrapper = appendParent('div','wrapper-new-job',$$('[name="createItem"]')[0]);	
    //wrapper.id = "wrapper-new-job";
}
