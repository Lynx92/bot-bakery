# abort on errors 
set -e 

# build 
echo Building. this may take a minute... 
npm run build 

# if you are deploying to a custom domain add a CNAME (uncomment the next 3 lines) 
#cd docs 
#echo 'yourcustomdomain.com' > CNAME 
#cd - 

# deploy 
echo Deploying.. 
git add -A 
git commit -m 'deploy' 
git push -f https://github.com/lynx92/bot-bakery.git master
