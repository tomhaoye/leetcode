# Read from the file words.txt and output the word frequency list to stdout.
awk '{for(i=1;i<=NF;i++){print $i}}' words.txt |sort|uniq -c|sort -r| awk '{print $2,$1}'
