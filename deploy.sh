#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
 echo 'www.andresbarrera.me' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
 git push -f git@github.com:frontier7x/frontier7x.github.io.git main:gh-pages

# if you are deploying to https://<USERNAME>.github.io/<REPO>
#git push -f git@github.com:frontier7x/portfolio-react.git main:gh-pages

cd -
