import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import './QRCodeGenerator.css'; // CSS 파일 import

const QRCodeGenerator = () => {
    const [bankName, setBankName] = useState("");
    const [accountNumber, setAccountNumber] = useState("");
    const [qrData, setQrData] = useState("");
  
    const generateQRCode = () => {
        if (bankName && accountNumber) {
          const encodedBank = encodeURIComponent(bankName);
          const encodedAccount = encodeURIComponent(accountNumber);
          setQrData(`${window.location.origin}/copy?bank=${encodedBank}&account=${encodedAccount}`);
        }
      };
  
    const downloadQRCode = () => {
      const canvas = document.querySelector("canvas");
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.download = "qrcode.png";
      link.click();
    };
  
    return (
      <div className="qr-generator-container">
        <h2 className="qr-generator-title">입금을 위한 QR 코드 생성</h2>
        
        <div className="qr-input-container">
          <input
            type="text"
            placeholder="은행명 입력"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            className="qr-input"
          />
          <input
            type="text"
            placeholder="계좌번호 입력"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="qr-input"
          />
          <button onClick={generateQRCode} className="qr-button">
            QR 코드 생성
          </button>
        </div>
  
        {qrData && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <QRCodeCanvas value={qrData} size={200} />
            <button onClick={downloadQRCode} className="qr-download-button">
              QR 코드 다운로드
            </button>
          </div>
        )}
      </div>
    );
  };

  export default QRCodeGenerator;

  