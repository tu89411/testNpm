const appRoot = require('app-root-path');
const rootDir = appRoot.toString().replaceAll("\\", "/");
const fs = require('fs')


const testfile = "module.exports = {\n    mydir: '' }"
if (!fs.existsSync(rootDir + "/test-config.js")) {
    fs.writeFileSync(rootDir + "/test-config.js", testfile)
}
