#!/bin/bash
VERSION="1.0.0"
USER='guillain'

add(){
  echo "add: ${1}, comment: ${2}"
  git add -f "${1}"
  git commit -m "${2}" "${1}"
}

git pull
add package.json	"App definition and packages requirement, ${VERSION}"
add config.js.default	"Template config file, to copy in config.js, ${VERSION}"
add sparkbotcmd.js	"Main script, to run with 'node sparkbotcmd.js', ${VERSION}"
add mySparky.js		"Sparky functions define as chat bot functions, ${VERSION}"
add LICENSE		"License file"
add README.md		"README file, ${VERSION}"
add FEATURES.md         "File with features list, ${VERSION}"
add .gitignore		"List of local files to ignore, ${VERSION}"
add git.sh		"File to commit files of the app in git hub"
add app                 "Shell script to run the app, ${VERSION}"
add "log/error.log"	"Log file"
git push

# echo "Publish under version: ${VERSION}"
#npm login ${USER}
#npm version ${VERSION}
#npm publish
