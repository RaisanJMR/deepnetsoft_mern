import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'john Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'james Patrik',
    email: 'james@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'peter Rothfus',
    email: 'peter@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]
export default users
