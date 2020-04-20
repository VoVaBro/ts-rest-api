import { Router } from "express";
import passport from 'passport'
const router: Router = Router();


router.get("/", passport.authenticate("facebook"));

router.get(
  "/callback",
  passport.authenticate("facebook"),
  (req, res)  => {
    res.redirect("/");
  }
);

router.get("/", (req, res) => {
  res.send("Hello");
});


router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
});

export default router;
