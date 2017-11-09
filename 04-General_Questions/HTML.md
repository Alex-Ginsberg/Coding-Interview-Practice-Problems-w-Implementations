# HTML Questions

#### What does 'doctype' do?
The doctype declaration is always found at the beginning of an HTML document. It is an instruction to the browser
that indicates what version of HTML is being used.
<!DOCTYPE html> refers to HTML5

#### What's the difference between full standards mode, almost standards mode and quirks mode?
Different modes are used to satisfy different browsers. 'Quirks mode' is used to support browsers before the adoption
of web standards. 'Full standards mode' supports the behavior described by HTML and CSS specifications. 'Almost standards
mode' implements a small number of quirks. The type of mode your browser will use is based on the 'doctype' declaration at the 
beginning of the file.

#### What's the difference between HTML and XHTML?
XHTML is stricter, meaning it will be supported by a wider range of browsers. The structure must follow a certain guidline,
since XML is  markdown language. This will ensure that all browsers can interpret it.

#### What are data attributes used for?
Data attributes allow us to store extra information on HTML elements. The data can then be read with JS (article.dataset.columns). They can also be accessed with CSS.

#### What are the building blocks of HTML5?
More semantic text markup
New form elements
Video and audio
New JS API
Canvas and SVG
New communications API
Geolocation API
Web worker API
New data storage

#### Describe the difference between a cookie, sessionStorage and localStorage.
Cookie - small piece of data sent from the website and stored on the client's browser, enabling stateful information.
sessionStorage - stateful data that will be cleared when the page's session ends.
localStorage - stateful information that will exist until explicitly cleared.

#### Describe the difference between <script>, <script async> and <script defer>.
'script' allows you to define client-side script. 'script async' means it will be executed asynchronously as soon as its available. 'script defer' means the script will not run until the rest of the page has finished loading.

#### Why put CSS links in the head?
This way the CSS will load before the page loads, meaning the user will see some styles while the page is loading, rather than a blank screen.

#### Why put scripts at the bottom of the body?
When the parse encounters a script tag, the parser will stop looking at the rest of the page until it has finished evaluation the rest of the page.

#### What is progressive rendering?
Techniques used to render content for display as quickly as possible. Really only useful know for unreliable mobile connections. Lazy loading will only load content when it comes into the browser's viewport. 

#### Why you would use a srcset attribute in an image tag? Explain the process the browser uses when evaluating the content of this attribute.
'srcset' defines a set of images we will allow the borwser to choose between, and what size each image is. The browser will look at the devices width, work out which media condition if the first to be true, look at the slot given to the media query, load the image referenced in 'srcset' that most closely mathces the chosen slot size.