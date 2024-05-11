#! /bin/bash

echo "01. creating unix_tests and navigating to it"
mkdir unix_tests && echo "created unix_tests"
cd unix_tests
echo "pwd: $(pwd)"

echo "02. creating trybe.txt" 
touch trybe.txt && echo "created trybe.txt"

echo "03. copying trybe.txt to trybe_backup.txt" 
cp trybe.txt trybe_backup.txt && echo "copied trybe.txt to trybe_backup.txt"

echo "04. renaming trybe.txt to another_filename.txt"
mv trybe.txt another_filename.txt && echo "renamed trybe.txt to another_filename.txt"

echo "05. creating backup"
mkdir backup && echo "created backup"

echo "06. moving trybe_backup.txt to backup"
mv trybe_backup.txt backup && echo "moved trybe_backup.txt to backup"

echo "07. creating backup2"
mkdir backup2 && echo "backup2 created"

echo "08. moving trybe_backup.txt from backup to backup2"
mv ./backup/trybe_backup.txt ./backup2

echo "09. deleting backup"
rmdir backup && echo "backup deleted"

echo "10. renaming backup2 to backup"
mv backup2 backup && echo "renamed backup2 to backup"

echo -e "11. showing current directory path:\n$(pwd)\nlisting files:\n$(ls)"

echo "12. deleting backup"
rm -rf backup && echo "backup deleted"

echo "13. clearing terminal"
read -p "press enter to continue..."
cd .. && clear
echo -e "Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL" > skills.txt

echo -e "14. showing the 5 initial lines of skills.txt:\n$(head -5 skills.txt)"

echo -e "15. showing the 4 last lines of skills.txt:\n$(tail -4 skills.txt)"

echo "16. delete all .txt files"
rm ./*.txt && echo "deleted all .txt files in current folder"
