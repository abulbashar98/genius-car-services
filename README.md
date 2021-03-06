# Getting Started with Create React App

This project was Deployed in Firebase [Genius Car Services](https://genius-car-services-52c92.firebaseapp.com/).


## Used Multi Cursor ShortCuts


## .env.local Structure

REACT_APP_apiKey=AIzaSyAvv5EpRsOVKFyaS4-3X7v7LQRlU0VDhMA
REACT_APP_authDomain=genius-car-services-52c92.firebaseapp.com
REACT_APP_projectId=genius-car-services-52c92
REACT_APP_storageBucket=genius-car-services-52c92.appspot.com
REACT_APP_messagingSenderId=29716294212
REACT_APP_appId=1:29716294212:web:20d0b6577704ab4855aa11


## firebase.init.js config structure

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};




## 3rd Commit Details

* Positioned Shared Components Like Header and Footer Over and Under Routes...
* Inside Services Component inside Home Pages, we Learned How To create a Image hosting Using Direct Link From ImgDB....
* Copied Data from Programming Hero genius car services repository and pasted then in services.json inside Public folder...
* Created State to Store and Change Services,
* Loaded data using useEffect... 
* Using map on services got each service one Object one by one sent them in Created Service component using props....
* Shown name and img of single service inside service Component...

## 4th Commit Details

* Created Responsive Layout for Services Using Vanilla Css
* Created Components and Fetched Images From Programming Hero Github to Create DataBase for Experts
* Created Experts Responsive Layout Using Bootstrap

## 5th Commit Details

* Installed React Bootstrap in order to Use Components..
* Created Banner Component in Banner Folder
* Copied Carousel Slider From React Bootstrap with dependent state...
* imported banner images from Images Folder..
* Placed them dynamically in img url
* Copied Navbar from React Bootstrap and Placed in Header Component...
* Imported logo from Images and used in Header, Adjusted size using Height as attribute..
* Changed Services layout slightly, got them inside Container...
* Services img w-100 


## 6th Commit Part:-1 about using React Bootstrap Component as Link

* We swapped out our Previous NavBar with the one consists Responsive Behavior from React bootstrap
* Inserted our imported logo in nav brand inside an image again
* Made our navbar sticky='top'
* Important one is we Change href="" into to='' using steps...
1. clear href="#home" or whatever there is....
2. put to='home' or somewhere else there....
3. Inside This <Nav.Link> Component from react bootstrap we can assert a prop to Make it's behavior like a Link... (Doesn't Reload)

e.g(<Nav.Link as={Link} to='home'>)



## 6th Commit Part:- 2 about Dynamic Route Recap....

* first of all Declared a Dynamic Route using Route Parameter... e.g(path='/service/:serviceId')...

* From Service Component using button on Click we can navigate by sending id with click and navigating to a dynamic link.... e.g(navigate(`/sercice/${id}`))

* This dynamic link we are using to route Saves in Route Parameter :- :serviceId
* We Can access That from the element={<ServiceDetail>} we move to using useParams.. And from useParams we Need to destructure the exact route Parameter we set before while declaring Route... e.g(const {serviceId} = useParams())


## 7th Commit Part:- 1 

* Created navigation using #destination and id="target"...
* Used page#destination to navigate from other pages....
* Created a 404 Route and Component too....
* Created A Login and Register Component inside Login Folder...


## 7th Commit Part:- 2 

* Styled Copied Login from React Bootstrap....
* Use useRef Hook to access input value....

## Steps to access input value using useRef...

1. declare a nameVariable to take value from useRef hook...
e.g(const nameRef = useRef(''))

2. give useRef() an initial value like an Empty string...

3. Declare ref to the targeted input field with targeted nameVariable that we previously declared....

4. On Event like onClick, or onSubmit take event as parameter then set value of current input field in a variable using event.current.value....
e.g(const email = emailRef.current.value)



## 8th Commit Details

* Created register form in Previously declared Register Component....
* Using HTML and vanilla Css...
* Created to link to navigate to Login Route....
* 3rd way of accessing input value in React: is using event.target.{name}.value
* Created a File for environment variable



## 10th Commit Details

