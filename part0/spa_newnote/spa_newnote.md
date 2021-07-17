title SPA - Note creation


actor User
User->Browser:

note over User:
User creates a new note on SPA
end note

Browser->Server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
Server->Browser: {"message":"note created"}
note right of Browser: 
DOM eventListener on form submit
end note
Browser->Browser: 
Browser->Server: HTTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server->Browser: Datas: [{"content": "asd", "date": "2021-07-15T23:46:23.515Z"},...]
