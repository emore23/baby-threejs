import { useState } from "react";
import Canvas3D from "../components/Canvas3D.jsx";
import Fetus3D from "../components/Fetus3D.jsx";
import "../styles/App.css";
import bebeImage from "../assets/bebe.jpg";
import { Image, Baby } from "lucide-react";

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [viewMode, setViewMode] = useState("menu"); // 'menu', 'image', 'fetus'
  const [fetusWeeks, setFetusWeeks] = useState(20);

  const handleShowImage = () => {
    setImageUrl(bebeImage);
    setViewMode("image");
  };

  const handleReset = () => {
    setImageUrl(null);
    setViewMode("menu");
  };

  const handleWeeksChange = (newWeeks) => {
    setFetusWeeks(Math.max(8, Math.min(40, newWeeks)));
  };

  const getTrimester = (weeks) => {
    if (weeks <= 12) return "1º Trimestre";
    if (weeks <= 27) return "2º Trimestre";
    return "3º Trimestre";
  };

  return (
    <div className="app">
      {viewMode === "menu" && (
        <div className="menu-container">
          <h1 className="menu-title">Gestação 3D Viewer</h1>
          <div className="menu-buttons">
            <button className="menu-button" onClick={handleShowImage}>
              <span className="menu-icon">
                <Image size={24} />
              </span>
              Visualizar Imagem 3D
            </button>
            <button
              className="menu-button"
              onClick={() => setViewMode("fetus")}
            >
              <span className="menu-icon"><Baby /></span>
              Visualizar Gestação 3D
            </button>
          </div>
        </div>
      )}

      {viewMode === "image" && (
        <>
          <div className="controls">
            <button onClick={handleReset} className="back-button">
              ← Voltar
            </button>
          </div>
          <Canvas3D imageUrl={imageUrl} />
        </>
      )}

      {viewMode === "fetus" && (
        <>
          <div className="controls">
            <button onClick={() => setViewMode("menu")} className="back-button">
              ← Voltar
            </button>
          </div>
          <div className="fetus-controls">
            <div className="weeks-control">
              <label htmlFor="weeks-slider" className="weeks-label">
                Semanas de Gestação: {fetusWeeks} semanas
              </label>
              <input
                id="weeks-slider"
                type="range"
                min="8"
                max="40"
                value={fetusWeeks}
                onChange={(e) => handleWeeksChange(parseInt(e.target.value))}
                className="weeks-slider"
              />
              <div className="weeks-info">
                <span>{getTrimester(fetusWeeks)}</span>
                <span>
                  {fetusWeeks < 12
                    ? "8-12"
                    : fetusWeeks < 27
                    ? "13-27"
                    : "28-40"}
                </span>
              </div>
            </div>
            <button
              className="week-button"
              onClick={() => handleWeeksChange(fetusWeeks - 1)}
              disabled={fetusWeeks <= 8}
            >
              -1
            </button>
            <button
              className="week-button"
              onClick={() => handleWeeksChange(fetusWeeks + 1)}
              disabled={fetusWeeks >= 40}
            >
              +1
            </button>
          </div>
          <Fetus3D weeks={fetusWeeks} />
          <div className="fetus-instructions">
            <p>💡 Use o mouse para rotacionar o feto | Scroll para zoom</p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