* First enabled Firebase Email and Password Authentication from Authentication Settings for genius car services
* Installed react-firebase-hooks, npm install --save react-firebase-hooks
* onSubmit for Register Component useCreateUserWithEmailAndPassword
* Navigate to home if the user is Found, else showing the error...
* Conditionally rendering Login and sign out Link using user existence that we accessed using useAuthState(auth)... 
* Created Require Auth Component destructured Children to implement...
* Created A Proceed Checkout button in Service Detail...
* Onclick of proceed Checkout navigating to CheckOut component that we have just created..
* Declared checkout route inside RequireAuth
* Redirecting from Login Page using from,location,state,pathname, and navigated


## 11th Commit Details

* Changed Require Auth Component Position
* Created a Social Login Component
* Created a Divider using div_s and or in between 
* Created Buttons to login With Google using React icon, with Facebook using and optimizing img with photoPea magic wand and export size, Same with Github With...
* Showing the Social Login Component both under Login and Register Form....




## 12th commit Details

* Imported useSignInWithGoogle from react-firebase-hooks...
* On click of Button using for Google sign in if the user is found we are going to Navigate to home page
* Else the error is shown using a variable...
* Not using the Default documentation return function as it stops the render for Social Login button, because it returns from there...


## 13th Commit Details

* Enable Github provider in Firebase App
* Github account > setting > developer settings > oAuth applications 
* Registered app, Copied Homepage url, Copied callback authorization from firebase and pasted to github
* After registration Copied Client Id and Secret to Enable Github
*  Created Github Sign in In Social Login Component with react-firebase-hooks
* Handle const variables with different names and conditional rendering with help of Optional Chaining....

## 14th Commit Details

* Made Changes in Login And Register Form to Make Some design Consistency...
* Created a link to Reset password in Login Component without any Redirection ....
* Imported useSendPasswordResetEmail amd used sendPasswordResetEmail with Async and Await onCLick to THis Link.. 
* Created A Checkbox to Accept terms and Conditions in Register Component
* Used  Css pseudo type  Class (input:not([type=checkbox])) to style input:checkbox


## 15th commit Details, About Conditional Css styling

* using event.target.terms.checked we can access the value of checkbox... and use it to 
createUserWithEmailAndPassword Conditionally....

* But to use Conditional css Styling like Conditional rendering... We Declared a state, for checkbox value with default value of false....

* onClick of input:checkbox we use a function to toggle the value using setAgreed from useState, e.g(setAgreed(!agreed))...

* Then using the State styled label with two different ideas, 
1. simple ternary operator
2. ternary operator inside template string

* Using state of checkbox we can toggle the attribute disabled of input:submit button...
e.g(disabled={!agreed})

## 16th Commit Details, About Sending Email verification in multiple ways, and update profile using async await

1. 1st way 
* At first notice how we can send a verification email when we use useCreateUserWithEmailAndPassword , with auth parameter we can send an object to send email verification with a boolean value
e.g(auth, {sendEmailVerification : true})

2. 2nd way 
* Using async and await we can sendEmail verification on Submit... That means the user is going to be created and then the awaiting function to send email verification works

3. we can update profile using the same system of second way of sending email verification...

* import useUpdate profile, using async await when the user is created then we can use updateProfile function with await... and update the fields we are getting from input fields of the form inside updateProfileI() parameter space with an Object....

* Notice the keys existing in user object in Console.log
e.g({displayName: name})



## 17th Commit, About Solving Reload Redirect to LOgin page issue, and React-Toastify


* Problem:- Logged in yet whenever we Reload from a protected Route, website was redirecting to LOgin Page....

* Reason:- Because the Protected Route is inside Require Auth, on Reload the Compiler goes into Require Auth and before Getting Access to the user it defines the user is null and return the <Navigate> option.....

* Fix:- So to solve this problem, there is a return with useSignInWithEmailAndPassword, Which is Loading, by using the Loading we can access the user after loading ends on Reload...

* Used Bootstrap Spinner Component in a Loading Component inside shared page...

* then used Loading Component in Login, register, and other pages with loading,sending returns...

* installed react-toastify to use instead of alert, npm install --save react-toastify

* imported 
1. import { ToastContainer, toast } from 'react-toastify';
2. import 'react-toastify/dist/ReactToastify.css';

* Used <TOastContainer> with JSX

* used toast replacing alert




