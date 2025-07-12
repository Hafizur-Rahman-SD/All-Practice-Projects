# 💰 Personal Expense Tracker App (Tkinter + JSON)

A simple but powerful personal Expense Tracker desktop app built using **Python**, **Tkinter GUI**, and **JSON** for data storage.  
Track your **incomes**, **expenses**, and **monthly report** with date and time support — beautifully managed with a modern GUI.

---

## 📸 Demo

>In Assets folder 
---

## 🛠️ Features

✅ Add Income and Expense with notes  
✅ Automatically saves date and time (e.g., `11 July 2025`, `02:45 PM`)  
✅ Data stored locally in `data.json` (no external DB needed)  
✅ View All Entries in a sortable table  
✅ Delete any entry from the table  
✅ Monthly report shows total income, expense, and balance  
✅ Clean, user-friendly GUI with **Tkinter**  
✅ Built-in `.exe` export supported via **PyInstaller**  
✅ App icon support (`.ico`) included  
✅ Responsive and smooth user experience  

---

## 📁 Project Structure
Expense Tracker app/
├── main.py # Main GUI code with comment 
├── data_handler.py # JSON read/write/delete logic
├── data.json # Auto-generated data storage file


Run the app:

bash from file 

python main.py


📦 How to Create .exe File (Optional)
Requires PyInstaller

bash

pip install pyinstaller
pyinstaller --onefile --windowed  main.py



💻 Built With
1.Python 🐍
2.Tkinter (built-in GUI)
3.JSON (for lightweight data storage)
4.PyInstaller (for EXE export)

🙋‍♂️ Author
Made with 💙 by Hafizur Rahman
SEU CSE Student | Aspiring Full-Stack Developer
GitHub Profile:https://github.com/Hafizur-Rahman-SD

📌 Future Improvements (Optional Ideas)
Export to CSV / Excel
Login system
Dashboard with pie charts
SQLite or local database support
Mobile version with Kivy or React Native

