rm -rf dist

npm run example:build

cd dist

echo 'imagepreivew.yinode.tech' > CNAME

git init
git add -A
git commit -m "deploy"

git push -f git@github.com:zhangzhengyi12/image-preview-vue.git master:gh-pages