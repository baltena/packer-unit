module.exports = {
	karma: {
		options: {
			basePath: '',
   			frameworks: ['jasmine'],
      		configFile: 'test/karma.config.js',
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
		      dir : './coverage/'
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
