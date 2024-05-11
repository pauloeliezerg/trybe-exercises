#! /bin/bash

echo "01. installing (w/ apt-get) and running cmatrix"
sudo apt-get install cmatrix
cmatrix

echo "02. installing (w/ apt-get) fortune and send its output to fortune.txt"
sudo apt-get install fortune
fortune > fortune.txt

echo "03. counting words in fortune.txt: $(wc -w fortune.txt | awk '{ print $1 }')"

echo "04. installing (w/ apt-get) sl and running sl and sl -F"
sudo apt-get install sl
sl
sl -F

echo "05. installing (w/ apt-get) and running cowsay and sending fortune.txt output to cowsay"
sudo apt-get install cowsay
cowsay show
cowsay < fortune.txt

echo "06. executing 'factor 42' (prime factors of the input)"
factor 42

echo "07. reversing fortune.txt with rev"
rev fortune.txt

echo "08. installing telnet (w/ apt-get) and running 'telnet towel.blinkenlights.nl'"
sudo apt-get install telnet
telnet towel.blinkenlights.nl
