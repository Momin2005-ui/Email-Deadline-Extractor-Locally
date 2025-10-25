from email_reader import EmailReader

# The class should now use your app password
email = "mohantester7@gmail.com"
password = "sdfp ncbk xtcj rwgk"  # You've already updated this in the file

print(f"Testing connection to {email}...")
reader = EmailReader(email, password)

# Try to connect
if reader.connect():
    print("Connection successful!")
    reader.disconnect()
    
    # Try to fetch some emails
    print("Fetching 3 recent emails...")
    emails = reader.get_recent_emails(days=7, limit=10)
    print(f"Found {len(emails)} emails")
    
    # Display email subjects
    for i, email in enumerate(emails):
        print(f"Email {i+1}: {email['subject']}")
else:
    print("Connection failed. Please check credentials and Gmail settings.")