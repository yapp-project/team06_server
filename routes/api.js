'use strict';
const userCtrl = require('../controllers/UserCtrl');
const boardCtrl = require('../controllers/BoardCtrl');
const alarmCtrl = require('../controllers/AlarmCtrl');
//const weatherCtrl = require('../controllers/WeatherCtrl');
const weatherCtrl = require('../controllers/WeatherCtrl');
var result;

module.exports=(router)=>{
    
    router.route('/main')
    .get(weatherCtrl.getDate,weatherCtrl.getRealTimeFineDust, weatherCtrl.getCurrentData, weatherCtrl.getTodayWeather, 
        weatherCtrl.getTomorrowWeather, weatherCtrl.getTodayWeather, weatherCtrl.getHeatLife,
        weatherCtrl.getUltraVLife,weatherCtrl.getMiddleLandWeather, 
        weatherCtrl.getMiddleTemperature, weatherCtrl.show_best_board, weatherCtrl.combineAllData);
    router.route('/main/register')
    .post(userCtrl.get_region_code,userCtrl.register_user);
    router.route('/main/login')
    .post(userCtrl.login_user);
    // router.route('/main/comment')
    // .put(userCtrl.write_comment);

    router.route('/setting/location')
    .put(userCtrl.get_region_code, userCtrl.edit_location);
    router.route('/setting/user')
    .put(userCtrl.edit_nickname)
    .get(userCtrl.show_user);

    router.route('/board/list')
    .get(boardCtrl.show_board_all);
    router.route('/board/write')
    .post(boardCtrl.write_board);
    router.route('/board/removal/:id')
    .delete(boardCtrl.remove_board);
    router.route('/board/like/:id')
    .put(boardCtrl.like_board);
    router.route('/board/dislike/:id')
    .put(boardCtrl.dislike_board);
/*    
    //main
    router.route('/main/realtime')
    .get(userCtrl.show_curInfo());
    router.route('/main/thisweek')
    .get(userCtrl.show_weekInfo());
    router.route('/main/location')
    .put(userGtrl.edit_locInfo());


    //setting
    router.route('/setting/notification')
    .get(alarmCtrl.show_notification())
    .put(alarmCtrl.edit_alarm());
    router.route('/setting/nickname')
    .get(alarmCtrl.show_nickname())
    
*/
    
    return router;
}