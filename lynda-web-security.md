---
layout: default
title: "Lynda.com: Programming Foundations: Web Security"
categories: drafts
---

* Author:  [Kevin Skoglund](https://www.lynda.com/Kevin-Skoglund/104-1.html)
* Released: 2/19/2014 
* Duration: 3h 33m
* Skill Level: Beginner
* Course URL: <https://www.lynda.com/Web-Development-tutorials/Foundations-Programming-Web-Security/133330-2.html>
* Course Description
```
Learn about the most important security concerns when developing websites, and what you can do to keep your servers, software, and data safe from harm. Instructor Kevin Skoglund explains what motivates hackers and their most common methods of attacks, and then details the techniques and mindset needed to craft solutions for these web security challenges. Learn the eight fundamental principles that underlie all security efforts, the importance of filtering input and controlling output, and smart strategies for encryption and user authentication. Kevin also covers special considerations when it comes to credit cards, regular expressions, source code managers, and databases.

This course is great for developers who want to secure their client's websites, and for anyone else who wants to learn more about web security.
Topics include:
Why security matters
What is a hacker?
How to write a security policy
Cross-site scripting (XSS)
Cross-site request forgery (CSRF)
SQL injection
Session hijacking and fixation
Passwords and encryption
Secure credit card payments
```

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
- Limit feedback: on a login page, if a username and password don't match, don't say which one of the two failed.
- 


### Blacklisting and whitelisting

### Map exposure points and data passageways

## 3. Filtering Input, Controlling Output

### Regulating requests

### Validating input

### Sanitizing data

### Labeling variables

### Keeping code private

### Keeping credentials private

### Keeping error messages vague

### Smart logging

## 4. The Most Common Attacks

### Cross-site scripting (XSS)

### Cross-site request forgery (CSRF)

### SQL injection

### URL manipulation

### Faked requests and forms

### Cookie visibility and theft

### Session hijacking

### Session fixation

### Remote system execution

### File-upload abuse

### Denial of service

## 5. Encryption and User Authentication

### Password encryption

### Salting passwords

### Password requirements

### Brute-force attacks

### Using SSL for login

### Protecting cookies

### Regulating access privileges

### Handling forgotten passwords

### Multi-factor authentication

## 6. Other Areas of Concern

### Credit card payments

### Regular expression flaws

### Conversions and transformations

### Buffer overflows

### Source code managers

### Database security

### Server security

## Conclusion

### Goodbye