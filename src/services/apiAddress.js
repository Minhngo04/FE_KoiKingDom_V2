import axios from 'axios';

const API_BASE_URL = 'https://provinces.open-api.vn/api';

/**
 * Lấy danh sách tỉnh
 */
export const getProvinces = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/`);
    return response.data;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách tỉnh:', error);
    throw error;
  }
};

/**
 * Lấy danh sách huyện theo mã tỉnh
 * @param {string} provinceCode - Mã tỉnh
 */
export const getDistrictsByProvince = async (provinceCode) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/p/${provinceCode}?depth=2`);
    return response.data.districts;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách huyện:', error);
    throw error;
  }
};

/**
 * Lấy danh sách xã theo mã huyện
 * @param {string} districtCode - Mã huyện
 */
export const getWardsByDistrict = async (districtCode) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/d/${districtCode}?depth=2`);
    return response.data.wards;
  } catch (error) {
    console.error('Lỗi khi lấy danh sách xã:', error);
    throw error;
  }
};
