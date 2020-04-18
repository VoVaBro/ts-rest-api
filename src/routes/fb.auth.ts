import { Router } from "express";
import passport from 'passport'
const router: Router = Router();

router.get("/facebook", passport.authenticate("facebook"));

router.get(
  "/facebook/callback",
  passport.authenticate("facebook", {
    // successRedirect: "/",
    failureRedirect: "/auth/signin",
  }),
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
