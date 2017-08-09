module.exports=function(grunt){

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less:{
      development:{
        options:{
          compress:true
        },
        files:[{'dist/<%=pkg.name %>.css':['src/**/*.less']}]
      }
    },
    watch:{
      files:['*.js','src/**/*.js','src/**/*.jsx','src/**/*.less'],
      tasks:['browserify','less']
    },
    browserify:{
      dist:{
        options:{
          transform:[['babelify',{presets:['es2015','react','stage-3']}]],
        browserifyOptions:{
          debug:true,
          // transform:['reactify'],
             extensions:['.jsx']
        }

        },
        files:[{
          'dist/<%= pkg.name %>.js':['src/**/*.js','src/**/*.jsx']
        }]
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-less')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.registerTask('default',['build'])
  grunt.registerTask('build',['browserify','less','watch'])
}
