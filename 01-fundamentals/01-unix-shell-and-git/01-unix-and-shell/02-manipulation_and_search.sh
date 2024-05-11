#! /bin/bash

mkdir unix_tests_search
cd unix_tests_search && curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

echo -e "01. showing countries.txt content:\n$(cat countries.txt)"

echo -e "02. showing countries.txt content page to page: (hit q when you're done)"
read -p "press enter to continue..."
less countries.txt

echo -e "03. searching for Zambia in countries.txt (please type /Zambia and hit enter when you see the country list)"
read -p "press enter to continue..."
less countries.txt

echo "04. searching for Brazil in countries.txt"
grep Brazil countries.txt && echo "found Brazil in countries.txt"

echo "05. searching for brazil (case insensitive) in countries.txt"
grep -i brazil countries.txt && echo "found brazil (case insensitive) in countries.txt"
echo -e "fox
another fox
cat
foxy fox
just foxy
and dog" > phrases.txt

echo "06. search for lines without the word fox in phrases.txt:"
grep -v fox phrases.txt

echo -e "07. word count on phrases.txt: $(wc -w phrases.txt | awk '{ print $1 }')"

echo -e "08. line count on phrases.txt: $(wc -l phrases.txt | awk '{ print $1 }')"

echo "09. creating empty.tbt and empty.pdf"
touch empty.tbt empty.pdf && echo "created empty.tbt and empty.pdf"

echo -e "10. listing files:\n$(ls)"

echo -e "11. listing .txt files:\n$(ls *.txt)"

echo -e "11. listing .tbt and .txt files:\n$(ls | grep -E '.txt|.tbt')" # alternative: ls *.t(b|x)t

echo -e "12. showing ls manual:\n$(man ls)"
