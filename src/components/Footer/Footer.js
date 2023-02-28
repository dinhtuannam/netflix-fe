import './Footer.css';
function Footer() {
    return (
        <div id="footer" className='px-[16px] py-[18px] lg:px-[80px] lg:py-[60px] mx-auto'>
            <p className="footerText">Bạn có câu hỏi? Liên hệ chúng tôi</p>
            <ul>
                <li className="footerLink">Câu hỏi thường gặp</li>
                <li className="footerLink">Trung tâm hỗ trợ</li>
                <li className="footerLink">Tài khoản</li>
                <li className="footerLink">Trung tâm đa phương tiện</li>
                <li className="footerLink">Quan hệ với nhà đầu tư</li>
                <li className="footerLink">Việc làm</li>
                <li className="footerLink">Cách xem</li>
                <li className="footerLink">Điều khoản sử dụng</li>
                <li className="footerLink">Quyền riêng tư</li>
                <li className="footerLink">Tùy chọn cookie</li>
                <li className="footerLink">Thông tin doanh nghiệp</li>
                <li className="footerLink">Liên hệ với chúng tôi</li>
            </ul>
            <div className="footer-country">
                <p>Netflix Việt Nam</p>
            </div>
        </div>
    );
}

export default Footer;
