import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/SignUp.css";

function SignUp() {
  const [emailDomain, setEmailDomain] = useState("");
  const [emailLocalPart, setEmailLocalPart] = useState("");
  const [allChecked, setAllChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState({
    service: false,
    privacy: false,
    delegation: false,
  });
  const [address, setAddress] = useState(""); // 주소 상태
  const [detailedAddress, setDetailedAddress] = useState(""); // 상세 주소 상태
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    phoneNumber: "",
    email: "",
    address: "",
    detailedAddress: "",
  });

  useEffect(() => {
    window.handleAddressSelect = (selectedAddress) => {
      setAddress(selectedAddress);
    };
  }, []);

  const handleDomainChange = (e) => {
    const value = e.target.value;
    setEmailDomain(value);
  };

  const handleAllChecked = () => {
    const newChecked = !allChecked;
    setAllChecked(newChecked);
    setTermsChecked({
      service: newChecked,
      privacy: newChecked,
      delegation: newChecked,
    });
  };

  const handleTermChange = (e) => {
    const { name, checked } = e.target;
    setTermsChecked((prev) => ({
      ...prev,
      [name]: checked,
    }));
    if (!checked) {
      setAllChecked(false);
    } else if (
      checked &&
      Object.values({ ...termsChecked, [name]: checked }).every((val) => val)
    ) {
      setAllChecked(true);
    }
  };

  const handlePostcodeOpen = () => {
    window.open("/address-search", "주소 검색", "width=600,height=400");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (emailDomain.length < 2) {
      alert("이메일 도메인은 2자 이상이어야 합니다.");
      return;
    }

    const email = `${emailLocalPart}@${emailDomain}`;

    const userData = {
      username: formData.username,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
      email: email, // 이메일을 userData 객체에 설정
      address: address,
      detailedAddress: detailedAddress,
    };

    axios
      .post("http://localhost:9090/api/users/register", userData)
      .then((response) => {
        alert("회원가입이 성공적으로 완료되었습니다.");
        // 추가적인 행동 (예: 로그인 페이지로 이동)
      })
      .catch((error) => {
        console.error("회원가입 중 오류가 발생했습니다.", error);
        alert("회원가입에 실패하였습니다. 다시 시도해주세요.");
      });
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>

      <form onSubmit={handleSubmit}>
        <section className="signup-section">
          <h3>1. 약관동의</h3>
          <div className="terms">
            <label>
              <input
                type="checkbox"
                checked={allChecked}
                onChange={handleAllChecked}
              />{" "}
              모든 약관에 동의합니다.
            </label>
            <div className="term-item">
              <label>
                <input
                  type="checkbox"
                  name="service"
                  checked={termsChecked.service}
                  onChange={handleTermChange}
                />{" "}
                서비스 이용약관 동의 (필수)
              </label>
              <button type="button" className="term-btn">
                약관 전체보기
              </button>
            </div>
            <div className="term-item">
              <label>
                <input
                  type="checkbox"
                  name="privacy"
                  checked={termsChecked.privacy}
                  onChange={handleTermChange}
                />{" "}
                개인정보처리방침, 개인정보 수집 및 이용안내 동의 (필수)
              </label>
              <button type="button" className="term-btn">
                약관 전체보기
              </button>
            </div>
            <div className="term-item">
              <label>
                <input
                  type="checkbox"
                  name="delegation"
                  checked={termsChecked.delegation}
                  onChange={handleTermChange}
                />{" "}
                개인정보처리방침, 개인정보의 취급위탁 동의 (필수)
              </label>
              <button type="button" className="term-btn">
                약관 전체보기
              </button>
            </div>
          </div>
        </section>

        <section className="signup-section">
          <h3>3. 정보입력 (필수입력사항)</h3>
          <div className="input-group">
            <label>본인인증 시 자동입력</label>
            <input type="text" placeholder="본인인증 시 자동입력" disabled />
          </div>
          <div className="input-group">
            <label>아이디 입력, 6-12자로 아이디 생성</label>
            <input
              type="text"
              placeholder="아이디 입력, 6-12자로 아이디 생성"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label>비밀번호 입력, 10-16자리 영문, 숫자 포함</label>
            <input
              type="password"
              placeholder="비밀번호 입력, 10-16자리 영문, 숫자 포함"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="input-group">
            <label>비밀번호 재입력</label>
            <input type="password" placeholder="비밀번호 재입력" />
          </div>
          <div className="input-group phone-input">
            <label>전화번호</label>
            <select>
              <option value="010">010</option>
            </select>
            <input
              type="text"
              placeholder="전화번호 입력"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
            />
          </div>
          <div className="input-group email-input">
            <label>이메일</label>
            <input
              type="text"
              placeholder="이메일 입력"
              value={emailLocalPart}
              onChange={(e) => setEmailLocalPart(e.target.value)}
            />
            <span>@</span>
            <input
              type="text"
              placeholder="도메인 입력"
              value={emailDomain}
              onChange={(e) => setEmailDomain(e.target.value)}
            />
            <select onChange={(e) => setEmailDomain(e.target.value)}>
              <option value="">직접입력</option>
              <option value="gmail.com">gmail.com</option>
              <option value="naver.com">naver.com</option>
              <option value="nate.com">nate.com</option>
            </select>
          </div>
          <div className="input-group">
            <label>주소</label>
            <input
              type="text"
              placeholder="주소 입력"
              value={address}
              readOnly
            />
            <button
              type="button"
              className="find-address"
              onClick={handlePostcodeOpen}
            >
              주소찾기
            </button>
          </div>
          <div className="input-group">
            <label>상세주소</label>
            <input
              type="text"
              placeholder="상세주소 입력"
              value={detailedAddress}
              onChange={(e) => setDetailedAddress(e.target.value)}
            />
          </div>
          <p className="address-info">
            입력하신 주소는 기본 배송지로 설정됩니다.
          </p>
        </section>

        <section className="signup-section">
          <h3>마케팅 활용 동의 (선택)</h3>
          <div className="marketing-consent">
            <p>
              마케팅/홍보를 위해 아래 항목의 정보를 이용하는데 동의하십니까?
            </p>
            <table>
              <thead>
                <tr>
                  <th>동의항목</th>
                  <th>이메일</th>
                  <th>SMS</th>
                  <th>주소(전단)</th>
                  <th>동의하지 않음</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>전체 동의</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="signup-actions">
          <button type="submit" className="signup-btn">
            회원가입
          </button>
          <button type="button" className="cancel-btn">
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
