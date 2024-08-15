//create category

const Category = require("../models/Category");
const httpStatus = require('http-status')

const createCategory = async (req, res) =>{
    const { name, image } = req.body;
    try {
            const category = await Category.create({ name, image });
            return res.status(httpStatus.CREATED).json({status: true, data: category})
    } catch (error) {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ status: false, error: error });
    }
}

// fetch all categories

const fetchCategories = async (req, res) =>{
    try {
        const categories = await Category.find();
        return res.status(httpStatus.OK).json({status: true, data: categories})
    } catch (error) {
        return res
          .status(httpStatus.BAD_REQUEST)
          .json({ status: false, error: error });
    }
}

module.exports = {
    fetchCategories,
    createCategory
}
