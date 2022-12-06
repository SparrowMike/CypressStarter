# Cypress Starter

## Get Started
- npm install
- npm run cypress


## User Journey
<table class="tg">
<thead>
  <tr>
    <th class="tg-c3ow">Category</th>
    <th class="tg-c3ow">Task</th>
    <th class="tg-c3ow">User Actions</th>
    <th class="tg-c3ow">Possible Errors</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-9wq8" rowspan="28">Start</td>
    <td class="tg-9wq8" rowspan="22">Register</td>
    <td class="tg-lboi" rowspan="3">Load application</td>
    <td class="tg-0pky">Unable to load Page</td>
  </tr>
  <tr>
    <td class="tg-0pky">Wrong URL - Expected URL /app/register</td>
  </tr>
  <tr>
    <td class="tg-0pky">If loaded into /app/login, cannot click on 'Register Now' anchor tag</td>
  </tr>
  <tr>
    <td class="tg-lboi" rowspan="4">Click on Register Now</td>
    <td class="tg-0pky">Register Now anchor tag disabled</td>
  </tr>
  <tr>
    <td class="tg-0pky">Clicking on 'Register Now' anchor tag does not show Register Modal</td>
  </tr>
  <tr>
    <td class="tg-0pky">Login Modal is not closed/hidden</td>
  </tr>
  <tr>
    <td class="tg-0pky">Wrong URL - Expected URL /app/register</td>
  </tr>
  <tr>
    <td class="tg-0pky">Fill in First Name, Last Name</td>
    <td class="tg-0pky">Unable to focus on input field</td>
  </tr>
  <tr>
    <td class="tg-0pky">Fill in Valid Email</td>
    <td class="tg-0pky">Unable to focus on input field</td>
  </tr>
  <tr>
    <td class="tg-0pky">Fill in Username</td>
    <td class="tg-0pky">Unable to focus on input field</td>
  </tr>
  <tr>
    <td class="tg-lboi" rowspan="2">Fill in Password and Confirm</td>
    <td class="tg-0pky">Register button is disabled</td>
  </tr>
  <tr>
    <td class="tg-0pky">Unable to focus on input field</td>
  </tr>
  <tr>
    <td class="tg-lboi" rowspan="5">Form Validation</td>
    <td class="tg-0pky">Unable to check for strength of password</td>
  </tr>
  <tr>
    <td class="tg-0pky">Unable to check if passwords matched</td>
  </tr>
  <tr>
    <td class="tg-0pky">Unable to detect if username has already been used</td>
  </tr>
  <tr>
    <td class="tg-0pky">Unable to detect false email pattern e.g. <a href="mailto:&#115;&#x6f;&#109;&#x65;&#x74;&#x68;&#105;&#x6e;&#103;&#64;&#101;&#109;&#97;&#x69;&#x6c;&#x2e;&#x78;&#x79;&#122;"><span style="color:#905">something@email.xyz</span></a></td>
  </tr>
  <tr>
    <td class="tg-0pky">Unable to give error when first name or last name not in correct format</td>
  </tr>
  <tr>
    <td class="tg-lboi" rowspan="4">Email Verification</td>
    <td class="tg-0pky">Verification modal does not show</td>
  </tr>
  <tr>
    <td class="tg-0pky">Submit button does not work/disabled</td>
  </tr>
  <tr>
    <td class="tg-0pky">Verification code does not work</td>
  </tr>
  <tr>
    <td class="tg-0pky">No email was sent to user on registering without any errors</td>
  </tr>
  <tr>
    <td class="tg-0pky">TOS and PP links work</td>
    <td class="tg-0pky">Links does not bring user to correct page</td>
  </tr>
  <tr>
    <td class="tg-9wq8" rowspan="6">Login</td>
    <td class="tg-0pky">Register</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">With registered Username and Password</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">With registered Email and Password</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">With registered Username (small caps) and Password</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">With wrong Username and Password (Error)</td>
    <td class="tg-0pky"></td>
  </tr>
  <tr>
    <td class="tg-0pky">With Username and Wrong Password (Error)</td>
    <td class="tg-0pky"></td>
  </tr>
</tbody>
</table>
