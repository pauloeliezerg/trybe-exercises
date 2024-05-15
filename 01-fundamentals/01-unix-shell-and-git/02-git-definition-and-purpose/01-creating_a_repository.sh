#! /bin/bash

mkdir my-first-repo
cd my-first-repo
git init
touch README.md
git add .
git commit -m "created readme file"
git checkout -b add-readme
echo -e "# My first README.md\n" >> README.md
git add .
git commit -m "added title to README.md"
git checkout main
git merge add-readme

echo "01 - going to the main branch and creating a new branch called update-readme"
git checkout main
git checkout -b update-readme

echo "02 - accessing the update-readme branch and creating a file called infos.txt"
git checkout update-readme
touch infos.txt

echo "03 - staging and commiting changes"
git add .
git commit -m "added infos.txt"

echo "04 - addind first and last name to infos.txt"
echo "Paulo Filho" >> infos.txt

echo "05 - staging and commiting changes"
git add .
git commit -m "added first and last name to info.txt"

echo "06 - creating a new branch from the update-readme branch called add-infos"
git checkout -b add-infos

echo "07 - accessing the add-infos branch and writing step-by-step instructions on how versioning works in README.md"
git checkout add-infos
echo -e "\tLorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a ultrices ipsum. Nulla malesuada hendrerit augue, eget ultricies nunc vulputate vitae. Nullam facilisis quam nec tellus ultricies, non rhoncus ex ornare. Vestibulum sagittis dolor quis diam varius accumsan. Phasellus ut convallis orci. Nunc consequat interdum risus et elementum. Suspendisse at consequat libero. Etiam eget diam nunc." >> README.md

echo "08 - staging and commiting changes"
git add .
git commit -m "updated README.md"

echo "09 - going back to update-readme branch and merging add-infos branch"
git checkout update-readme
git merge add-infos

echo "10 - going back to main branch and merging update-readme branch"
git checkout main
git merge update-readme
