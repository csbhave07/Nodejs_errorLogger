const User = {
    id: number,
    name: string,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
  }
  
const Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: string
  }
  
const Company = {
    name: string,
    catchPhrase: string,
    bs: string
  }

module.exports = User;
  