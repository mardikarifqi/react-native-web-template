'use strict';

const path = require('path')
const lnk = require('lnk')
const dir = __dirname

const appDirName = 'app'

// Create symlink in /src/app to /app
lnk.sync(path.join(dir, 'src', appDirName), path.join(dir))

// Showing users how to change name
console.log("\x1b[43m", "\x1b[30m", "ADVICE:", "\x1b[0m", "See https://stackoverflow.com/questions/43293234/changing-the-package-name-in-a-react-native-app how to rename this project. Be careful, because some of the android files removed due to bug.")
console.log("\x1b[43m", "\x1b[30m", "ADVICE:", "\x1b[0m", "See https://stackoverflow.com/questions/33370175/how-do-i-completely-rename-an-xcode-project-i-e-inclusive-of-folders how to rename XCode peoject. Or see my commit on what's changed in Rename XCode.")
