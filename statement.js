import createStatementData from "./createStatementData";
function statement(invoice, plays) {
  //Calculation logic is separated from
  const data = createStatementData(invoice, plays);
  // output logic
  return renderPlainText(data);
}

function renderPlainText(data) {
  let result = `Statement for ${data.customer}\n`;
  for (let p of data.performances) {
    result += `${p.play.name}: ${usd(p.amount)} (${p.audience} seats)\n`;
  }

  result += `Amount owed is ${usd(data.totalAmount)}\n`;
  result += `You earned ${data.totalVolumeCredits} credits\n`;
}

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
  let result = `<h1>Statement for ${data.customer}</h1>\n`;

  // Other code to create a table based on performances
  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2 }).format(
    aNumber
  );
}
