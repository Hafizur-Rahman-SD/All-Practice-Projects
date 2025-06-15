import random

def determine_winner(user, computer):
    if user == computer:
        return "It's a draw!"
    
    # Define winning conditions
    if (user == 'w' and computer == 's') or \
       (user == 's' and computer == 'x') or \
       (user == 'x' and computer == 'w'):
        return "Computer wins!"
    else:
        return "You win!"

# Available choices
choices = ['w', 's', 'x']  # w = Water, s = Snake, x = Gun

# Get user input
user_input = input("Enter your choice (w for Water, s for Snake, x for Gun): ").lower()


# Validate user input
if user_input not in choices:
    print("Invalid input! Please choose w, s, or x.")
else:
    # Generate computer choice
    computer_input = random.choice(choices)

    print(f"You chose: {user_input}")
    print(f"Computer chose: {computer_input}")

    # Determine winner
    result = determine_winner(user_input, computer_input)
    print(result)
