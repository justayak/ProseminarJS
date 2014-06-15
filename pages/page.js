/**
 * Created by Julian on 14.06.2014.
 */
(function(){
    var Page = window.Page = function(url, data){
        if (typeof url !== 'undefined') this.url = url;
        if (typeof data !== 'undefined') this.data = data;
    };

    Page.prototype.template = "PAGE";
    Page.prototype.data = {};
    Page.prototype.url = "pages/page.html";

    Page.prototype.load = function(callback){
        var self = this;
        $.ajax({
            type : 'GET',
            url : this.url,
            success : function(template){
                self.template = template;
                callback.apply(self, [template]);
            }
        });
    }


    Page.prototype.render = function(){
        return '<div class="presentationPage">' + Mustache.render(this.template, this.data) + '</div>';
    }

})();