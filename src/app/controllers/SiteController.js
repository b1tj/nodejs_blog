import Course from "../models/Course.js";

class SiteController {
    //[GET] /
    async index(req, res) {
        res.json(await Course.find({}));

        // res.render("home");
    }

    //[GET] /search
    search(req, res) {
        res.render("search");
    }
}

export default new SiteController();
