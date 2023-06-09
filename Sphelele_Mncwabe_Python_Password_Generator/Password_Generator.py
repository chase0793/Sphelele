import random


uppercase_letters = "ABCDEFGHIJKLMNOPQRSTVUXYZ"
numbers = "1234567890 "
lowercase_letters =  uppercase_letters.lower()

upper, lower, num = True, True, True

all = ""

if upper:
    all += uppercase_letters
if lower:
    all += lowercase_letters
if num:
    all+= numbers

lenght = 15
amount  = 1

for x in range (amount):
    password = "".join(random.sample(all,lenght))
    print(password)