#for genarte a random number in import this libary from python.

import random
'''
1 for snake
-1 for water 
0 for gun
'''
computer = random.choice([-1, 0, 1])
mystr = input("Enter your choice: ")
youDict = {"s": 1, "w": -1, "g": 0}
reverseDict = {1: "Snake", -1: "Water", 0: "Gun"}

you = youDict[mystr]

# By now we have 2 numbers (variables), you and computer.

print(f"You chose {reverseDict[you]}\nComputer chose {reverseDict[computer]}")

if(computer == you):
    print("Its a draw")

else:
    if(computer ==-1 and you == 1): 
        print("You win!")

    elif(computer ==-1 and you == 0):
        print("You Lose!")

    elif(computer == 1 and you == -1):
        print("You lose!")

    elif(computer ==1 and you == 0):
        print("You Win!")

    elif(computer ==0 and you == -1):
        print("You Win!")

    elif(computer == 0 and you == 1):
        print("You Lose!")

    else:
        print("Something went wrong!")

# This code implements a simple game of Water-Snake-Gun where the user plays against the computer.
# The user inputs their choice, and the computer randomly selects one of the three options.