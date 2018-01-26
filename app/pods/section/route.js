import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
    activateDropdowns: function(){
      //console.log('Document is ready');

    },
    model: function() {



        return $.getJSON('https://www.hiof.no/api/v1/designguidelines/');

        //var documentTemplateSections = Ember.$.getJSON("http://www.hiof.no/api/v1/designguidelines/?type=ducmenemplate").then(function(data) {
        //
        //    var files = [];
        //    Ember.$.each(data.results, function(key, val) {
        //        //console.log(val);
        //        var thisUrl = val.url;
        //        //var removeURl = thisUrl.replace(/^.*\/(.*)$/, "$1");
        //        //var stripedFilename = removeURl.replace('HIOF-template-', "");
        //        val.filename = thisUrl.replace(/^.*\/(.*)$/, "$1").replace('HIOF-template-', "").replace('.zip', "").replace(/^.*\.(.*)$/, "$1");
        //        //console.log(stripedFileEnding);
        //
        //        files.push(val);
        //
        //    });
        //    //console.log(files);
        //    return files;
        //});

        //var webComponentSections = Ember.$.getJSON("http://www.hiof.no/api/v1/designguidelines/?type=webcomponents").then(function(data) {
        //
        //    var files = [];
        //    Ember.$.each(data.results, function(key, val) {
        //        //console.log(val);
        //        var thisUrl = val.url;
        //        //var removeURl = thisUrl.replace(/^.*\/(.*)$/, "$1");
        //        //var stripedFilename = removeURl.replace('HIOF-template-', "");
        //        val.filename = thisUrl.replace(/^.*\/(.*)$/, "$1").replace('HIOF-template-', "").replace('.zip', "").replace(/^.*\.(.*)$/, "$1");
        //        //console.log(stripedFileEnding);
        //
        //        files.push(val);
        //
        //    });
        //    //console.log(files);
        //    return files;
        //});
    },
    afterModel: function(){
      $(document).on('click', '.dropdown-toggle', function(e) {
            e.preventDefault();
            $('.dropdown-menu').removeClass('.in');
            $(this).siblings('.dropdown-menu').collapse('toggle');
            //console.log('Clicked on nav');
            //Ember.$(".navbar-toggle").click();
        });
      //Ember.$('[data-spy="scroll"]').each(function () {
      //  var $spy = Ember.$(this).scrollspy('refresh')
      //});
    }
    //init: function(){
    //  this.activateDropdowns;
    //}
    //,
    //setupController: function() {
    ////console.log('test'); // "Hold Your Horses"
    //}


});
