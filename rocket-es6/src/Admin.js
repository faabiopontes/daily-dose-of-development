import User from './User.js';

export default class Admin extends User {
  constructor(email, password) {
    super(email, password);
    this.admin = true;
  }
}