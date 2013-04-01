this["JST"] = this["JST"] || {};

this["JST"]["app/templates/main-layout.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="navbar navbar-inverse navbar-fixed-top">\r\n    <div class="navbar-inner">\r\n        <div class="container-fluid">\r\n            <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\r\n                <span class="icon-bar"></span>\r\n                <span class="icon-bar"></span>\r\n                <span class="icon-bar"></span>\r\n            </button>\r\n            <a class="brand" href="#">Project name</a>\r\n\r\n            <div class="nav-collapse collapse">\r\n                <p class="navbar-text pull-right">\r\n                    Logged in as <a href="#" class="navbar-link">Username</a>\r\n                </p>\r\n                <ul class="nav">\r\n                    <li class="active"><a href="#">Home</a></li>\r\n                    <li><a href="#about">About</a></li>\r\n                    <li><a href="#contact">Contact</a></li>\r\n                </ul>\r\n            </div>\r\n            <!--/.nav-collapse -->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="container-fluid">\r\n    <div class="row-fluid">\r\n        <div class="span2">\r\n            <div class="well sidebar-nav">\r\n                <ul class="nav nav-list">\r\n                    <li class="nav-header">Sidebar</li>\r\n                    <li class="active"><a href="#">Link</a></li>\r\n                    <li><a href="#">Link</a></li>\r\n                    <li><a href="#">Link</a></li>\r\n                    <li><a href="#">Link</a></li>\r\n                </ul>\r\n            </div>\r\n            <!--/.well -->\r\n        </div>\r\n        <!--/span-->\r\n        <div class="span10">\r\n            <div class="row-fluid">\r\n                <div class="span12">\r\n                    <h2>bbb.youtube</h2>\r\n\r\n                    <div class="search"></div>\r\n                    <div class="searchResults"></div>\r\n                </div>\r\n                <!--/span-->\r\n\r\n            </div>\r\n            <!--/row-->\r\n        </div>\r\n        <!--/span-->\r\n    </div>\r\n    <!--/row-->\r\n\r\n    <hr>\r\n\r\n    <footer>\r\n        <p>&copy; Company 2013</p>\r\n    </footer>\r\n\r\n</div>\r\n\r\n';
}
return __p;
};

this["JST"]["app/templates/nowPlaying/commentsItem.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<span>\r\n<a class="yt-user-photo " href="/user/012013014">\r\n    <span class="video-thumb ux-thumb yt-thumb-square-48 ">\r\n        <span class="yt-thumb-clip">\r\n            <span class="yt-thumb-clip-inner">\r\n                <img width="48" src="//lh3.googleusercontent.com/-I_-gAeddn8s/AAAAAAAAAAI/AAAAAAAAAAA/xM4yXc31Yds/s48-c-k/photo.jpg" alt="012013014" data-group-key="thumb-group-2">\r\n                <span class="vertical-align"></span>\r\n            </span>\r\n        </span>\r\n    </span>\r\n</a>\r\n<div class="content" style="margin-left:60px;">\r\n  <p class="metadata" style="margin: 0;">\r\n    <span class="author ">\r\n      <a dir="ltr" class="yt-uix-sessionlink yt-user-name " href="/user/012013014">'+
(author[0].name.$t)+
'</a>\r\n    </span>\r\n      <span dir="ltr" class="time">\r\n        <a href="http://www.youtube.com/comment?lc=GNkUgBesuijmO2YuwmajMW8rHX89-lbqFZyJ4nPPmPs" dir="ltr">\r\n            '+
(published.$t)+
'\r\n        </a>\r\n      </span>\r\n  </p>\r\n\r\n\r\n  <div dir="ltr" class="comment-text">'+
(content.$t)+
'</div>\r\n</div>\r\n</span>\r\n\r\n';
}
return __p;
};

this["JST"]["app/templates/nowPlaying/commentsList.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<ul class="unstyled">\r\n</ul>';
}
return __p;
};

this["JST"]["app/templates/nowPlaying/nowPlaying-layout.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="navbar navbar-inverse navbar-fixed-top">\r\n    <div class="navbar-inner">\r\n        <div class="container-fluid">\r\n            <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">\r\n                <span class="icon-bar"></span>\r\n                <span class="icon-bar"></span>\r\n                <span class="icon-bar"></span>\r\n            </button>\r\n            <a class="brand" href="#">Project name</a>\r\n\r\n            <div class="nav-collapse collapse">\r\n                <p class="navbar-text pull-right">\r\n                    Logged in as <a href="#" class="navbar-link">Username</a>\r\n                </p>\r\n                <ul class="nav">\r\n                    <li class="active"><a href="#">Home</a></li>\r\n                    <li><a href="#about">About</a></li>\r\n                    <li><a href="#contact">Contact</a></li>\r\n                </ul>\r\n            </div>\r\n            <!--/.nav-collapse -->\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="container-fluid">\r\n    <div class="row-fluid">\r\n        <div class="span2">\r\n            <div class="well sidebar-nav">\r\n                <ul class="nav nav-list">\r\n                    <li class="nav-header">Sidebar</li>\r\n                    <li class="active"><a href="#">Link</a></li>\r\n                    <li><a href="#">Link</a></li>\r\n                    <li><a href="#">Link</a></li>\r\n                    <li><a href="#">Link</a></li>\r\n                </ul>\r\n            </div>\r\n            <!--/.well -->\r\n        </div>\r\n        <!--/span-->\r\n        <div class="span10">\r\n            <div class="row-fluid">\r\n                <div class="span12">\r\n                    <h2>bbb.youtube</h2>\r\n\r\n                    <div class="search"></div>\r\n\r\n\r\n                    <div style="clear: both">\r\n                        <div style="float:left;width:600px;">\r\n                            <div class=\'nowPlaying\'></div>\r\n                            <div class=\'comments\'></div>\r\n                        </div>\r\n                        <div style="float:left; margin-left:15px;width:300px;" class="related"></div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <!--/span-->\r\n\r\n            </div>\r\n            <!--/row-->\r\n        </div>\r\n        <!--/span-->\r\n    </div>\r\n    <!--/row-->\r\n\r\n    <hr>\r\n\r\n    <footer>\r\n        <p>&copy; Company 2013</p>\r\n    </footer>\r\n\r\n</div>\r\n\r\n\r\n';
}
return __p;
};

