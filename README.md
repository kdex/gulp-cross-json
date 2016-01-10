# gulp-cross-json
## About
This project provides a gulp task for [cross-json](https://github.com/kdex/cross-json).
## Installation
```bash
$ npm install -D gulp-cross-json
```
# Usage
```js
import gulp from "gulp";
import crossJSON from "gulp-cross-json";
gulp.task("i18n", () => {
	return gulp.src(["lang/*.json"])
		.pipe(crossJSON());
});
```