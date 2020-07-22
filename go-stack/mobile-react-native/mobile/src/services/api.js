import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.112:3333'
});

export default api;

/**
 * iOS with Emulator: localhost
 * iOS with physical device: IP from server
 * Android with Emulator: localhost (adb reverse)
 * Android with Emulator: 10.0.2.2 (Android Studio)
 * Android with Emulator: 10.0.3.2 (Genymotion)
 * Android with physical device: IP from server
 */
