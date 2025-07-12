import tkinter as tk
from tkinter import ttk, messagebox
from data_handler import save_data, load_data, delete_data
from datetime import datetime

root = tk.Tk()
root.title("Personal Expense Tracker")
root.geometry("700x550")
root.configure(bg="white")

# 
def add_entry(entry_type):
    amount = amount_entry.get()
    note = note_entry.get()

    if not amount:
        messagebox.showerror("Error", "Amount is required!")
        return

    try:
        amount = float(amount)
    except:
        messagebox.showerror("Error", "Amount must be a number!")
        return

    save_data(entry_type, amount, note)
    messagebox.showinfo("Success", f"{entry_type.capitalize()} added successfully!")
    amount_entry.delete(0, tk.END)
    note_entry.delete(0, tk.END)

def show_all_data():
    data = load_data()

    table_window = tk.Toplevel(root)
    table_window.title("All Entries")
    table_window.geometry("700x400")

    columns = ("type", "amount", "note", "date", "time")
    tree = ttk.Treeview(table_window, columns=columns, show="headings")

    for col in columns:
        tree.heading(col, text=col.capitalize())
        tree.column(col, width=120)

    for entry in data.get("income", []):
        tree.insert("", tk.END, values=("Income", entry["amount"], entry["note"], entry["date"], entry["time"]))

    for entry in data.get("expense", []):
        tree.insert("", tk.END, values=("Expense", entry["amount"], entry["note"], entry["date"], entry["time"]))

    tree.pack(expand=True, fill="both", padx=10, pady=10)

    def delete_selected():
        selected = tree.selection()
        if not selected:
            messagebox.showwarning("Select", "Please select a row to delete.")
            return
        values = tree.item(selected[0])["values"]
        entry_type = values[0].lower()
        amount = float(values[1])
        note = values[2]
        date = values[3]
        time = values[4]
        delete_data(entry_type, amount, note, date, time)
        tree.delete(selected[0])
        messagebox.showinfo("Deleted", "Entry deleted successfully!")

    tk.Button(table_window, text="Delete Selected", command=delete_selected, bg="red", fg="white").pack(pady=10)

def show_report():
    data = load_data()
    total_income = sum(entry["amount"] for entry in data.get("income", []))
    total_expense = sum(entry["amount"] for entry in data.get("expense", []))
    balance = total_income - total_expense
    month = datetime.now().strftime("%B %Y")

    report_window = tk.Toplevel(root)
    report_window.title("Monthly Report")
    report_window.geometry("350x250")
    report_window.configure(bg="white")

    tk.Label(report_window, text=f"Report for {month}", font=("Arial", 14, "bold"), bg="white").pack(pady=15)
    tk.Label(report_window, text=f"Total Income: Tk {total_income:.2f}", fg="green", font=("Arial", 12), bg="white").pack(pady=5)
    tk.Label(report_window, text=f"Total Expense: Tk {total_expense:.2f}", fg="red", font=("Arial", 12), bg="white").pack(pady=5)
    tk.Label(report_window, text=f"Balance: Tk {balance:.2f}", font=("Arial", 12, "bold"), bg="white").pack(pady=10)

# === UI ===

tk.Label(root, text="Personal Expense Tracker", font=("Helvetica", 16, "bold"), bg="white").pack(pady=10)

frame = tk.Frame(root, bg="white")
frame.pack(pady=10)

tk.Label(frame, text="Amount (Tk):", bg="white").grid(row=0, column=0, sticky="e", padx=5, pady=5)
amount_entry = tk.Entry(frame, width=30)
amount_entry.grid(row=0, column=1, padx=5, pady=5)

tk.Label(frame, text="Note (reason):", bg="white").grid(row=1, column=0, sticky="e", padx=5, pady=5)
note_entry = tk.Entry(frame, width=30)
note_entry.grid(row=1, column=1, padx=5, pady=5)

btn_frame = tk.Frame(root, bg="white")
btn_frame.pack(pady=15)

tk.Button(btn_frame, text="Add Income", command=lambda: add_entry("income"), bg="#4CAF50", fg="white", width=15).grid(row=0, column=0, padx=10)
tk.Button(btn_frame, text="Add Expense", command=lambda: add_entry("expense"), bg="#F44336", fg="white", width=15).grid(row=0, column=1, padx=10)

tk.Button(root, text="Show All Data", command=show_all_data, width=30).pack(pady=10)
tk.Button(root, text="Show Monthly Report", command=show_report, width=30).pack(pady=5)

tk.Label(root, text="Made by Hafizur Rahman 💻", font=("Arial", 9), fg="gray", bg="white").pack(side="bottom", pady=5)

root.mainloop()
