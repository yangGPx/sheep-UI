rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "update" &&
git branch -M main &&
git remote add origin git@github.com:yangGPx/sheep-UI-website.git &&
git push -f -u origin main &&
cd -
echo git@github.com:yangGPx/sheep-UI-website.git