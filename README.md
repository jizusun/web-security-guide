# The Hitchhiker's Guide to Web Security
{:.no_toc}

## Table of Content
{:.no_toc}

* A markdown unordered list which will be replaced with the ToC, excluding the "Contents header" from above
{:toc}

## Objective

To understand the most common threats to web application security and what you can do to reduce the risk of your site being hacked.

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

### General

- [O'Reilly: Security for Web Developers](https://www.oreilly.com/library/view/security-for-web/9781491928684/)
- [Lynda: Programming Foundations: Web Security](https://www.lynda.com/Web-Development-tutorials/Foundations-Programming-Web-Security/133330-2.html)
- [MDN: Website Security](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Website_security)
- [Web 安全开发规范手册 V1.0](https://mp.weixin.qq.com/s/KKXs_KkwhJ_TM2bz7KbM2Q)

### SAP Related
- [UI5 Security Concerns](https://openui5.hana.ondemand.com/1.36.4/docs/guide/91f3298b6f4d1014b6dd926db0e91070.html)
- [SAP Single Sign-On](https://help.sap.com/viewer/product/SAP_SINGLE_SIGN-ON/en-US)
- [SAP Gateway and OData (2nd Edition) (SAP PRESS)](https://sap.sharepoint.com/:b:/t/IncidentHandlingTeam1/EZ5_1RhNumxDnGStBklgV0wBDi5ZV6p-7S9H1KhP6mZuZg?e=3ZLuWU)
- [Product Standard Security](https://wiki.wdf.sap.corp/wiki/x/CwvML)
- [SECulum - UI5 / Fiori Frontend Security](https://wiki.wdf.sap.corp/wiki/pages/viewpage.action?pageId=1682838250)
- [SECulum- Web Security](https://wiki.wdf.sap.corp/wiki/display/SECulum/SECulum-+Web+Security)