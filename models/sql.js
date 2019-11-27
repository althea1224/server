//SQL语句封装
const SQLURL = {
    getBankList: 'SELECT * FROM `shoubaodan`.`sys_bank`',
    getBankById: 'SELECT * FROM `shoubaodan`.`sys_bank` where id = ?',
    getUserInfo: 'SELECT * FROM `shoubaodan`.`user_info` where user_account = ?',
    updateUserInfo: 'UPDATE `shoubaodan`.`user_info` SET user_name=? WHERE user_id=?',
}

module.exports = SQLURL;