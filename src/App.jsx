import QRCodeGenerator from "./components/QRCodeGenerator";

function App() {
  return (
    <div className="flex justify-center items-center h-screen"> {/* ✅ 화면 중앙 정렬 */}
      <QRCodeGenerator />
    </div>
  );
}

export default App;
