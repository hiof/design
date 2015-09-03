import Ember from 'ember';

export default Ember.Route.extend({


    model: function() {



        return Ember.$.getJSON("http://hiof.no/api/v1/designguidelines/").then(function(data) {

            //var sections = [];
            //Ember.$.each(data, function(key, val) {
            //    sections.push(val);
            //});
            //console.log(data);
            return data;
        });

        //var documentTemplateSections = Ember.$.getJSON("http://hiof.no/api/v1/designguidelines/?type=ducmenemplate").then(function(data) {
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

        //var webComponentSections = Ember.$.getJSON("http://hiof.no/api/v1/designguidelines/?type=webcomponents").then(function(data) {
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

    }

});
