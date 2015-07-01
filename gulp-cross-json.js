"use strict";
let through = require("through2");
let gutil = require("gulp-util");
let crossJSON = require("cross-json");
let PluginError = gutil.PluginError;
const PLUGIN_NAME = "gulp-cross-json";
let files = [];
function gulpCrossJSON() {
	return through.obj(function(file, enc, cb) {
		if (file.isBuffer()) {
			files.push(file.path);
		}
		if (file.isStream()) {
			this.emit("error", new PluginError(PLUGIN_NAME, "Streams aren't supported yet."));
			return cb();
		}
		this.push(file);
		cb();
	}).on("finish", function() {
		crossJSON.call(null, files);
	});
}
module.exports = gulpCrossJSON;