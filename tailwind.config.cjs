const fs = require("fs");
const vm = require("vm");

const configFile = process.env.TAILWIND_CONFIG_FILE;
if (!configFile) throw new Error("TAILWIND_CONFIG_FILE must identify the source configuration.");

const configScript = fs.readFileSync(configFile, "utf8");

const context = { tailwind: {} };
vm.runInNewContext(configScript, context, { filename: configFile });

module.exports = context.tailwind.config;
