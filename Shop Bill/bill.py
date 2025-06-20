# Simple Bill Generator in Python

print("===== Welcome to Hafizur's Shop =====")

# Input from user
customer_name = input("Enter Customer Name: ")
product_name = input("Enter Product Name or code: ")
price_per_item = float(input("Enter Price per Item (Taka)/$: "))
quantity = int(input("Enter Quantity: "))

# Calculate total
#hre are formula to calculate total
total = price_per_item * quantity

# Optional: Add VAT or Discount
vat_percent = 15  # 15% VAT
vat_amount = (vat_percent / 100) * total
grand_total = total + vat_amount

# Print bill
print("\n========== Bill ==========")
print(f"Customer Name : {customer_name}")
print(f"Product       : {product_name}")
print(f"Price         : {price_per_item} Taka")
print(f"Quantity      : {quantity}")
print(f"Total         : {total:.2f} Taka")
print(f"VAT ({vat_percent}%)     : {vat_amount:.2f} Taka")
print(f"Grand Total   : {grand_total:.2f} Taka")
print("============================")
print("🧾 Thank you for shopping with us!")
