/*
 * @Descripttion: 
 * @Author: a77321a
 * @Date: 2020-09-14 19:05:08
 * @LastEditors: 
 * @LastEditTime: 2020-09-14 19:05:09
 */
import CryptoJS from 'crypto-js'

function encryption (encryptionPassword) {
  const key = CryptoJS.enc.Utf8.parse("uHjBS5wxZjuoO5F5"); // 配置参数 aesKey
  const iv = CryptoJS.enc.Utf8.parse("2ZcC76gieA8dM5L1"); // 配置参数 aesIv
  var encrypted = CryptoJS.AES.encrypt(encryptionPassword, key, { iv: iv, mode: CryptoJS.mode.CBC }); // 加密
  return encodeURIComponent(encrypted);
}
export default encryption;