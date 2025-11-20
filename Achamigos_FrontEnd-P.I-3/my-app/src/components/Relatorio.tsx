export default function Relatorio({ dados }) {
  return (
    <div className="p-4" id="relatorio">
      <h1>Relatório das Vacinas</h1>
      {dados.map((item) => (
        <div key={item._id} style={{ marginBottom: "20px" }}>
          <p><strong>Animal:</strong> {item.animalNome}</p>
          <p><strong>Vacina:</strong> {item.vacinaNome}</p>
          <p><strong>data:</strong> {item.dataAplicacao}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}