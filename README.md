# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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





