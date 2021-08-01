import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req, res) => {
  //@ts-ignore
  if (req.session.user) {
    //@ts-ignore
    res.send({ LoggedIn: true, user: req.session.user });
  } else {
    res.send({ LoggedIn: false });
  }
});

module.exports = router;
