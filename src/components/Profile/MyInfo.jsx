import { useState, useEffect } from 'react';
import '../../assets/scss/Profile/MyInfo.scss';
import Button from '../Button';
import { getProvinces, getDistrictsByProvince, getWardsByDistrict } from '../../services/apiAddress';
const MyInfo = ({ currentUser }) => {
  const [isEditing, setIsEditing] = useState(false); // State để theo dõi chế độ chỉnh sửa
  const [userInfo, setUserInfo] = useState({ ...currentUser }); // State để lưu thông tin người dùng khi chỉnh sửa

  // Hàm để thay đổi giá trị khi người dùng chỉnh sửa
  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [id]: value }));
  };

  // Hàm để bật/tắt chế độ chỉnh sửa
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Hàm để hủy chỉnh sửa
  const handleCancel = () => {
    setIsEditing(false);
    setUserInfo({ ...currentUser }); // Đặt lại giá trị ban đầu nếu hủy
  };

  // Hàm để lưu thông tin sau khi chỉnh sửa
  const handleSave = () => {
    // Ở đây bạn có thể thêm logic để lưu thông tin (ví dụ: gửi API)
    setIsEditing(false);
  };

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedWard, setSelectedWard] = useState(null);

  // Lấy danh sách tỉnh khi component mount
  useEffect(() => {
    // Lấy danh sách tỉnh
    const fetchProvinces = async () => {
      const data = await getProvinces();
      setProvinces(data);
    };
    fetchProvinces();
  }, []);

  // Lấy danh sách huyện khi chọn tỉnh
  const handleProvinceChange = async (provinceCode) => {
    setSelectedProvince(provinceCode);
    const districtData = await getDistrictsByProvince(provinceCode);
    setDistricts(districtData);
    setWards([]); // Reset wards when province changes
  };

  // Lấy danh sách xã khi chọn huyện
  const handleDistrictChange = async (districtCode) => {
    setSelectedDistrict(districtCode);
    const wardData = await getWardsByDistrict(districtCode);
    setWards(wardData);
  };

  return (
    <>
      <form className="profile-form">
        <h1 className="info-title">My Profile</h1>

        <div className="form-row">
          <div className="input-wrapper">
            <label htmlFor="lastName" className="input-label">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              className="input-field"
              value={userInfo.lastName}
              onChange={handleChange}
              readOnly={!isEditing} // Chỉ cho phép chỉnh sửa nếu ở chế độ chỉnh sửa
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="firstName" className="input-label">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              className="input-field"
              value={userInfo.firstName}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="input-wrapper">
            <label htmlFor="phoneNumber" className="input-label">
              Phone Numbers
            </label>
            <input
              type="tel"
              id="phoneNumber"
              className="input-field"
              value={userInfo.phoneNumber}
              onChange={handleChange}
              readOnly={!isEditing}
            />
          </div>

          <div className="input-wrapper">
            <label htmlFor="gender" className="input-label">
              Gender
            </label>
            <select
              id="gender"
              className="input-field"
              value={userInfo.gender}
              onChange={handleChange}
              disabled={!isEditing} // Không cho chỉnh sửa nếu không ở chế độ chỉnh sửa
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        <div className="input-wrapper">
          <label htmlFor="address" className="input-label">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="input-field"
            value={`${userInfo.address || ''} ${provinces.find((p) => p.code === selectedProvince)?.name || ''} ${
              districts.find((d) => d.code === selectedDistrict)?.name || ''
            } ${wards.find((w) => w.code === selectedWard)?.name || ''}`.trim()}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>
        <div className="form-row" style={{ display: isEditing === true ? '' : 'none' }}>
          <div className="input-wrapper">
            <label htmlFor="address" className="input-label">
              Tỉnh:
            </label>
            <select className="input-field" onChange={(e) => handleProvinceChange(e.target.value)} defaultValue="">
              <option value="" disabled>
                Chọn tỉnh
              </option>
              {provinces.map((province) => (
                <option key={province.code} value={province.code}>
                  {province.name}
                </option>
              ))}
            </select>
          </div>
          {/* Dropdown danh sách huyện */}

          <div className="input-wrapper">
            <label htmlFor="address" className="input-label">
              Huyện:
            </label>
            <select className="input-field" onChange={(e) => handleDistrictChange(e.target.value)} defaultValue="">
              <option value="" disabled>
                Chọn huyện
              </option>
              {districts.map((district) => (
                <option key={district.code} value={district.code}>
                  {district.name}
                </option>
              ))}
            </select>
          </div>

          <div className="input-wrapper">
            <label htmlFor="address" className="input-label">
              Xã:
            </label>
            <select className="input-field" defaultValue="">
              <option value="" disabled>
                Chọn xã
              </option>
              {wards.map((ward) => (
                <option key={ward.code} value={ward.code}>
                  {ward.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        {!isEditing ? (
          <div
            style={{
              display: 'flex',
            }}
          >
            <Button
              child="EDIT"
              variant="submit"
              onClick={handleEdit}
              style={{
                width: '100%',
              }}
            />
          </div>
        ) : (
          <>
            <div
              style={{
                display: 'flex',
                gap: '84px',
              }}
            >
              <Button child="Save" variant="submit" onClick={handleSave} />
              <Button child="Cancel" variant="submit" onClick={handleCancel} />
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default MyInfo;
