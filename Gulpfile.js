var gulp = require('gulp'),
    opn = require('opn'),
    connect = require('gulp-connect');
	
gulp.task('webserver', function() {
    connect.server({
        host: server.host,
        port: server.port,
        livereload: true
    });
});	

var server = {
    host: 'localhost',
    port: '9000'
};

gulp.task('openbrowser', function() {
    opn( 'http://' + server.host + ':' + server.port + '/app/' );
});

	
gulp.task('default', ['webserver', 'openbrowser']);