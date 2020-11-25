# Part I - Input and Output Commands

- [x] Navigate to the unix_tests folder;
- [x] Create a text file through the terminal with the name skills2.txt and dependence on the Internet, Unix and Bash values, one on each line.
- [x] Refer 5 more items to your list of skills and then print the ordered list on the terminal. 🤓
- [x] Count lines line has the skills2.txt file.
- [x] Create a file called top_skills.txt using skills2.txt, containing the first 3 skills in alphabetical order.
- [x] Create a new file called phrases2.txt from the terminal and some phrases of your choice.
- [x] Count the number of lines that are defined as br letters.
- [x] Count the number of lines that are not classified as br letters.
- [x] Place two country names at the end of the phrasees2.txt file.
- [x] Create a new file called bunch_of_things.txt with the contents of the phrases2.txt and countries.txt files
- [x] Order the bunch_of_things.txt file.

# Part II - Permissions
- [x] Navigate to the unix_tests folder;
- [x] Run the command ls -l and see what the file permissions are;
- [x] Change the permission of the bunch_of_things.txt file so that all users can have read and write access, and check that it is correct with the command ls -l;
- [x] Take the write permission of the bunch_of_things.txt file for all users, check if it is correct with the command ls -l;
- [x] Go back to the permission of the bunch_of_things.txt file for the one initially listed using the chmod 644 bunch_of_things.txt command.

# Part III - Processes & Jobs
- [x] List all processes;
- [x] Now use the command sleep 30 &;
- [x] Use the process listing to find the PID of the process that is executing the sleep 30 command and finish its execution (kill the process);
- [x] Run the sleep 30 command again, but now without the &. Then, make it continue running in the background;
- [x] Create a background process that runs the sleep command for 300 seconds.
- [x] Create two more processes that run the sleep command for 200 and 100 seconds, respectively.
- [x] You must create them in foreground (without using &) and suspend them (by pressing ctrl + z) after each one starts to execute.
- [x] Check that only the sleep 300 process is running with the jobs command. Stop running this process.
- [x] You will need to bring the process to foreground (fg) and suspend it (ctrl + z), or send a signal).
- [x] Resume execution of the sleep 100 process in the background with the bg command.
- [x] Finish the execution of all sleep processes (kill the processes).

# (Bonus) - Part IV - The awakening of the terminal
- [x] And to finish with the energy look, up there, how about learning some fun UNIX commands now? ☝ 🎊
- [x] Read this article to do the warm-up exercises below
- [x] Open the terminal and run the cmatrix command. When you are feeling like Neo, press ctrl + c to return to the terminal;
- [x] Create a text file called fortune.txt that contains your luck of the day. Use only one command line. Tip: use the fortune command, and the> operator;
- [x] Count how many words your lucky phrase of the day has. Tip: use the wc command;
- [x] Run the sl command. Now try sl -F;
- [x] Run the cowsay command. Now make the kitty say the phrase that is recorded in the file fortune.txt;
- [x] Find the prime factors of the number 42 using the factor command;
- [x] See how your luck of the day is upside down. Tip: use the rev command.
- [x] Run the telnet towel.blinkenlights.nl command and wait a few seconds. Remember that you have more exercises to do! 😅
