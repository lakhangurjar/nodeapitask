const multiparty = require('multiparty');
const db = require("../models");
const FormFieled = db.formFieled
const apiHelper = require("../helpers/apiHelper");
IMAGE_UPLOAD_DIR = './public/images'
IMAGE_BASE_URL = 'http//localhost:4000/images'
var validation = require("validator");

/* Create api for Form Entries */
const createFormEntries = async (req, res) => {

    // try {
    /*for image directory */
    let form = new multiparty.Form({
        uploadDir: IMAGE_UPLOAD_DIR
    });

    form.parse(req, async function (err, fields, files) {
        req.body = fields
        req.body('email').isEmail().normalizeEmail(),
            console.log(fields);
        /* If error */
        if (err) {
            return apiHelper.successError(res, 400, err.message);
        }


        /* for image url  */
        const imagePath = files.image[0].path;
        const imageFileName = imagePath.slice(imagePath.lastIndexOf("\\") + 1);
        const imageURL = IMAGE_BASE_URL + imageFileName;
        console.log(imageURL);

        if (fields && (!fields.title[0] && fields.price && fields.quantity[0] && fields.discription[0] && fields.date[0])) {
            return apiHelper.successError(res, 400, " Please fill All Perameter ");
        }

        // //* new object for new data*/
        const FormFieled = {
            title: fields.title[0],
            price: fields.price[0],
            discription: fields.quantity[0],
            quantity: fields.discription[0],
            date: fields.date[0],
            image: imageURL
        };


        //** create data in database /
        const FormData = await FormFieled.create(FormFieled);
        /*if insert fail */
        if (!FormData) {
            return apiHelper.successError(res, 200, "Something Went Wrong to Insert Data");
        }

        /*Sucees Response */
        return apiHelper.successError(res, 200, "Record Insearted Successfully!", FormData);
    })

    //     //* Catch Error */
    // } catch (error) {
    //     return apiHelper.successError(res, 500, "Something Went Wrong", error);
    // }
}





/* Api for get All forms Entry */
const getAllFormEntries = async (req, res) => {
    try {
        const {
            page,
            size,
            title
        } = req.query;
        /* for pagination */
        const {
            limit,
            offset
        } = apiHelper.getPagination(page, size);
        /* for search filter by title */
        var condition = title ? {
            title: {
                [Op.iLike]: `%${title}%`
            }
        } : null;
        /* fatch data frome database */
        const FormFieledData = await FormFieled.findAndCountAll({
            where: condition,
            limit,
            offset
        });
        /*If record not Found */
        if (!FormFieledData) {
            return apiHelper.successError(res, 400, "Record Not Found!", []);
        };
        //*success Response */
        const response = apiHelper.getPagingData(FormFieledData, page, limit);

    } catch (error) {
        return apiHelper.successError(res, 500, "Something Went Wrong", error);
    }
};



/* export all api function */
module.exports = {
    createFormEntries,
    getAllFormEntries
};