this["JST"]["app/templates/nowPlaying/nowPlaying.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<iframe width="560" height="386"\r\n        src="http://www.youtube.com/embed/'+
(source)+
'?html5=1&theme=dark&showinfo=0&modestbranding=1&controls=1&autoplay=0"\r\n        allowfullscreen style="border: 1px solid black;"></iframe>\r\n<h4>'+
(title.$t)+
'</h4>';
}
return __p;
};

this["JST"]["app/templates/nowPlaying/relatedItem.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<a href=\'#/video/'+
(source)+
'\'>\r\n    <span class="ux-thumb-wrap">\r\n        <span class="video-thumb ux-thumb yt-thumb-default-120 ">\r\n            <span class="yt-thumb-clip">\r\n                <span class="yt-thumb-clip-inner">\r\n                    <img width="120" alt="Thumbnail" src="'+
(media$group.media$thumbnail[1].url)+
'" >\r\n                    <span class="vertical-align">\r\n                </span>\r\n                </span>\r\n            </span>\r\n        </span>\r\n        <span class="video-time">'+
(duration)+
'</span>\r\n    </span>\r\n    <span class="title" title="'+
(title.$t.substr(0, 30))+
'">'+
(title.$t.substr(0, 20))+
'</span>\r\n    <span class="stat">by '+
(author[0].name.$t)+
'</span>\r\n    <span class="stat"> '+
(yt$statistics.viewCount)+
' views </span>\r\n</a>\r\n';
}
return __p;
};

this["JST"]["app/templates/nowPlaying/relatedList.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<ul class="unstyled">\r\n</ul>\r\n';
}
return __p;
};

this["JST"]["app/templates/search/item.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div>\r\n    <div class="yt-lockup2-thumbnail">\r\n        <a class="ux-thumb-wrap yt-uix-sessionlink yt-uix-contextlink contains-addto" href="#/video/'+
(source )+
'">\r\n            <span class="video-thumb ux-thumb yt-thumb-default-185 ">\r\n                <span class="yt-thumb-clip">\r\n                    <span class="yt-thumb-clip-inner">\r\n                        <img width="185" src="'+
(media$group.media$thumbnail[0].url )+
'" alt="Thumbnail">\r\n                        <span class="vertical-align"></span>\r\n                    </span>\r\n                </span>\r\n            </span>\r\n            <span class="video-time">'+
(duration )+
'</span>\r\n        </a>\r\n    </div>\r\n\r\n    <div class="yt-lockup2-content">\r\n        <h5 class="yt-lockup2-title" style="margin:0;">\r\n            <a href="#/video/'+
(source )+
'" title="'+
(title.$t )+
'">'+
(title.$t )+
'</a>\r\n        </h5>\r\n\r\n        <p class="yt-lockup2-meta"> by <strong>'+
(author[0].name.$t )+
'</strong>\r\n            <span class="metadata-separator">•</span>\r\n            1 year ago\r\n            <span class="metadata-separator">•</span>\r\n            '+
(yt$statistics.viewCount )+
' views\r\n        </p>\r\n\r\n        <p dir="ltr" class="yt-lockup2-description">'+
(media$group.media$description.$t.substr(0, 50) )+
'</p>\r\n\r\n        <div class="yt-lockup2-badges">\r\n            <ul class="item-badge-line">\r\n                <li class="item-badge-label ">HD</li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>';
}
return __p;
};

this["JST"]["app/templates/search/list.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="primary-col">\r\n    <ul class="unstyled">\r\n\r\n    </ul>\r\n</div>';
}
return __p;
};

this["JST"]["app/templates/search/search.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='';
}
return __p;
};

this["JST"]["app/templates/search/searchBar.html"] = function(obj){
var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};
with(obj||{}){
__p+='<div class="control-group">\r\n    <div class="controls">\r\n        <div class="input-append">\r\n            <input id="searchTerm" type="text" name="searchTerm">\r\n            <span class="add-on btn" id="searchBtn"><i class="icon-search"></i></span>\r\n        </div>\r\n    </div>\r\n</div>';
}
return __p;
};