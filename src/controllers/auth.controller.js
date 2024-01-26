class AuthController {
  login(req, res) {
    const { username, password } = req.body;
    console.log("username => ", username);
    console.log("password => ", password);
    if (username !== "pepe" || password !== "pepepass") {
      return res.send("login failed");
    }
    req.session.user = username;
    req.session.admin = true;
    console.log("session => ", req.session);
    res.send("login success!");
  }

  register(req, res) {
    res.send("register success!");
  }

  logout(req, res) {
    req.session.destroy();
    res.send("logout success!");
  }
}

const authController = new AuthController();
const { login, register, logout } = authController;
export { login, register, logout };
