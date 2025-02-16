import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const CopyPage = () => {
  const [searchParams] = useSearchParams();
  const bankName = searchParams.get("bank");
  const accountNumber = searchParams.get("account");
  const [copied, setCopied] = useState(false);

  // 클립보드 복사 기능
  const copyToClipboard = () => {
    if (bankName && accountNumber) {
      navigator.clipboard.writeText(`${bankName}, ${accountNumber}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2초 후 상태 초기화
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h2 className="text-xl font-bold">계좌 정보 복사</h2>
      <p className="text-gray-600">{bankName} - {accountNumber}</p>
      <button
        onClick={copyToClipboard}
        className="bg-blue-500 text-white p-2 rounded"
      >
        {copied ? "복사 완료!" : "복사하기"}
      </button>
    </div>
  );
};

export default CopyPage;
