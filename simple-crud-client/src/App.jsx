import './App.css'
import {Link} from 'react-router-dom'

function App() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const user = {email, password};
    console.log(user);

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
    })
      .then(res => res.json())
      .then(data => {

        console.log(data);
        if(data.insertedId) {
          alert('Successfully inserted to the DB');
          form.reset();
        }

      })
      .catch(err => console.log(err.message))
  }

  return (
    <>
      <div>
        <h1>Simple CRUD</h1>
        <Link to="/users">All Users</Link><br /><br />
        <div>
          <form onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder='email' /><br />
            <input type="password" name='password' placeholder='******' /><br />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>

    </>
  )
}

export default App
