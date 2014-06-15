/**
 * Created by Julian on 15.06.2014.
 */
(function(){
    var PageLoader = window.PageLoader = {
        _pages : [],
        add : function(page){
            this._pages.push(page);
        },
        load : function(callback){
            var count = this._pages.length;
            var pages = this._pages;
            var i;
            for(i = 0; i < pages.length; i++){
                pages[i].load(function(){
                    count -= 1;

                    if (count === 0){
                        var html = "";
                        for(i = 0; i < pages.length; i++){
                            html += pages[i].render();
                        }
                        console.log(html);
                        $('#presentation').html(html);
                        callback();
                    }
                });
            }

        }
    };
})();