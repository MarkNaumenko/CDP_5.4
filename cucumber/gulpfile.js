var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    protractor = require('gulp-protractor').protractor,
    util = require('gulp-util'),
    exec = require('child-process-promise').exec,
    view = require('./tests/profile/view');

//gulp test --browser=chrome --view=mobile --tags=@important

gulp.task('test',function(){
    process.env.BROWSER = util.env.browser || 'chrome';
    process.env.VIEW = util.env.view || 'desktop';
    process.env.TAGS = util.env.tags || '@important';

    return exec('gulp protractor')
        .then(function (results) {
            console.log(results.stdout);
        })
        .catch(function (err) {
            console.error('ERROR: ',err.stdout);
        });
});

gulp.task('test-multi',function(){
    return exec('gulp protractor-multi')
        .then(function (results) {
            console.log(results.stdout);
        })
        .catch(function (err) {
            console.error('ERROR: ',err.stdout);
        });
});

gulp.task('protractor', function() {

    switch(process.env.VIEW) {
        case "desktop":
            process.env.VIEW = view.desktop;   
            break
        case "mobile":
            process.env.VIEW = view.mobile;
            //process.env.TAGS = view.mobileTag; 
            break
        default :
            process.env.VIEW = view.desktop; 
            break
    };

    console.log(process.env.BROWSER);
    console.log(process.env.VIEW);
    console.log(process.env.TAGS);

    return gulp.src(['./*/*.js'])
        .pipe(
            protractor({
                'configFile': "config.js"
            })
        );
});

gulp.task('protractor-multi', function() {
    return gulp.src(['./*/*.js'])
        .pipe(
            protractor({
                'configFile': "config-multi.js"
            })
        );
});