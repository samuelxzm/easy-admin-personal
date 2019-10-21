/*验证内容是否英文以及下划线*/
export function isTableName(rule, value, callback) {
  const reg = /^[_a-zA-Z]+$/;
  if (value == '' || value == undefined || value == null) {
    callback();
  } else {
    if (!reg.test(value)) {
      callback(new Error('表名仅由英文字母以及下划线组成'));
    } else {
      callback();
    }
  }
}

// 验证是否整数
export function isInteger(rule, value, callback) {
  if (!value && value != 0) {
    return callback(new Error("输入不可以为空"));
  }
  setTimeout(() => {
    if (!Number(value) && Number(value) != 0) {
      callback(new Error("请输入正整数"));
    } else {
      const re = /^[0-9]*[1-9][0-9]*$/;
      const rsCheck = re.test(value);

      if (!rsCheck && value != 0) {
        callback(new Error("请输入正整数"));
      } else {
        callback();
      }
    }
  }, 0);
}
// 内网ip校验
export function isCheckIp(rule, value, callback) {
  let reg = /^((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}$/;
  if (!value) {
    return callback(new Error("请输入容器ip"));
  } else {
    let ip = reg.test(value);
    if (!ip) {
      return callback(new Error("请输入正确的ip地址"));
    } else {
      callback();
    }
  }
}


// 端口号校验
export function isCheckPort(rule, value, callback) {
  let reg = /^([1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]{1}|6553[0-5])$/;
  if (!value) {
    return callback(new Error("请输入端口号"));
  } else {
    if (!reg.test(value)) {
      return callback(new Error("请输入正确的端口号"));
    } else {
      callback();
    }
  }
}