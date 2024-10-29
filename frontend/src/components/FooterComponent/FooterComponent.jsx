import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import facebookImage from "../../images/facebook_icon_8543190720.svg";
import zaloImage from "../../images/zalo_icon_8cbef61812.svg";
import youtubeImage from "../../images/youtube_icon_b492d61ba5.svg";
import tiktokImage from "../../images/tiktok_icon_faabbeeb61.svg";
import alepay from "../../images/alepay_icon_b65613d73e.svg";
import americanExpress from "../../images/american_express_icon_24e353d07f.svg";
import jcb from "../../images/jcb_icon_535e51317a.svg";
import mastercard from "../../images/mastercard_icon_e336a980d8.svg";
import momo from "../../images/momo_icon_f307bc3e45.svg";
import napas from "../../images/napas_icon_5a42cc7574.svg";
import visa from "../../images/visa_icon_a6c024d37b.svg";
import vnpay from "../../images/vnpay_icon_ba16ea588c.svg";
import zalopay from "../../images/zalopay_icon_f54e43f9b4.svg";
import homepaylater from "../../images/home_paylater_icon_f7cd981a86.svg";
import foxpay from "../../images/foxpay_icon_a85beaa6bd.svg";
import applepay from "../../images/Property_1_apple_pay_icon_8ed897d7bb.svg";
import googlepay from "../../images/Property_1_google_pay_icon_47f84ba441.svg";
import samsungpay from "../../images/Property_1_samsung_pay_icon_a25303094e.svg";
import dmca from "../../images/dmca_icon_8fc6622bd5.svg";
import spdv from "../../images/san_pham_dich_vu_hang_dau_viet_nam_icon_282a9ba4f7.svg";
import thm from "../../images/thuong_hieu_manh_2013_icon_b56f772475.svg";
import thongbao from "../../images/da_thong_bao_bo_cong_thuong_icon_64785fb3f7.svg";

const { Footer } = Layout;
const { Text, Link } = Typography;
const whiteColor = "#ffffff";

