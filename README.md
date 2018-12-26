# The Hitchhiker's Guide to Web Security

{:.no_toc}

## Table of Content
{:.no_toc}

- A markdown unordered list which will be replaced with the ToC, excluding the "Contents header" from above
{:toc}

## Objective

To understand the most common threats to web application security and what you can do to reduce the risk of your site being hacked.

## Recent news

- [2018-11-26 Malicious code found in npm package event-stream downloaded 8 million times in the past 2.5 months](https://snyk.io/blog/malicious-code-found-in-npm-package-event-stream)
- 2018-12-25 Ant Design Christmas Easter egg
    - <https://github.com/ant-design/ant-design/issues/13098>
    - <https://zhuanlan.zhihu.com/p/53262709>

## Cases Study

- Authorization with token in anonymous application
- Upload limitation on file format: 
- Sanitizing/Removing the `<script>` tag: https://sapjira.wdf.sap.corp/browse/KNGMHM02-11871 
- Security Vulnerability Scanning report

## Lynda - Security Training and Tutorials 

[More than 180 courses](https://www.lynda.com/Security-training-tutorials/2069-0.html)

- [Michael Solomon](https://www.lynda.com/Michael-Solomon/1992762007-1.html): CompTIA PenTest+ 
- [Mike Chapple](https://www.lynda.com/Mike-Chapple/2405061-1.html): CISM Cert, SSCP Cert, CompTIA CySA+, CISSP, CompTIA Security+
- [Malcolm Shore](https://www.lynda.com/Malcolm-Shore/2916700-1.html): Penetration Testing, 

### Programming Foudations: Web Security 

- [Watch this course](https://www.lynda.com/Web-Development-tutorials/Foundations-Programming-Web-Security/133330-2.html)
- [Complete Course Detailed Notes](./lynda-web-security).

### CompTIA Security+ (SY0-501) Cert Prep: 1 Threats, Attacks, and Vulnerabilities
- [Watch this course](https://www.lynda.com/Security-tutorials/CompTIA-Security-SY0-501-Cert-Prep-1-Threats-Attacks-Vulnerabilities/599625-2.html)
- [Incomplete Course Detailed Notes](./lynda-sy0-501-prep-1).

### Ethical Hacking: Website and Web Application Testing (Malcolm Shore)

Overview of web security, including Web Socket protocal

- [Watch this course](https://www.lynda.com/Linux-tutorials/Ethical-Hacking-Website-Web-Application-Testing/512727-2.html)

### Penetration Testing Essential Training (Malcolm Shore)

What is Pen test, basic bash scripting, Python, Kali ...

- [Watch this course](https://www.lynda.com/Metasploit-tutorials/Penetration-Testing-Essential-Training/628702-2.html)

### Node.js: Security
- [Watch this course](https://www.lynda.com/Node-js-tutorials/Node-js-Security/746317-2.html)

### React: Securing Applications
- [Watch this course](https://www.lynda.com/React-js-tutorials/React-Securing-Applications/636138-2.html)

### Ethical Hacking with JavaScript
- [Watch this course](https://www.lynda.com/JavaScript-tutorials/Ethical-Hacking-JavaScript/758646-2.html)

### DevSecOps: Automated Security Testing
- [Watch this course](https://www.lynda.com/Software-Development-tutorials/Security-Testing/667367-2.html)

### Security Tips Weekly
- [Watch this course](https://www.lynda.com/Security-tutorials/Security-Tips-Weekly/756318-2.html)
- Use a password manager
    - Stores a passwords for a different sites
    - Fills in passwords on websites
    - Store secure notes
    - Generate strong passwords, etc.
    - Secure all passwords with one master password
    - LastPass, KeePass, 1Password, etc.
    - Most can sync passwords between computers (browser extensions) and devices (android/ios app)

## Web Security Guideline

- OWASP(Open Web Application Security Project) Top 10
    - <https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project>
    - <https://github.com/OWASP/Top10>
- XSS Prevention Checklist
    - <https://www.owasp.org/index.php/XSS_(Cross_Site_Scripting)_Prevention_Cheat_Sheet>
- Excess XSS
    - <https://excess-xss.com/>

## Vulnerability Testing Lab

- WebGoat
    - WebGoat is a deliberately insecure web application (Java)
    - <https://github.com/WebGoat/WebGoat>
- DVWA
    - Damn Vulnerable Web App (DVWA) is a PHP/MySQL web application that is damn vulnerable. 
    - <http://www.dvwa.co.uk/>

## Penetration Tools

- Nmap, Netcat, tcpdump, netstat ...
- Kali Linux
- Vega Scanner
- Burp Suite
- ZAP
- ...


## Certifications on Security / Cybersecurity

- ISC^2 Certifications <https://www.isc2.org/Certifications>
    - [SSCP, The Systems Security Certified Practitioner](https://www.isc2.org/en/Certifications/SSCP)
- CompTIA Certifications <https://certification.comptia.org/certifications?level=cybersecurity>
    - CompTIA CySA+
    - CompTIA CASP+: Advanced Security Practitioner
    - CompTIA PenTest+
- ISACA Certification <http://www.isaca.org/Certification/Pages/default.aspx>
    - [CISM, Certified Information Security Manager](http://www.isaca.org/Certification/CISM-Certified-Information-Security-Manager/Pages/default.aspx)
    - [CISA, Certified Information Systems Auditor](http://www.isaca.org/CERTIFICATION/CISA-CERTIFIED-INFORMATION-SYSTEMS-AUDITOR/Pages/default.aspx)
- Cicso
    - [CCNA Security](https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna-security.html)


## UI5 / Fiori Frontend Security

### Cross-Site-Scripting (XSS)

#### XSS - Information

- How XSS works? As a result, XSS can hijack the session id
  - DOM-based XSS: no server involved
  - Manipulated Network request: client -> server -> client
  - URL params / input
- Solution
  - Output encoding as string, rather than JavaScript code
  - Input Validation
  - Secure Libraries

#### XSS - UI5 Control Protection

- Nearly all UI5 standard controls automatically do proper escaping. Application developers do not have to care about output encoding in these UI5 standard controls
- Exceptions to the rule: No escaping is done for SAP UI5 controls that allow embedding and rendering HTML:

  - `<sap.ui.richtexteditor.RichTextEditor>`
  - `<sap.ui.core.HTML>` 
    - <https://sapui5.hana.ondemand.com/#/api/sap.ui.core.HTML/overview>
    - <https://sapui5.hana.ondemand.com/test-resources/sap/ui/core/HTMLSanitizer.html>

- <https://mathiasbynens.be/notes/javascript-escapes>
- <https://mothereff.in/js-escapes>
- <https://github.com/mathiasbynens/jsesc>
- [MDN: encodeURIComponent()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)

### Click-Jacking

### URL Handling

### MIME-Type Sniffing

### Client Storage

### Cross-Site-Request-Forgery (CSRF)

### Cross-Origin-Request-Sharing (CORS)


## References

### Books or Web Pages

- [Google - Application Security - Learn XSS](https://www.google.de/intl/lt/about/appsecurity/learning/xss/)
- [O'Reilly: Security for Web Developers](https://www.oreilly.com/library/view/security-for-web/9781491928684/)
- [MDN: Website Security](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security)
- [Web 安全开发规范手册 V1.0](https://mp.weixin.qq.com/s/KKXs_KkwhJ_TM2bz7KbM2Q)

### SAP Related

- [UI5 Security Concepts](https://help.sap.com/viewer/468a97775123488ab3345a0c48cadd8f/7.51.4/en-US/91f3298b6f4d1014b6dd926db0e91070.html)
- [SAP Single Sign-On](https://help.sap.com/viewer/product/SAP_SINGLE_SIGN-ON/en-US)
- [SAP Gateway and OData (2nd Edition) (SAP PRESS)](https://sap.sharepoint.com/:b:/t/IncidentHandlingTeam1/EZ5_1RhNumxDnGStBklgV0wBDi5ZV6p-7S9H1KhP6mZuZg?e=3ZLuWU)
- [Product Standard Security](https://wiki.wdf.sap.corp/wiki/x/CwvML)
- [SECulum - UI5 / Fiori Frontend Security](https://wiki.wdf.sap.corp/wiki/pages/viewpage.action?pageId=1682838250)
- [SECulum- Web Security](https://wiki.wdf.sap.corp/wiki/display/SECulum/SECulum-+Web+Security)
