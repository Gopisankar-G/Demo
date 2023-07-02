import React, {useState}  from 'react';
import { FaGithub } from 'react-icons/fa';
import { MdContacts } from 'react-icons/md';
import './App.css';
import AddItem from "./AddItem";
import Content from "./Content";
//import { useEffect } from 'react';


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNo, setContactNo] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginContactNo, setLoginContactNo] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [register, setRegister] = useState(false);
  const [currentPage, setCurrentPage] = useState('Abstract');
  //const API_URL = "http://localhost:3100/items";
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('')

  /*useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        console.log(response)
        const listItems = await response.json();
        console.log(listItems)
        setItems(listItems);
      } catch (err) {
        console.log(err.stack)
      }
    }

    (async () => await fetchItems())()
  }, [])*/

  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(name, email, contactNo, password);

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('contactNo', contactNo);
    localStorage.setItem('password', password);
    alert('Registration successful!');
    setRegister(false)
    setName('');
    setEmail('');
    setContactNo('');
    setPassword('');

  };
  const handleregister = (e) => {
    setRegister(true);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
       
    
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedEmail = localStorage.getItem('email');
    const storedContactNo = localStorage.getItem('contactNo');
    const storedPassword = localStorage.getItem('password');

    if (
      (loginEmail === storedEmail || loginContactNo === storedContactNo) &&
      loginPassword === storedPassword
    ) {
      alert('Login successful!');
      setLoggedIn(true)
      handlePageChange('abstract');
    } else {
      alert('Invalid credentials. Please try again!');
    }
  };

  const Abstract = [
    {
      id: 1,
      main: (`Hi, I'm Gopisankar Gunasekaran`),
      title: 'Abstract',
      description: 'This project is a basic registration and login system implemented using React. Users can register by providing their required data. The registration data is stored in local storage. Users can also login using credential data. If the login credentials are valid, a dashboard is displayed.',

    },
  ];

  const Contact = [
    {
      id: 2,
      githubLink: 'https://github.com/Gopisankar-G',
      ContactNo: localStorage.getItem('contactNo'),
    },
  ];

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item }
    const listItems = [...items, addNewItem]
    setItems(listItems)
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
  }
  const handleDelete = (id) => {
    const listItems = items.filter((item) =>
      item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('New Item Submitted')
    if (!newItem) return;
    console.log(newItem)
    addItem(newItem)
    setNewItem('')
  }

  return (
    <div className="App">
      
      {register ? (
        
        <div className="reg">
          <form onSubmit={handleRegistration} >
            <label>
              Name
              <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required

              />
            </label>
            <label>
              Email
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
            <label id='num'>
              Contact No
              <input
                type="number"
                placeholder="Enter your Conatct Number"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                pattern="[0-9]"
                required
              />
            </label>
            <label>
              Create Password
              <input
                type="password"
                placeholder="Create your own Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
            <button type="submit">Register</button>
          </form></div>
      ) : (
        <>
          <div>

            {loggedIn ? (
              <div >             
                <header >
                <h1>Dashboard</h1>
                  <nav>
                    <ul className="nav-links">

                      <li><a href="#abstract" onClick={() => handlePageChange('abstract')}>Abstract</a></li>
                      <li><a href="#addtem" onClick={() => handlePageChange('additem')}>AddItem</a></li>
                      <li><a href="#about" onClick={() => handlePageChange('about')}>About</a></li>
                      <li><a href="#contact" onClick={() => handlePageChange('contact')}>Contact</a></li>
                      <li><a href="/" onClick={() => handlePageChange('login')}>Back</a></li>
                    </ul>
                  </nav>
                </header>
                <main>
                  {currentPage === 'abstract' && (
                    <section className="abstract" id="abstract">
                      <div className="project-list">
                        {Abstract.map((project) => (
                          <div className="project" key={project.id}>
                            <div className="project-info">
                              <h1>{project.main}</h1>
                              <img src={require('./project1.jpg')} alt='' />
                              <h4>{project.description}</h4>
                            </div>
                          </div>
                        ))}
                      </div>
                    </section>
                  )}

                  {currentPage === 'additem' && (
                    <section className="additem" id="additem">
                      <div className="additem-list">
                        {Abstract.map((project) => (
                          <div className="additem" key={project.id}>
                            <div className="additem-info">
                              <AddItem
                                newItem={newItem}
                                setNewItem={setNewItem}
                                handleSubmit={handleSubmit}
                              />

                              <Content
                                items={items.filter(item => ((item.item)))}
                                handleCheck={handleCheck}
                                handleDelete={handleDelete}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                    </section>
                  )}

                  {currentPage === 'about' && (
                    <section className="about" id="about">
                     
                            <p><h3>
                              <ul>
                                <li>HCL Software: HCL Software is a division of HCL Technologies, a global technology company based in India. HCL Software focuses on developing and delivering a wide range of enterprise software solutions.</li>
                                <br />
                                <li>Product Portfolio: HCL Software offers a diverse portfolio of software products designed to address various business needs. Their offerings span across areas such as application development, automation, collaboration, customer experience, cybersecurity, and IT operations.</li>
                                <br />
                                <video controls muted autoPlay>
                                <source src={require('./hclv.mp4')} type="video/mp4"  />
                                </video>
                              </ul>
                            </h3></p>
                          
                    </section>
                  )}

                  {currentPage === 'contact' && (
                    <section className="contact" id="contact">
                      <div className="contact-links">
                        {Contact.map((contact) => (
                          <div className="contact-info">

                            <a href={contact.githubLink} target="_blank" rel="noopener noreferrer">
                              <FaGithub style={{ marginRight: '5px' }} /> <h4 >github.com/Gopisankar-G</h4>
                            </a><br /><br />
                            <p><MdContacts style={{ marginRight: '5px' }} /> <h4 >9876543210</h4></p>
                          </div>
                        ))}
                      </div>


                    </section>
                  )}


                </main>
                <footer>
                  <p> Gopi &copy; {new Date().getFullYear()} Dashboard. All rights reserved.</p>
                </footer>
              </div>

            ) : (
              <div className="log" >
                
                <form onSubmit={handleLogin} id="log" >
                  <label>
                    Username
                    <input
                      type="text"
                      placeholder="Enter Email or Contact"
                      value={(loginEmail, loginContactNo)}
                      onChange={(e) => { setLoginEmail(e.target.value); setLoginContactNo(e.target.value); }}
                      required
                    />
                  </label>
                  <label>
                    Password
                    <input
                      type="password"
                      placeholder="Enter Password"
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                    />
                  </label>
                  <button type="submit" >Login</button>
                  <button onClick={handleregister} type="button">Signup</button>
                </form>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
