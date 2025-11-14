import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Relatorio from "./Relatorio";


export default function PaginaRelatorio({ dados }) {
  const componentePDF = useRef<HTMLDivElement>(null);

  const gerarImpressao = useReactToPrint({
    contentRef: componentePDF,
    documentTitle: "Relatorio-Vacinação",
  });

  const handlePrint = () => {
    gerarImpressao();
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end" }}>
      <button
        onClick={handlePrint}
        style={{
          padding: "10px 20px",
          background: "#f97316",
          color: "#fff",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          margin: "20px",
        }}
      >
        🖨️ Imprimir / Salvar PDF
      </button>

      <div id="relatorio" className="relatorio" ref={componentePDF}>
        <Relatorio dados={dados} />
      </div>
    </div>
  );
}
