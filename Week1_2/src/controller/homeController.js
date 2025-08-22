import db from '../models/index.js'; //import database
import CRUDService from '../services/CRUDService.js'; //import service

//hàm getHomePage
let getHomePage = async (req, res) => {
    //return res.send('Nguyễn Hữu Trung');
    try {
        let data = await db.User.findAll(); //lấy dữ liệu từ models/index
        console.log('----------------------');
        console.log(data);
        console.log('----------------------');
        return res.render('homepage.ejs', {
            data: JSON.stringify(data) //trả dữ liệu data về view
        });
    } catch (e) {
        console.log(e);
    }
}

//hàm getAbout
let getAboutPage = (req, res) => {
    return res.render('test/about.ejs'); //trả dữ liệu về view
}

//hàm getCRUD
let getCRUD = (req, res) => {
    return res.render('users/crud.ejs');
}

//hàm postCRUD
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    return res.send('post crud from server');
}

//lấy tất cả findAll CRUD
let getFindAllCrud = async (req, res) => {
    let data = await CRUDService.getAllUser();
    return res.render('users/findAllUser.ejs', {
        datalist: data
    });
}

//hàm lấy dữ liệu để edit
let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if(userId){ //check Id
        let userData = await CRUDService.getUserInfoById(userId);
        // console.log('-----------------');
        // console.log(userData);
        // console.log('-----------------');
        return res.render('users/editUser.ejs', {
            data: userData
        });
    }else{
        return res.send('không lấy được id');
    }
    // console.log(req.query.id);
}

//hàm put CRUD
let putCRUD = async (req, res) =>{
    let data = req.body;
    let data1 = await CRUDService.updateUser(data); //update rồi hiển thị lại danh sách user
    //let data1 = await CRUDService.getAllUser();//hiển thị danh sách user
    return res.render('users/findAllUser.ejs', {
        datalist: data1
    });
    // return res.send('update thành công');
}

//hàm xóa user
let deleteCRUD = async (req, res) => {
    let id = req.query.id; //vì trên view ?id=1
    if(id){
        await CRUDService.deleteUserById(id);
        return res.send('Deleted!!!!!!!!!!!!!');
    }else{
        return res.send('Not find user')
    }
}

//export ra object
export default {
    getHomePage,
    getAboutPage,   // 👈 thiếu dòng này
    getCRUD,
    postCRUD,
    getFindAllCrud,
    getEditCRUD,
    putCRUD,
    deleteCRUD
};