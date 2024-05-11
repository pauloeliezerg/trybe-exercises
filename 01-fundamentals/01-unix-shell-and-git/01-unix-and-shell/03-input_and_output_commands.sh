#! /bin/bash

echo "01. creating unix_test_skills and navigate to it"
mkdir unix_test_skills
cd unix_test_skills

echo "02. creating skills2.txt"
echo -e "Internet
Unix
Bash" > skills2.txt

echo "03. adding 5 more lines to skills2.txt"
echo "HTML
CSS
JavaScript
React
SQL" >> skills2.txt

echo "04. counting lines in skills2.txt: $(cat skills2.txt | wc -l)"

echo "05. creating top_skills.txt with first 3 lines of skills2.txt sorted"
sort < skills2.txt | head -3 > top_skills.txt && echo "created top_skills.txt"

echo "06. creating phrases2.txt"
echo -e "The quick brown fox jumps over the lazy dog.
Quick fox jumps nightly above wizard.
The quick onyx goblin jumps over the lazy dwarf." > phrases2.txt && echo "created phrases2.txt"

echo "07. counting the number of lines with 'br': $(grep br phrases2.txt | wc -l)"

echo "08. counting the number of lines without 'br': $(grep -v br phrases2.txt | wc -l)"

echo "09. adding two country names at the end of phrases2.txt"
echo -e "Japan
Australia" >> phrases2.txt

echo "10. creating bunch_of_things.txt"
cd .. && cat unix_test_skills/phrases2.txt unix_tests_search/countries.txt > unix_test_skills/bunch_of_things.txt && echo "created bunch_of_things.txt"

echo "11. sorting bunch_of_things.txt"
sort unix_test_skills/bunch_of_things.txt -o unix_test_skills/bunch_of_things.txt
