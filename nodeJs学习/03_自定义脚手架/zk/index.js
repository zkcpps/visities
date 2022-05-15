#!/usr/bin/env node
const cmd = require("commander");

const helpOptions = require("./lib/core/help");

// 定义显示模块的版本号
cmd.version(require("./package.json").version);

// 给help增加其他选项
helpOptions();

// 解析终端指令
cmd.parse(process.argv);