const FooterComponent = () => {
  return (
    <Footer
      style={{
        backgroundColor: "#090d14",
        paddingTop: 24,
        paddingBottom: 24,
      }}
    >
      <Row style={{display:"flex", flexDirection:"column", paddingLeft: 90, rowGap:10}}>
        <Text
          style={{
            color: whiteColor,
            fontWeight:"bold",
            fontSize: 16
          }}
        >
          Hệ thống Wumiibo Shop trên toàn quốc
        </Text>
        <Text style={{color:whiteColor,display: "block",}}>
          Bao gồm Cửa hàng Wumiibo Shop, Trung tâm Laptop, F.Studio, S.Studio,
          Garmin Brand Store
        </Text>
      </Row>
      <Row
        gutter={[16, 16]}
        justify="space-between"
        style={{ marginLeft: 90, marginRight: 90,borderTop: "1px solid rgba(255, 255, 255, 0.3)", paddingTop:20, marginTop:30 }}
      >
        <Col xs={24} sm={12} md={6}>
          <Text
            strong
            style={{
              color: whiteColor,
              textTransform: "uppercase",
              fontSize: 18,
            }}
          >
            Kết nôi Wumiibo shop
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              marginTop: 15,
              marginBottom: 25,
            }}
          >
            <img
              src={facebookImage}
              alt="facebookImage"
              style={{ height: "27px" }}
            />
            <img src={zaloImage} alt="zaloImage" style={{ height: "27px" }} />
            <img
              src={youtubeImage}
              alt="youtubeImage"
              style={{ height: "27px" }}
            />
            <img
              src={tiktokImage}
              alt="tiktokImage"
              style={{ height: "27px" }}
            />
          </div>
          <Text
            strong
            style={{
              color: whiteColor,
              textTransform: "uppercase",
              fontSize: 16,
            }}
          >
            Tổng đài miễn phí
          </Text>
          <div style={{ marginBottom: 15 }}>
            <Text strong style={{ color: whiteColor, fontSize: 14 }}>
              Tư vấn mua hàng (Miễn phí)
            </Text>
            <div>
              <Link href="/">1800.6601 </Link>
              <Text strong style={{ color: whiteColor, fontSize: 14 }}>
                (Nhánh 1)
              </Text>
            </div>
          </div>
          <div style={{ marginBottom: 15 }}>
            <Text strong style={{ color: whiteColor, fontSize: 14 }}>
              Hỗ trợ kỹ thuật
            </Text>
            <div>
              <Link href="/">1800.6601 </Link>
              <Text strong style={{ color: whiteColor, fontSize: 14 }}>
                (Nhánh 2)
              </Text>
            </div>
          </div>
          <div style={{ marginBottom: 15 }}>
            <Text strong style={{ color: whiteColor, fontSize: 14 }}>
              Gợi ý, khiếu nại
            </Text>
            <div>
              <Link href="/">1800.6616 </Link>
              <Text strong style={{ color: whiteColor, fontSize: 14 }}>
                (8h00 - 22h00)
              </Text>
            </div>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Text
            strong
            style={{
              color: whiteColor,
              textTransform: "uppercase",
              fontSize: 18,
            }}
          >
            Về Chúng Tôi
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 7,
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            <Link href="/" className="link" style={{color:whiteColor}}>Giới thiệu về công ty</Link>
            <Link href="/" className="link" style={{color:whiteColor}}>Quy chế hoạt động</Link>
            <Link href="/" className="link" style={{color:whiteColor}}>F.Friends - Bạn đồng hành</Link>
            <Link href="/" className="link" style={{color:whiteColor}}>Tin tức khuyến mại</Link>
            <Link href="/" className="link" style={{color:whiteColor}}>Giới thiệu máy đổi trả</Link>
            <Link href="/" className="link" style={{color:whiteColor}}>Hướng dẫn mua hàng & thanh toán online</Link>
            <Link href="/" className="link" style={{color:whiteColor}}>Đại lý uỷ quyền và TTBH uỷ quyền của Apple</Link>
            <Link href="/" className="link" style={{color:whiteColor}}>Tra cứu hoá đơn điện tử</Link>
            <Link href="/" className="link" style={{color:whiteColor}}>Tra cứu bảo hành</Link>
            <Link href="/" className="link" style={{color:whiteColor}}>Câu hỏi thường gặp</Link>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Text
            strong
            style={{
              color: whiteColor,
              textTransform: "uppercase",
              fontSize: 18,
            }}
          >
            Chính sách
          </Text>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              rowGap: 7,
              marginTop: 5,
              marginBottom: 5,
            }}
          >
            <Link href="/" className="link"style={{color:whiteColor}}>Chính sách bảo hành</Link>
            <Link href="/" className="link"style={{color:whiteColor}}>Chính sách đổi trả</Link>
            <Link href="/" className="link"style={{color:whiteColor}}>Chính sách bảo mật</Link>
            <Link href="/" className="link"style={{color:whiteColor}}>Chính sách trả góp</Link>
            <Link href="/" className="link"style={{color:whiteColor}}>Chính sách khui hộp sản phẩm</Link>
            <Link href="/" className="link"style={{color:whiteColor}}>Chính sách giao hàng & lắp đặt</Link>
            <Link href="/" className="link"style={{color:whiteColor}}>Chính sách mạng di động FPT</Link>
            <Link href="/" className="link"style={{color:whiteColor}}>Chính sách thu thập & xử lý dữ liệu cá nhân</Link>
            <Link href="/" className="link"style={{color:whiteColor}}>Quy định về hỗ trợ kỹ thuật & sao lưu dữ liệu</Link>
          </div>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Text
            strong
            style={{
              color: whiteColor,
              textTransform: "uppercase",
              fontSize: 18,
            }}
          >
            Hỗ trợ thanh toán
          </Text>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 5,
              marginTop: 5,
              marginBottom: 40,
            }}
          >
            <img src={alepay} alt="alepay" style={{ height: "30px" }} />
            <img
              src={americanExpress}
              alt="americanExpress"
              style={{ height: "30px" }}
            />
            <img src={jcb} alt="jcb" style={{ height: "30px" }} />
            <img src={mastercard} alt="mastercard" style={{ height: "30px" }} />
            <img src={momo} alt="momo" style={{ height: "30px" }} />
            <img src={napas} alt="napas" style={{ height: "30px" }} />
            <img src={visa} alt="visa" style={{ height: "30px" }} />
            <img src={zalopay} alt="zalopay" style={{ height: "30px" }} />
            <img src={vnpay} alt="vnpay" style={{ height: "30px" }} />
            <img src={foxpay} alt="foxpay" style={{ height: "30px" }} />
            <img
              src={homepaylater}
              alt="homepaylater"
              style={{ height: "30px" }}
            />
            <img src={applepay} alt="applepay" style={{ height: "30px" }} />
            <img src={samsungpay} alt="samsungpay" style={{ height: "30px" }} />
            <img src={googlepay} alt="googlepay" style={{ height: "30px" }} />
          </div>
          <Text
            strong
            style={{
              color: whiteColor,
              textTransform: "uppercase",
              fontSize: 16,
            }}
          >
            Chứng nhận
          </Text>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 5,
              marginTop: 5,
              marginBottom: 40,
            }}
          >
            <img src={thm} alt="thm" style={{ height: "30px" }} />
            <img src={dmca} alt="dmca" style={{ height: "30px" }} />
            <img src={spdv} alt="spdv" style={{ height: "30px" }} />
            <img src={thongbao} alt="thongbao" style={{ height: "30px" }} />
          </div>
        </Col>
      </Row>
      <Row
        justify="center"
        style={{
          marginTop: "24px",
          borderTop: "1px solid rgba(255, 255, 255, 0.3)",
          paddingTop: 20,
        }}
      >
        <Text
          type="secondary"
          style={{ color: whiteColor, textAlign: "center" }}
        >
          © 2007 - 2024 Công Ty Cổ Phần Bán Lẻ Kỹ Thuật Số FPT • Địa chỉ: 261 -
          263 Khánh Hội, P2, Q4, TP. Hồ Chí Minh • GPĐKKD số 0311609355 do Sở
          KHĐT TP.HCM cấp ngày 08/03/2012.GP số 47/GP-TTĐT do sở TTTT TP HCM cấp
          ngày 02/07/2018Điện thoại: (028) 7302 3456 Email: fptshop@fpt.com Chịu
          trách nhiệm nội dung: Nguyễn Trịnh Nhật Linh.
        </Text>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
