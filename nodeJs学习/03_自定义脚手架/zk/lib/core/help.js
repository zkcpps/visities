const program = require("commander");

const helpOptions = () => {
  program.option("-z --zk", "a zk option");

  program.option("-s --src <src>", "a source folder");
  program.option(
    "-d --dest <dest>",
    "a destination folder, 例如: -d src/pages, 错误/src/pages"
  );
  program.option("-f --framework <framework>", "your framework name");

  program.on("--help", function () {
    console.log("");
    console.log("usage");
    console.log("   zk -v");
    console.log("   zk -version");
  });
};

module.exports = helpOptions;
