function SignUpPrivacyAgree() {
  return (
    <div className="tb_area policy-table-contents">
      <table
        className="policy_tbl"
        data-table-code="privacy_default"
        data-table-id="783">
        <thead>
          <tr>
            <th data-header-code="2023" style={{ width: '10%' }}>
              분류
            </th>
            <th data-header-code="2024" style={{ width: '30%' }}>
              수집・이용동의 목적
            </th>
            <th data-header-code="2025" style={{ width: '30%' }}>
              항목
            </th>
            <th data-header-code="2026" style={{ width: '30%' }}>
              보유・이용기간
            </th>
          </tr>
        </thead>
        <tbody>
          <tr data-row-id="2280" data-row-number="1">
            <td>필수정보</td>
            <td>
              서비스 가입, 계약의 이행 및 서비스 제공, 예약∙구매∙관심상품 내역,
              결제대금의 청구, 상담∙불만∙민원처리, 고지∙안내사항 전달,
              상품∙서비스 이용실적 정보 통계∙분석, 상품∙서비스 개선 및 추천,
              불법∙부정이용방지
            </td>
            <td>
              <b>서비스 이용시</b>
              <br /> ∙ 아이디(이메일), 비밀번호(이메일 회원만 수집), 닉네임,
              휴대폰 번호
              <br />
              <b>SNS 계정을 통한 서비스 이용시</b>
              <br /> ∙ 카카오계정(이메일), 카카오계정(전화번호), CI(연계정보)
              <br /> ∙ 네이버 계정(이메일), 휴대전화 번호
              <br /> ∙ Apple ID(이메일)
              <br />
              <b>예약∙구매시</b>
              <br /> ∙ 공통 - 예약내역(예약일시, 결제금액, 업체명)
              <br /> ∙ 예약자 및 구매자 - 이름, 휴대폰 번호, (필요한 서비스의
              경우)생년월일
              <br /> ∙ 예약자와 방문자가 다른 경우 - 방문자 및 탑승자의 이름,
              휴대폰 번호, (필요한 서비스의 경우)생년월일
              <br /> ∙ 해외숙소 예약 시 - 예약자의 이메일 주소, 투숙객의 영문
              이름, (만 17세 이하 자녀 동반 시) 자녀의 나이
              <br /> ∙ 예약확인서 발급 시 - 예약자의 이메일 주소
              <br />
              <b>현금 환불 요청 시</b>
              <br /> ∙ 계좌번호 및 예금주명
              <br />
              <b>고객상담 시</b>
              <br /> ∙ 상담내용 및 상담에 필요한 개인정보
            </td>
            <td>
              ∙{' '}
              <b className="POLICY_EMPHASIZE_UNDERLINE">
                회원 탈퇴 시 상담 등 민원처리, 정산 및 환불 처리를 위해 30일 후
                삭제
              </b>
              <br /> ∙{' '}
              <b className="POLICY_EMPHASIZE">
                이벤트 혜택 수령 시 부정이용방지 목적으로 (일방향
                암호화된)휴대폰번호를 혜택 제공일로부터 1년 보관 후 삭제
              </b>
              <br /> ∙{' '}
              <b className="POLICY_EMPHASIZE">
                관계법령에 따라 보존할 필요가 있는 경우 해당 법령에서 요구하는
                기한까지 보관
              </b>{' '}
              (예: 구매 회원의 경우 5년간, IP의 경우 3개월)
            </td>
          </tr>
        </tbody>
      </table>
      <br />※ 위 개인정보 수집∙이용에 대한 동의를 거부할 수 있으며, 거부할 경우
      서비스 이용이 제한됩니다.
    </div>
  );
}

export default SignUpPrivacyAgree;
