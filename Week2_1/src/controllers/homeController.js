import db from '../models/index.js'; // import database
import CRUDService from '../services/CRUDServices.js'; // import service
// hàm getHomePage
const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll(); // lấy dữ liệu từ models/index
        console.log('----------------------');
        console.log(data);
        console.log('----------------------');
        res.render('homepage.ejs', {
            data: JSON.stringify(data) // trả dữ liệu data về view
        });
    }
    catch (e) {
        console.error(e);
        res.status(500).send('Internal Server Error');
    }
};
// hàm getAbout
const getAboutPage = (req, res) => {
    res.render('test/about.ejs'); // trả dữ liệu về view
};
// hàm getCRUD
const getCRUD = (req, res) => {
    res.render('users/crud.ejs');
};
// hàm postCRUD
const postCRUD = async (req, res) => {
    const message = await CRUDService.createNewUser(req.body);
    console.log(message);
    res.send('post crud from server');
};
// lấy tất cả findAll CRUD
const getFindAllCrud = async (req, res) => {
    const data = await CRUDService.getAllUser();
    res.render('users/findAllUser.ejs', {
        datalist: data
    });
};
// hàm lấy dữ liệu để edit
const getEditCRUD = async (req, res) => {
    const userId = req.query.id;
    if (userId) { // check Id
        const userData = await CRUDService.getUserInfoById(userId);
        res.render('users/editUser.ejs', {
            data: userData
        });
    }
    else {
        res.send('không lấy được id');
    }
};
// hàm put CRUD
const putCRUD = async (req, res) => {
    const data = req.body;
    const updatedData = await CRUDService.updateUser(data); // update rồi hiển thị lại danh sách user
    res.render('users/findAllUser.ejs', {
        datalist: updatedData
    });
};
// hàm xóa user
const deleteCRUD = async (req, res) => {
    const id = req.query.id; // vì trên view ?id=1
    if (id) {
        await CRUDService.deleteUserById(id);
        res.send('Deleted!!!!!!!!!!!!!');
    }
    else {
        res.send('Not find user');
    }
};
// export ra object
export default {
    getHomePage,
    getAboutPage,
    getCRUD,
    postCRUD,
    getFindAllCrud,
    getEditCRUD,
    putCRUD,
    deleteCRUD
};
//# sourceMappingURL=homeController.js.map