export default class UserDtoResponse {
  constructor(user) {
    this.fullName = `${user.first_name} ${user.last_name}`;
    this.email = user.email;
    this.accessToken = user.accessToken;
  }
}
