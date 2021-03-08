module.exports = function(grunt) {
  var web = 'livelia';
  var theme = web + '/';
  var source = 'src/';
  var source_content = source + 'wp-content/';
  var source_themes = source_content + 'themes/';
  var source_theme = source_themes + theme;
  var source_plugins = source_content + 'plugins/';
  var dist = 'dist/';
  var dist_content = dist + 'wp-content/';
  var dist_themes = dist_content + 'themes/';
  var dist_theme = dist_themes + theme;
  var dist_plugins = dist_content + 'plugins/';
  var dir_local = 'c:/xampp/htdocs/' + web ;
  var dir_local_theme = dir_local + '/wp-content/themes/' + web;
  var url_local = 'localhost/' + web;

  grunt.initConfig({
    sass: {
      dev: {
        files: [{
          expand: true,
          cwd: source_theme + 'sass/',
          src: ['style.scss'],
          dest: source_theme,
          ext: '.css'
        }]
      },
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: source_theme + 'sass/',
          src: ['.scss'],
          dest: source_theme,
          ext: '.css'
        }]
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({grid: 'autoplace'})
        ]
      },
      dist: {
        src: source_theme + 'style.css',
        dest: source_theme + 'style.pre.css'
      }
    },
    cssmin: {dist: {
        src: source_theme + 'style.pre.css',
        dest: dist_theme + 'style.css'
      }
    },
    clean: {
      dist: {
        src: [dist]
      },
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: source_theme + 'img/',
          src: ['*.{png,jpg,gif,svg}'],
          dest: dist_theme + 'img/'
        }]
      },
    },
    copy: {
      dist: {
        files: [
          {
            expand: true,
            cwd: source_theme,
            src: ['*.php','inc/*.php'],
            dest: dist_theme
          },
        ],
      },
      style: {
        files: [
          {
            expand: true,
            cwd: source_theme,
            src: ['style.css','style.css.map'],
            dest: dist_theme
          },
        ],
      },
      php: {
        files: [
          {
            expand: true,
            cwd: source_theme,
            src: ['*.php','**/*.php'],
            dest: dist_theme
          },
        ],
      },
      fonts: {
        files: [
          {
            expand: true,
            cwd: source_theme + 'fonts/',
            src: ['*'],
            dest: dist_theme + 'fonts/'
          },
        ],
      },
      css: {
        files: [
          {
            expand: true,
            cwd: source_theme + 'css/',
            src: ['*'],
            dest: dist_theme + 'css/'
          },
        ],
      },
      sass: {
        files: [
          {
            expand: true,
            cwd: source_theme + 'sass/',
            src: ['**'],
            dest: dist_theme + 'sass/'
          },
        ],
      },
      js: {
        files: [
          {
            expand: true,
            cwd: source_theme + 'js/',
            src: ['*'],
            dest: dist_theme + 'js/'
          },
        ],
      },
      plugins: {
        files: [
          {
            expand: true,
            cwd: source_plugins,
            src: ['**'],
            dest: dist_plugins
          }
        ],
      },
      localhost: {
        expand: true,
        cwd: dist,
        src: ['**'],
        dest: dir_local
      }
    },
    ftp_push: {
      options: {
        host: 'ftp.dwebs.dev',
        username: 'dwebs',
        password: 'E6ael77$',
        dest: '/' + web + '.dwebs.dev/',
        incrementalUpdates: false,
      },
      dist: {
        files: [{
          expand: true,
          cwd: dist,
          src: ['**'],
          dest: ''
        }]
      },
    },
    browserSync: {
      dev: {
          bsFiles: {
            src : [dir_local_theme]
          },
          options: {
            watchTask: true,
            proxy: url_local
          }
      }
    },
    watch: {
      options: {
        livereload: true
      },
      sass: {
        files: [source_theme + 'sass/style.scss'],
        tasks: ['sass:dev']
      },
      diststyle: {
        files: [source_theme + 'style.css'],
        tasks: ['clean:dist','copy:style','copy:localhost']
      },
      distphp: {
        files: [source_theme + '*.php', source_theme + '**/*.php'],
        tasks: ['clean:dist','copy:php','copy:localhost']
      },
      images: {
        files: [source_theme + 'img/*.{png,jpg,gif,svg}'],
        tasks: ['clean:dist','imagemin:dist','copy:localhost']
      },
      distjs: {
        files: [source_theme + 'js/*.js'],
        tasks: ['clean:dist','copy:js','copy:localhost']
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-ftp-push');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default',['browserSync:dev','watch']);
  
  grunt.registerTask('distribute',[
    'clean:dist',
    'sass:dev',
    'postcss:dist',
    'cssmin:dist',
    'imagemin:dist',
    'copy:fonts',
    'copy:css',
    'copy:sass',
    'copy:js',
    'copy:php',
    'copy:plugins'
  ]);
  
  grunt.registerTask('distribute-css',[
    'clean:dist',
    'sass:dev',
    'postcss:dist',
    'cssmin:dist',
    // 'copy:sass',
  ]);

  grunt.registerTask('pushweb',['ftp_push:dist']);

  grunt.registerTask('pushlocal', ['copy:localhost']);

};