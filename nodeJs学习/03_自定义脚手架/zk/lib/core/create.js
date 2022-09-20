const program = require("commander");

const {
  createProject,
  addComponent,
  addPage,
  addBuleTable,
  addBlueCustomTable,
} = require("./actions");

const createCommands = () => {
  // 创建项目指令
  program
    .command("create <project> [otherArgs...]")
    .description("clone a repository into a newly created directory")
    .action(createProject);

  program
    .command("addcpn <name>")
    .description(
      "add react component, 例如: kc addcpn NavBar [-d src/components]"
    )
    .action((name) =>
      addComponent(name, program.dest || `src/components/${name}`)
    );

  program
    .command("addpage <name>")
    .description("add vue page, 例如: coderwhy addpage Home [-d dest]")
    .action((name) => {
      addPage(name, program.dest || `src/pages/${name}`);
    });

  program
    .command("add-bule-table <name>")
    .description("add blueTable page, 例如: zk add-bule-table Home [-d dest]")
    .action((name) => {
      addBuleTable(name, program.dest || `src/pages/${name}`);
    });

  program
    .command("add-bule-custome-table <name>")
    .description(
      "add blueCustomTable page, 例如: zk add-bule-custome-table Home [-d dest]"
    )
    .action((name) => {
      addBlueCustomTable(name, program.dest || `src/pages/${name}`);
    });
  // program
  //   .command("addstore <name>")
  //   .description("add vue store, 例如: coderwhy addstore favor [-d dest]")
  //   .action((name) => {
  //     addStore(name, program.dest || `src/store/modules/${name.toLowerCase()}`);
  //   });

  // program.command("test").action(() => {
  //   // terminal.spawn("npm", ['--version']);
  //   // terminal.exec("npm --version");
  //   // open('http://localhost:8080/');`
  // });
};

module.exports = createCommands;
