const { promisify } = require("util");
const path = require("path");
const fs = require("fs");

const program = require("commander");
const downloadRepo = promisify(require("download-git-repo"));
const open = require("open");

const log = require("../utils/log");
const terminal = require("../utils/terminal");
const { ejsCompile, writeFile, mkdirSync } = require("../utils/file");
const repoConfig = require("../config/repo_config");

const createProject = async (project, otherArg) => {
  // 1.提示信息
  log.hint("zkc helps you create your project, please wait a moment~");

  // 2.clone项目从仓库
  await downloadRepo(repoConfig.REACT_GITEE_REPO, project, { clone: true });

  // 3.执行终端命令npm install
  // terminal.exec('npm install', {cwd: `./${project}`});
  const npm = process.platform === "win32" ? "npm.cmd" : "npm";
  await terminal.spawn(npm, ["install"], { cwd: `./${project}` });

  // 4.打开浏览器
  open("http://localhost:3002/");

  // 5.运行项目
  await terminal.spawn(npm, ["run", "dev"], { cwd: `./${project}` });
};

const handleEjsToFile = async (name, dest, template, filename) => {
  // 1.获取模块引擎的路径
  const templatePath = path.resolve(__dirname, template);
  const result = await ejsCompile(templatePath, {
    name,
    lowerName: name.toLowerCase(),
  });

  // 2.写入文件中
  // 判断文件不存在,那么就创建文件
  mkdirSync(dest);
  const targetPath = path.resolve(dest, filename);
  writeFile(targetPath, result);
};

const addComponent = async (name, dest) => {
  handleEjsToFile(name, dest, "../template/react-template.js.ejs", `index.tsx`);
  handleEjsToFile(
    name,
    dest,
    "../template/react-less-template.less.ejs",
    `index.module.less`
  );
};

const addPage = async (name, dest) => {
  addComponent(name, dest);
  handleEjsToFile(
    name,
    "src/routers",
    "../template/react-router.js.ejs",
    `${name.toLowerCase()}.ts`
  );
};

// const addStore = async (name, dest) => {
//   handleEjsToFile(name, dest, "../template/vue-store.js.ejs", "index.js");
//   handleEjsToFile(name, dest, "../template/vue-types.js.ejs", "types.js");
// };

module.exports = {
  createProject,
  addComponent,
  addPage,
  // addStore,
};
