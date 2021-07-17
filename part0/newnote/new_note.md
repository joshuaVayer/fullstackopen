title Note creation


actor User
User->Browser:

note over User:
User write something and submit the form...
end note

Browser->Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note

note over Server:
Redirect https://studies.cs.helsinki.fi/exampleapp/notes
end note

Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
Server->Browser: notes.html
Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
Server->Browser: notes.html
Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
Server->Browser: main.js

note over Browser
main.js make a background call
end note

Browser->Server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server->Browser: [{"content": "asd", "date": "2021-07-15T23:46:23.515Z"},...]
Browser->User:

note over User:
Browser render message list with his added
end note
