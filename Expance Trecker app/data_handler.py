# data_handler.py
import json
import os
from datetime import datetime

file_name = "data.json"

# Load existing data
def load_data():
    if not os.path.exists(file_name):
        return {"income": [], "expense": []}
    with open(file_name, "r") as f:
        return json.load(f)

# Save a new entry
def save_data(entry_type, amount, note):
    data = load_data()
    now = datetime.now()
    formatted_date = now.strftime("%d %B %Y")     # Example: 11 July 2025
    formatted_time = now.strftime("%I:%M %p")      # Example: 02:45 PM

    new_entry = {
        "amount": amount,
        "note": note,
        "date": formatted_date,
        "time": formatted_time
    }

    data[entry_type].append(new_entry)
    with open(file_name, "w") as f:
        json.dump(data, f, indent=4)

# Delete a selected entry
def delete_data(entry_type, amount, note, date, time):
    data = load_data()
    filtered_entries = [
        entry for entry in data[entry_type]
        if not (entry["amount"] == amount and entry["note"] == note and entry["date"] == date and entry["time"] == time)
    ]
    data[entry_type] = filtered_entries
    with open(file_name, "w") as f:
        json.dump(data, f, indent=4)
