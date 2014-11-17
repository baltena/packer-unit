var grunt = require('grunt');

var karmaconfig;

if (grunt.file.exists('test/karma.config.js')) {
    karmaconfig = require('../../../test/karma.config.js')
}

else {
    karmaconfig = {
        karma: {
            options: {
                basePath: '',
                frameworks: ['jasmine'],
                files: [
                    'bower_components/angular/angular.js',
                    'bower_components/angular-*/angular-*.js',
                    'src/app/*.js',
                    'src/app/**/*.js',
                    'test/unit/**/*.js'
                ],
                browsers: [
                    'Chrome'
                ]
            },
            unit: {
                options: {
                    singleRun: true
                }
            },
            watch: {
                options: {
                    singleRun: false,
                    autoWatch: true
                }
            }
        }
    }
}

module.exports = karmaconfig;
