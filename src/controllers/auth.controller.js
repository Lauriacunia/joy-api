import passport from "passport";

class AuthController {
  register(req, res, next) {
    passport.authenticate("register", async (err, user, info) => {
      // va a buscar la estrategia "register" en passport.config.js yejecuta esa función
      try {
        if (err) {
          return next(err);
        }
        // si no se creó el usuario
        if (!user) {
          return res.status(400).json({ message: info.message });
        }
        req.login(user, (err) => {
          if (err) {
            return next(err);
          }

          // Aquí puedes acceder al usuario creado y enviarlo en la respuesta
          const createdUser = req.user;

          res.json({ message: info.message, createdUser });
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  }
  // Utiliza Passport para la autenticación (login)
  login(req, res, next) {
    passport.authenticate("local", (err, user, info) => {
      try {
        if (err) {
          return next(err);
        }

        if (!user) {
          return res.status(401).json({ message: "Credenciales inválidas" });
        }

        req.login(user, (err) => {
          if (err) {
            return next(err);
          }

          return res.json({ message: "Inicio de sesión exitoso", user });
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next);
  }

  // Utiliza Passport para la desautenticación (logout)
  logout(req, res) {
    req.logout();
    res.json({ message: "Cierre de sesión exitoso" });
    console.log("session => ", req.session);
  }
}

const authController = new AuthController();
const { login, register, logout } = authController;

export { login, register, logout };
