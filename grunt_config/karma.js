module.exports = {
	karma: {
		options: {
			basePath: '',
   			frameworks: ['jasmine'],
      		files: [
      			'bower_components/angular/angular.js',
      			'bower_components/angular-mocks/angular-mocks.js',
      			'src/app/*.js',
      			'src/app/**/*.js',
      			'test/unit/**/*.js'
      		],
      		browsers:[
      			'Chrome'
      		],
      		reporters: ['progress', 'coverage'],
		    preprocessors: {
		      'src/app/*.js': ['coverage'],
		      'src/app/*/*.js': ['coverage']
		    },
		    coverageReporter: {
		      type : 'html',
		      dir : 'coverage/'
		    }
    	},
		unit: {
			options: {
	      		singleRun : true
	    	}
	    },
	    watch: {
			options: {
	      		singleRun : false,
	      		autoWatch: true
	    	}
	    }
	}
}