import axios from 'axios'

const UserAPI = {
  getUser: _ => axios.get('/api/user', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  }),
  register: user => axios.post('/api/users/register', user),
  login: user => axios.post('/api/users/login', user)
}

export default UserAPI
