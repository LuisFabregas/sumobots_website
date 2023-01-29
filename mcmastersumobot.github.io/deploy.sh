#!/usr/bin/env sh

# abort on errors
set -e

# build website
rm -r docs
echo "Docs Removed"
npm run build
echo "Website Built"
mv dist docs
echo "Folder Renamed"

cp CNAME docs

# commit changes to master
git add -A
read -p "Commit Message: " x
git commit -m "${x}"
git push