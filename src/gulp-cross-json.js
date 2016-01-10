"use strict";
import through from "through2";
import gulpUtil from "gulp-util";
import { crossCompare } from "cross-json";
const PluginError = gulpUtil.PluginError;
const PLUGIN_NAME = "gulp-cross-json";
let files = [];
export default function gulpCrossJSON() {
	return through.obj((file, encoding, callback) => {
		if (file.isBuffer()) {
			files.push(file.path);
		}
		if (file.isStream()) {
			this.emit("error", new PluginError(PLUGIN_NAME, "Streams aren't supported yet."));
		}
		return callback(null, file);
	}).on("finish", () => {
		crossCompare.call(null, ...files);
	});
};