(function($){
    $.fn.jExpand = function(){
        var element = this;

        $(element).find("tr:odd").addClass("odd");
        $(element).find("tr:not(.odd)").hide();
        $(element).find("tr:first-child").show();

        $(element).find("tr.odd").click(function() {
            $(this).next("tr").fadeToggle();
            /* have only one description toggled at a time */
            $(this).next("tr").siblings("tr.desc").fadeOut();
        });
        
    }    
})(jQuery); 