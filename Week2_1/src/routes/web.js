import express from "express"; // gọi Express và types
import homeController from "../controllers/homeController.js"; // gọi controller
const router = express.Router(); // khởi tạo Router
const initWebRoutes = (app) => {
    // cách 1:
    router.get('/', (req, res) => {
        res.send('Nguyễn Hữu Trung');
    });
    // cách 2: gọi hàm trong controller
    router.get('/home', homeController.getHomePage); // url cho trang chủ
    router.get('/about', homeController.getAboutPage); // url cho trang about
    router.get('/crud', homeController.getCRUD); // url get crud
    router.post('/post-crud', homeController.postCRUD); // url post crud
    router.get('/get-crud', homeController.getFindAllCrud); // url lấy findAll
    router.get('/edit-crud', homeController.getEditCRUD); // url get editcrud
    router.post('/put-crud', homeController.putCRUD); // url put crud
    router.get('/delete-crud', homeController.deleteCRUD); // url get delete crud
    app.use("/", router); // url mặc định
};
export default initWebRoutes;
//# sourceMappingURL=web.js.map