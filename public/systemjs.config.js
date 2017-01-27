/**
 * Created by mlingolu on 1/26/17.
 */

(function () {

    var map = {
        'app' : 'js/app',
        '@angular':'node_modules/@angular',
        'rxjs':'node_modules/rxjs'
    };


    var packages ={
        'app' : { main : 'main.js', defaultExtension : 'js'},

        '@angular/common' : { main : 'index.js', defaultExtension :'js'},
        '@angular/core' : { main : 'index.js', defaultExtension :'js'},
        '@angular/http' : { main : 'index.js', defaultExtension :'js'},
        '@angular/router' : { main : 'index.js', defaultExtension :'js'},
        '@angular/forms' : { main : 'index.js', defaultExtension :'js'},
        '@angular/compiler' : { main : 'index.js', defaultExtension :'js'},
        '@angular/platform-browser' : { main : 'index.js', defaultExtension :'js'},
        '@angular/platform-browser-dynamic' : { main : 'index.js', defaultExtension :'js'},

        'rxjs' : { defaultExtension : 'js'}
    };



    var config = {
        map : map,
        packages : packages,
        typescriptOptions: {
            tsconfig: true
        }
    };

    System.config(config);


})(this)