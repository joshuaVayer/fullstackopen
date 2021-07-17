title SPA version

actor User

note over User
User visits the web page
end note
User->Browser:

Browser->Server: HTTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
Server->Browser: spa.html
Browser->Server: HTTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
Server->Browser: spa.js

note over Browser
spa.js make a background call
end note

Browser->Server: HTTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
Server->Browser: Datas: [{"content": "asd", "date": "2021-07-15T23:46:23.515Z"},...]

