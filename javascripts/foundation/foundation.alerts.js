!function(t){"use strict";Foundation.libs.alerts={name:"alerts",version:"4.3.2",settings:{animation:"fadeOut",speed:300,callback:function(){}},init:function(e,n,i){return this.scope=e||this.scope,Foundation.inherit(this,"data_options"),"object"==typeof n&&t.extend(!0,this.settings,n),"string"!=typeof n?(this.settings.init||this.events(),this.settings.init):this[n].call(this,i)},events:function(){var e=this;t(this.scope).on("click.fndtn.alerts","[data-alert] a.close",function(n){var i=t(this).closest("[data-alert]"),r=t.extend({},e.settings,e.data_options(i));n.preventDefault(),i[r.animation](r.speed,function(){t(this).remove(),r.callback()})}),this.settings.init=!0},off:function(){t(this.scope).off(".fndtn.alerts")},reflow:function(){}}}(Foundation.zj,this,this.document);